# TypeScript study

This is my first time of learning TypeScript

## What is TypeScript

TypeScript is a strongly typed programming language that compile as a JavaScript file.
It checks the error and easier to understand where was the error coming from.

## How it works

### Note:

> TypeScript does not run on the browser

```
   tsc <filename>
```

You need to run this command on terminal to compile as a JavaScript file, to get executed on the browser

### This is an example how it works

> TypeScript

```ts
function add(num1: number, num2: number){
   return num1 + num2;
}
```

If we declared a type of the variables, and the type wasn't same as order... like

```ts
add('Hello', 2021);
```

it will throw the error for us.

In JavaScript code it will be longer if we want to do same thing

> JavaScript

```js
function add(num1, num2){
   if(typeof num1 === 'number' && typeof num2 === 'number'){
      return num1 + num2;
   }
   throw new Error('The variable isn\'t a number');
}
```

which TypeScript can code it more efficiently.

### Another differences between TypeScritp and JavaScript

> TypeScript

```ts
const person = {
   name: 'Jackie',
   age: 20
}

console.log(person.nickname); // throw error

person.nickname = 'Jack'; // still error
```

> JavaScript

```js
const person = {
   name: 'Jackie',
   age: 20
}

console.log(person.nickname); // undefined

person.nickname = 'Jack'; // assign the value of nickname
```

## ENUM

Enum is a special variable in TypeScript, shortened from enumerate. It works like an Object, but the value will be counted from 0 as default

```ts
enum Role {
   admin, // 0
   read_only, // 1
   member, // 2 ...
}
```

But you can also set the value to different number or to string if you want

```ts
enum Role {
   admin = 10,
   read_only = 20,
   member = 'new member'
}
```