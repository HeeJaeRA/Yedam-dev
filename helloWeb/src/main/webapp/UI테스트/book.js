import { table } from './bookModule.js';

let xhtp = new XMLHttpRequest();

xhtp.open('get', '../BookListServlet')
xhtp.send();
xhtp.onload = loadJSON;

function loadJSON() {
    let result = JSON.parse(xhtp.responseText);

    let titles = ['도서코드', '도서명', '저자', '출판사', '가격', '삭제'];

    let tb = table.makeTable(titles, result);

    document.getElementById('show').innerHTML = tb;
}