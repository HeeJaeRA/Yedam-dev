
Member.prototype.SetBloodType = function(bloodType) {
    this.bloodType = bloodType;
}

Member.prototype.getBloodType = function() {
    return this.bloodType;
}

const mem2 = new Member('김길동', 22, 123.4);

mem2.SetBloodType('AB');

console.log(mem2.getBloodType());

String.prototype.truncate = function() {
    console.log(this);
    return this.substring(0, 5);
}

let result = "HelloWorld".truncate();
console.log(result);