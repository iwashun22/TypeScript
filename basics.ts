
function add(num1: number, num2: number){
   return num1 + num2;
}

const n1 = '5';

// this is telling TypeScript what type of variable will be
let n2: number;
n2 = 3.9;

// const wrong = add(n1, n2); // throw error on the terminal
const correct = add(+n1, n2); // fine

// console.log(wrong);
console.log(correct);