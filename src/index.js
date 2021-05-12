// import { generatePermutation } from "./Permutation";
// import { getMinimumAbsoluteDifference } from "./MinAbsoluteDiff";

// var result = [];
// generatePermutation(["A", "B", "C"], [], result);
// console.log(result);


// result = getMinimumAbsoluteDifference([5, 8, 12], [18, 11, 12]);
// console.log(result);

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
    main(stdin_input);
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    // process.stdout.write(input);       // Writing output to STDOUT
    console.log(input.replace('\r', '').split('\n'))
}