let today = new Date();

today.setFullYear(2023);
today.setMonth(0);
today.setDate(1);
today.setHours(1);

// console.log(today.toString());

function dateFormat(today) {

    return (today.getFullYear() + "-" + ("0" + (today.getMonth() + 1)).slice(-2) + "-" + ("0" + today.getDate()).slice(-2) + " " + ("0" + today.getHours()).slice(-2) + ":" + ("0" + today.getMinutes()).slice(-2) + ":" + ("0" + today.getSeconds()).slice(-2));

}

console.log(dateFormat(today));