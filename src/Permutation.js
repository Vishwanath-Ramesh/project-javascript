function generatePermutation(input, initialArr) {
  if (input.length <= 0) return null;

  if (input.length === 1) { initialArr.push(input[0]); console.log(initialArr.join(''));};

  for (let itr = 0; itr < input.length; itr++) {
    generatePermutation(input.filter((item) => item !== input[itr]), [...initialArr, input[itr]])
  }
}

export { generatePermutation };
