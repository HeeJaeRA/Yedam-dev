let today = new Date();

today.setFullYear(2022);
today.setMonth(0);
today.setDate(1);
today.setHours(10);

console.log(today.toString());

function dateFormat(today) {
    let mon = (today.getMonth() + 1).toString();
    console.log(mon);

    return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
}

console.log(dateFormat(today));