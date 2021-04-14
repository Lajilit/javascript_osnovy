// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

console.log('___Task_1___')

let i = 2;
nextPrime:
    while (i < 100) {
        if (i == 2) {
            console.log(i++);
        } else {
            let isSimple = true;
            let divisor = 2;
            while (divisor < i) {
                if (i % divisor == 0) {
                    isSimple = false;
                    i++;
                    continue nextPrime;
                }
                divisor += 1;
            }
            if (isSimple == true) {
                console.log(i++);
            }
        }
    }




// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. 
// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.

console.log('___Task_2___')

let order = [{
        name: "бусы",
        price: 1000,
        amount: 1
    },
    {
        name: "кольцо",
        price: 500,
        amount: 1
    },
    {
        name: "серьги",
        price: 1000,
        amount: 2
    }
];
let orderPrice = 0;
for (let product of order) {
    orderPrice += product.price * product.amount;
    console.log("Наименование товара: " + product.name + ". Стоимость: " + product.price * product.amount);
}

console.log("Общая сумма заказа: " + orderPrice);

/* 3. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины. */

console.log('___Task_3___')

function countBasketPrice(array) {
    let resultPrice = 0;
    for (let product of array) {
        resultPrice += product.price * product.amount;
    }
    return resultPrice;
}


console.log("Общая сумма заказа: " + countBasketPrice(order));

/* 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
for(…){// здесь пусто}
 */

console.log('___Task_4___')

for (let i = 0; i < 10; console.log(i++)) {}

/* 5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx */

console.log('___Task_5___')

let row = 'x';
for (let i = 0; i < 20; i++) {
    console.log(row);
    row += 'x';
}