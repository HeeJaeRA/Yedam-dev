import { table } from "./ajaxModule.js";

fetch('../MemberListServ2')
.then((resolve) => {
    console.log(resolve);       // Response 객체
    return resolve.json();      // json -> object 변환
})
.then((result) => {
    console.log(result);        // object

    let titles = ['아이디', '비밀번호', '이름', '연락처'];
    let dataAry = result;
    result = table.makeTable(titles, dataAry);
    document.getElementById('show').innerHTML = result;
})
.catch((err) => {
    console.log('error: ', err);
})