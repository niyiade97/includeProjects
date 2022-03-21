// // var num1 = "33";
// // var num = 7 + num1 -9 ;
// // num === 1 ? console.log("num is a number") : console.log("num is not a number")



// var i = 5;
// let arr = [1,2,3,4,45]
// for (let x of arr) {
//     console.log(x)
//   }

// var {fName, age} = {fName: "ade", age: 2}
// // var [num1, num2] = [ "ade", "sola"];
// // var num1 = arr1[0];
// console.log(fName, age);

// arr.forEach((value ,index) =>{
//   console.log(value, index);
// })

const students = [
  {
    id: 0,
    name: "ade",
    age: 45
  },
  {
    id: 1,
    name: "sola"
  },
  {
    id: 2,
    name: "bola"
  }
]
console.log(students[2])
class include{
  constructor(students,num){
    this.students = students

    this.numOfStudents = num
  }
  addNewStudent(name){
    this.students.push(name);
    this.numOfStudents += 1;
  }
  addNewStudent(name){
    this.students.push(name);
    this.numOfStudents += 1;
  }
  deleteStudent(id){
    students.del
  }

}
let namesOfStudents = ["stephen", "boluwatife", "chinenye", "Marshall", "David mark"]
let program = new include(namesOfStudents, namesOfStudents.length);



