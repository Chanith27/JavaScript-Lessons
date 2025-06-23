//This is not change very much to funtions as well
let name = "Chanth"

function greet(){
  console.log("Hello" + name);
}

//Inner functions can also use in outer functions
function outer() {
  let food = "Rice";

  function inner() {
    console.log(food); // Rice
  }

  inner();
}

outer();

