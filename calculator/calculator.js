
 (function Calculate(num1, num2) {

    if(typeof num1 != 'number' && typeof num2 != 'number'){
      console.log('Debes introducir dos números por favor');

    }else if (typeof  num1 == 'number' &&  typeof num2 != 'number'){
          console.log('La raíz cuadrada es: ' + Math.sqrt(num1));
    } else if ( typeof num1 != 'number' && typeof num2 == 'number'){
          console.log('La raíz cuadrada es: ' + Math.sqrt(num2));
    }else{
      let resultSum = num1 + ' + ' + num2 + ' = ' + ((num1+num2).toFixed(3));
      let resultSubstraction = num1 + ' - ' + num2 + ' = ' + ((num1-num2).toFixed(3));
      let resultMultiplication = num1 + ' x ' + num2 + ' = ' + ((num1*num2).toFixed(3));
      let resultDivision = num1 + ' / ' + num2 + ' = ' + ((num1/num2).toFixed(3));

      let operation = [resultSum, resultSubstraction, resultMultiplication, resultDivision];

      console.log('Para los números '+ num1 + ' y ' + num2 + ' los resultados de las operaciones son: ' + operation);
    }

 })('introducir numero1', 'introducir numero2');
