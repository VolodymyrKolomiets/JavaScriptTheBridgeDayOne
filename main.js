//VARIABLES


//Crea un cuadro de diálogo (alert) que muestre lo siguiente 
//alert("Hello")

//Crear variable tipo let de nombre variableSinValor declarada sin valor
let variableSinValor

//Crear 2 variables tipo let de nombres booleano1 y booleano2 con valores booleanos
let booleano1 = true
let booleano2 = false
console.log(booleano1, booleano2)

//Crear variable tipo const de nombre PI declarada con valor 3.14
const PI = 3.14
console.log(PI)

//Crear variable tipo const de nombre TAU declarada con valor 2 veces PI
const TAU = PI * 2
console.log(TAU)

//Crear variable tipo const de nombre miNombre declarada con valor tu nombre
const miNombre = "Vlad"
console.log(miNombre)

//Crear variable tipo const de nombre miNumeroFav declarada con valor numérico
const miNumeroFavorito = 13
console.log(miNumeroFavorito)

//Crea una variable de tipo booleano
const boolee = true
console.log(boolee)

//Muestra por consola la longitud de la variable miNombre
console.log(miNombre.length)

//Muestra por consola el tipo de dato de la variable miNumeroFav
console.log(typeof miNumeroFavorito)

//Muestra un console.log que diga ‘Mi nombre es Euralio y mi numero favorito es 7” concatenado variables declaradas más arriba
console.log(`Mi nombre es ${miNombre} y mi numero favorito es ${miNumeroFavorito}`)

//Muestra por consola “Seré un crack en JavaScript al terminar el bootcamp” en mayúsculas.
console.log("Seré un crack en JavaScript al terminar el bootcamp".toUpperCase())

let crackBootCamp = "Seré un crack en JavaScript al terminar el bootcamp"
let mayuscula = crackBootCamp.toUpperCase()
console.log(mayuscula)

//Muestra por consola solo los primeros 5 caracteres de la siguiente variable = ‘Hola soy un crack”
const heyCrack = "Hola soy un crack"
console.log(heyCrack.substring(0,4))

//Convierte la variable miNumeroFav en una string y luego muestra por consola el tipo de dato que es dicha variable
let miNumeroFavor = miNumeroFavorito.toString()
console.log(typeof miNumeroFavor)

//Crea una variable y asignale un valor. Después utilizando template literal haz uso de la variable que habías //Creado, guarda el template literal en otra variable y sacala por consola.
let temPl = "Jordi"  
let temPlat = `Mi nombre es ${temPl}`
console.log(temPlat)

//Muestra por consola la variable PI hasta los 2 primeros decimales
let pi2 = PI.toFixed(2)
console.log(pi2)

console.log(PI.toFixed(2))


//ARRAYS

//Crear variable de nombre arrayVacio cuyo valor sea un array vacío

let arrayVacio = []

//Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)

let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//Crear variable de nombre arrayNumeros2 declarada con un array de números del 0 al 15 (0, 1, 2...)

let arrayNumeros2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

//Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9 (considerando al 0 par)

let arrayNumerosPares = [2, 4, 6, 8]

//Crear variable de nombre arrayNumerosNeg declarada con un array de números del 0 al -9 (0, -1, -2...)

let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]

//Crear variable de nombre holaMundo declarada con valor array con las palabras 'Hola' y 'Mundo'

let holaMundo = ['Hola', 'Mundo']

//Crear variable de nombre loGuardoTodo declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'

let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal']

//Crear variable de nombre arrayDeArrays declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]

let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]
console.log(arrayDeArrays)

//Muestra por consola la longitud del array “loGuardoTodo”

console.log(loGuardoTodo.length)

//Crea un nuevo elemento y añadelo al final del array “loGuardoTodo” y muestralo por consola

let newElemnt = 'Boston'
loGuardoTodo.push(newElemnt)
console.log(loGuardoTodo)

//Muestra por consola la propiedad ‘que’ de la variable loGuardoTodo

console.log(loGuardoTodo[1])

//Añade el string ‘Euralio’ en la array loGuardoTodo y muestrala por consola

loGuardoTodo.unshift("Euralio")
console.log(loGuardoTodo)


//OBJETOS

//Crea un objeto de nombre Coche que tenga las propiedades: marca, modelo y matrícula con sus respectivos valores

const car = {
    model:"Peugeot",
    serie:406,
    plateNumber:[4046, "DRG"],
}
console.log(car)

//Crea un objeto de nombre Casa que tenga las propiedades: codPostal, calle, portal y piso con sus respectivos valores

const home = {
    pc:46002,
    street:"st.Alameda",
    portal:14,
    numbHome:6,
}

//Crea un objeto de nombre FullStackDeveloper que tenga las propiedades: array lenguajes(ej. ‘javascript’,’php’), array proyectos(ej. ‘mi página personal’,etc)

const FullStackDeveloper = {
    languege:["javascript", "html", "css"],
    projects:["First project", "Second project"],
}

//Crea un objeto de nombre Perro que tenga las propiedades: nombre, raza, color y edad con sus respectivos valores

const dog = {
    name:"Rex",
    race:"Argentin dog",
    color:"White",
    age:4,
}

//Crea un objeto de nombre Noticia que tenga las propiedades: titular y cuerpo con sus respectivos valores

const notice = {
    title:"Big job opportunity",
    body:"These a tousent bigs jobs opportunities in the world of developoment"
}


//Crea un objeto de nombre Persona que tenga las propiedades: nombre, apellidos y edad con sus respectivos valores

const person = {
    name:"Jhon",
    lName:"Bonny",
    age: 32
}

//Muestra por consola el nombre de la variable Persona

console.log(person)

//Muestra por consola el lenguaje javascript de la variable FullStackDeveloper

console.log(FullStackDeveloper.languege[0])

//Crea un objeto de nombre Portatil que tenga la propiedad marca, accede a esta propiedad con .marca y muestrala por consola
let portatil = {
race:"msi"
}
console.log(portatil.race)

//Obtén el valor de la propiedad marca del objeto anteriormente //Creado (Portatil) con ["marca"] y muestrala por consola

const portatil1 = {
    race:["lenovo", "msi", "hp"]
    }
    console.log(portatil1.race[1])
    console.log(portatil1.race)

//Crea un objeto de nombre Concierto con una propiedad llamada grupos que es un array, obtén el valor de la propiedad y muestrala por consola

let concert = {
    group:["Sting", "Rolling Stone", "Michael Jackson"]
} 
console.log(concert.group)


//Crea un objeto de nombre Led, con las propiedades: lampara1 con valor rojo, lampara2 con valor verde y lampara3 con valor azul, obtén el valor de las propiedades guardándolo en la variable array RGB[Rojo, Verde, Azul] y muestra este array por consola. La array por consola debería mostrarse así [‘rojo’,’verde’,’azul’]

const led = {
    lamp1:"red",
    lamp2:"green",
    lamp3:"blue"
}
const rgb = [led.lamp1, led.lamp2, led.lamp3]
console.log(rgb)

//Crea un objeto de nombre O_Error con la propiedad código, obtén el valor de la propiedad y muestrala por consola

const o_error = {
    code:"Error"
}
console.log(o_error.code)

//Crea un objeto de nombre Grupo con la propiedad integrantes (array),obtén el valor de la propiedad guardándolo en la variable integrantes y muestra por consola a uno de los integrantes

let group = {
    integrantes:["Pepito", "Juanito", "Pedrito"]
}
console.log(group.integrantes[2])

//Crea un objeto de nombre Impresora con la propiedad objeto tinta{rojo, verde, azul}, obtén el valor de la propiedad guardándolo en la variable nivelesTinta y muestrala por consola

const impress = {
    tint: ["red", "green", "blue"]
}
const levelTint = impress.tint
console.log(levelTint)// el valor lo he tenido que sacar en array por que como lo pide el ejercicio es impodible sacarlo en objeto, si os fijais pide una propiedad con tres valores {rojo, verde, azul} a deberia ser [rojo, verde, azul]

//Crea un objeto de nombre Movil con la propiedad especificaciones obtén el valor de la propiedad con ["especificaciones"] guardándolo en la variable especificaciones y muestrala por consola

const movil = {
    especification:{
        model: "Samsung",
        color: "Black",
        serie: 21
    }
}
const especification = movil.especification
console.log(especification) //object

const especification1 = [movil.especification]
console.log(especification1) //array

//Dado el objeto de nombre Portatil con la propiedad marca, modifica el valor de la propiedad marca por el valor “MSI”, consolea el resultado

portatil.race = "MSI"
console.log(portatil)


//Dado el objeto de nombre Concierto añade el valor Guns N' Roses a la propiedad grupos, consolea el resultado

concert.group.push("Guns N' Roses")
    
console.log(concert)

//Dado el objeto de nombre Concierto, //Crea la propiedad fecha, dale un valor y después modifica el valor de la propiedad por el valor new Date() (fecha de hoy, investiga que es new Date y como usarlo), consolea el resultado

concert.date = 24/15
concert.date = new Date
console.log(concert)

//Dado el objeto de nombre Grupo modifica el valor de la propiedad integrantes quitándole un integrante, consolea el número de integrantes actual (ojo! el número, no los nombres de los integrantes)

group.integrantes.pop()
console.log(group.integrantes.length)
