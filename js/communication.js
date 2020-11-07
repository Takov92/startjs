'use strict';


// 

// выводит окно с данными и предложением "ок" "отмена"
// дынные выводятся в переменную 
// const result=confirm ('Are you here'); 
// console.log(result);


// // Выводит пользователю указанные данные с возможностью 
// // вписать ответ.Сам ответ помещается в переменную
// // В последние кавычки можно вписать предполагаемый ответ 
// const answer=prompt('How are you',''); 
// console.log(answer);

// const answer=prompt('How are you',''); 
// console.log(answer + 5); Выведет ответ склеянный с пятеркой 

// const answer=+prompt('How are you',''); 
// console.log(answer + 5);Выведет ответ-результат сложения
// // typeof=проверяет тип дынных

// const answer=[];

// answer[0]=prompt('как ваше имя?','');
// answer[1]=prompt('как ваша фамилия?','');
// answer[2]=prompt('Сколько вам лет?','');

// document.write(answer);

// console.log(typeof(answer)); 


// Интерполяция

// const category='toys';
// console.log('https://someurl.com/'+category);
// console.log(`https://someurl.com/${category}/5`);

// const user='illia';
// alert(`Привет, ${user}`);


// Операторы
// унарный плюс
// console.log('arr' + '-object'); выводит все одной стройкой без сложения
// console.log(4 + +'5'); ПЛЮС превратил пятерку и строки в число. В итогк выполнилось сложение

// инкримент декримент
//  let incr=10;
//  let decr=10;

//  incr++; Выведет 11 , инкремент увеличивает число на один
    //  decr--; Выведет 9, декримнт уменьшает число на один

    // Префиксаная запись-это когда стоит перед числом
    // Постфиксной называется когда стоит после числа 

    // console.log(incr++); Выводит 10 
    // console.log(decr--);выводит 10

    // // console.log(++incr); Выводит 11
    // // console.log(--decr);выводит 19
    // Только префиксная форма работает сразу 

//  знак % возвращает остаток при делении !
//  console.log(5%2); Выведет 1

// Равенство
// console.log(2*4==8); Выводит TRUE так как "==" это знак равно
//  один "="-это знак присваивания 

//  console.log(2*4=='8'); выводит TRUE, так как идет равенство по значению даже, если строка

// Строгое сравнение  '===' сравнивает по типу данных, а не по значению

// console.log(2*4==='8'); выводит FAlse так сравнивает по типу данных



// Оператор Или && работает когда , как минимум два подопытныъ являются TRUE

// Оператор И || работает когда , как минимум один подопытныъ являются FALSE

// const isChecked=true, 
//       isClose=true;

// console.log(isChecked && isClose); выводит TRUE, так как два проверяемых TRUE

// const isChecked=true, 
//       isClose=false;

// console.log(isChecked && isClose); выводит false, так как один false


// const isChecked=true, 
//       isClose=false;

// console.log(isChecked || isClose); выводит TRUE, так как  один из проверяемых TRUE


