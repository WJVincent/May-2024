class User {
    constructor(firstName, lastName, password, username){
        this.username = username;
        this.password = password;
        this.lastName = lastName;
        this.firstName = firstName;
    }

    login(pw){
        return this.password === pw;
    }
}

class Stack {
    constructor(){
        this.data = [];
        this.length = 0;
    }

    push(firstName, lastName, password, username){
        this.data[this.length] = new User(firstName, lastName, password, username);
        this.length++;
        return this.length;
    }

    pop(){
        if(this.length <= 0) return null;
        const popped = this.data[this.length - 1];
        this.length--;
        this.data.length = this.length;
        return popped;
    }

    traverse(){
        for(let i = this.length - 1; i >= 0; i--){
            console.log(this.data[i]);
        }
    }

    searchByUsername(uname){
        for(let i = this.length - 1; i >= 0; i--){
            const user = this.data[i];
            if(user.username === uname) return user;
        }
        return null; 
    }

    peek(){
        return this.data[this.length - 1];
    }
}

const stack = new Stack();

stack.push('geoffrey', 'otieno', 'onepiece', 'gootieno');
stack.push('william', 'vincent', 'linuxonly', 'tux');
// console.log(stack.pop());
// console.log(stack);
// stack.traverse();
// console.log(stack.searchByUsername('gooto'));
console.log(stack.peek().login('linuxoly'));
