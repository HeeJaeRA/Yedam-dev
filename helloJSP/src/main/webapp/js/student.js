import svc from './service.js';
// 비동기방식 코드를 async, awit 사용 시 순차적으로 작성되어 가독성 증가

// async {
//     await -> return promise
//     await -> return promise
//     await -> return promise
// }

// svc.studentList(function(result){}, function(err){});
svc.studentList(
    result => {
        let tbody = document.querySelector('#list');
        result.forEach(student => {
            tbody.append(makeTr(student));
        })
    },
    err => console.log('error: ', err));

// 등록 버튼 이벤트
document.querySelector('#addBtn').addEventListener('click', addcallback)

// 수정 버튼 이벤트
document.querySelector('#modBtn').addEventListener('click', modcallback)

// 등록 버튼 콜백함수
function addcallback(e) {
    // let sid = document.querySelector('input[name=sid]').value;
    let sid = document.querySelector('#sid').value;
    let sname = document.querySelector('#sname').value;
    let spw = document.querySelector('#spw').value;
    let sdept = document.querySelector('#sdept').value;
    let sbirth = document.querySelector('#sbirth').value;

    let param = `id=${sid}&name=${sname}&pw=${spw}&dept=${sdept}&birthday=${sbirth}`;
    // console.log(param);

    // get 방식: url 패턴, 값의 제한
    // fetch('../studentAdd.do?' + param)

    // post 방식: parameter 표현 x(정보 보호), 값의 제한 x, content-type 지정    
    svc.addStudent({
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: param
        },
        result => {
            if (result.retCode == 'OK') {
                alert('추가 완료');
                let tr = makeTr({
                    studentId: sid,
                    studentName: sname,
                    studentDept: sdept,
                    studentBirthday: sbirth
                });
                document.querySelector('#list').append(tr);
            } else {
                alert('추가 실패');
            }
        },
        err => console.log('error: ', err));
}

// 수정 버튼 콜백함수
function modcallback(e) {
    // let sid = document.querySelector('input[name=sid]').value;
    let sid = document.querySelector('.modal-body input[name=id]').value;
    let sname = document.querySelector('.modal-body input[name=name]').value;
    let spw = document.querySelector('.modal-body input[name=pass]').value;
    let sbirthday = document.querySelector('.modal-body input[name=birth]').value;

    let param = `id=${sid}&name=${sname}&pw=${spw}&dept=${sdept}&birthday=${sbirthday}`;

    svc.editStudent({
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: param
        },
        result => {
            if (result.retCode == 'OK') {
                alert('수정 완료');
                let targetTr = document.querySelector('tr[data-sid=' + result.vo.studentId + ']');
                let newTr = makeTr(result.vo);
                let parentEle = document.querySelector('#list');
                parentEle.replaceChild(newTr, targetTr);
                document.getElementById("myModal").style.display = 'none';
            } else {
                alert('수정 실패');
            }
        },
        err => console.log('error: ', err));
}

// 테이블 생성 함수
function makeTr(obj) {
    let showFields = ['studentId', 'studentName', 'studentBirthday'];
    let tr = document.createElement('tr');
    tr.setAttribute('data-sid', obj.studentId)

    tr.addEventListener('dblclick', showModal)

    for (let prop of showFields) {
        let td = document.createElement('td');
        td.innerHTML = obj[prop];
        tr.append(td);
    }

    let td = document.createElement('td');
    let btn = document.createElement('button');
    btn.setAttribute('data-sid', obj.studentId);
    btn.innerHTML = '삭제';

    btn.addEventListener('click', delcallback)

    function delcallback(e) {
        svc.removeStudent(
            obj.studentId,
            result => {
                if (result.retCode == 'OK') {
                    alert('삭제 완료');
                    tr.remove();
                } else {
                    alert('삭제 실패');
                }
            },
            err => console.log('error: ', err));
    }

    td.append(btn);
    tr.append(td);

    return tr;
}

function showModal(e) {
    // console.log(e.target.parentElement, this)
    let id = this.children[0].innerHTML;
    // let id = this.datset.sid; 
    // console.log(id);

    // Get the modal
    var modal = document.getElementById("myModal");

    modal.style.display = "block";

    svc.getStudent(
        id,
        result => {
            // console.log(result);
            // alert(result.studentName + ' 정보수정');
            modal.querySelector('h2').innerHTML = result.studentName;
            modal.querySelector('input[name=id]').value = result.studentId;
            modal.querySelector('input[name=name]').value = result.studentName;
            modal.querySelector('input[name=pass]').value = result.studentPassword;
            // modal.querySelector('input[name=dept]').value = result.studentDept;
            modal.querySelector('input[name=birth]').value = result.studentBirthday;
        },
        err => console.log('error: ', err));

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}