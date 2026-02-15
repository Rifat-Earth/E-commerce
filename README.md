<!-- 1) What is the difference between null and undefined? -->

Answer: null means absence of value. And undefined means a variable define but not assign value of the variable.
Example: let age = null ; console.log(age) answer is null
Example: let age ; console.log(age) answer is undefined

<!-- 2) What is the use of the map() function in JavaScript? How is it different from forEach()? -->

Answer: map is one of the array method of javascript. It return the same array.map takes the every single element of array if needed to implement a condition. But original array still same as. 
<!-- map different from foreach  -->
map uses to transform a array but forEach not . forEach uses a array to get the every single element, cannot transform a array

<!-- 3) What is the difference between == and ===? -->

Answer: double equal cannot check dataType but triple equal check data type also.

<!-- 4) What is the significance of async/await in fetching API data? -->

Answer: to load data synchronize-wise.Also avoid website crashed.

<!-- 5) Explain the concept of Scope in JavaScript (Global, Function, Block). -->

Answer:

global scope: Variable declared outside of a function or block.this variable can accessible in everywhere.

Function scope: variable declared inside a function. this variable only accessible inside the function

Block scope: variable declared (let and const only) inside a block . accessible only in block.