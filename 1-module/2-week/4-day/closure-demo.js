/*
-   Prompt: I want to start a new business that sells robots to people.
    -   Level One
        -   I need to build a factory that will produce robots to people that say, 
            "Hello" when they run them.
    -   Level Two
        -   Customers would like it if they could decide who their robots say hello to
    -   Level Three
        -   Customers would like it if their robots said their names and the custom name
    -   Level Four
        -   Customers would like it if the robots kept track of ALL the names they've spoken to.
*/


// lv 1
// const robotFactory = () => {
//     const robot = () => {
//         console.log('Hello');
//     };

//     return robot;
// }

// const newRobot = robotFactory();
// newRobot();


//lv 2
// const robotFactory = () => {
//     const robot = (name) => {
//         console.log(`Hello, ${name}`);
//     };

//     return robot;
// }

// const newRobot = robotFactory();
// newRobot('Geoffrey');
// newRobot('Geoffrey Geoffrey Geoffrey');


//lv 3
// const robotFactory = (owner) => {
//     const robot = (name) => {
//         console.log(`${owner}'s robot says, "Hello, ${name}"`);
//     };

//     return robot;
// }

// const geoffreyRobot = robotFactory("Geoffrey");
// geoffreyRobot("Geoffrey Geoffrey Geoffrey");

// const williamRobot = robotFactory("William");
// williamRobot("william william william");


//lv 4
// const robotFactory = (owner) => {
//     const allNames = [];

//     const robot = (name) => {
//         allNames.push(name);
//         console.log(`${owner}'s robot says, "Hello, ${name}"`);
//         return allNames;
//     };

//     return robot;
// }

// const geoffreyRobot = robotFactory("Geoffrey");
// console.log(geoffreyRobot("Geoffrey Geoffrey Geoffrey"));
// console.log(geoffreyRobot("People"));
// console.log(geoffreyRobot("css is great"));
// console.log(geoffreyRobot("backend blah"));
// const allOut = geoffreyRobot("things and stuff");

// allOut.forEach(el => {
//     console.log(el);
// })

// const williamRobot = robotFactory("William");
// console.log(williamRobot('linux is cool')[0]);