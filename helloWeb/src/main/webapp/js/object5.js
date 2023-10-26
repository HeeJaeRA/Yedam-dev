const obj1 = {
    name: "Hong",
    age: 20,
    weight: 66.8
}

console.log(obj1);

const obj2 = Object.assign({name: "Hwang", age: 22, height: 123.4}, obj1);

console.log(obj2);

const obj3 = obj1;

const obj4 = Object.create(obj1);

console.log(obj4.name);
obj1.name = "Hwang";
console.log(obj4.name);

Object.defineProperty(obj1, 'bloodType', {
    set: function(bt) {
        if (bt == "A" || bt == "B" || bt == "O" || bt == "AB"){
            this._bloodType = bt;
        } else {
            console.log('잘못된 유형입니다.');
            this._bloodType = "A";
        }
    },
    get: function() {
        return this._bloodType;
    }
})

obj1.bloodType = 'AB';

console.log(obj1.bloodType);