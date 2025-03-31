//Memory heap: Variables are stored in the memory heap 
const a = 1;
const b = 2;
const c = 3;

//call stack: This reads and execute our script
console.log(1);

//Recursion: A function that calls itself
function foo() {
    foo()
}
foo();
