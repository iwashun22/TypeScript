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

```js
function add(num1, num2){
   if(typeof num1 === 'number' && typeof num2 === 'number'){
      return num1 + num2;
   }
   throw new Error('The variable isn\'t a number');
}
```

which TypeScript can code it more efficiently.