/* ------------Задание 1-------------- */
var x = 0;
while(x <= 100) {
	console.log(x);
	x++;
}
/*-------------Задание 2---------------*/
// var x = 0;
// do {
// 	switch(x) {
// 		case x == 0: 
// 			console.log(x + '- Это ноль');
// 			break;
// 		case x % 2 != 0:
// 			console.log(x + '-нечетное число');
// 			break;
// 		case x % 2 == 0: 
// 			console.log(x + '- четное число');
// 			break;
// 		}
// 	x++;
// } while(x <= 10);
var x = 0;
do {
	if(x == 0)
		console.log(x + ' This is Zero');
	else if( x%2 != 0) 
		console.log(x + '- нечетное число');
	else if(x%2 == 0) 
		console.log(x + '- четное число');
	x++;
} while(x <= 10);
/* Почему то не рабоает способ со Switch. Не мог бы подсказать почему?
/*------------ Задание 3--------------*/
for( i = 0; i < 10; console.log(i++));

/*------------ Задание 4--------------*/
var x = 'x';
for (i = 1; i <= 20; i++) {
	console.log(x);
	x = x + 'x';
	
}
/* долго засел на этом задание, перепробовал многое, но ошибка, как я понимаю, крылась в простом: я объявлял переменную в теле цикла, 
а надо было за его пределами, т.к. при каждом проходе цикла она создается заново. Я прав?