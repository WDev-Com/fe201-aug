// console.log("Hello There");
// class and object -> class based language -> OOPs
// class (Blueprint) -> derive instance of this blueprint -> object

// Car -> color, model, company, mileage, drive

// firstCarObj = {
//     color: blue,
//     model: "Toyota",
//     company: "Toyota",
//     mileage: 12Km,
//     drive: function() {
// }

// secondCarObj = {
//     color: red,
//     model: "Toyota",
//     company: "Toyota",
//     mileage: 12Km,
//     drive: function() {
// }
//  class -> blueprint of object -> single instance of class is called as object

// Prototype => Object template -> Object

// async / await => Promise
// JS -> Prototype based lang -> Only in object
// ES6 -> class keyword got introduced -> synatactic sugar coat around what was already available in JS.

// person.address.city == person['address']['city]

// Object -> object
// class -> object

// Whats already in javascript -> slowly we will shift to class syntax -> both are same

// Constructor function -> this function should serve as a object template

function Car(color, company, mileage) {
  this.color = color;
  this.company = company;
  this.mileage = mileage;
  this.drive = function () {
    console.log("Driving the car");
  };
}

const carObj1 = new Car("red", "Toyota", 12);
console.log(carObj1);

// A function to create Object with same structure -> Constructor function
function Circle(radius, x, y) {
  this.radius = radius;
  this.location = {
    x: x,
    y: y,
  };
  this.draw = function () {
    console.log("Current location: ", this.location);
  };
  this.move = function (nextX, nextY) {
    this.location.x = nextX;
    this.location.y = nextY;
  };
}

// new => 3 things
// first -> {} object
// second -> `this` keyword to refer to newly created empty object
// third -> return newly created object

const circleObj = new Circle(10, 0, 0);
// console.log(circleObj);

// for (let index = 0; index <= 10; index++) {
//   circleObj.move(index, index);
//   circleObj.draw();
// }

/**
 * 200M -> {
 * radius: 10,
 * location : {x: 0, y: 0}
 * }
 * this -> 200M
 * return 200M object
 */

const person = {
  name: "Alok",
  class: "B.Tech",
  run: function () {
    console.log(this);
    console.log(this.name);
  },
};

// person.run();

function hello() {
  console.log(this);
}
// hello();

function User(fullName) {
  this.fullName = fullName;
  this.friendList = [];
  this.addFriend = function (friendName) {
    this.friendList.push(friendName);
  };
  this.printFriendList = function () {
    console.log("friends", this.friendList);
  };
  this.findMutual = function (userObj) {
    const mutualFriends = userObj.friendList.filter((name) =>
      this.friendList.includes(name)
    );
    console.log("Mutual friends", mutualFriends);
  };
}

const vivek = new User("Vivek Kumar");
vivek.addFriend("Harish");
vivek.addFriend("Radhe");
vivek.addFriend("Ajay");

// vivek.printFriendList();
// console.log("-------------------");
const varun = new User("Varun");
varun.addFriend("Rohan");
varun.addFriend("Vatsal");
varun.addFriend("Radhe");
varun.addFriend("Harish");

// varun.printFriendList();

// vivek.findMutual(varun);

const student = {
  fullName: "Alok",
  greet: function () {
    console.log(this);
    console.log("Hello " + this.fullName);
  },
};

// student.greet(); // Hello Alok
function executor(callback) {
  callback();
}

// when I am passing a function, what if I can also pass the value of this
// Bind method -> bind the value of this

const greetFn = student.greet.bind({
  fullName: "Alok Bind",
  dept: "IT",
});

// executor(greetFn); // Hello Alok

const timer = {
  currentTime: 0,
  showTime: function () {
    console.log("from here", this.currentTime);
  },
  addTen: function () {
    console.log("inside addTen", this);
    this.currentTime += 10;
    this.showTime();
  },
};

// timer.addTen();
const bindTimer = timer.addTen.bind(timer);

// setTimeout(bindTimer, 2000);

class CarClass {
  constructor(color, company, mileage) {
    this.color = color;
    this.company = company;
    this.mileage = mileage;
  }
  drive() {
    console.log("Driving the car");
  }
}

const carObj = new CarClass("red", "Toyota", 12);
console.log("CarObj", carObj);
carObj.drive();
