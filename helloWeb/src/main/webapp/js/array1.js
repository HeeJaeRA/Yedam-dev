const arr1 = [];

arr1.push(10);
arr1.push('temp');
arr1.push({name: "Hong", age:20});

arr1.unshift(20);

// arr1.length = 0;

arr1.shift();
arr1.pop();

//Array.splice(index , count, ...item);

console.log('배열 길이: ', arr1.length);

for(let ary of arr1) {
    console.log(ary);
}

