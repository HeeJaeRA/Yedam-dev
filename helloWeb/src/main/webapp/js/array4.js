const json = `
[{"id":1,"first_name":"Bride","email":"brilton0@g.co"},
{"id":2,"first_name":"Cam","email":"cevensden1@wunderground.com"},
{"id":3,"first_name":"Pegeen","email":"pgalbreath2@t-online.de"},
{"id":4,"first_name":"Wilt","email":"wepple3@usatoday.com"},
{"id":5,"first_name":"Preston","email":"plukianovich4@t-online.de"},
{"id":6,"first_name":"Sidonia","email":"spaulat5@ihg.com"},
{"id":7,"first_name":"Karisa","email":"kevins6@wufoo.com"},
{"id":8,"first_name":"Clifford","email":"csoldner7@google.de"},
{"id":9,"first_name":"Hube","email":"hsuerz8@biblegateway.com"},
{"id":10,"first_name":"Starlin","email":"sakker9@microsoft.com"}]
`;

let members = JSON.parse(json);

//find
let result = members.find(function(item, idx, ary) {
    if (item.id > 5) {
        return true;
    }
    return false;
})
console.log(result);

//filter
result = members.filter(function (item, idx, ary) {
    return idx >= 1 && idx < 3;
})
for (let rs of result) {
    console.log(rs);
}

//reduce
result = members.reduce((acc, item, idx) => {
    if (idx >= 1 && idx <3) {
        acc.push(item);
    }
    return acc;
}, [])
for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
}

//some
result = members.some((member) => {
    return member.first_name.length > 5;
})
console.log(result);

//every
result = members.every((member) => {
    return member.first_name.length > 5;
})
console.log(result);

//map : A -> B
result = members.map(member => {
    let obj = {id: member.id, name: member.first_name, email: member.email, grade: 'C'};
    return obj;
})
for (let rs of result) {
    console.log(rs);
}