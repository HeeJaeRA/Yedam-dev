let sum1 = 0;
[10, 20, 30].forEach(function (num) {
    sum1 += num;
});
console.log("foreach sum: " + sum1);

sum1 = 0;
sum1 = [10, 20, 30].reduce(function (acc, item, idx, ary) {
    // console.log(acc, item, idx);
    return acc + item;
}, 0);

console.log("reduce sum: " + sum1);

function sum(a = 0, b = 0, ...args) {
    // foreach sum
    let result = 0;
    result = a + b;
    args.forEach(num => result += num);
    return result;

    // reduce sum 
    //return a + b + args.reduce((acc, item) => acc + item);
}

console.log("sum: " + sum(10, 20, 30, 40, 50, 60));

const numAry = [4, 2, 6, 9, 1, 7];

let max = 0;

max = numAry.reduce(function (acc, item) {
    if (max < item) {
        max = item;
    }
    return max;
});

// max = numAry.reduce((acc, item) => acc > item ? acc : item);

console.log("최대값: " + max);