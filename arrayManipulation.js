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
