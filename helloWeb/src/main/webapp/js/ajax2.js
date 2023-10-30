import { table } from './ajaxModule.js';

// https://mvnrepository.com/artifact/com.google.code.gson/gson/2.10.1

document.getElementById('addBtn').onclick = addMember;
document.getElementById('modBtn').onclick = modMember;

function addMember(e) {
    let mid = document.getElementById('mid').value;
    let pass = document.getElementById('pass').value;
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;

    const xhtp = new XMLHttpRequest();
    xhtp.open('get', '../AddMemberServ.html?mid=' + mid + '&pass=' + pass + '&name=' + name + '&phone=' + phone);
    xhtp.send();
    xhtp.onload = function () {        
        let result = JSON.parse(xhtp.responseText);

        if (result.retCode == 'OK') {            
            let tl = table.makeTr(result.vo);
            document.getElementById('list').innerHTML += tl;
        } else {
            alert('처리중 에러');
        }

    }
}

function modMember(e) {
    let mid = document.getElementById('mid').value;
    let pass = document.getElementById('pass').value;
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;

    const xhtp = new XMLHttpRequest();
    xhtp.open('get', '../ModMemberServ.do?mid=' + mid + '&pass=' + pass + '&name=' + name + '&phone=' + phone);
    xhtp.send();
    xhtp.onload = function () {        
        let result = JSON.parse(xhtp.responseText);

        if (result.retCode == 'OK') {
            document.querySelectorAll('#list tr').forEach(tr => {
                if (tr.children[0].innerHTML == result.vo.mid) {
                    tr.children[1].innerHTML = result.vo.pass;
                    tr.children[2].innerHTML = result.vo.name;
                    tr.children[3].innerHTML = result.vo.phone;
                }
            })
        } else {
            alert('처리중 에러');
        }

    }
}