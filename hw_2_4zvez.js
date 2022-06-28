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