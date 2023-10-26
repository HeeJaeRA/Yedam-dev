
const map = new Map();

map.set("홍길동", 80);
map.set("김길동", 90);
map.delete("김길동");
map.set("김길동", 88);

const refval = [12];
map.set(refval, 90);
console.log(map.get(refval));
console.log(map.get("홍길동"));

for (let ent of map.entries()) {
    console.log('이름: ', ent[0], '점수: ', ent[1]);
}

map.forEach(function(val, key, map) {
    console.log(val, key);
})

const ary = [['프로도', 3],['라이언', 5],['어피치', 4]];
const fmap = new Map(ary);

for (let ent of fmap.entries()) {
    console.log('이름: ', ent[0], '번호: ', ent[1]);
}

const entries = fmap.entries();
console.log(entries);

const set1 = new Set();

set1.add("어피치");
set1.add("라이언");
set1.add("프로도");
set1.add(["어피치", 4]);

console.log(set1.size);

set1.forEach(function(val, item, set) {
    console.log(val);
})

const setAry = ['라이언', '프로도', '무지'];
const set2 = new Set(setAry);

console.log(set2.size);

set2.forEach(function(val) {
    console.log(val);
})

console.log(Array.from(set2));