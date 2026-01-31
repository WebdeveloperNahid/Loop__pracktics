let string = "I have a dream, Allah help me  "

//count who many times a string has the letter a
// task:1

let count = 0;

for (let i = 0; i < string.length; i++){
    let str = string[i];
    if(str === "a"){
        count++
    }
};
console.log(count);    // terminal: 4  // "a" count


// task:2
//count who many times a string has the letter a & A
{
let count = 0;

for (let i = 0; i < string.length; i++){
    let str = string[i];
    if(str.toLocaleLowerCase() === "a"){
        count++
    }
};
console.log(count);   //terminal: 5   // "a + A "count
};


// task:3

{
let str = "edUcation is backbone of A nation";
let string = str.toLocaleLowerCase();
if (string.includes("a") && string.includes("e") && string.includes("i") && string.includes("o") &&string.includes("u") ) {
    console.log("All vowel are present the string");
}
else {
    console.log("All vowel are not present here the string")
}
//terminal:  All vowel are present the string 

};

{
    let xystring = "x & y is a alphavet in english word , vomi okho ke X && lombo okho ke Y protik diye difine kora hoi";

    let newxy = xystring.replace("x","[small x silo -> #]").replace("y","[small y silo -> @]") .replace("Y"," [age capital Y silo --> $]").replace("X"," [age capital X silo --> $]");

    console.log(newxy);

//terminal: All vowel are present the string
// [small x silo -> #] & [small y silo -> @] is a alphavet in english word , vomi okho ke  [age capital X silo --> $] &
// & lombo okho ke  [age capital Y silo --> $] protik diye difine kora hoi
}

{

    
// Task-5:
// Capitalize Every first Letter of each word in a String



let smallString = "I wante to become a good webdeveloper and i want icome to saport my family, my family need support, Allah please help me , without you i am nothing i am hope less, i am so por"

let fristLetterCapital = smallString.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

console.log(fristLetterCapital);

//terminal: down!->

// I Wante To Become A Good Webdeveloper And I Want Icome To Saport My Family, My Family Need Support, Allah Please Hel
// p Me , Without You I Am Nothing I Am Hope Less, I Am So Por

}