console.log('function3.js');

function Member(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.showInfo = function () {
        return `이름은 ${this.name}이고 나이는 ${this.age}세 입니다.`;
    }
}

var myName = 'Hong';
const member = new Member('홍길동', 20, 123.4);
console.log(member.showInfo());

const members = [
    new Member('홍길동', 18, 123.4),
    new Member('김길동', 19, 124.4),
    new Member('박길동', 20, 125.4),
]

let str = '';

function makeTable(memberAry = []) {
    str += '<table border = "1"><thead><tr><th>이름</th><th>나이</th><th>신장</th><th>비고</th></tr></thead><tbody>';
    memberAry.forEach(function (item) {
        str += `<tr><td>${item.name}</td><td>${item.age}</td><td>${item.height}</td><td>${item.showInfo()}</td></tr>`;
    })
    str += '</tbody></table><br>'
    return str;
}

let show = document.getElementById('show');
show.innerHTML = makeTable(members);