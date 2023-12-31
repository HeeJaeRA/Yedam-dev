const today = new Date();
console.log('오늘날짜: ', today.getDate());

function makeHead() {
    const days = ['일', '월', '화', '수', '목', '금', '토']
    return days.reduce((acc, day) => {
        return acc + '<th>' + day + '</th>';
    }, '<thead><tr>')
}

function makeBody() {
    let tbody = '</tr></thead><tbody><tr>';
    for (let i = 1; i <= 31; i++) {
        let styles = '';
        if (i % 7 == 1) {
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

function makeCalendar() {
    let thead = makeHead();
    let tbody = makeBody();
    let table = '<table border="1">' + thead + tbody + '</table>'
    document.getElementById('show').innerHTML = table;
}

makeCalendar();