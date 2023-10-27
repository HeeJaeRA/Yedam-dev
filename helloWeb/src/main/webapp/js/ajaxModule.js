const table = {

    makeHead(titleAray = ['회원아이디', '비밀번호', '이름', '연락처']) {
        let headTag = "<thead><tr>";

        titleAray.forEach(title => {
            headTag += "<th>" + title + "</th>";
        })
        headTag += "</tr></thead>";
        return headTag;
    },

    makeBody(dataAry = []) {
        let bodyTag = "<tbody>";
        dataAry.forEach(item => {
            bodyTag += "<tr>";
            for (let prop in item) {
                bodyTag += "<td>" + item[prop] + "</td>";
            }
            bodyTag += "</tr>";
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