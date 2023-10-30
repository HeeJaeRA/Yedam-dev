const table = {

    makeHead(titleAray = ['도서코드', '도서명', '저자', '출판사', '가격', '삭제']) {
        let headTag = "<thead><tr>";
        headTag += "<th><input type='checkbox'></th>"

        titleAray.forEach(title => {
            headTag += "<th>" + title + "</th>";
        })
        headTag += "</tr></thead>";
        return headTag;
    },
    
    makeTr(member = {}) {
        let trTag = "<tr>";
        trTag += "<td><input type='checkbox'></td>"
        for (let prop in member) {
            trTag += "<td>" + member[prop] + "</td>";
        }
        trTag += "<td><button>삭제</button></td>";
        trTag += "</tr>";
        return trTag;
    },

    makeBody(dataAry = []) {
        let bodyTag = "<tbody id = 'list'>";
        dataAry.forEach(item => {
            bodyTag += this.makeTr(item);
        })
        bodyTag += "</tbody>";
        return bodyTag;
    },
    
    makeTable(titleAray, dataAry) {
        let tableTag = "<table border = '1'>"
        tableTag += this.makeHead(titleAray) + this.makeBody(dataAry);
        tableTag += "</table>";
        return tableTag;
    }
}

export { table };