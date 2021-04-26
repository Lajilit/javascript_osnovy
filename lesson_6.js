/* Задание 1.
Продолжаем реализовывать модуль корзины:
Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без 
перезагрузки страницы. Привязать к событию покупки товара пересчет корзины и 
обновление ее внешнего вида.
Задание 2*.
У товара может быть несколько изображений. Нужно:
Реализовать функционал показа полноразмерных картинок товара в модальном окне;
Реализовать функционал перехода между картинками внутри модального окна.
*/

function Product(id, name, images, price) {
    this.id = id
    this.name = name
    this.imagesList = images
    this.price = price
    this._isInOrder = function(someArray = order) {
        return someArray.findIndex(el => this.id === el.id)
    }
}

function OrderProduct(id, name, price) {
    this.id = id
    this.name = name
    this.price = price
    this.amount = 1
}

function addToOrder(product, someOrder = order) {
    const index = product._isInOrder(someOrder)
    if (index != -1) {
        order[index].amount += 1
    } else {
        order.push(new OrderProduct(product.id, product.name, product.price))
    }
}

function delFromOrder(product, someOrder = order) {
    const index = product._isInOrder(someOrder)
    if (index === -1) {
        console.log('В заказе нет такого товара')
    } else if (someOrder[index].amount > 1) {
        order[index].amount -= 1
    } else {
        order.splice(index, 1)
    }
}
// База данных товаров
let catalog = []

// Корзина заказов
let order = []

// добавление товара в базу данных
catalog.push(new Product(1, 'Бусы из турмалина', ['image_01', 'image_02'], 2800))
catalog.push(new Product(2, 'Браслет из малахита', ['image_03', 'image_04'], 800))
catalog.push(new Product(3, 'Серебряное кольцо', ['image_05', 'image_06'], 3000))

function drawCatalog() {
    const $catalog = document.querySelector('#catalog');
    $catalog.textContent = '';
    $catalog.insertAdjacentHTML('beforeend', `<h1 class="heading">  Каталог товаров </h1><div class="products"></div>`)
    catalog.forEach((product) => drawProduct(product))
}
// вывод списка товаров

function drawProduct(product) {
    const $products = document.querySelector('.products');
    console.log($products)
    const html = `<div id="product-${product.id}"  class="product">
        <img class="image" data-id="${product.id}" src="img/${product.imagesList[0]}.jpg" alt="фото">    
        <p class="product-name">${product.name}</p>
        <p class="product-price">${product.price}</p>
        <button id="cat-button" data-id="${product.id}" class="product-btn">Купить</button></div>`
    $products.insertAdjacentHTML('beforeend', html);
}

drawCatalog()

// вывод заказа
function drawOrder() {
    const $newOrder = document.querySelector('#order');
    $newOrder.textContent = '';
    $newOrder.insertAdjacentHTML('beforeend', '<h1 class="heading">  Заказ </h1>')
    const html = `<div class="order-heading">
        <p class="name">Наименование товара</p>
        <p class="price">Цена</p>
        <p class="amount">Количество</p>
        <p class="cost">Стоимость</p>
        <p class="del-all"></p>
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
    const html = `<div id="order-product-${product.id}" class="order-product">
        <p class="name">${product.name}</p>
        <p class="price">${product.price}</p>

        <div class="amount">
        <button id="del-from-order" data-id="${product.id}" class="order-btn">-</button>
        <p>${product.amount}</p>
        <button id="add-to-order" data-id="${product.id}" class="order-btn">+</button>
        </div>
        <p class="cost">${product.amount * product.price}</p>
        <button id="del-all" data-id="${product.id}" class="del-all">Х</button>

    </div>`
    $newOrder.insertAdjacentHTML('beforeend', html)
}

drawOrder()

// добавление товаров в заказ

const $catalogAddToOrder = document.querySelector('#catalog')

$catalogAddToOrder.addEventListener('click', function(e) {
        product = catalog[catalog.findIndex(el => el.id == e.target.dataset.id)]
        if (e.target.tagName === 'BUTTON') {
            addToOrder(product)
        }
        drawOrder()
    })
    // добавление и удаление товаров из заказа

const $ChangeOrder = document.querySelector('#order')

$ChangeOrder.addEventListener('click', function(e) {
    product = catalog[catalog.findIndex(el => el.id == e.target.dataset.id)]
    if (e.target.tagName === 'BUTTON' && e.target.id == 'add-to-order') {
        addToOrder(product)
    } else if (e.target.tagName === 'BUTTON' && e.target.id == 'del-from-order') {
        delFromOrder(product)
    } else if (e.target.tagName === 'BUTTON' && e.target.id == 'del-all') {
        idx = order.findIndex(el => el.id == product.id)
        order.splice(idx, 1)
    }
    drawOrder()
})

// Модальное окно с изображением

function modalImg(product, idx = 0) {
    const htmlModal = `<div class="img-modal" id="img-modal">
    <div class="img-modal__window">
        <p class="img-modal__close">X</p>
        <div class="left"><img class="img-modal__left" src=img/left.png alt="предыдущее фото"></img>
        </div>
        <img class="modal-img" src=img/${product.imagesList[idx]}.jpg alt="фото товара" />
        <div class="right"><img class="img-modal__right" src=img/right.png alt="следующее фото"></img>
        </div>
    </div>
    </div>`
    $body.insertAdjacentHTML('beforeend', htmlModal)

}

const $bigPhoto = document.querySelector('#catalog')
const $body = document.querySelector('body')
let idxPhoto = 0


$bigPhoto.addEventListener('click', function(e) {
    product = catalog[catalog.findIndex(el => el.id == e.target.dataset.id)]
    if (e.target.tagName === 'IMG') {
        modalImg(product)
    }
    const $closeClick = document.querySelector('.img-modal__close')
    const $windowImg = document.querySelector('#img-modal')

    $closeClick.addEventListener('click', function(e) {
        $windowImg.remove()
    })

})

/* На текущий момент можно открыть и закрыть модальное окно. Листать между несколькими фотографиями пока не получается, но я доделаю*/