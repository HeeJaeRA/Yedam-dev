document.getElementById('saveBtn').onclick = function (e) {

    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let height = document.getElementById('height').value;

    let str = "";

    // if(name == "" || age == "" || height == "") {
    //     window.alert("값을 입력하세요");
    // } else {
    // 	const mem = new Member(name, age, height);
    //     str += makeTr(mem);
    // }

    if (!name || !age || !height) {
        alert("값을 입력하세요");
        return;
    }
    const mem = new Member(name, age, height);
    str += makeTr(mem);

    function Member(name, age, height) {

        this.name = name;
        this.age = age;
        this.height = height;
        this.showInfo = function () {
            return `이름은 ${this.name}이고 나이는 ${this.age}세 입니다.`;
        }
    }

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
        html += '<td><button id="delBtn" onclick="this.parentElement.parentElement.remove()">삭제</button></td>';
        html += '</tr>';
        return html;
    }

    let list = document.getElementById('list');
    list.innerHTML += str;

    document.getElementById('name').value = "";
    document.getElementById('age').value = "";
    document.getElementById('height').value = "";
    document.getElementById('name').focus;
}