// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
  stdin_input += input; // Reading input from STDIN
});

process.stdin.on("end", function () {
  main(stdin_input);
});

function main(input) {
  input = input.replace("\r").split("\n");
  let noOfTestCases = +input[0];
  let noOfArrayEle = +input[1];
  let subInput = null;
  input = input.splice(2);

  for (let itr = 0; itr < noOfTestCases; itr++) {
    let arrayOne = [],
      arrayTwo = [],
      result = "";

    subInput = input.splice(0, 2);
    arrayOne = subInput[0].split(" ");
    arrayTwo = subInput[1].split(" ");
    if (arrayOne.length === noOfArrayEle && arrayTwo.length === noOfArrayEle)
      result = getMinimumAbsoluteDifference(arrayOne, arrayTwo);
    process.stdout.write(`${result.toString()}\n`);
  }
}

// Write your code here
function getMinimumAbsoluteDifference(inputArrayOne, inputArrayTwo) {
  let minElement = null;

  if (
    !(
      inputArrayOne.length &&
      inputArrayTwo.length &&
      inputArrayOne.length === inputArrayTwo.length
    )
  )
    return null;

  const permutedArray = [];
  generatePermutation(inputArrayTwo, [], permutedArray);

  permutedArray.forEach((perArray) => {
    let totalValue = perArray.reduce((sumValue, currValue, index) => {
      return sumValue + Math.abs(inputArrayOne[index] - currValue);
    }, 0);

    if (totalValue < minElement || minElement === null) minElement = totalValue;
  });
  return minElement;
}

function generatePermutation(input, initialArr, result) {
  if (input.length <= 0) return null;

  if (input.length === 1) {
    initialArr.push(input[0]);
    result.push(initialArr);
  }

  for (let itr = 0; itr < input.length; itr++) {
    generatePermutation(
      input.filter((item) => item !== input[itr]),
      [...initialArr, input[itr]],
      result
    );
  }
}
