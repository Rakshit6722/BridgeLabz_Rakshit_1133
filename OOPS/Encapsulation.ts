class BankAccount{
    private accountNumber: number;
    private balance: number;

    constructor(accountNumber: number, balance: number){
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount:number):void{
        this.balance += amount
    }

    getBalance():number{
        return this.balance
    }

    withdraw(amount:number):void{
        this.balance -= amount
    }

}

const account1 = new BankAccount(123456789,1000)
console.log(account1.getBalance())
account1.deposit(500)
console.log(account1.getBalance())
account1.withdraw(200)
console.log(account1.getBalance())