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

console.log(members);

let delMember = "Preston";
let myinfo = {name: "Hong", email: "hong@email.com"}

members.forEach((member, idx) => {
    if (member.first_name == delMember) {
        members.splice(idx, 1, {id: member.id, first_name: myinfo.name, email: myinfo.email});
    }
});

console.log(members);

let inpVal = prompt("이름과 이메일을 입력하세요 예) 홍길동, hong@email.com");

let inpMem = inpVal.replace(/\s/g, '');

inpMem = {name: inpMem.split(',')[0], email: inpMem.split(',')[1]};

members.push({id: (members[members.length - 1].id + 1), first_name: inpMem.name, email: inpMem.email});

console.log(members);