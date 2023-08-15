function flatArray(inputArray) {
  const result = [];

  function flat(arr) {
    for (const item of arr) {
      if (Array.isArray(item)) {
        flat(item);
      } else {
        result.push(item);
      }
    }
  }

  flat(inputArray);

  return result;
}

const nestedArray = [4, [[5], [6, [7], 8], 9, 10]];
const flatedArray = flatArray(nestedArray);

console.log(flatedArray);
