
// 공백 기준으로 단어 크기 5이상인 단어 출력
const words = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, nesciunt. Ex, unde doloremque minus voluptate natus laborum explicabo ut veritatis, ipsa quos et corporis id, aliquid nesciunt consequuntur dolores deleniti!";
let word;
let str5size = '';
word = words.split(' ');
for (let i = 0; i < word.length; i++) {
    if (word[i].length > 5) {
        // console.log(word[i]);
        str5size += word[i] + " | ";
    }
}
console.log('크기 6 이상 단어: ', str5size);

// 생년월일 입력 > 남자 여자
function checkGender(ssn) {
    let strGen = ssn.replace(/\s/g, '');

    if (strGen.charAt(6) == '1' || strGen.charAt(6) == '3') {
        return '남자';
    } else if (strGen.charAt(6) == '2' || strGen.charAt(6) == '4') {
        return '여자';
    }
}
console.log('성별: ', checkGender('950305 3678532'));

// 파일명과 확장자
let file = "d:/temp/sample/book.xls";
let fileName, fileExt;

fileExt = file.split('.').reverse()[0];
fileName = file.split('.').reverse()[1].split('/').reverse()[0];

console.log('파일이름: ', fileName);
console.log('확장자: ', fileExt);