console.log('object start....');

let obj1 = {
    name: 'Hong',
    age: 20
}

let obj2 = obj1;

console.log(obj1);
obj2.age = 22;
console.log(obj1);

let obj3 = { ...obj1};
obj3.age = 24;
console.log(obj3);
console.log(obj1);

class Member {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    setWeight(weight) {
        this.weight = weight;
    }
    getWeight() {
        return this.weight;
    }
    showInfo() {
        return `이름: ${this.name}, 나이: ${this.age}세 입니다.`;
    }
    makeTr(student={sno, sname, engScore, mathScore}) {
        let str = "";
        str += '<tr>';
        for (let prop in student) {
            str += '<td>' + student[prop] + '</td>';
        }
        str += '</tr>';
        return str;
    }
    makeHtml(stuAry= []) {
        let table = `<table border = "1"><thead><tr><th>학생번호</th><th>학생이름</th><th>영어점수</th><th>수학점수</th></tr></thead><tbody>`;
        let obj = this;
        table += stuAry.reduce(function (acc, stud) {
            return acc + obj.makeTr(stud);
        }, '');
        table += `</tbody></table>`;
        this.html = table;
    }
    
    makeHtml1(stuAry=[]) {
        let table = "";
        table +=`<table border = "1"><thead><tr><th>학생번호</th><th>학생이름</th><th>영어점수</th><th>수학점수</th></tr></thead><tbody>`;
        let obj = this;        
        stuAry.forEach(function (val) {
            table += obj.makeTr(val);
        })
        table += `</tbody></table>`;
        this.html = table;
    }

    showPage(dom) {
        dom.innerHTML = this.html;
    }
}

const mem1 = new Member('홍길동', 20, 156.7);
console.log(mem1.showInfo());

mem1.setWeight(62.8);
console.log('홍길동의 몸무게: ', mem1.getWeight());