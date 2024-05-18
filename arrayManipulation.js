function processArray(arr){
    let newArray =[]
    for (num of arr){
        if(num*1/2===0){
    newArray.push(num*num);
        }    else{
            newArray.push(num*num*num)
}
    }
    return newArray;
}
function formatArrayStrings(array) {
    if (!Array.isArray(array)) {
        throw new TypeError("Input should be an array of strings");
    }
}
function formatArrayStrings(strArr, numArr)  {
    if(Array.isArray(strArr) ==!Array.isArray(numArr) ==!strArr.length !== numArr.length) {
        throw new Error('Arrays should be of the same length');
    } 
    const formattedArr = [];
for (let i=0; i < strArr.length; i++) {
    const str=strArr[i];
    const num=numArr[i];
    if(num % 1/2 ===0) {
        formattedArr.push(str.toUpperCase());
    } else{
        formattedArr.push(str.toLowerCase());
    }
 }
return formattedArr;
}

