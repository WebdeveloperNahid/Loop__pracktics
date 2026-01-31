const car = {
  make: "Toyota",
  model: " Corolla",
  year: 2020,
  cc: 250,
  color: "green",
  verson: "w3_newcc",
};

let carLength = Object.keys(car);

console.log("property :", carLength.length);

for (let i = 0; i < carLength.length; i++) {
  let key = carLength[i];
  let value = car[key];

  console.log(
    "index :",
    i,
    "key: ",
    carLength[i],
    "|",
    "value :",
    value,
    "--",
    "typeof : ",
    typeof value,
  );
}

// output: terminal ### ====//

// property : 6
// index : 0 key:  make | value : Toyota -- typeof :  string
// index : 1 key:  model | value :  Corolla -- typeof :  string
// index : 2 key:  year | value : 2020 -- typeof :  number
// index : 3 key:  cc | value : 250 -- typeof :  number
// index : 4 key:  color | value : green -- typeof :  string
// index : 5 key:  verson | value : w3_newcc -- typeof :
{
let car = {
  make: "Toyota",
  model: " Corolla",
  year: 2020,
  cc: 250,
  color: "green",
  verson: "w3_newcc",
};

let carLength = Object.keys(car);
let mt = [];

for (let i = 0; i < carLength.length; i++) {
  let key = carLength[i];
  let value = car[key];
  mt.unshift(key,value);

};

console.log(mt);    // join(" ").split(" ")

// reverse way to unshift(),methode in a object properties,by looping system

// output__terminal:::##

// [
//   'verson', 'w3_newcc',
//   'color',  'green',
//   'cc',     250,
//   'year',   2020,
//   'model',  ' Corolla',
//   'make',   'Toyota'
// ]
};