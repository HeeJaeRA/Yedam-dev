import table from './domTable.js';

let url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=xzADYrvAUisAVDob8yaz4gaeTvaJVrxJG5M93Ihkj5IDQgqmpN%2FejAdm26cz1BsmATLApRLmj7HWYVfgqvwnKw%3D%3D';

let titles = ['ID', '센터명', '시/도명', '연락처', '주소'];

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
        genTable(filterAry); // 선택한 데이터로 출력
    }
    // 초기 데이터로 전체 출력 + page 단위로 출력
    genTable(rawData);

    // let filterAry = rawData.filter((center, idx) => idx < 30); // 30건만 출력
    // genTable(filterAry);
}

function genTable(rawData = [], page = 1) {
    //화면 초기화
    document.querySelector('#show').innerHTML = '';

    // table 출력수
    let startNo = (page - 1) * 5;
    let endNo = page * 5;
    let totalCnt = rawData.length;
    let lastPage = Math.ceil(totalCnt / 5);

    // 페이지 번호
    let beginPage;
    if (page > 3) {
        beginPage = page - 2;
    } else {
        beginPage = 1;
    }
    let endPage = beginPage + 4;

    let prev, next = false;
    if (beginPage > 1) {
        prev = true;
    }
    if (endPage < lastPage) {
        next = true;
    }

    if (endPage > lastPage) {
        endPage = lastPage;
    }

    document.querySelector('.pagination').innerHTML = '';

    // 이전페이지 '<<' 
    if (prev) {
        let aTag = document.createElement('a');
        aTag.setAttribute('href', '#');
        aTag.innerHTML = '&laquo;';
        aTag.addEventListener('click', clickCallback);

        function clickCallback(e) {
            genTable(rawData, beginPage - 1);
        }
        document.querySelector('.pagination').append(aTag);
    }
    //전체 페이지
    for (let i = beginPage; i <= endPage; i++) {

        let aTag = document.createElement('a');
        aTag.setAttribute('href', '#');
        aTag.innerHTML = i;

        if (i == page) {
            aTag.setAttribute('class', 'active');
        }

        aTag.addEventListener('click', clickCallback);
        
        function clickCallback(e) {
            genTable(rawData, i);
        }

        document.querySelector('.pagination').append(aTag);
    }
    // 다음페이지 '>>'
    if (next) {
        let aTag = document.createElement('a');
        aTag.setAttribute('href', '#');
        aTag.innerHTML = '&raquo;';
        aTag.addEventListener('click', clickCallback);

        function clickCallback(e) {
            genTable(rawData, endPage + 1);
        }
        document.querySelector('.pagination').append(aTag);
    }

    let thead = table.makeHead(titles);
    // let mapData = rawData.map(center => {
    //     let newCenter = {
    //         id: center.id,
    //         centerName: center.centerName.replace('코로나19 ', ''),
    //         org: center.org,
    //         phoneNumber: center.phoneNumber,
    //         lat: center.lat,
    //         lng: center.lng
    //     }
    //     return newCenter;
    // });
    let mapData = rawData.reduce((acc, center, idx) => {
        if (idx >= startNo && idx < endNo) {
            let newCenter = {
                id: center.id,
                centerName: center.centerName.replace('코로나19 ', ''),
                sido: center.sido,
                phoneNumber: center.phoneNumber,
                address: center.address,
                lat: center.lat,
                lng: center.lng
            }
            acc.push(newCenter);
        }
        return acc;
    }, []);
    // console.log(mapData);

    let tbody = table.makeBody(mapData);

    let tb1 = document.createElement('table');
    tb1.setAttribute('border', '1');
    tb1.append(thead, tbody);

    document.getElementById('show').append(tb1);

    // onclick 이벤트
    let targetTr = document.querySelectorAll('tbody tr');

    targetTr.forEach(tr => {
        tr.addEventListener('click', clickCallback);

        function clickCallback(e) {
            // let lat = tr.children[4].innerHTML;
            // let lng = tr.children[5].innerHTML;
            let lat = tr.dataset.lat;
            let lng = tr.dataset.lng;

            // location.href = 'kakaoApi.html?x=' + lat + '&y=' + lng;
            window.open('kakaoApi.html?x=' + lat + '&y=' + lng);
        }
    })

}