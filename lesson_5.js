/* Задание 2.
 Сделать генерацию корзины динамической: верстка корзины не должна находиться в 
 HTML-структуре. Там должен быть только div, в который будет вставляться 
 корзина, сгенерированная на базе JS:
Пустая корзина должна выводить строку «Корзина пуста»;
Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
*/

/*Задание 3.
Сделать так, чтобы товары в каталоге выводились при помощи JS:
Создать массив товаров (сущность Product);
При загрузке страницы на базе данного массива генерировать вывод из него. 
HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид каталога генерируется JS.
*/

//создание одного товара
function Product(id, name, category, price) {
    this.id = id
    this.name = name
    this.category = category
    this.price = price
}
// База данных товаров
let catalog = []

// добавление товара в базу данных

catalog.push(new Product(195234, 'Бусы из турмалина', 'Бусы', 2800))
catalog.push(new Product(100235, 'Браслет из малахита', 'Браслеты', 800))
catalog.push(new Product(123652, 'Серебряное кольцо', 'Кольца', 3000))

console.log(catalog)

// создание нового заказа

let newOrder = []

// добавление товаров в заказ

function isInOrder(id, array) {
    return array.findIndex(product => product.id == id)
}

function addToOrder2(order, catalog, prod_id) {
    const productIndex = (isInOrder(prod_id, catalog))
    const index = (isInOrder(prod_id, order))
    if (index != -1) {
        order[index].amount += 1

    } else {
        order.push({
            id: catalog[productIndex].id,
            name: catalog[productIndex].name,
            price: catalog[productIndex].price,
            amount: 1
        })
    }
}

addToOrder2(newOrder, catalog, 195234)
addToOrder2(newOrder, catalog, 195234)
addToOrder2(newOrder, catalog, 100235)

console.log(newOrder)

// удаление товара из заказа

function delFromOrder2(order, id) {
    const index = (isInOrder(id, order))
    if (index === -1) {
        console.log('В заказе нет такого товара')
    } else if (order[index].amount > 1) {
        order[index].amount -= 1
    } else {
        order.splice(index, 1)
    }

}


// подсчёт стоимости товара

function orderProductCost(product) {
    let resultProductCost = 0;
    resultProductCost = product.amount * product.price
    return resultProductCost;
}


// подсчёт стоимости заказа

function countOrderPrice2(array) {
    let resultOrderCost = 0;
    for (let product of array) {
        resultOrderCost += product.price * product.amount
    }
    return resultOrderCost;
}

// подсчёт количества товаров

function amountOrderProducts(array) {
    let resultAmount = 0
    for (let product of array) {
        resultAmount += product.amount
    }
    return resultAmount
}


// вывод списка товаров

function drawCatalog() {
    const $catalog = document.querySelector('#catalog');
    $catalog.textContent = '';
    $catalog.insertAdjacentHTML('beforeend', '<h1 class="heading">  Каталог товаров </h1>')
    const html = `<div class="product product-heading">
        <p class="product-category">Категория</p>
        <p class="product-name">Наименование товара</p>
        <p class="product-price">Цена</p>
        <p class="product-btn">Добавить в заказ</p>
    </div>`
    $catalog.insertAdjacentHTML('beforeend', html);
    catalog.forEach((product) => drawProduct(product))
}

function drawProduct(product) {
    const $catalog = document.querySelector('#catalog');
    const html = `<div id="product-${product.id}" class="product">
                <p class="product-category">${product.category}</p>
        <p class="product-name">${product.name}</p>
        <p class="product-price">${product.price}</p>
        <button data-id="${product.id}" class="product-btn">+</button>
    </div>`
    $catalog.insertAdjacentHTML('beforeend', html);

}

drawCatalog()

// вывод заказа

function drawOrder() {
    const $newOrder = document.querySelector('#order');
    $newOrder.textContent = '';
    $newOrder.insertAdjacentHTML('beforeend', '<h1 class="heading">  Заказ </h1>')
    const html = `<div class="product product-heading">
        <p class="order-product-name">Наименование товара</p>
        <p class="order-product-price">Цена</p>
        <p class="order-product-amount">Количество</p>
        <p class="order-product-cost">Стоимость</p>
    </div>`
    $newOrder.insertAdjacentHTML('beforeend', html);
    newOrder.forEach((product) => drawOrderProduct(product))
    const htmlEnd = `<div class="order-end">В корзине: ${amountOrderProducts(newOrder)} товаров на сумму ${countOrderPrice2(newOrder)} рублей</div>`
    $newOrder.insertAdjacentHTML('beforeend', htmlEnd);
}

function drawOrderProduct(product) {
    const $newOrder = document.querySelector('#order');
    const html = `<div id="order-product-${product.id}" class="product">
        <p class="order-product-name">${product.name}</p>
        <p class="order-product-price">${product.price}</p>
        <p class="order-product-amount">${product.amount}</p>
        <p class="order-product-cost">${orderProductCost(product)}</p>
    </div>`
    $newOrder.insertAdjacentHTML('beforeend', html);

}

drawOrder()