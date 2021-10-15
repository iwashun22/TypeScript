
function combine(
   input1: number | string, 
   input2: number | string,
   arg: 'as-number' | 'as-text'
){
   if(arg == 'as-number'){
      return Number(input1) + Number(input2);
   }
   else {
      return input1.toString() + input2.toString();
   }
}

console.log(combine('hello ', 'world', 'as-text'));
console.log(combine(13, 64, 'as-text'));
console.log(combine('15', '28', 'as-number'));
