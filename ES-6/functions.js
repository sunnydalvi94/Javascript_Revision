// *** function statement
statementexample(); // hosting allows
function statementexample() {
  //    console.log("function statement example")
}
statementexample();


// *** function expression
// expressionexample(); // hosting is not allowed
const exp = function expressionexample() {
  //  console.log("function statement example")
}
exp();


// ✅ Regular Function:

function greet() {
  return "Hello, world!";
}
// console.log(greet());


// ✅ Arrow Function (Shorter Way):

const greet2 = () => "hello to world";
// console.log(greet2());

//

        console.log(functionExpression()); // ❌ ReferenceError:

// Cannot access 'functionExpression' before initialization

const functionExpression = function () {
  return "Hello, World!";
};

//...........................................................

console.log(functionDeclarations()); // ✅ Works fine

function functionDeclarations() {
  return "Hello, World!";
}
