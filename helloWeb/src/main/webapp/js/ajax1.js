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

// setTimeout(function () {
//     friendsA.push('홍길동');
//     setTimeout(function () {
//         friendsA.push('김길동');
//         setTimeout(function () {
//             friendsA.push('최길동');
//         }, 2000);
//     }, 500);
// }, 1000);


// XML
//http://localhost:8080/helloWeb/js/ajax.html
//http://localhost:8080/helloWeb/MemberListServ


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

let xhtp = new XMLHttpRequest();
xhtp.open('get', '../MemberListServ');
xhtp.send();
xhtp.onload = function () {
    // console.log(xhtp.responseXML);
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
    let result = table.makeTable(titles, dataAry);

    console.log(result);

    document.getElementById('show').innerHTML = result;
}