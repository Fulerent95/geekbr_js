/*------------Задание 1------------*/
function abc(num){
if (isNaN(num)){
      console.log('Ошибка: параметр не является числом');
} else if(num>999 || num<0){
    console.log('Ошибка: допустимый диапазон 0-999');
 
} else {
    var digits=['единицы','десятки','сотни'];
     var obj={};
for(var i=0; num!=0; i++){
        obj[digits[i]]=num%10;
        num=(num-num%10)/10;
        }
        }   
        return obj;
}

/*-----------Задание 2--------------*/
