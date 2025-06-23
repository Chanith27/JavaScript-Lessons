//Simple Function to introduce JavaScript Functions
function greet(){
  console.log("Hello World!")
}

greet();

//Functions with parameters
function greet2(name){
  console.log("Hello" + name + "!" )
}

greet2("Chanith");
greet2("Ravindu");

//functions that create a value
function addition(a,b){
  return a + b
}

let result = addition(3,5)
console.log(result)
