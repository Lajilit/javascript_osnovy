/* Задание 1.
Создать функцию, генерирующую шахматную доску. Можно использовать любые 
html-теги. Доска должна быть верно разлинована на черные и белые ячейки. 
Строки должны нумероваться числами от 1 до 8, столбцы — латинскими буквами 
A, B, C, D, E, F, G, H.
*/

function addChessBoard() {

    // добавление структуры доски

    document.body.insertAdjacentHTML("afterbegin",
        `<div class="chessboard">
        <div class="symbols">
            <div>A</div>
            <div>B</div>
            <div>C</div>
            <div>D</div>
            <div>E</div>
            <div>F</div>
            <div>G</div>
            <div>H</div>
        </div>
        <div class="field-numbers">
            <div class="numbers">
                <div>8</div>
                <div>7</div>
                <div>6</div>
                <div>5</div>
                <div>4</div>
                <div>3</div>
                <div>2</div>
                <div>1</div>
            </div>
            <div class="field">
                <div class="white"></div>
                <div class="black"></div>
                <div class="white"></div>
                <div class="black"></div>
                <div class="white"></div>
                <div class="black"></div>
                <div class="white"></div>
                <div class="black"></div>
                <div class="black"></div>
                <div class="white"></div>
                <div class="black"></div>
                <div class="white"></div>
                <div class="black"></div>
                <div class="white"></div>
                <div class="black"></div>
                <div class="white"></div>
                <div class="white"></div>
                <div class="black"></div>
                <div class="white"></div>
                <div class="black"></div>
                <div class="white"></div>
                <div class="black"></div>
                <div class="white"></div>
                <div class="black"></div>
                <div class="black"></div>
                <div class="white"></div>
                <div class="black"></div>
                <div class="white"></div>
                <div class="black"></div>
                <div class="white"></div>
                <div class="black"></div>
                <div class="white"></div>
                <div class="white"></div>
                <div class="black"></div>
                <div class="white"></div>
                <div class="black"></div>
                <div class="white"></div>
                <div class="black"></div>
                <div class="white"></div>
                <div class="black"></div>
                <div class="black"></div>
                <div class="white"></div>
                <div class="black"></div>
                <div class="white"></div>
                <div class="black"></div>
                <div class="white"></div>
                <div class="black"></div>
                <div class="white"></div>
                <div class="white"></div>
                <div class="black"></div>
                <div class="white"></div>
                <div class="black"></div>
                <div class="white"></div>
                <div class="black"></div>
                <div class="white"></div>
                <div class="black"></div>
                <div class="black"></div>
                <div class="white"></div>
                <div class="black"></div>
                <div class="white"></div>
                <div class="black"></div>
                <div class="white"></div>
                <div class="black"></div>
                <div class="white"></div>
            </div>
            <div class="numbers">
                <div>8</div>
                <div>7</div>
                <div>6</div>
                <div>5</div>
                <div>4</div>
                <div>3</div>
                <div>2</div>
                <div>1</div>
            </div>
        </div>
        <div class="symbols">
            <div>A</div>
            <div>B</div>
            <div>C</div>
            <div>D</div>
            <div>E</div>
            <div>F</div>
            <div>G</div>
            <div>H</div>
        </div>
    </div>`)

    // добавление стилей

    const $chessboard = document.body.querySelector('.chessboard')
    $chessboard.style.cssText = `background: #000;
    width: 900px;
    height: 900px;
    margin: 0 auto;`
    const $symbols = $chessboard.querySelectorAll('.symbols')
    $symbols.forEach(el => el.style.cssText = `width: 800px;
    height: 50px;
    align-items: center;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    text-align: center;
    color: #fff;
    font-size: 30px;`)
    const $fieldNumbers = $chessboard.querySelector('.field-numbers')
    $fieldNumbers.style.cssText = `width: 900px;
    height: 800px;
    display: flex;`
    const $numbers = $fieldNumbers.querySelectorAll('.numbers')
    $numbers.forEach(el => el.style.cssText = `width: 50px;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    font-size: 30px;`)
    const $field = $chessboard.querySelector('.field')
    $field.style.cssText = `width: 800px;
    height: 800px;
    display: flex;
    flex-wrap: wrap;`
    const $white = $field.querySelectorAll('.white')
    $white.forEach(el => el.style.cssText = `background: #fff;
    height: 100px;
    width: 100px;`)
    const $black = $field.querySelectorAll('.black')
    $black.forEach(el => el.style.cssText = `background: #000;
    height: 100px;
    width: 100px;`)
}

addChessBoard()

/* Я догадываюсь, что это задание можно написать через циклы или ветвления, 
добавлять элементы по-отдельности, но пока у меня получилось только обычной 
вставкой HTML-кода. Если будет время, я обязательно перепишу код.*/