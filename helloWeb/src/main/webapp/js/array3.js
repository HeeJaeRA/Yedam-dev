let names = ["콘", "무지", "라이언", "어피치"];

let pos = names.indexOf("무지");

console.log(pos);

let members = [
    {name: "김민식", age: 22},
    {name: "최민식", age: 23},
    {name: "김우현", age: 26}
]

let search = "민식";
let cnt = 0;

for (let member of members) {
    if (member.name.indexOf(search) != -1){
        cnt++;
    }
}
console.log(search + ": " + cnt + "명");