// Declarative Approach
function transformArrayDeclarative(inputArray, transformFunction) {
  return inputArray.map(transformFunction);
}

// Imperative Approach
function transformArrayImperative(inputArray, transformFunction) {
  const newArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    newArray.push(transformFunction(inputArray[i]));
  }
  return newArray;
}

// Example usage
const inputNumbers = [1, 2, 3, 4, 5];

// Function to double a number
const doubleFunction = (num) => num * 2;

// Using the declarative approach
const declarativeResult = transformArrayDeclarative(
  inputNumbers,
  doubleFunction
);
console.log("Declarative Result:", declarativeResult);

// Using the imperative approach
const imperativeResult = transformArrayImperative(inputNumbers, doubleFunction);
console.log("Imperative Result:", imperativeResult);
