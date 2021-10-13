
function add(num1: number, num2: number){
   console.log(typeof num1);
   return num1 + num2;
}

const n1 = '5';
const n2 = 3.9;

// const wrong = add(n1, n2); // error on the terminal
const correct = add(+n1, n2); // fine

// console.log(wrong);
console.log(correct);