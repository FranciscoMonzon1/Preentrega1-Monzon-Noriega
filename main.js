let min = 1
let max = 20
let aleatorio = Math.floor(Math.random() * max - min + 1) + min
let intentos = 0
let nombre = prompt('Bienvenidos al gym! les proponemos un juego para ganar 20%off en su proximo plan, cual es su nombre?')
let numero
let dto = 0.2

let adivinar = function () {
while (intentos < 5) {
    numero = parseInt(prompt(nombre + ', para ganar tu descuento solo tienes que advinar el numero! Ingrese un numero entre el ' + min + ' y el '+ max))

    if (numero >= min && numero <= max) {
        if (numero < aleatorio) {
            alert('Un poco mas arriba!')
        } else if (numero > aleatorio) {
            alert('Un poco mas bajo!')
        } else if (numero == aleatorio)
            break
    } else {
        alert('Perdiste un intento!, probá con numeros entre el ' + min + ' y el '+ max)
    }
    intentos++
}

if (numero == aleatorio) {
    alert('Felicidades!! Lo adivinaste en tu intento n ' + (intentos + 1) + ', obtienes tu descuento!')
} else {
    alert('Acabaste tus intentos, mejor suerte la proxima')
}
}
adivinar()



let plan = prompt (`Elige el plan al que se va a efectuar el descuento: 
 A --> Plan principiante 
 B --> Plan intensivo 
 C --> Plan deportivo`).toUpperCase(); 

let descuento = function (plan) {
    let resultado
  
    switch (plan) {
      case "A" :
        resultado = 1000 - (1000* 0.2)
        alert ('tu monto a abonar es ' + resultado)
        break;
      case "B" :
        resultado = 1500 - (1500* 0.2)
        alert ('tu monto a abonar es ' + resultado)
        break;
      case "C":
        resultado = 1800 - (1800* 0.2)
        alert ('tu monto a abonar es ' + resultado)
        break;
      default:
        alert('tu descuento no funciona')
        break;
    }
  }
  descuento(plan);
 