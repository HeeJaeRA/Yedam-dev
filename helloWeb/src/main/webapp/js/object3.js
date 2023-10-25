
const member = {
    name: "홍길동",
    age: 20,
    height: 123.4,
    showInfo: function() {
        console.log(`이름: ${this.name}, 나이: ${this.age}`);
    },
    html: '',

    makeTr(student = {sno, sname, engScore, mathScore}) {
        let str = "";
        str += '<tr>';
        for (let prop in student) {
            str += '<td>' + student[prop] + '</td>';
        }
        str += '</tr>';
        return str;
    },
    makeHtml(stuAry = []) {
        let table = "";
        table +=`<table border = "1"><thead><tr><th>학생번호</th><th>학생이름</th><th>영어점수</th><th>수학점수</th></tr></thead><tbody>`;
        let obj = this;        
        stuAry.forEach(function (val) {
            table += obj.makeTr(val);
        })
        table += `</tbody></table>`;
        this.html = table;
    },
    showPage(dom) {
        dom.innerHTML = this.html;
    }

}

for (let prop in member) {
    if ((typeof member[prop]) != 'function') {
        console.log(member[prop]);
    }
}

const students = [
    {sno:'001', sname:"홍길동", engScore:80, mathScore:85},
    {sno:'002', sname:"김길동", engScore:82, mathScore:83},
    {sno:'003', sname:"박길동", engScore:84, mathScore:88}
]

member.makeHtml(students);
member.showPage(document.getElementById('show'));