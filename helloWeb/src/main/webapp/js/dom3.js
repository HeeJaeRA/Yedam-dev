import table from './domTable.js';

let url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=xzADYrvAUisAVDob8yaz4gaeTvaJVrxJG5M93Ihkj5IDQgqmpN%2FejAdm26cz1BsmATLApRLmj7HWYVfgqvwnKw%3D%3D';

let titles = ['ID', '센터명', '병원명', '연락처'];

fetch(url)
    .then(resovle => resovle.json())
    .then(fetchCallback)
    .catch(err => console.log(err));

function fetchCallback(result) {
    // console.log(result);
    let rawData = result.data;
    console.log(rawData);

    let sidoAry = [];
    rawData.forEach(center => {
        if (sidoAry.indexOf(center.sido) == -1) {
            sidoAry.push(center.sido);
        }
    });
    // console.log(sidoAry);

    /* <label>시,도를 선택하세요.</label>
    <select id = 'sidoList'>서울특별시</select>
    <select>경기도</select>
    <select>경상도</select> */

    let label = document.createElement('label');
    label.innerHTML = '시,도를 선택하세요\t';
    document.querySelector('body').prepend(label); //body 최상단에 추가

    let select = document.createElement('select');
    select.setAttribute('id', 'sidoList');
    label.after(select);

    let sidoSel = document.querySelector('#sidoList')
    let fopt = document.createElement('option');
    fopt.innerHTML = '---------------';
    sidoSel.append(fopt);
    sidoAry.forEach(sido => {
        let opt = document.createElement('option');
        opt.innerHTML = sido;
        sidoSel.append(opt);
    })

    sidoSel.addEventListener('change', changeCallback);
    function changeCallback(e) {
        // console.log(e.target.value);
        let searchSido = e.target.value;
        let filterAry = rawData.filter(center => center.sido == searchSido);
        // console.log(filterAry);
        genTable(filterAry);        // 선택한 데이터로 출력
    }
    // genTable(rawData);          // 초기 데이터로 전체 출력

    let filterAry = rawData.filter((center, idx) => idx < 30); // 30건만 출력
    genTable(filterAry);
}

function genTable(rawData = []) {
    //화면 초기화
    document.querySelector('#show').innerHTML = '';

    let thead = table.makeHead(titles);
    let mapData = rawData.map(center => {
        let newCenter = {
            id: center.id,
            centerName: center.centerName.replace('코로나19 ', ''),
            org: center.org,
            phoneNumber: center.phoneNumber
        }
        return newCenter;
    });
    let tbody = table.makeBody(mapData);

    let tb1 = document.createElement('table');
    tb1.setAttribute('border', '1');
    tb1.append(thead, tbody);

    document.getElementById('show').append(tb1);
}