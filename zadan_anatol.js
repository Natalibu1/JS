for (let a1 = 2, a2 = 1; a2 <= 10; a2++){     //1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
    console.log('2**' + a2 + '=' + a1**a2)}

function stepen(a3){                  //1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
   for (let a1 = 2, a2 = 1; a2 <= a3; a2++) {      
       console.log('2**' + a2 + '=' + a1**a2)
    }
}
  stepen(6) 
  stepen(4) 

for (let b1 = '', b2 = 1; b2 <= 5; b2++){   //2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее    Пример в консоли:    :)    :):)    :):):)    :):):):)    :):):):):)
     console.log(b1 += ':)')
} 

function printSmile(b1, numberOfRowsb2){   //2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода     e.g. function printSmile(stroka, numberOfRows)
    let b3 = ''                 
    for (b2 = 1; b2 <= numberOfRowsb2; b2++){
        console.log(b3 += b1)
    }    
} 
printSmile('+', 6)

function getWordStructure(word){
    const glasn = 'aeiouy'.split('')
    const soglasn = 'bcdfghjklmnpqrstwvxz'.split('')
    let kolSogl = 0, kolGlasn = 0
    for (char of word.toLowerCase()){
        if (glasn.includes(char)) kolSogl++
        if (soglasn.includes(char)) kolGlasn++
    }
    console.log(`Слово ${word} состоит из ${kolSogl} согласных и ${kolGlasn} гласных`)
}
getWordStructure('case')
getWordStructure('Case')
getWordStructure('Check-list')