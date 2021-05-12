function generatePermutation(input, initialArr, result) {
  if (input.length <= 0) return null;

  if (input.length === 1) { initialArr.push(input[0]); result.push(initialArr);};

  for (let itr = 0; itr < input.length; itr++) {
    generatePermutation(input.filter((item) => item !== input[itr]), [...initialArr, input[itr]], result)
  }
}

export { generatePermutation };
