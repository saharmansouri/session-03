// ///////////////////////////// Problem 1: Find max and min of an array using reduce method /////////////////////////////////////////
const arr = [2, -1, 3, 4, 5, 100];
function max(prevVal,currentVal){
    if (prevVal>currentVal) return prevVal;
    else return currentVal;
}
function min(prevVal,currentVal){
    if (prevVal<currentVal) return prevVal;
    else return currentVal;
}
function maxMinReturn(arr){
    const maxResult = arr.reduce(max);
    const minResult = arr.reduce(min);
    return  {min: minResult, max: maxResult};
}
console.log(maxMinReturn(arr))


// ///////////////////////////// Problem 2: Find the number of each element in an array as an object /////////////////////////////////////////
// method1
function count(arr){
    let obj = {};
    for (let i of arr){
        if (i in obj) obj[i]++;
        else obj[i] = 1;
    }
    return obj;
}

const arr = [1,1,1,2,2,3,3,3,3,3,3,3,7,8,8,8,9,9,99,99,9];
console.log(count(arr))

// method1 (with reduce)
const arr = [1,1,1,2,2,3,3,3,3,3,3,3,7,8,8,8,9,9,99,99,9];
function count(prevVal,currentVal){
    // if (!prevVal[currentVal]) prevVal[currentVal] = 1;
    // else prevVal[currentVal] ++;
    // return prevVal;
    prevVal[currentVal] = (prevVal[currentVal] || 0) + 1;
    return prevVal;
}

console.log(arr.reduce(count,{}))
