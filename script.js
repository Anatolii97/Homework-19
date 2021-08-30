
class Bank_Account{
    constructor(balance = 0, freeze = 0) {
        this.history = [`initial balance: ${balance}`];
        this.balance = balance;
        this.freeze = freeze;
    }
    deposit(amount){
        this.balance += amount;
        this.history.push(`deposit: ${amount}, [actual: ${this.balance}, freeze: ${this.freeze}]`);
    }
    withdraw(amount){
        if(this.balance < amount){
            throw new Error('not enough balance');
        }
        this.balance-=amount;
        this.history.push(`withdraw: ${amount}, [actual: ${this.balance}, freeze: ${this.freeze}]`);
    }
    getBalance(){
        return this.balance;
    }
    
    freeze_balance(amount){
        if(this.balance < amount){
            throw new Error('not enough of balance to freeze');
        }
        this.balance-=amount;
        this.freeze += amount;
        this.history.push(`freeze: ${amount}, [actual: ${this.balance}, freeze: ${this.freeze}]`);
    }
    unfreeze(amount){
        if(this.freeze < (amount)){
            throw new Error('not enough of freeze');
        }
        this.balance += amount;
        this.freeze -= amount;
        this.history.push(`unfreeze: ${amount}, [actual: ${this.balance}, freeze: ${this.freeze}]`);
    }

    // Это на тот случай если мы захотим за один клик разморозить асю сумму!

    // unfreeze(){
    //     this.balance += this.freeze;
    //     this.freeze = 0;
    // this.history.push(`unfreeze:[actual: ${this.balance}, freeze: ${this.freeze}]`)
    // }

    getFrozenBalance(){
        return this.freeze;
    }

    getHistory(){
        let result = this.history.slice(0);
        result.push(`current balance: [actual: ${this.balance}, freeze: ${this.freeze}]`);
        return result;
    }
}

let bank_account = new Bank_Account(100);
console.log(bank_account.getBalance());
bank_account.deposit(300);
console.log(bank_account.getBalance());
bank_account.withdraw(80);
console.log(bank_account.getBalance());
bank_account.freeze_balance(150);
console.log(bank_account.getBalance());
bank_account.unfreeze(30);
console.log(bank_account.getFrozenBalance());
console.log(bank_account.getBalance());

console.log(bank_account.getHistory());
