const friend = {
    name: "Hong",
    phone: "010-1111-1111",
    address: "대구 중구 100",
    showInfo: function () {
        return `이름은 ${this.name}이고 연락처는 ${this.phone}입니다.`;
    }
}

function friendInfo(friend) {
    return `이름: ${friend.name}, 연락처: ${friend.phone}, 주소: ${friend.address}`;
}

export { friend, friendInfo };