// enum is a special variable type in TypeScript.
// It works like an Object, but the value will be count as number from 0 as default

enum Role {
   ADMIN, // 0;
   READ_ONLY, // 1
   MEMBER, // 2
}

console.log(Role.ADMIN);

// You can set it to the different number or string if you want to
enum Time {
   second = 1,
   minute = 60,
   hour = 360,
   month = 'October',
}

const someone = {
   name: 'David',
   age: 30,
   role: Role.MEMBER,
} 

if(someone.role == Role.ADMIN){
   console.log('you are the administrator');
}
else if(someone.role == Role.READ_ONLY){
   console.log('you are read-only');
}
else if(someone.role == Role.MEMBER){
   console.log('you are one of the member now!');
}