console.log('function2.js');

const member = {
    name: "홍길동",
    age: 18,
    height: 178.9,
    showInfo: function () {
        return (`이름: ${this.name}, 나이: ${this.age}, 신장: ${this.height}`);
    }
}

const member1 = {
    name: "김길동",
    age: 19,
    height: 179.9,
    showInfo: function () {
        return (`이름: ${this.name}, 나이: ${this.age}, 신장: ${this.height}`);
    }
}

const member2 = {
    name: "박길동",
    age: 20,
    height: 180.9,
    showInfo: function () {
        return (`이름: ${this.name}, 나이: ${this.age}, 신장: ${this.height}`);
    }
}

const members = [member, member1, member2];

member.showInfo();

function makeTr(member = {
    name,
    age,
    height,
    showInfo
}) {
    let html = '';
    html += '<tr>';
    html += '<td>' + member.name + '</td>';
    html += '<td>' + member.age + '</td>';
    html += '<td>' + member.height + '</td>';
    html += '<td>' + member.showInfo() + '</td>';
    html += '</tr>';
    return html;
}

console.log(makeTr(member));

//DOM (Document Object Model)
let show = document.getElementById('show'); // table>(thead>tr>th*2)+(tbody>tr>td*3)*2
let str = "";
str += '<table border = "1"><thead><tr><th>이름</th><th>나이</th><th>신장</th><th>비고</th></thead><tbody>';
// for (let i = 0; i < members.length; i++) {
//     str += makeTr(members[i]);
// }
members.forEach(function (item) {
    str += makeTr(item);
})

str += '</tbody></table>'
show.innerHTML = str; // table>tbody>(tr>td*4)*3

console.log(show);