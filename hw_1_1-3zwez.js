// 26. Создать переменную “age_1” и присвоить ей значение 10
// 27. Создать переменную “age_2” и присвоить ей значение 18
// 28. Создать переменную “age_3” и присвоить ей значение 60
// 29. Создать if в котором будите проверять значение переменной age_1
// 30. Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
// 31. Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
// 32. Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”.
// 33. Иначе выводите “Technical work”.
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Вывести в консоль результат работы функции с возрастами 17, 18, 61
let age_1 = 10, age_2 = 18, age_3 = 60
const checkAge = function(age) {
    if (age < age_2) {                                               
    console.log('You don`t have access cause your age is ' + age + ' It`s less then')
    }
      else if (age >= age_2 && age < age_3) {  
      console.log('Welcome !')
      }
      else if (age > age_3) {     
      console.log('Keep calm and look Culture channel')  
      }
    else {console.log('Technical work')} 
    } 
    checkAge(17)
    checkAge(18)
    checkAge(61)
   
    const checkAge1 = function(age) {                    // 2*:  Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
    if (typeof(age) == 'number') {
     if (age < age_2) {        
    console.log('You don`t have access cause your age is ' + age + ' It`s less then')
     }
      else if (age >= age_2 && age < age_3) {  
    console.log('Welcome !')
     }
      else if (age > age_3) {     
    console.log('Keep calm and look Culture channel')  
     } 
     else {console.log('Technical work')}
     }   
    else {console.log('ERROR!')}
    }
   
    checkAge1(17)
    checkAge1('KFIRO')
    checkAge1(61)
   
   
     const checkAge2 = function(age) {          //3**: Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
     age = Number(age) 
     if (!isNaN(age)) {
    
       if (age < age_2) {        
     console.log('You don’t have access cause your age is ' + age + ' It’s less then')
       }
        else if (age  >=  age_2 && age  <  age_3) {  
        console.log('Welcome !')
        }
        else if (age  >  age_3) {     
        console.log('Keep calm and look Culture channel') 
        } 
       else {console.log('Technical work')
       } 
     }  
     else {console.log('ERROR!')
     }
     }
   
     checkAge2(17) 
     checkAge2('65')
     checkAge2('61hgf')