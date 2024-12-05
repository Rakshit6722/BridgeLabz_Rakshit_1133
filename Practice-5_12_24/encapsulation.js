class Encapsulation{
    //# is used to set private variables in class
    #name;

    constructor(){
        this.#name = "Rakshit";
    }

    getName(){
        return this.#name;
    }

    setName(name){
        this.#name = name;
    }
}

let obj = new Encapsulation();
console.log(obj.getName());
obj.setName("Raghav");
console.log(obj.getName());

