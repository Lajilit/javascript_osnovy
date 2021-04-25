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

function Product(id, name, category, price) {
    this.id = id
    this.name = name
    this.category = category
    this.price = price
    this._isInOrder = function(someArray = order) {
        return someArray.findIndex(el => this.id === el.id)
    }
    this.addToOrder = function(someOrder = order) {
        const index = this._isInOrder(someOrder)
        if (index != -1) {
            order[index].amount += 1

        } else {
            order.push(new OrderProduct(this.id, this.name, this.price))
        }
    }
    this.delFromOrder = function(someOrder = order) {
        const index = this._isInOrder(someOrder)
        if (index === -1) {
            console.log('В заказе нет такого товара')
        } else if (someOrder[index].amount > 1) {
            order[index].amount -= 1
        } else {
            order.splice(index, 1)
        }

    }
}

function OrderProduct(id, name, price) {
    this.id = id
    this.name = name
    this.price = price
    this.amount = 1
}
// База данных товаров
let catalog = []

// Корзина заказов
let order = []

// добавление товара в базу данных
catalog.push(new Product(1, 'Бусы из турмалина', 'Бусы', 2800))
catalog.push(new Product(2, 'Браслет из малахита', 'Браслеты', 800))
catalog.push(new Product(3, 'Серебряное кольцо', 'Кольца', 3000))

// добавление товаров в заказ
catalog[catalog.findIndex(el => el.id === 1)].addToOrder()
catalog[catalog.findIndex(el => el.id === 2)].addToOrder()
catalog[catalog.findIndex(el => el.id === 2)].addToOrder()

// удаление товаров из заказа
catalog[catalog.findIndex(el => el.id === 1)].delFromOrder()
catalog[catalog.findIndex(el => el.id === 2)].delFromOrder()

// вывод списка товаров
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
    order.forEach((product) => drawOrderProduct(product))
    let htmlEnd
    if (order.length != 0) {
        let amount = 0
        let cost = 0
        for (let product of order) {
            amount += product.amount
            cost += product.price * product.amount
        }
        htmlEnd = `<div class="order-end">В корзине: ${amount} товаров на сумму ${cost} рублей</div>`
    } else {
        htmlEnd = `<div class="order-end">Корзина пуста</div>`
    }
    $newOrder.insertAdjacentHTML('beforeend', htmlEnd);
}

function drawOrderProduct(product) {
    const $newOrder = document.querySelector('#order');
    const html = `<div id="order-product-${product.id}" class="product">
        <p class="order-product-name">${product.name}</p>
        <p class="order-product-price">${product.price}</p>
        <p class="order-product-amount">${product.amount}</p>
        <p class="order-product-cost">${product.amount * product.price}</p>
    </div>`
    $newOrder.insertAdjacentHTML('beforeend', html);

}

drawOrder()