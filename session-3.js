console.log("Session 3");

// Pure Function? In simple terms, pure functions do not have an internal state. Therefore, all operations performed in pure functions are not affected by their state. As a result, the same input parameters will give the same deterministic output regardless of how many times you run the function. Pure functions should not have any side effects.

let num = 10;

function sum(a, b) {
  const c = a + b + num;
  return c;
}

sum(2, 3); // 15
sum(2, 3); // 15
sum(2, 3); // 15
sum(2, 3); // 5
num = 15;
sum(2, 3); // 5
sum(2, 3); // 5
sum(2, 3); // 5
sum(2, 3); // 5
sum(2, 3); // 5

/**
 * Advantages of pure functions:
 * A pure function works as an independent function that gives the same output for the same inputs.
 * Pure functions are readable because of independent behavior. Moreover, they are straightforward to debug.
 * You can clone an external state into a pure function, it does not change the purity of the function.
 */

//Impure Function: An impure function is a function that contains one or more side effects. It mutates data outside of its lexical scope and does not predictably produce the same output for the same input.

function temp(obj) {
  //arr.push("new item");
  const objCopy = Object.assign({}, obj);
  objCopy.name = "John";

  return objCopy;
}

const student = {
  name: "Alok",
};

const res = temp(student);

/**
 * The following JavaScript functions are inherently impure:
 * Math.random()
 * Date.now()
 * arr.splice()
 * arr.push()
 * arr.sort()
 * console.log() and alert() are also impure functions (although they generate the same behavior and always return the same value for identical calls).
 * JavaScript is synchronous by its nature. Therefore, asynchronous functions such as fetch and promise are impure.
 *
 * Advantages of impure functions:
 * Impure functions can use an in-place solution to reduce the space complexity.
 * In impure functions, the state can be modified to use the parent variable and call for the function compiling.
 */

// test(2); // 4

function addProperty(obj, property, value) {
  const test = { ...obj };
  test[property] = value;
  //   test();
  return test;
}

const obj = {
  name: "Test",
  roll: 7,
  address: {
    city: "Bangalore",
    country: "IN",
    state: {
      name: "Karnataka",
      code: "KA",
    },
  },
};

// const copy = { ...obj, address: { ...obj.address } };

const deepClone = (obj) => {
  if (obj === null) return null;
  let clone = Object.assign({}, obj);
  Object.keys(clone).forEach(
    (key) =>
      (clone[key] =
        typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key])
  );
  return clone;
};

const perfectDeepCopy = deepClone(obj);

obj.address.state.name = "XYZ";

console.log("Perfect deep copy", perfectDeepCopy);

const obj = {
  name: "Test",
  roll: 7,
  address: {
    city: "Bangalore",
    country: "IN",
    state: {
      name: "Karnataka",
      code: "KA",
    },
  },
};
// arr = [1,2,3 ]
const temporary = (arr, value) => {
  const copy = [...arr, value];
  // const copy = [1, 2, 3, copy];
  // copy.push(value);
  return copy;
};

function printName() {
  console.log("CrioDo");
}

function executor(cb) {
  cb();

  return () => {
    console.log("Hey There");
  };
}

function executorPart2() {
  return () => {
    console.log("Executor 2");
  };
}

const temp = executor(printName);
temp();

const newArr = arr.map(() => {});
