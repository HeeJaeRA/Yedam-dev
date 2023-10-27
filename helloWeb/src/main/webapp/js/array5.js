//sort
const arr1 = ['펭수', '라이언', '어피치', '콘', '무지'];

arr1.sort();
console.log(arr1);


const arr2 = [4, 8, 1, 12, 23, 9];

arr2.sort(function (a, b) {
    if (a < b) {
        //오름차순
        return -1;
    } else {
        //내림차순
        return 1;
    }
});
console.log(arr2);


const arr3 = `
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

let members = JSON.parse(arr3);
members.sort(function (a, b) {
    if (a.first_name < b.first_name) {
        return -1;
    } else {
        return 1;
    }
}).reverse();
for (let mb of members) {
    console.log(mb);
}