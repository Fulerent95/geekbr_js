/* 1 */
var tempCel = -1;
var tempFar = (9/5) * tempCel + 32;
alert('Температура по цельсию = '+tempCel+' Температура по Фаренгейту ='+tempFar);
/* 3 */
var name = 'Василий';
var admin = name;
alert('Имя админа: '+ name);
/* 4 */
var intOne = 1000;
var strOne = '108';
alert(intOne+strOne); // = 1000108, превращает числовое значение переменной в строковую и добавляет значение строкой переменнй
/* 5 */
/* async - выполняет при возможности загрузку js-скрипта асинхронно с загрузкой веб-страницы; defer - откладывает загрузку скрипта, до тех по
пока не будет произведенна загрузка веб-страницы */