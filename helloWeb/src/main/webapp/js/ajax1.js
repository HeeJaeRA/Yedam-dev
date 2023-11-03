import { table } from './ajaxModule.js';

// ajax (Asynchronous Javascript And XML)

// Synchronous(동기방식)
let friends = [];
friends.push('홍길동');
friends.push('최길동');
friends.push('박길동');
console.log(friends);


// Asynchronous(비동기방식)
let friendsA = [];

setTimeout(function() {
    friendsA.push('홍길동');
}, 1000);
setTimeout(function() {
    friendsA.push('김길동');
}, 500);
setTimeout(function() {
    friendsA.push('최길동');
}, 2000);
console.log(friendsA);

// 비동기방식을 동기방식처럼 처리
// setTimeout(function () {
//     friendsA.push('홍길동');
//     setTimeout(function () {
//         friendsA.push('김길동');
//         setTimeout(function () {
//             friendsA.push('최길동');
//         }, 2000);
//     }, 500);
// }, 1000);

// DB 
// CREATE TABLE MEM (
//     mid     varchar2(10)    PRIMARY KEY,
//     pass    varchar2(10)    NOT NULL,
//     name    varchar2(30)    NOT NULL,
//     phone   varchar2(13)    DEFAULT '010-1111-2222'
// );
// INSERT INTO MEM
// VALUES('M001', '1111', '홍길동', '010-1234-5678');
// INSERT INTO MEM
// VALUES('M002', '2222', '김길동', '010-4567-8763');
// INSERT INTO MEM
// VALUES('M003', '3333', '최길동', '010-3210-7890');
// COMMIT;
// SELECT * FROM mem;

let newMember = { mid: "M009", pass: "9999", name: "민식이", phone: "010-9999-9999" };

let xhtp = new XMLHttpRequest();

// XML 실행
// xhtp.open('get', '../MemberListServ');
// xhtp.send();
// xhtp.onload = loadXML; 

// JSON 실행
xhtp.open('get', '../MemberListServ2');
xhtp.send();
xhtp.onload = loadJSON;

function loadXML() {
    console.log(xhtp.responseXML);
    let doc = xhtp.responseXML;
    let records = doc.getElementsByTagName('record');
    console.log(records);

    let titles = ["회원번호", "비밀번호", "이름", "연락처"];
    let dataAry = [];

    for (let record of records) {
        let obj = {
        mid: record.children[0].textContent, //mid
        pass: record.children[1].textContent, //pass
        name: record.children[2].textContent, //name
        phone: record.children[3].textContent //phone
        }
        dataAry.push(obj);
    }
    // dataAry.push(newMember);
    let result = table.makeTable(titles, dataAry);

    console.log(result);

    document.getElementById('show').innerHTML = result;

    let tr = '<tr><td>' + newMember.mid + '</td><td>' + newMember.pass + '</td><td>' + newMember.name + '</td><td>' + newMember.phone +'</td></tr>';

    document.getElementById('list').innerHTML += tr;
}

function loadJSON() {
    console.log(xhtp.responseText);
    let result = JSON.parse(xhtp.responseText);
    console.log(result);

    let titles = ["회원번호", "비밀번호", "이름", "연락처"];

    // let dataAry = [];

    // result.array.forEach(member => {
    //     dataAry.push({mid: member.mid, pass: member.pass, name: member.name, phone: member.phone})
    // });

    let tb = table.makeTable(titles, result);

    document.getElementById('show').innerHTML = tb;
}
