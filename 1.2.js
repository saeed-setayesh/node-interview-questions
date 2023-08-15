// I did not understand the test exactly but I think this was what you meant

// Creating the Promise

function taskAsync(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value === 3) {
        reject(`Rejected value: ${value}`);
      } else {
        resolve(`Resolved value: ${value}`);
      }
    }, delay);
  });
}

// Usage Test

console.log("Start");

taskAsync(1, 1000)
  .then((result) => {
    console.log(result);
    return taskAsync(2, 500);
  })
  .then((result) => {
    console.log(result);
    return taskAsync(3, 800);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

console.log("End");
