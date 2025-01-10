class Student{
    constructor(name,age,rollno,grade){//constructor - a function which is called automatically when instance of that class is made
        this.name = name;//this points to current instance of the class
        this.age = age;
        this.rollno = rollno;
        this.grade = grade;
    }

    getStudentDetails(){
        return {
            name: this.name,
            age: this.age,
            rollno: this.rollno,
            grade: this.grade,
        }
    }

    setGrade(grade){
        this.grade = grade
    }
}

let student1 = new Student("Rakshit","21","1133","B") // new is used to assign memory to new instance of the class
console.log(student1.getStudentDetails())