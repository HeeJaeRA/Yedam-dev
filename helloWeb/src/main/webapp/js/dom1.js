const fruits = ['수박', '사과', '복숭아', '포도'];

const ul = document.createElement('ul');

ul.innerHTML = '과일';

fruits.forEach(fruit => {
    const li = document.createElement('li');
    li.innerHTML = fruit;
    ul.appendChild(li);
})

// for (let i = 0; i < fruits.length; i++) {
//     const li = document.createElement('li');
//     li.innerHTML = fruits[i];
//     ul.appendChild(li);
// }

document.getElementById('show').appendChild(ul);

