const fruits = [
    {name: '사과', price: 1000, farmer: '홍길동'},
    {name: '복숭아', price: 1500, farmer: '김민서'},
    {name: '포도', price: 2000, farmer: '최말숙'},
    {name: '수박', price: 3000, farmer: '김민중'}
]

const table = document.createElement('table');
table.setAttribute('border', "1");

const thead = document.createElement('thead');
table.appendChild(thead);
thead.setAttribute('bgcolor', '#DCDCDC');
const htr = document.createElement('tr');
thead.appendChild(htr);
const th1 = document.createElement('th');
th1.innerHTML = '과일이름';
htr.appendChild(th1);
const th2 = document.createElement('th');
th2.innerHTML = '가격';
th1.after(th2);
const th3 = document.createElement('th');
th3.innerHTML = '생산자';
th2.after(th3);

const tbody = document.createElement('tbody');
thead.after(tbody);
fruits.forEach(fruit => {
    const tr = document.createElement('tr');
    tbody.appendChild(tr);

    for (let prop in fruit) {
        const td = document.createElement('td');
        td.innerHTML = fruit[prop];
        tr.appendChild(td);
    }

    // const td1 = document.createElement('td');
    // td1.innerHTML = fruit.name;
    // tr.appendChild(td1);

    // const td2 = document.createElement('td');
    // td2.innerHTML = fruit.price;
    // td1.after(td2);

    // const td3 = document.createElement('td');
    // td3.innerHTML = fruit.farmer;
    // td2.after(td3);
})

document.getElementById('show').appendChild(table);