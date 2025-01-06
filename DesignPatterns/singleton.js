// Singleton Pattern
//ensures a class has only one instance and provides global point of access to it

class Singleton{
    constructor(){
        if(Singleton.instance){
            return Singleton.instance;
        }
        Singleton.instance = this;
    }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2);

