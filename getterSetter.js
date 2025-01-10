const obj1 = {
    firstname:"Rakshit",
    lastname:"Chauhan",
    get fullName(){
        return this.firstname + " " + this.lastname;
    },
    set fullName(value){
        const parts = value.split(" ");
        this.firstname = parts[0];
        this.lastname = parts[1];
    }
}

console.log(obj1.fullName);
obj1.fullName = "Raghav khattar";
console.log(obj1.fullName);
