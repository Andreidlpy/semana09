// 1. Calcular la factorial de un numero.

// let numero = 6;
// let factorial = 1;
// for (let i = 1; i <= numero; i++) {
    
//     factorial = factorial *  i;

// }
// console.log( factorial )

// 2. Escriba un programa en JavaScript que calcule la calificación promedio de los
// siguientes estudiantes, luego con este promedio se va identificar el nivel en el
// que se encuentran.

// const notas = [ 80, 77, 88, 95, 68 ];
// let suma = 0;

// for (let i = 0; i < notas.length; i++) {
//     suma += notas[i]; 
// }

// const promedio = suma / notas.length ;

// if( promedio < 60 ){
//         console.log( 'Nivel F' )
//     } else if( promedio < 70 ){
//         console.log( 'Nivel D' )
//     } else if( promedio < 80 ){
//         console.log( 'Nivel C')
//     } else if( promedio < 90 ){
//         console.log( 'Nivel B' , promedio  )
//     } else if( promedio < 100 ){
//         console.log( 'Nivel A' )
//     } else{
//         console.log(' Nivel desconocido')
// }



// 3. Escriba un programa en JavaScript de un bucle que itere del 1 al 15. Para cada
// iteración, verifica si el número actual es impar o par, y muestra un mensaje en la
// pantalla.

// for ( let i = 1; i <= 15; i++ ) {

//      if( i % 2 === 0 ) {
//         console.log( `${ i } es par` )
//      }else{
//         console.log( `${ i } es impar` );
//      }  
    
// };

// 4. Escriba un programa de JavaScript que itera enteros del 1 al 100. Pero para
// múltiplos de tres, imprima "Fizz" en lugar del número y para múltiplos de cinco
// imprima "Buzz". Para números múltiplos de tres y cinco, imprima "FizzBuzz".
// Salida de muestra:


// for ( let i = 1; i <= 100; i++ ) {

//     if( i % 5 === 0  &&  i % 3 === 0 ){
//         console.log( `FizzBuzz` );
//     } else if( i % 3 === 0 ) {
//         console.log( `${ i } Fizz` )
//     } else if( i % 5 === 0){
//         console.log( `${ i } Buzz` );
//     } else{
//         console.log( `${ i }` );
//     }  
   
// };


// 5. Invertir un arreglo usando el bucle for:
// Ejm:
// arreglo = [ 5, 1, 8, 6, 3]
// // arregloNuevo = [3, 6, 8, 1, 5]
// let arregloNuevo = [];

// for ( let i = arreglo.length - 1; i >= 0 ; i-- ) {
//     arregloNuevo.push( arreglo[i] ) 
// };

// console.log( arregloNuevo )


// 6. Invierte una cadena de texto usando un bucle for.
// Ejm:
// Entrada: “hola”
// Salida: “aloh”

// let mensaje = 'hola';
// mensaje = mensaje.toLowerCase().split('');
// let mensajeSalida = '';
// for ( let i = mensaje.length - 1 ; i >= 0 ; i-- ) {
//     mensajeSalida += mensaje[i];
// }
// console.log( mensajeSalida )


// 7. Implementar la potencia de un número pidiendo al usuario el número base y su exponente.
// Ejm:
// Entrada:
// base = 2
// exponente = 3
// Salida: 8

// const base = prompt('Ingrese la base:');
// const exponente = prompt('Ingrese el exponente:');
// let res = 1;

// for ( let i = 1; i <= exponente ; i++ ) {
//     res *= base ;
// }

// console.log( res  )

// 8. Calcula la suma de todos los elementos de un arreglo.
// Ejm:
// Entrada:
// arreglo = [2, 8, 5, 3, 1]
// // Salida: 19
// let  suma = 0;

// for (let i = 0; i < arreglo.length; i++) {
//     suma += arreglo[i];
// }


// 9 Encuentra el número mayor de un arreglo.
// Ejm:
// Entrada:
// let arreglo = [ 4, 5, 2 ]
// // Salida: 8
// let mayor = arreglo[0]; 

// for ( let i = 1; i < arreglo.length; i++ ) { 
//          // mayor = 5
//         // arreglo [i] = 2   > mayor = 5
//     if( arreglo[i] > mayor ){
//         mayor = arreglo[i]

//     }
   
// }
// console.log( mayor )

// 10. Encuentra todos los números pares de un arreglo y crear un arreglo nuevo con ellos.
// Ejm:
// Entrada:
// arreglo = [3, 4, 5, 12, 6, 1, 13]
// Salida:
// arregloPar = [4, 12, 6];

// let arreglo = [3, 4, 5, 12, 6, 1, 13];
// let arregloNuevo = [];
// for (let i = 0; i < arreglo.length; i++) {
  
//     if(arreglo[i] % 2 === 0){
//         arregloNuevo.push( arreglo[i] )
//     }
// }

// console.log( arregloNuevo )

// 11. Escriba un programa en JavaScript para mostrar el nombre del libro y el nombre
// del autor de los libros que tengan el estado de lectura “true”.

const library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true,
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true,
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false,
    },
];

for ( let i = 0; i < library.length; i++ ) {

    const { readingStatus, title, author } = library[i];

    if( readingStatus ){
        console.log( `Title: ${ title },  Author: ${ author }` )
    }
}
