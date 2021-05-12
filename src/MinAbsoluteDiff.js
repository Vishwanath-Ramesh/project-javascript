import { generatePermutation } from "./Permutation";

function getMinimumAbsoluteDifference(inputArrayOne, inputArrayTwo){
    let minElement = null;

if(!(inputArrayOne?.length && inputArrayTwo?.length && (inputArrayOne?.length === inputArrayTwo?.length))) return null;

const permutedArray = [];
generatePermutation(inputArrayTwo, [], permutedArray);

permutedArray.forEach(perArray => {
    let totalValue = perArray.reduce((sumValue, currValue, index) => {
        return sumValue + Math.abs(inputArrayOne[index] - currValue)
    }, 0)

    if(totalValue < minElement || minElement === null) minElement = totalValue
});
return minElement;
}

export { getMinimumAbsoluteDifference };