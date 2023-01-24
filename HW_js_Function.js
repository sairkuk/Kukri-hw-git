
// Домашка:

/* 1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних) */

const friends = 3;
let hamburger = 4;
let fries = 1;

function McDonald(hamburger,fries ) {
    if( hamburger >=friends + 1 && fries >0 ){
        console.log('Ми поїли');
        } else {
            console.log('Ми йдемо в інше кафе');
        }
    
} 
McDonald(hamburger,fries)


// 2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно. Результат виводити в консоль.


const priceCheck = 101;

function checkValueBetweenData(priceCheck) {
    if (priceCheck >= 1000 && priceCheck <= 1900 ){
        console.log('значення ціни товару між 1000 та 1900');
    } else {
        console.log('значення ціни товару по за межами 1000 та 1900');
    };
    
}
checkValueBetweenData(priceCheck)


// 3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно. 
// Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора. Результат виводити в консоль.



const priceCheck1 = 1;

function checkValueNotBetweenData(params) {
    if (!(priceCheck1 >= 1000 && priceCheck1 <= 1900)){
        console.log('значення ціни товару не знаходиться між 1000 та 1900');
    } else {
        console.log('значення ціни товару між 1000 та 1900');
    };
}
checkValueNotBetweenData(priceCheck1)





const priceCheck2 = 1000

function checkValueNotBetweenData2(priceCheck2) {
    if (priceCheck2 <= 1000 || priceCheck2 >= 1900 ){
        console.log('значення ціни товару не знаходиться між 1000 та 1900');
    } else {
        console.log('значення ціни товару між 1000 та 1900');
    }
    
}
checkValueNotBetweenData2(priceCheck2)


// 4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if  Результат виводити в консоль.


const month = 3;

function CheckMonth(month) {
    if (month === 1){
        console.log('Now month is January');
    } else if ((month === 2)){
        console.log('Now month is February');
    }else if (month === 3){
        console.log('Now month is March');
    }else if (month === 4){
        console.log('Now month is April');
    }else if (month === 5){
        console.log('Now month is May');
    }else if (month === 6){
        console.log('Now month is June');
    }else if (month === 7){
        console.log('Now month is July');
    }else if (month === 8){
        console.log('Now month is August');
    }else if (month === 9){
        console.log('Now month is September');
    }else if (month === 10){
        console.log('Now month is October');
    }else if (month === 11){
        console.log('Now month is November');
    }else if (month === 12){
        console.log('Now month is December');
    } else {
        console.log('You type the wrong month')
    };
}
CheckMonth(month)


const season = 3;

function checkSeason(season) {
    
    if(season === 1){
        console.log('Now is season Winter');
    } else if(season === 2){
        console.log('Now is season Spring');
    } else if(season ===3){
        console.log('Now is season Summer');
    }else if(season === 4){
        console.log('Now is season Autum');
    } else{
        console.log('You type the wrong season');
    }
}
checkSeason(season)




 /*
 5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє між цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль. ;
    */

const a = 6;
const b = 19;
const c = 11;
let avg

function averagBetweenNumbers( a, b, c,) {

    if (a > b) {
    if (a > c) {
      if (b > c)
        avg = b
      else
        avg = c
    }
    else 
      avg = a
      
  }
  else {
    if (b > c) {
      if (a > c)
        avg = a
        
      else
        avg = c
        
    }
    else
      avg = b
      console.log('Cреднє за значення з трьох заданих чисел'+  ' = '  + avg )
  }
}
averagBetweenNumbers(a,b,c)


// 6.  Задано номер дня тижня. За заданим номером вивести назву дня тижня використовуючи switch. Результат виводити в консоль.

const setDay = '6';

function dayOnWeek(setDay) {
    switch (setDay) {
        case '1':
            console.log('Понеділок');
            break;
        case '2':
            console.log('Вівторок');
            break;
        case '3':
            console.log('Середа');
            break;
        case '4':
            console.log('Четверг');
            break;
        case '5':
            console.log('Пятниця');
            break;
        case '6':
            console.log('Субота');
            break;
        case '7':
            console.log('Неділя');
            break;
    
        default:
            console.log('Не вірно введені дані');
            break;
    }
}
dayOnWeek(setDay)


/* 7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль. */

    let number1 = 1;
    let number2 = 4;
    let symboMath = '+'

function mathematicalOperation(number1, number2, symboMath ) {

    switch (symboMath) {
        case '+':
            console.log(number1 + number2);
            break;
        case '-':
            console.log(number1 - number2);
            break;
        case '*':
            console.log(number1 * number2);
            break;
        case '/':
            console.log(number1 / number2);
            break;
        default:
            console.log('Не вірно введений математичний символ операції');
            break;
    }
}
mathematicalOperation(number1, number2, symboMath)
   

   
 // 8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

 const anyWord = 'Прислівʼя';

 function processAnyWord(anyWord) {
    console.log(anyWord.replace(/[аоуиіе]/g, ' ') );
 }
 processAnyWord(anyWord)


 /*9.  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
 так щоб в консоль виводився результат обчислень з правильним закнченням.
 Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,02 кілометра; 3 кілометри і т.д.

 Відмінювання для "метр" (аналогічні закінчення будуть і для слова "кілометр")

 Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)
*/
 

let metr = 700; 
let resultKm 

function processMetrToKillometr(metr) {

    if( resultKm = metr * 0.001){
        if(resultKm === 1){
            console.log(resultKm +' кілометр');
        } else if(resultKm > 1){
            console.log(resultKm +' кілометри' );
        } else  {
            console.log(resultKm +' кілометра');
        }
    
    } else{
        console.log('Помилка, невірно введені дані');
    }
}
processMetrToKillometr(metr)


// Варіант 2

const metr1 = 1045;
const kilometr = metr1 * 0.001
const stringKilometer = String(kilometr.toFixed(2))
const lastSymbol = stringKilometer[stringKilometer.length -1]

function processMetrToKillometr1(metr1) {
    if (['0','5','6','7','8','9'].includes(lastSymbol)){
        console.log( metr1 + ' метрів це ' + stringKilometer + ' кілометрів' );
   } else if (['2','3','4'].includes(lastSymbol)){
       console.log( metr1 + ' метрів це ' + stringKilometer + ' кілометра' );
   } else {
       console.log( metr1 + ' метрів це ' + stringKilometer + ' кілометр' );
   }
}
processMetrToKillometr1(metr1)



