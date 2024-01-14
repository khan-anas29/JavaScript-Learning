// Objects

var student1={
    name: 'Anas',
    age:20,
    branch:"Ai&Ds",
}
var student2={
    name: 'Shahrukh',
    age:20,
    branch:"Comps",
}

// Constructor Function

function Student(name,age,branch){
    this.name=name,
    this.age=age,
    this.branch=branch
}

// creating new object directly by constructor function

var student3 = new Student("Salman","25","Driving")
