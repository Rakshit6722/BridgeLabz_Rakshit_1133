const PERSON_METHODS = {
    eat(){
        console.log(`${this.name} is eating`)
    },
    sleep(){
        console.log(`${this.name} is sleeping`)
    }
}

function Person(name,age){
    let person = {}
    person.name = name
    person.age = age
    person.sleep = PERSON_METHODS.sleep
    person.eat = PERSON_METHODS.eat

    return person
}

const person1 = Person("Rakshit",21)
person1.eat()
person1.sleep()
