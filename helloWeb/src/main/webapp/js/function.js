 // function myFunc(std, score = 0) {
 // 	console.log(`${std} 점수는 ${score}`);
 //     return score;
 // }

 var myFunc = function myFunc(std, score = 0) {
     console.log(`${std} 점수는 ${score}`);
     return score;
 }
 console.log(myFunc('홍길동'));