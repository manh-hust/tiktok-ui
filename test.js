// Ex1
/*const arr = ['a', 'a', 'cd', 'cd', 'def', 'gh', 'a', 'def', 'c'];

const  sortString = (a, b) => {
    if( a > b)
        return 1;
    else if( a < b)
        return -1;
    else
        return 0;
}

const countAppear = (arr) =>{
    let newArr = [];
    let initString = arr[0];
    let count = 0;
    for(let i = 0; i <= arr.length ; i++){
        if(initString !== arr[i]){
            newArr.push({
                string: initString,
                count: count
            })
            initString = arr[i]
            count = 0;
        }
        count++;
    }
    return newArr;
};

const newArr = countAppear(arr.sort(sortString));

// Max count
newArr.forEach(item => {
    let i = 0;
    if(item.count > i) {
        i = item.count;
    }
})
var maxCount = Math.max(...newArr.map(item => item.count));
var maxLength = newArr.find(item => item.count === maxCount).string.length;

console.log(maxLength);*/
// Ex2
const arr = [1, 9, 4, 2, 6, 8, 12];
var total = 0;

const sum = arr.reduce((init, current) => {
    if(current == 2){
        total = init
    }
    return init = init + current;
}, 0)

console.log(total);