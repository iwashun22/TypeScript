function calculate(
   operator: 'add' | 'subtract' | 'multiply' | 'devide',
   ...number: number[]
){
   let result = number[0];
   switch(operator){
      case 'add': 
         for(let i = 1; i < number.length; i++){
            result += number[i];
         }
         break;

      case 'subtract':
         for(let i = 1; i < number.length; i++){
            result -= number[i];
         }
         break;

      case 'multiply':
         for(let i = 1; i < number.length; i++){
            result *= number[i];
         }
         break;

      case 'devide':
         for(let i = 0; i < number.length; i++){
            result /= number[i];
         }
         break;
   }
   
   return result;
}

module.exports = {
   cal: calculate,
}

// console.log(calculate('add', 2, 2, 3));
// console.log(calculate('multiply', 2, 2, 3));