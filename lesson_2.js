// Задание 1. Дан код:

var a = 1,
    b = 1,
    c, d;
c = ++a;
alert(c); // 2
d = b++;
alert(d); // 1
c = (2 + ++a);
alert(c); // 5
d = (2 + b++);
alert(d); // 4
alert(a); // 3
alert(b); // 3

/* Почему код даёт именно такие результаты?
При префиксной  (++x) форме записи оператора инкрементирования происходит сначала инкрементирование, 
а затем возвращение значения. При постфиксной  (x++) форме записи наоборот*/

// Задание 2. Чему будет равен x в примере ниже ?
var a = 2;
var x = 1 + (a *= 2); // 5
alert(x);

/* Задание 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму;
ноль можно считать положительным числом.
*/

var a = 2;
var b = -8;

if (a >= 0 && b >= 0) {
    console.log(a - b);
} else if (a < 0 && b < 0) {
    console.log(a * b);
} else {
    console.log(a + b);
}

// Задание 4. Присвоить переменной а значение в промежутке[0. .15].С помощью оператора switch организовать вывод чисел от a до 15.

var a = 8;

switch (a) {
    case 0:
        console.log(a++);
    case 1:
        console.log(a++);
    case 2:
        console.log(a++);
    case 3:
        console.log(a++);
    case 4:
        console.log(a++);
    case 5:
        console.log(a++);
    case 6:
        console.log(a++);
    case 7:
        console.log(a++);
    case 8:
        console.log(a++);
    case 9:
        console.log(a++);
    case 10:
        console.log(a++);
    case 11:
        console.log(a++);
    case 12:
        console.log(a++);
    case 13:
        console.log(a++);
    case 14:
        console.log(a++);
    case 15:
        console.log(a++);
        break;
    default:
        console.log('Неверное значение');
        break;
}


//Задание 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

function add_numbers(a, b) {
    return a + b;
}

function sub_numbers(a, b) {
    return a - b;
}

function mul_numbers(a, b) {
    return a * b;
}

function div_numbers(a, b) {
    if (b) {
        return a / b;
    } else {
        return ("division by zero");
    }
}

var x = 5;
var y = 0;

console.log(add_numbers(x, y));
console.log(sub_numbers(x, y));
console.log(mul_numbers(x, y));
console.log(div_numbers(x, y));




/*6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2– значения аргументов, operation– строка с названием операции.В зависимости от переданного значения операции выполнить одну из арифметических операций(использовать функции из пункта 3) и вернуть полученное значение(использовать switch).*/

function mathOperation(arg1, arg2, operation) {
    let result;
    switch (operation) {
        case "+":
            result = add_numbers(arg1, arg2);
            break;
        case "-":
            result = sub_numbers(arg1, arg2);
            break;
        case "*":
            result = mul_numbers(arg1, arg2);
            break;
        case "/":
            result = div_numbers(arg1, arg2);
            break;
        default:
            result = "Wrong operator";
    }
    return result;
}
var a = 8;
var b = 50;

console.log(mathOperation(a, b, "+"));
console.log(mathOperation(a, b, "-"));
console.log(mathOperation(a, b, "*"));
console.log(mathOperation(a, b, "/"));
console.log(mathOperation(a, b, "."));


// Задание 7.  Сравнить null и 0. Попробуйте объяснить результат.

alert(null > 0); // false
alert(null == 0); // false
alert(null >= 0); // true

// Значения null и undefined равны друг другу, но не чему бы то ни было еще, поэтому при сравнении null == 0 результат будет false. Однако при сравнении null > 0 и null >= 0  null принимает значение 0, поэтому сравнение null >= 0 даёт результат true, а null > 0 - false

// Задание 8. * С помощью рекурсии организовать функцию возведения числа в степень.Формат: function power(val, pow), где val– заданное число, pow– степень.

function power(val, pow) {
    if (pow == 0) {
        return 1;
    } else {
        return val * power(val, pow - 1);
    }

}
console.log(power(2, 5));