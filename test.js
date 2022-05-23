const arr = [1, 2, 1, 7, 1, 1, 2, 2, 1, 2, 3, 1, 9, 12, 1, 3, 40];

function unique(arr){
    var newArr = [];
    for(var i  = 0; i < arr.length; i++ ){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
function check(arr, shortArr){
    let length;
    let newArr = [];
    for(let i = 0; i < shortArr.length; i++){
        length = arr.filter(item => item === shortArr[i]).length
        if(length % 2 === 1){
            newArr.push(shortArr[i]);
        }
    }
    return newArr.sort(equal);
}

function equal(a, b){
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
}
console.log(arr.sort(equal));

