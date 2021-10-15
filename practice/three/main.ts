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
