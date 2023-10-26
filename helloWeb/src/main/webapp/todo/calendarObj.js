const today = new Date();

// today.setDate(28);

const cal = {

    makeHead() {
        const days = ['일', '월', '화', '수', '목', '금', '토']
        return days.reduce((acc, day) => {
            return acc + '<th>' + day + '</th>';
        }, '<thead><tr>')
    },

    makeBody() {
        let tbody = '</tr></thead><tbody><tr>';
        for (let i = 1; i <= 31; i++) {
            let styles = '';
            if (i % 7 == 1) {
                styles = 'color:red;';
                if (i == today.getDate()) {
                    styles += 'font-weight: bolder; background: yellow;';
                }
                tbody += '<td style="' + styles + '" align="right">' + i + '</td>';
            } else if (i % 7 == 0) {
                styles = 'color:blue;';
                if (i == today.getDate()) {
                    styles += 'font-weight: bolder; background: yellow;';
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
    },

    showCalendar() {
        let thead = this.makeHead();
        let tbody = this.makeBody();
        let table = '<table border="1">' + thead + tbody + '</table>'
        document.getElementById('show').innerHTML = table;
    }
}

cal.showCalendar();