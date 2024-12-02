//Shopping Cart
// class ShoppingCart {
//     #cart = []

//     getCart = () => {
//         console.log(this.#cart)
//     }

//     addItems = (itemName, itemPrice) => {
//         let obj = {
//             name: itemName,
//             price: itemPrice
//         }
//         this.#cart.push(obj)
//     }

//     totalPrice = () => {
//         let totalAmount = this.#cart.reduce((accumulator, currentValue) => {
//             return accumulator + parseInt(currentValue.price)
//         }, 0)
//         return totalAmount
//     }

//     filterCartByName = (itemName) => {
//         this.#cart = this.#cart.filter((item) => item.name !== itemName)
//     }

// }

// const cart = new ShoppingCart()
// cart.addItems("Mobile Phone",5000)
// cart.addItems("A.C",10000)
// cart.getCart()
// cart.filterCartByName("A.C")
// console.log(cart.totalPrice())


//ques2
// class Student {
//     #students = []
//     #studentsStatus = []

//     addStudents(studentName, studentGrade) {
//         let obj = {
//             name: studentName,
//             grade: studentGrade
//         }
//         this.#students.push(obj)
//     }

//     classifyStudents() {
//         this.#studentsStatus = this.#students.map(student => {
//             let status
//             if (student.grade === 'F') {
//                 status = 'Fail'
//             } else {
//                 status = 'Pass'
//             }
//             return (
//                 {
//                     name: student.name,
//                     status: status
//                 }
//             )
//         })
//         console.log(this.#studentsStatus)
//     }

//     totalPassedStudents() {
//         const passStudents = this.#studentsStatus.filter(student => student.status === 'Pass')
//         console.log(passStudents.length)
//     }
// }

// const student = new Student()
// student.addStudents("Rakshit", "C")
// student.addStudents("Sparsh", "E")
// student.addStudents("Raghav", "F")
// student.classifyStudents()
// student.totalPassedStudents()

//ques3
class Employees{
    #employees = []
    #specifiedAmount = 5000

    getEmployees(){
        console.log(this.#employees)
    }

    addEmployee(employeeName, employeeSalary){
        let obj = {
            name: employeeName,
            salary: employeeSalary
        }
        this.#employees.push(obj)
    }

    employeesEarningMore(){
        let earningMore = this.#employees.filter(employee => employee.salary > this.#specifiedAmount)
        console.log(earningMore)
    }

    updateEmployeesSalary(){
        return this.#employees.filter(employee => employee.salary > this.#specifiedAmount).map(employee=>{
            return{
                name: employee.name,
                salary: employee.salary*1.1
            }
        })
    }


}

const employees = new Employees()
employees.addEmployee("Rakshit",6000)
employees.addEmployee("Khattar",2000)
employees.getEmployees()
console.log(employees.employeesEarningMore())
// employees.updateEmployeesSalary()


//Calculate frequency of each word in a para of text using reduce
// const para = "aabacskjshskjaaweeeavahvhhvaa"

// const frequencyMap = Array.from(para).reduce((accumulator,currentValue)=>{
//     if(!accumulator.has(currentValue)){
//         accumulator.set(currentValue,1)
//     }else{
//         accumulator.set(currentValue,accumulator.get(currentValue)+1)
//     }
//     return accumulator
// },new Map())

// console.log(frequencyMap)






