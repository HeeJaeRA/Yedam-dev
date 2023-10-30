const table = {

    makeHead(titleAray = ['회원아이디', '비밀번호', '이름', '연락처']) {
        let headTag = "<thead><tr>";

        titleAray.forEach(title => {
            headTag += "<th>" + title + "</th>";
        })
        headTag += "</tr></thead>";
        return headTag;
    },
    
    makeTr(member = {}) {
        let trTag = "<tr onclick='showInfo(event, this)'>";
        for (let prop in member) {
            trTag += "<td>" + member[prop] + "</td>";
        }
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