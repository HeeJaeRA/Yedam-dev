const yo = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

document.getElementById('show').innerHTML = '';

const calendar = {
	html: '',

	makeHead() {
		let strHead = "";

		strHead += `<table border ="1"><thead><tr>`;

		for (let yoil in yo) {
			strHead += '<th>' + yo[yoil] + '</th>';
		}

		strHead += '</tr></thead>';

		this.html += strHead;
	},

	makeBody(mon) {
		let obj = this;
		let strBody = "";
		strBody += '<tbody><tr>'

		for (let i = 1; i <= months[mon]; i++) {
			strBody += `<td>${i}</td>`
			if (i % 7 == 0) {
				strBody += '<tr></tr>'
			}
		}
		strBody += '</tr></tbody></table><br>'

		obj.html += strBody;
	},

	makeCalendar(dom) {
		dom.innerHTML = this.html;
	}
}

calendar.makeHead();

calendar.makeBody(9);

calendar.makeCalendar(document.getElementById('show'));

// for (let i = 0; i < 12; i++) {
//    calendar.makeHead();

//    calendar.makeBody(i);
// }
// calendar.makeCalendar(document.getElementById('show'));
