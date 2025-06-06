// BASICS: VARIABLES & DATATYPES


let name = "Vishvam";            // String
const age = 21;                  // Number
let isStudent = true;           // Boolean
let nothing = null;             // Null
let something;                  // Undefined

console.log("Hello, " + name, "| Age:", age, "| Student:", isStudent);


// CONTROL STATEMENTS (if, else, switch)

if (age > 18) {
  console.log("✅ Adult");
} else {
  console.log("❌ Minor");
}

let grade = "B";
switch (grade) {
  case "A": console.log("Excellent!"); break;
  case "B": console.log("Good!"); break;
  default: console.log("Keep trying!");
}


// LOOPS: for, while, do-while, forEach


for (let i = 1; i <= 3; i++) {
  console.log("🔁 For Loop:", i);
}

let j = 1;
while (j <= 3) {
  console.log("🔁 While Loop:", j);
  j++;
}

const numbers = [10, 20, 30];
numbers.forEach((num, index) => {
  console.log(`📍 Index ${index}: ${num}`);
});


// FUNCTIONS: Regular, Arrow, Default Params


function greet(user = "Guest") {
  return `Hello, ${user}`;
}
console.log(greet("Vishvam"));

const add = (a, b) => a + b;
console.log("Sum:", add(3, 7));


// OBJECTS & ARRAYS


const person = {
  name: "Vishvam",
  age: 21,
  hobbies: ["reading", "coding"],
  greet: function () {
    console.log("Hi, I'm " + this.name);
  }
};

person.greet();
console.log(person.hobbies[1]);

// ARRAY METHODS

let prices = [100, 250, 300, 150];
let taxed = prices.map(price => price * 1.18);
let expensive = prices.filter(price => price > 200);
let total = prices.reduce((acc, val) => acc + val, 0);

console.log("📦 With Tax:", taxed);
console.log("💰 Expensive:", expensive);
console.log("🧮 Total:", total);


// ES6+ FEATURES


// Destructuring
const [x, y] = [10, 20];
const { name: n, age: a } = person;
console.log("Destructured:", x, y, n, a);

// Spread and Rest
const nums = [1, 2, 3];
const moreNums = [...nums, 4, 5];
const sumAll = (...args) => args.reduce((a, b) => a + b);
console.log("Spread:", moreNums);
console.log("Rest Params Sum:", sumAll(1, 2, 3, 4));


// 🕒 ASYNCHRONOUS JAVASCRIPT


// setTimeout & setInterval
setTimeout(() => console.log("⏳ Delayed Hello (setTimeout)"), 1000);
// let interval = setInterval(() => console.log("Tick..."), 1000); // Uncomment to try

// Promises
const asyncTask = new Promise((resolve, reject) => {
  let success = true;
  if (success) resolve("✅ Done!");
  else reject("❌ Failed!");
});

asyncTask
  .then(res => console.log(res))
  .catch(err => console.log(err));

// Async/Await
async function loadData() {
  try {
    let response = await asyncTask;
    console.log("Awaited:", response);
  } catch (err) {
    console.log("Error:", err);
  }
}
loadData();