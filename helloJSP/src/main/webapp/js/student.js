fetch('../studentList.do')
    .then(resolve => resolve.json())
    .then(result => {
        //console.log(result);

        let tbody = document.querySelector('#list');
        result.forEach(student => {
            tbody.append(makeTr(student));
        })
    })
    .catch(err => console.log('error: ', err));

document.querySelector('#addBtn').addEventListener('click', addcallback)

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
    fetch('../studentAdd.do?', {
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: param
        })
        .then(resolve => resolve.json())
        .then(result => {
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
        })
        .catch(err => console.log('error: ', err));
}

function makeTr(obj) {
    let showFields = ['studentId', 'studentName', 'studentDept', 'studentBirthday'];
    let tr = document.createElement('tr');
    // tr.setAttribute('data-sid', obj.studentId)
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
        // ajax 호출(서블릿 실행)
        fetch('../studentDel.do?sid=' + obj.studentId)
            .then(resolve => resolve.json())
            .then(result => {
                console.log(result);
                if (result.retCode == 'OK') {
                    alert('삭제 완료');
                    tr.remove();
                } else {
                    alert('삭제 실패');
                }
            })
            .catch(err => console.log('error: ', err));
    }

    td.append(btn);
    tr.append(td);

    return tr;
}

function showModal(e) {
    // console.log(e.target.parentElement, this)
    let id = this.children[0].innerHTML;
    // let id = this.datset.sid; --> makeTr(obj) { tr.setAttribute('data-sid', obj.studentId) }
    // console.log(id);

    // Get the modal
    var modal = document.getElementById("myModal");

    modal.style.display = "block";

    fetch('../studentGet.do?', {
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'id=' + id
    })
    .then(resolve => resolve.json())
    .then(result => {
        // console.log(result);
        // alert(result.studentName + ' 정보수정');

        let data = {id: result.studentId, name: result.studentName, pass: result.studentPassword, dept: result.studentDept, birth: result.studentBirthday};
    
        modal.querySelector('h2').innerHTML = data.name;
        modal.querySelector('input[name=pass]').value = data.pass;
        modal.querySelector('input[name=dept]').value = data.dept;
        modal.querySelector('input[name=birth]').value = data.birth;
    })
    .catch(err => console.log('error: ', err));

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