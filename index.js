let visor = document.getElementById('form-control')

function calc(value){
  if (value === '='){
    visor.value = resultadoFinal(visor.value)
    return 
  }
  else if(value === ''){
    visor.value = visor.value.substring(0, visor.value.length -1)
  }
  else if(value === 'C'){
    value = ''
    visor.value = ''
  }
  visor.value += value
}
function opera (num1, num2, op){
  num1 = Number(num1)
  num2 = Number(num2)
  switch (op) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    case '/':
      return num1 / num2
    default:
      break;
  }
}
function resultadoFinal(str) {
  numeros = str.split(/\D/)
  operador = str.match(/[*/+-]/g).join('')
  for (i=1; i< numeros.length; i = i+1){
      if(i===1){
        resposta = opera(numeros[0], numeros[1], operador[0])
      }else{
        resposta = opera(resposta, numeros[i], operador[i-1])
      }
  }
  return resposta
}
