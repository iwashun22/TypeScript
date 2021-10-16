const c = require('./module');

type Choices = 'yes' | 'no';

type Person = {
   name: string,
   age: number,
   isMale: Choices,
}

const person_one: Person = {
   name: 'Harry',
   age: 16,
   isMale: 'yes'
}

const person_two: Person = {
   name: 'Jane',
   age: 19,
   isMale: 'no'
}

c.addAndCallback(person_one.age, person_two.age, (result: number) => {
   const mean = result / 2;
   console.log(`The average age is: ${mean}`);
})
