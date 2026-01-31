const colors = ["red", "blue", "green", "yellow", "orange"];

// const reversed = colors.reverse();
// console.log(reversed);
// for(let color of colors){
//     // console.log(color);
//     let palor = color.reverse();
//     console.log(palor);
// }

// method-1

let rev = [];

for (let color of colors) {
  rev.unshift(color);
}
console.log(rev);

// method-2

let rong = [];
for (let i = 0; i < colors.length; i++) {
  let x = colors[i];
  rong.unshift(x);

  // rong.unshift(colors[i]);
}
console.log(rong);

// method-3

let reverse_ = [];

for (let i = colors.length - 1; i >= 0; i--) {
  let x = colors[i];
  reverse_.push(x);
}
console.log(reverse_);