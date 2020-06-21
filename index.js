const assert = require('assert');
const log = console.log;
// ch02
// Functions as Data
// const sayHello = (name) => console.log(`Hello ${name}`);
// sayHello('Peer');

// const sh2 = sayHello;

// sh2('Peercito');

// const DEVELOPMENT = true;

// const fetchDataReal = () => {
//   // time intensive stuff
// };

// const fetchDataFake = () => {
//   return {
//     name: 'jope',
//     age: 33,
//   };
// };

// const fetchData = DEVELOPMENT ? fetchDataFake : fetchDataReal;

// fetchData();

// ********************************************************************

// const double = (x) => x * 2;
// const tripple = (x) => x * 3;
// const subtractOne = (x) => x - 1;

// const num = 3;
// const doubled = double(num);
// const minusOne = subtractOne(doubled);
// const trippled = tripple(minusOne);

// const funcs = [double, subtractOne, tripple, Math.log];

// let res = num;

// funcs.forEach((func) => (res = func(res)));
// console.log(`${trippled} ${res}`);

// ********************************************************************

// const add = (x, y) => x + y;
// const subtract = (x, y) => x - y;

// const formData = (func, values) => func(...values);
// const numbers = [5, 3];
// const res = formData(subtract, [5, 3]);
// console.log(res);

// const combine2and3 = (func) => func(2, 3);
// console.log(combine2and3(add));

// console.log(combine2and3((a, b) => a ** b));

// ********************************************************************

// const createPrinter = (method) => (str) => method(str);

// const pr = createPrinter(console.warn);
// pr('oh no!');

// const double = (x) => x * 2;
// const tripple = (x) => x * 3;
// const quad = (x) => x * 4;

// const createMultiplier = (factor) => (arg) => arg * factor;

// const genDouble = createMultiplier(2);
// const genTripple = createMultiplier(3);

// assert(
//   double(5) === genDouble(5),
//   'double and genDouble should produce the same result'
// );

// ********************************************************************

// const createPrinter = () => {
//   const x = 42;

//   return () => console.log(`--${x}`);
// };

// const f = createPrinter();
// console.log(typeof f);
// f();

// ********************************************************************
// implementing private variables
// const Person = ({ name, age, job }) => {
//   let _name = name;
//   let _age = age;
//   let _job = job;

//   return {
//     getName: () => _name,
//     getAge: () => _age,
//     getJob: () => _job,
//     setJob: (job) => (_job = job),
//   };
// };
// const p = new Person({ name: 'Peer', age: 48, job: 'Programmmer' });

// console.log(p.getName());
// console.log(p._job);
// console.log(p.getJob());
// p.setJob('Baker');
// console.log(p.getJob());

// ********************************************************************
// this function has too many responsabilities (arg checking and calculation)
/* const standardDivide = (x, y) => {
  if (y === 0) {
    console.log('div by zero');
    return null;
  }
  return x / y;
};

// Functional approach:
const divide = (x, y) => x / y;

const argNotX = (argNr, forbiddenVal, func) => (...args) => {
  if (args[argNr - 1] === forbiddenVal) {
    console.log(`Argument  ${argNr} can't be ${forbiddenVal}`);
    return null;
  }
  return func(...args);
};

const safeDivision = argNotX(2, 0, divide);
console.log(safeDivision(7, 0));
 */

// ********************************************************************
// Spread operator
/* const ob1 = {
  age: 30,
  name: 'joe',
};

const ob2 = {
  company: 'harris',
  title: 's dev',
};

const wholeShebang = { ...ob1, ...ob2 };

console.log(wholeShebang);

console.log({ ...wholeShebang, title: 'mega dev' });

const nums = [1, 2, 3];
const moreNums = [0, ...nums, 4, 5];

console.log(moreNums);
 */

// ********************************************************************
// map etc
/* 
const nums = [1, 2, 3, 4, 5];
console.log(nums.map((num) => num ** 2)); */

// Achtung, reverse mutates original array

// filter
/* const emps = [
  { name: 'hoe', age: 24 },
  { name: 'joe', age: 30 },
  { name: 'jane', age: 31 },
  { name: 'john', age: 20 },
  { name: 'Peer', age: 48 },
];

log(emps.filter((emp) => emp.age > 30));
log(emps.filter((emp) => emp.name.startsWith('j'))); */

/* const createLengthTest = (minLength) => (str) => str.length > minLength;

const longerThan5 = createLengthTest(5);
const words = [
  'sdfsdfeqfgdfgdfg',
  'fdfds',
  'dggvdf',
  'dfdsfdffdf',
  '2rfdfsgegg',
  '33',
];
log(words.filter(longerThan5));

log(words.some(createLengthTest(5)));
log(words.some(createLengthTest(20)));

log(words.every(createLengthTest(5)));
log(words.every(createLengthTest(1)));

const emps = [
  { name: 'hoe', age: 24 },
  { name: 'joe', age: 30 },
  { name: 'jane', age: 31 },
  { name: 'john', age: 20 },
  { name: 'Peer', age: 48 },
];

const olderThan = (age) => (emp) => emp.age > age;

// none:
log(!emps.some(olderThan(60))); // true - none is older than 60
log(!emps.some(olderThan(40))); // false - some are older than 40
 */

/* const formValues = ['user', 'pass', ''];

const isNotEmpty = (str) => !!str;
const isFormComplete = formValues.every(isNotEmpty);
log(isFormComplete); */

// ********************************************************************

/* const ar = [1, 4, 3, 2, 6, 7, 5];
// reverse and sort mutate the array. Workaround: slice (or underscore.js)

const reversed = ar.slice().reverse();
log(ar);
log(reversed);
ar.reverse();
log(ar);

const sorted = ar.slice().sort();
log(sorted);
log(ar);
// sortfunction params and return values:
// Params: a,b
// return < 0: a comes before b
// return > 0: b comes before a
// return 0: leave elements in the order they were found

const ascendingLongish = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

// short form / "trick" - only working for numbers! For strings, use "long form"
const ascending = (a, b) => b - a;
const descending = (a, b) => a - b;

log(ar.slice().sort(ascending));
log(ar.slice().sort(descending));

const words = ['Bulgaria', 'Deutschland', 'Armenien'];
log(words.slice().sort(ascending)); // doesn't work
log(words.slice().sort(ascendingLongish)); // works
 */

// ********************************************************************
// reduce
/* const ar = [4, 3, 5, 2, 6, 7, 3, 12, 4];

const sum = ar.reduce((acc, val) => acc + val);
log(sum);

const avg = ar.reduce((acc, val, idx, arr) => acc + val) / ar.length;
log(avg);

//last optional argument is the starting accumulator value
const sumPlus1000 = ar.reduce((acc, val, idx, arr) => {
  log(`acc: ${acc}, val: ${val}, idx: ${idx}, arr: ${arr}`);
  return acc + val;
}, 1000);
log(sumPlus1000);
 */

// ********************************************************************
// combining function
/* 
const emps = [
  { name: 'hoe', age: 24, job: 'developer', salary: 1000 },
  { name: 'joe', age: 30, job: 'secretary', salary: 2000 },
  { name: 'jane', age: 31, job: 'Boss', salary: 5000 },
  { name: 'john', age: 20, job: 'developer', salary: 4000 },
  { name: 'Peer', age: 48, job: 'developer', salary: 3000 },
];

const isOrIsNot = (prop, op, val) => (obj) => {
  if (op === 'equals') return obj[prop] === val;
  else return obj[prop] !== val;
};

const isDev = isOrIsNot('job', 'equals', 'developer');
const isOther = isOrIsNot('job', 'doesnt equal', 'developer');

//const isDev = (emp) => emp.job === 'developer';

log(emps.filter(isDev));

const avgSalaryDifferenceDevelopers =
  emps
    .filter(isDev)
    .map((emp) => emp.salary)
    .reduce((acc, val) => acc + val) /
    emps.filter(isDev).length -
  emps
    .filter(isOther)
    .map((emp) => emp.salary)
    .reduce((acc, val) => acc + val) /
    emps.filter(isOther).length;

log(avgSalaryDifferenceDevelopers); */

// ********************************************************************
// Challenge: recreate map function

/* Array.prototype.myMapSimple = function (func) {
  let out = [];
  for (let i = 0; i < this.length; i++) {
    out.push(func(this[i]));
  }
  return out;
};

Array.prototype.myMapHard = function (func) {
  return this.reduce((acc, val) => [...acc, func(val)], []);
};

const ar = [1, 2, 3];

log(ar.myMapSimple((x) => x ** 2)); // works
log(ar.myMapHard((x) => x ** 2)); // works now too
 */
