// task: 2

const numbers = [12, 98, 5, 41, 23, 76,46];
let even = [];
for(let i = 0; i < numbers.length; i++){
    let num = numbers[i];
    if (num % 2 ===0 ) {
        even.push(num);
    }
}

console.log(even);

// task_3

let tom_jerry = ["Tom", "Tim", "Tin", "Tik"];

// method:1
let toms = tom_jerry.join("");
console.log("method:1",toms)

// method:2

// for(let tom of tom_jerry){
//     let joi_ = tom.split("");
//     console.log("metho_",joi_.join("")) //____------????
// }
// let tomJarry = [];
// for( let i = 0; i<toms.length; i++){
//     let toms = tom_jerry[i].split(" ");
//     tomJarry.push(toms);
// };
// console.log("---",tomJarry);     //?????????

// methode--1--,,task:4

const statement = "I am a hard working person "

let statement_arry = statement.split(" ");
console.log(statement_arry.reverse().join(" "));

// method--2

let reversed = [];

for (let i = 0; i < statement_arry.length; i++){
    let arry = statement_arry[i];
    reversed.unshift(arry)
};

console.log(reversed.join(" "));