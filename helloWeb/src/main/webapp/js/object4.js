const obj = {
    sno: 1001,
    sname: '홍길동',
    address: '대구 중구 100번지',
    friends: [
        {name: '김민수', phone: '010-1111'},
        {name: '최현수', phone: '010-2222'},
    ],
    hobbies: [
        '독서', '영화감상', '여행', '요리'
    ]
}

obj.pets = ['야옹이', '멍멍이', '멧돼지'];
console.log(obj.pets[2]);
obj.pets[2] = '붕어';
console.log(obj.pets[2]);

obj.addFriend = function (friend) {
    this.friends.push(friend);
}
obj.addFriend({name: '박현수', phone: '010-3333'})

console.log('이름: ', obj.sname);
console.log('친구는 ', obj.friends.length, '명입니다.');
console.log('1번 친구 이름: ', obj.friends[0].name);
console.log('2번 친구 전화번호: ', obj.friends[1].phone);
console.log('3번 친구 이름: ', obj.friends[2].name, '3번 친구 전화번호: ', obj.friends[2].phone);
obj.hobbies.forEach(hobby => console.log(hobby));