/* Задание 1.
Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 
999, надо получить на выходе объект, в котором в соответствующих свойствах 
описаны единицы, десятки и сотни. Например, для числа 245 надо получить 
следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число 
превышает 999, необходимо выдать соответствующее сообщение с помощью console.log
 и вернуть пустой объект.
*/

console.log('___Task_1___')

function numToObj(num) {

    if (isNaN(num)) {
        console.log('Необходимо ввести число')
        return {}
    } else if (num > 999) {
        console.log('Число слишком большое')
        return {}
    } else if (num < 0) {
        console.log('Число слишком маленькое')
        return {}
    }
    let resultObj = {
        'единицы': num % 10,
        'десятки': (Math.floor(num / 10)) % 10,
        'сотни': Math.floor(num / 100)
    }
    return resultObj
}

function testNumToObj() {
    console.log(numToObj('число'))
    console.log(numToObj(-5))
    console.log(numToObj(0))
    console.log(numToObj(5))
    console.log(numToObj(12))
    console.log(numToObj(123))
    console.log(numToObj(1230))
}

testNumToObj()

/* Задание 2.
Продолжить работу с интернет-магазином:
В прошлом домашнем задании вы реализовали корзину на базе массивов. 
Какими объектами можно заменить их элементы?
Реализуйте такие объекты.
Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/
console.log('___Task_2___')

function Product(id, name, category, price) {
    this.id = id
    this.name = name
    this.category = category
    this.price = price
}
let product1 = new Product(195234, 'Бусы из турмалина', 'Бусы', 2800)
let product2 = new Product(100235, 'Браслет из малахита', 'Браслеты', 800)
let product3 = new Product(123652, 'Серебряное кольцо', 'Кольца', 3000)

let newOrder1 = []
let newOrder2 = []

function addToOrder(item, array) {
    array.push(item)
}

function delFromOrder(item, array) {
    const index = array.indexOf(item)
    console.log(index)
    if (index > -1) {
        array.splice(index, 1)

    }
}

function countOrderPrice(array) {
    let resultPrice = 0;
    for (let product of array) {
        resultPrice += product.price
    }
    return resultPrice;
}
addToOrder(product1, newOrder1)
addToOrder(product2, newOrder1)
addToOrder(product3, newOrder1)

console.log(newOrder1)

addToOrder(product1, newOrder2)
addToOrder(product2, newOrder2)
addToOrder(product1, newOrder2)

console.log(newOrder2)

delFromOrder(product1, newOrder2)
delFromOrder(product2, newOrder2)

console.log(newOrder2)

console.log(countOrderPrice(newOrder1))
console.log(countOrderPrice(newOrder2))

/* В этом задании можно было бы сделать подсчёт количества одинаковых товаров 
 в заказе и подсчёт их общей стоимости, однако у меня не получилось придумать,
 как это организовать. На мой взгляд, эту часть работы должна выполнять база
 данных, а не js. По крайней мере, на курсе по базам данных мы именно так и
 делали.
 Также это относится и к 3 заданию, которое под звездочкой - да, у товаро в 
 интернет-магазине должны быть какие-то дополнительные характеристики,
 которые не учитываются в подсчетестоимости корзины, однако имеют значение в 
 других разделах интернет-магазина, но, на мой взгляд, они также должны 
 быть реализованы через базу данных. Хотя на самом деле, я пока слабо себе 
 представляю, как работает взаимосвязь баз данных и фронтенд части сайта, 
 и что за что отвечает. Надеюсь, потом пойму))
 */

/*UPD. 19.04 - я всё-таки решила реализовать немного другой подход, близкий 
к тому, что мы проходили на курсе по базам данных. Получилось то, что ниже:*/

console.log('___Task_2__updated___')

// Создание нового товара

function Product(id, name, category, price) {
    this.id = id
    this.name = name
    this.category = category
    this.price = price
}

// База данных товаров
let products = []

// добавление товара в базу данных

products.push(new Product(195234, 'Бусы из турмалина', 'Бусы', 2800))
products.push(new Product(100235, 'Браслет из малахита', 'Браслеты', 800))
products.push(new Product(123652, 'Серебряное кольцо', 'Кольца', 3000))

console.log(products)

// создание нового заказа

let newOrder3 = []

// добавление товаров в заказ

function isInOrder(id, order) {
    return order.findIndex(product => product.id == id)
}

function addToOrder2(order, database, prod_id) {
    const productIndex = database.findIndex(function(product) {
        return product.id == prod_id
    })
    const index = (isInOrder(prod_id, order))
    if (index != -1) {
        order[index].amount += 1

    } else {
        order.push({
            id: database[productIndex].id,
            name: database[productIndex].name,
            price: database[productIndex].price,
            amount: 1
        })
    }
}

addToOrder2(newOrder3, products, 195234)
addToOrder2(newOrder3, products, 195234)
addToOrder2(newOrder3, products, 100235)

console.log(newOrder3)

// удаление товара из заказа

function delFromOrder2(order, id) {
    const index = (isInOrder(id, order))

    console.log(index)
    if (index > -1 && order[index].amount > 1) {
        order[index].amount -= 1
    } else {
        order.splice(index, 1)
    }
}
delFromOrder2(newOrder3, 195234)
delFromOrder2(newOrder3, 100235)

console.log(newOrder3)

// подсчёт стоимости заказа

function countOrderPrice2(array) {
    let resultPrice = 0;
    for (let product of array) {
        resultPrice += product.price * product.amount
    }
    return resultPrice;
}
console.log(countOrderPrice2(newOrder3))