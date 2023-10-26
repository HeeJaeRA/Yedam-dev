// Date 객체.
const today = new Date(); // 오늘 날짜를 생성.
// today.setDate(22);
console.log('오늘날짜: ', today.getDate());

// calendar => table
// makeHead();
function makeHead() {
    const days = ['일', '월', '화', '수', '목', '금', '토']
    return days.reduce((acc, day) => {
        return acc + '<th>' + day + '</th>';
    }, '<thead><tr>')
}
// makeBody();
function makeBody() {
    let tbody = '</tr></thead><tbody><tr>';
    for (let i = 1; i <= 31; i++) {
        // 오늘날짜는 백그라운드:노란색, 폰트:bold;
        let styles = '';
        if (i % 7 == 1) {
            // 일요일이면 배경을 빨간색, 글자색:노란색, 
            styles = 'background:red; color:yellow;';
            if (i == today.getDate()) {
                styles += 'font-weight: bolder';
            }
            tbody += '<td style="' + styles + '" align="right">' + i + '</td>';
        } else {
            if (i == today.getDate()) {
                styles += 'font-weight: bolder; background: yellow;';
            }
            tbody += '<td style="' + styles + '" align="right">' + i + '</td>';
        }

        if (i % 7 == 0) {
            tbody += '</tr><tr>';
        }
    }
    tbody += '</tr></tbody>';
    return tbody;
}
// makeCalendar();
function makeCalendar() {
    let thead = makeHead();
    let tbody = makeBody();
    let table = '<table border="1">' + thead + tbody + '</table>'
    document.getElementById('show').innerHTML = table;
}
makeCalendar(); // 함수호출.