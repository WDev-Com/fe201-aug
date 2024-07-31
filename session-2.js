console.log("Session 2");
const x = new Object();
const x1 = {};
// class
// Constructor f
// factory function
// console.log(x);

const student = {
  name: "Alok Raj",
  roll: 7,
  subject: "CSE",
  about: () => {
    console.log("I Love JS");
  },
  favColor: "black",
  address: {
    state: "Bihar",
    country: "IN",
  },
};

const tempObj = JSON.parse(JSON.stringify(student));
// Object.assign(tempObj, student);

student.name = null;
student.address.state = "KA";

// console.log(tempObj);

// console.log(Object.entries(student));
// console.log(Object.keys(student));
// console.log(Object.values(student));

const employeeData = {
  John: 100,
  Pete: 500,
  Mary: 250,
};

class Util {
  constructor(employeeData) {
    this.data = employeeData;
  }

  sumSalaries() {
    const valArr = Object.values(this.data);
    // [100, 300, 250]
    return valArr.reduce((a, b) => a + b, 0);
  }

  averageSalaries() {
    const sum = this.sumSalaries();
    const numberOfEmployee = Object.keys(this.data).length;
    return Math.round(sum / numberOfEmployee);
  }

  findSalaryRange() {
    const salaryArr = Object.values(this.data);
    console.log(salaryArr);
    console.log(...salaryArr);
    return Math.max(...salaryArr) - Math.min(...salaryArr);
  }
}

const utilObj = new Util(employeeData);
// console.log(utilObj.sumSalaries());
// console.log(utilObj.averageSalaries());
// console.log(utilObj.findSalaryRange());

// Base class/Parent class
class Student {
  constructor(name, roll) {
    this.fullName = name;
    this.roll = roll;
  }

  markAttendance() {
    console.log(this.fullName, "is present");
  }
}

// Inherited/Child/Derived
class SportsCaption extends Student {
  playFootball() {
    console.log("Play football");
  }
}

const stu = new Student("Abc", 10);
// console.log(stu);

const s1 = new SportsCaption("Xyz", 7);
// s1.markAttendance();
// console.log(s1);
class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  markPresent() {
    console.log(this.name, "is present");
  }

  printDepartments() {
    console.log("Departments:", this.department);
  }
  getRole() {
    console.log("Role from Employee");
  }
}

class Developer extends Employee {
  constructor(name, department, preferredLang) {
    super(name, department);
    this.preferredLang = preferredLang;
  }
  markPresent() {
    console.log(this.name, "Developer");
  }
  getRole() {
    console.log("Role from Developer");
  }
  submitCode() {
    super.markPresent();
    console.log("Code Submitted by", this.name, "from", this.department);
  }
}

class TechLead extends Employee {
  markPresent() {
    console.log(this.name, "TechLead");
  }
  fixBug() {
    console.log("Bug fixed by", this.name, "from", this.department);
  }
}

const emp = new Employee("John Doe", "HR");
// emp.markPresent();

const dev = new Developer("CrioDo", "IT");
console.log(dev);
dev.submitCode();

// const testObj = new Temp("Alok", "CSE");
// testObj.markPresent();
