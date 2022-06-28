// 26. Создать переменную “age_1” и присвоить ей значение 10
// 27. Создать переменную “age_2” и присвоить ей значение 18
// 28. Создать переменную “age_3” и присвоить ей значение 60
// 29. Создать if в котором будите проверять значение переменной age_1
// 30. Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
// 31. Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
// 32. Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”.
// 33. Иначе выводите “Technical work”.
// Преобразовать задание таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
let age_2 = 18, age_3 = 60
const checkAge = function(age) {   
if (+age) {
    if (age < age_2) {        
  console.log('You don’t have access cause your age is ' + age + ' It’s less then')
  }
      else if (age >= age_2 && age < age_3) {  
  console.log('Welcome !')
  }
      else if (age > age_3) {     
  console.log('Keep calm and look Culture channel')  
  } else {console.log('Technical work')
  } 
  } 
else {console.log('ERROR!')
  }
}
 
checkAge(17) 
checkAge(70)
checkAge('61hgf')
let agePrompt = prompt('Enter your age, please')
checkAge(agePrompt)