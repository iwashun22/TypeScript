// const person: {
//    name: string;
//    age: number;
// } = 
const person = {
   name: 'Jackie',
   age: 30,
   hobbies: ['Sports', 'Programming']
}

let languages: string[];
// languages = ['C++', 2]; // error
languages = ['C++', 'JavaScript'];

console.log(person.name);

for(const hobby of person.hobbies){
   console.log(hobby.toUpperCase()); // this worked because its type of string
   //console.log(hobby.map()); 
   // this doesn't work becaue it's not for a string
}