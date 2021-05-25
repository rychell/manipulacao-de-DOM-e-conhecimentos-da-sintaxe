// DOM Tarefa 1
function showSelectedCategory(catID) {
    if(catID){
        document.querySelectorAll('.category').forEach(cat => {
            cat.style.display = 'none';
        });
        document.querySelector(`.category[data-id="${catID}"]`).style.display = 'block';
    }else{
        document.querySelectorAll('.category').forEach(cat => {
            cat.style.display = 'block';
        });
    }
}

document.querySelector('select#category').addEventListener('change', () => {
    showSelectedCategory(document.querySelector('select#category').value);
});

// DOM Tarefa 2

function filterCarByPrice(price){
    if(!price){
        alert('Você precisa informar um valor válido para filtragem.');
    }
    const carList = document.querySelectorAll('.category ul li');

    carList.forEach(car => {
        car.style.display = 'flex';
    });

    carList.forEach(car => {
        const searchPrice = parseFloat(price);
        let carPrice = car.querySelector('.price').innerHTML;
        carPrice = carPrice.replace('R$&nbsp;', '').replace('.', '').replace(',', '.');
        carPrice = parseFloat(carPrice);
        if(carPrice >= searchPrice){
            car.style.display = 'flex';
        }else{
            car.style.display = 'none';
        }
    });
}

document.querySelector('.search button').addEventListener('click', () => {
    let inputValue = document.querySelector('.search input').value;
    filterCarByPrice(inputValue);
});

