import { friendInfo } from './friend.js';

const friend = {
    name: "Hwang",
    phone: "010-2222-2222",
    address: "대구 중구 200",
    showInfo: function() {
        return `${this.name}`;
    }
}

console.log(friend.showInfo());

console.log(friendInfo(friend));