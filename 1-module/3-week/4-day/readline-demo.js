const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

const askLastName = (age) => {
    rl.question("What is your power level?\n  -> ", (powerLevel) => {
        let res = +powerLevel;
        if(isNaN(res)){
            console.log('type better');
            askLastName(age);
        } else {
            if(powerLevel > 9000){
                console.log('next time on dragonball');
            } else {
                console.log('those are rookie numbers, git gud')
            }
            closeInterface();
        }
    })
}

const askFirstName = () => {
    rl.question("How old are you?\n   -> ", (age) => {
        let res = +age;
        if(isNaN(res)){
            console.log("that's not a number, try again");
            askFirstName();
        } else if(res === 30) {
            console.log("you're not allowed to be that age, try again")
            askFirstName();
        } else {
            askLastName(age);
        }
    })
}

const closeInterface = () => {
    rl.close();
}

const main = () => {
    askFirstName();
}

main();

