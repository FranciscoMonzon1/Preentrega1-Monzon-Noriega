
/*const boton = document.querySelector('button');
const generateAlert = () => {
    alerta = alert('El boton funciona');
}
boton.addEventListener('click', generateAlert)*/

//El proyecto consiste en sacar un promedio de goles a favor y 
//goles en contra en la primera fase del grupo A en un mundial imaginario .
// para ello primero generaremos un objeto que nos permitira sacar el promedio de los goles que tendra la 
//siguiente forma :
/* {
golesAfavor:  [¨GF1, GF2, GF3 ]
golesEnContra: [GC1, GC2, GC3]
}
luego calcularemos el promedio de estos goles y pondremos el resultado en un alert que le sale al usuario
en pantalla

 Seleccionamos cada input del formulario y lo guardamos en variables; */

 const form = document.querySelector('form');

 const AFBr1 = form.elements.AFBr1;
 const ECBr1 = form.elements.ECBr2;
 const AFBr2 = form.elements.AFBr2;
 const ECBr2 = form.elements.ECBr2 ;
 const AFBr3 = form.elements.AFBr3;
 const ECBr3 = form.elements.ECBr3;
 const AFC1 = form.elements.AFC1;
 const ECC1 = form.elements.ECC1;
 const AFC2 = form.elements.AFC2;
 const ECC2 = form.elements.ECC2;
 const AFC3 = form.elements.AFC3;
 const ECC3 = form.elements.ECC3;
 const AFE1 = form.elements.AFE1;
 const ECE1 = form.elements.ECE1;
 const AFE2 = form.elements.AFE2;
 const ECE2 = form.elements.ECE2;
 const AFE3 = form.elements.AFE3;
 const ECE3 = form.elements.ECE3;
 const AFBe1 = form.elements.AFBe1;
 const ECBe1 = form.elements.ECBe1;
 const AFBe2 =form.elements.AFBe2;
 const ECBe2 = form.elements.ECBe2;
 const AFBe3 = form.elements.AFBe3;
 const ECBe3 = form.elements.ECBe3;
 
 let valorAFBr1 = parseFloat(AFBr1.value);
 let valorECBr1 = parseFloat(ECBr1.value);
 let valorAFBr2 = parseFloat(ECBr1.value);
 let valorECBr2 = parseFloat(ECBr1.value);
 let valorAFBr3 = parseFloat(ECBr1.value);
 let valorECBr3 = parseFloat(ECBr1.value);
 let valorAFC1 = parseFloat(ECBr1.value);
 let valorECC1 = parseFloat(ECBr1.value);
 let valorAFC2 = parseFloat(ECBr1.value);
 let valorECC2 = parseFloat(ECBr1.value);
 let valorAFC3 = parseFloat(ECBr1.value);
 let valorECC3 = parseFloat(ECBr1.value);
 let valorAFE1 = parseFloat(ECBr1.value);
 let valorECE1 = parseFloat(ECBr1.value);
 let valorAFE2 = parseFloat(ECBr1.value);
 let valorECE2 = parseFloat(ECBr1.value);
 let valorAFE3 = parseFloat(ECBr1.value); 
 let valorECE3 = parseFloat(ECBr1.value);
 let valorAFBe1 = parseFloat(ECBr1.value);
 let valorECBe1 = parseFloat(ECBr1.value);
 let valorAFBe2 = parseFloat(ECBr1.value);
 let valorECBe2 = parseFloat(ECBr1.value);
 let valorAFBe3= parseFloat(ECBr1.value);
 let valorECBe3 = parseFloat(ECBr1.value);





//funcion para generar un objeto a partir de los inputs del usuario y obtener el promedio y generar un alerta con dichos promedios 
 form.addEventListener('submit', (event) => {
    event.preventDefault();
   const torneo = {
    Brasil: {
            GolesAFavorPromedioBrasil: [(valorAFBr1 + valorAFBr2 + valorAFBr3)/3],
            GolesEnContraPromedioBrasil: [ (valorECBr1 + valorECBr2 + valorECBr3) /3],
        },
    Canada: {
            GolesAFavorPromedioCanada: [(valorAFC1 + valorAFC2 + valorAFC3) / 3],
            GolesEnContraPromedioCanada: [ (valorECC1 + valorECC2 + valorECC3) / 3],
        },
    Espana: {
            GolesAFavorPromedioEspana: [(valorAFE1 + valorAFE2 + valorAFE3) / 3],
            GolesEnContraPromedioEspana: [ (valorECE1 + valorECE2 + valorECE3) / 3],
        },
    Belgica: {
            GolesAFavorPromedioBelgica: [(valorAFBe1 + valorAFBe2 + valorAFBe3) / 3],
            GolesEnContraPromedioBelgica: [ (valorECBe1 + valorECBe2 + valorECBe3) / 3],
        }
    };
    // a traves de dos desestructuraciones accedemos a los goles en contra y goles a favor de cada equipo

    const {Brasil, Canada, Espana, Belgica} = torneo;
    const {GolesAFavorPromedioBrasil, GolesEnContraPromedioBrasil} = Brasil;
    const {GolesAFavorPromedioCanada, GolesEnContraPromedioCanada} = Canada;
    const {GolesAFavorPromedioEspana, GolesEnContraPromedioEspana} = Espana;
    const {GolesAFavorPromedioBelgica, GolesEnContraPromedioBelgica} = Belgica;
    
  const alerta = alert('GOLES A FAVOR PROMEDIO BRASIL: ' + GolesAFavorPromedioBrasil 
  )

   
}

);




