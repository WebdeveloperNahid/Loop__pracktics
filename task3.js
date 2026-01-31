// var numbers = ["Tom", "Tim", "Tin", "Tik"];

// // for(let num of numbers);
// var num = numbers.join("");

// console.log(num);

// var string = ["1 want to become a webdeveloper & also an engineer"];

// var str = string[0].split(" ");
// var capitalWords = str.map(st =>{
//     return st.charAt(0).toUpperCase() + st.slice(1);
// });
// var result = capitalWords.join(" ");
// console.log( result);

// const dream = [
//   "i want to become a webdeveloper & also an engineer that my dream but if Allhe not help me , i ma por ,i am help less , i kno if allah not help me i never became an Engineer ,,plz help me allah plz plz help , plz give me the success in my life , i am more help less & never accived if you not help me , so please help me Allah.Allhe please help me ,help me Allah",
// ];

// const engineer = dream[0].split(" ");

// const capitalWords = engineer.map( word => {
//     return word.charAt(0).toUpperCase() + word.slice(1);

// });

// result = capitalWords.join(" ");
// console.log(result);

// const string = ["1 want to become a webdeveloper & also an engineer"];

// const dream = string[0].split(" ");

// const reversWords = dream.map(word => word.split("").reverse().join(""));
// const result = reversWords.join(" ");
// console.log(result);

// output===1 tnaw ot emoceb a repolevedbew & osla na reenigne

// task4
let rev = [];
const statement = ["I am a hard working person"];
const words = statement[0].split(" ");

for (let i = 0; i < words.length; i++) {
  let x = words[i];
  rev.unshift(x);
}
const result = rev.join(" ");
console.log(result);
