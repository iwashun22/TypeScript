// Unknown is a variable that is similar to any but more strict
// here is the example

let unknown: unknown; // can hold any type of variable 
let any: any; // can hold any type of variable
let string: string;

any = 5;
any = 'Hello world'

unknown = 6;
unknown = 'Goodbye world';

string = any;
string = unknown; // error

if(typeof unknown === 'string'){
   string = unknown; // no error
}