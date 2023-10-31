import table from './domTable.js';

let url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=xzADYrvAUisAVDob8yaz4gaeTvaJVrxJG5M93Ihkj5IDQgqmpN%2FejAdm26cz1BsmATLApRLmj7HWYVfgqvwnKw%3D%3D';

let titles = ['ID', '센터명', '병원명', '연락처'];

fetch(url)
    .then(resovle => resovle.json())
    .then(result => {
        console.log(result);
        let rawData = result.data;
        // let tbody = table.makeBody(rawData);
        // document.getElementById('show').append(tbody);

        let thead = table.makeHead(titles);
        let mapData = rawData.map(center => {
            let newCenter= {
                id: center.id,
                centerName: center.centerName.replace('코로나19 ', ''),
                org: center.org,
                phoneNumber: center.phoneNumber
            }
            return newCenter;
        });
        let tbody = table.makeBody(mapData);
        document.getElementById('show').append(thead, tbody);

    })
    .catch(err => console.log(err));

    //다음엔 노브랜드가시죠 버거킹 사라져