function init() {
  console.log("Manipulando el DOM con JS");
}

window.onload = init;

// ARROWS
console.log("ARROW FUNCTIONS");

/* Crea una arrow function que tenga dos parametros a y b y 
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
por consola la suma de los dos parametros. */
const sumNumbers = (a = 10, b = 5) => console.log(a + b);

// 1.1 Ejecuta esta función sin pasar ningún parametro
sumNumbers();

// 1.2 Ejecuta esta función pasando un solo parametro
sumNumbers(1);

// 1.3 Ejecuta esta función pasando dos parametros
sumNumbers(4, 6);



// DESESTRUCTURING
console.log("DESESTRUCTURING");

/* 2.1 En base al siguiente javascript, crea variables en base a las propiedades 
del objeto usando object destructuring e imprimelas por consola. Cuidado, 
no hace falta hacer destructuring del array, solo del objeto. */

const game = {
  title: "The last us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
};

let { title, gender, year } = game;

console.log(title);
console.log(gender);
console.log(year);

/* 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables 
llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
imprimelo por consola. */

const fruits = ["Banana", "Strawberry", "Orange"];

/* Sin desestructuración 
let fruit1 = fruits[0]; 
let fruit2 = fruits [1]; 
let fruit3 = fruits [2]; 

console.log(fruit3); */

// Con desestructuración

let [fruit01, fruit02, fruit03] = ["Banana", "Strawberry", "Orangee"]; // creas variables en un array y lo iguals al array de valores

console.log(fruit01);
console.log(fruit02);
console.log(fruit03);

/* 2.3 En base al siguiente javascript, usa destructuring para crear 2 
variables igualandolo a la función e imprimiendolo por consola. FALLA */


const animalFunction = () => {
    return {name01: 'Bengal Tiger', race02: 'Tiger'}
};

const {name01, race02} = animalFunction();

console.log(name01); 
console.log(race02); 


/* 2.4 En base al siguiente javascript, usa destructuring para crear las 
variables name y itv con sus respectivos valores. Posteriormente crea 
3 variables usando igualmente el destructuring para cada uno de los años 
y comprueba que todo esta bien imprimiendolo. */

const car = { name: "Mazda 6", itv: [2015, 2011, 2020] };

let { name, itv } = car;
let [itv01, itv02, itv03] = car.itv;

console.log(name);
console.log(itv);
console.log(itv01);
console.log(itv02);
console.log(itv03);



// SPREAD OPERATOR
console.log("SPREAD OPERATOR");

// 3.1 Dado el siguiente array, crea una copia usando spread operators.COPIA DE ARRAY

const pointsList = [32, 54, 21, 64, 75, 43];

let newPointList = [...pointsList]; // Con esto creas una copia del array pointList con spread operator

console.log(newPointList);

// 3.2 Dado el siguiente objeto, crea una copia usando spread operators. COPIA DE OBJETO

const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };

let newToy = { ...toy };

console.log(newToy);

// 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.

const pointsList01 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54, 87, 99, 65, 32];

let newPointListTogether = [...pointsList01, ...pointsList2]; // Juntas los dos arrays ... es para sumar todos los valores de cada array

console.log(newPointListTogether);

// 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.

const superToy = {
  name: "Bus laiyiar",
  date: "20-30-1995",
  color: "multicolor",
};
const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] }; // son propiedades de objeto

let toysCouple = { ...superToy, ...toyUpdate }; // Ojo cuidado porque es un objeto {} y no un array []

console.log(toysCouple);

// 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operatos.

const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];

const newColors = [...colors];
newColors.splice(2, 1);

console.log(newColors);



// MAP
console.log("MAP");

// 4.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map().

const users = [
  { id: 1, nameMap: "Abel" },
  { id: 2, nameMap: "Julia" },
  { id: 3, nameMap: "Pedro" },
  { id: 4, nameMap: "Amanda" },
];

let newUsersMap = users.map((user => user.nameMap));

/* let newUsersMap = users.map((user) {
	return user.nameMap;
}); */

console.log(newUsersMap);

// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
//empiece por 'A'.


const usersAnacleto = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const result02 = usersAnacleto.map(user => {
    if (user.name.charAt(0) == "A")
        return "Anacleto";

    else
        return usersAnacleto.name;
});

console.log(result02);

// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
// cuando el valor de la propiedad isVisited = true.

const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const newCities = cities.map(city => {
	if (city.isVisited){
		return city.name + " Visitado" ;
	} else {
		return city.name;
	}
}); 

console.log(newCities);


// FILTER
console.log("FILTER");

// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const newAgesFilter = ages.filter((age) => age > 18); 
console.log(newAgesFilter);



// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.

const ages02 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const newAges2Filter = ages02.filter(numberPar => numberPar % 2 == 0);

console.log(newAges2Filter); 



// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of Legends'.

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamersFilter = streamers.filter(streamer => streamer.gameMorePlayed === "League of Legends"); 
console.log("Los de League", streamersFilter);


// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array  con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos  usar la funcion .includes() para la comprobación.


const streamers02 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}, ];

let newStreamers = streamers02.filter(streamer01 => streamer01.name.includes("u")); 
console.log(newStreamers);



/* 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación.
Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando  .age sea mayor que 35. */ 

const streamersGame2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'league of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'league of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}, ];

let newStreamersGame = streamersGame2.filter(streamerGame => streamerGame.gameMorePlayed.includes('league of Legends')); 
console.log(newStreamersGame); // Hasta aquí ok 

	newStreamersGame.map(streamerGame => {
		if (newStreamersGame.age > 35){
			streamerGame.gameMorePlayed = streamerGame.gameMorePlayed. toUpperCase(); // hay algo mal aquí 
	}
		return newStreamersGame});

	console.log(newStreamersGame);// FALLA 

// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35. */ FALTA 


/* 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si // FALLA 
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'. */ 

let input = document.querySelector(".streamerInput"); 

input.addEventListener("", ) // Evento 

console.log();



/* 5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola  // FALLA 
// los streamers que incluyan la palabra introducida en el input. De esta forma, si 
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', 
// me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
// En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.






// FIND 

// 6.1 Dado el siguiente array, usa .find() para econtrar el número 100. */

const numbers = [32, 21, 63, 95, 100, 67, 43];
 
const numbersFind = numbers.find(number => number === 100);  // ¿Se refiere a esto? 

console.log(numbersFind); 



// 6.2 Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.

const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];

const moviesFind = movies.find(movie => movie.date === 2010); 
console.log(moviesFind); // .tittle es para poner el valor del title y no el objeto en sí. 


/* 6.3 Dado el siguiente javascript, usa .find() para econtrar el alien de nombre 
'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa 
spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación 
lo queremos meter en la propiedad .mutation del objeto fusionado. */ 

const aliens = [
	{name: 'Zalamero', planet: 'Eden', age: 4029},
	{name: 'Paktu', planet: 'Andromeda', age: 32},
	{name: 'Cucushumushu', planet: 'Marte', age: 503021}
];

const newAliens = aliens.find(alien => alien.name === 'Cucushumushu')
console.log(newAliens);


const mutations = [
	{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
	{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
	{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];

const newMutations = mutations.find(mutation => mutation.name === 'Porompompero'); 
console.log(newMutations);

/* Una vez que los encuentres, usa 
spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación 
lo queremos meter en la propiedad .mutation del objeto fusionado. */ 

newCombination = {...newAliens, ...newMutations, mutation: "prueba"}; // son objetos no arrays {} , no []. No entiendo la última parte del enunciado ¿? 
console.log(newCombination); // te los fusiona 




// REDUCE 

// 7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
// los alumnos usando la función .reduce().

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

/*
const examResults = exams.reduce(function(acc, alumnScore){
	// return alumnScore.score; // me suma 10 que son los alumnos (mal). 
}); */

const examResults = exams.reduce(function(acc, alumnScore){
	return acc + alumnScore.score;}, 0); // hay que pasar un valor ese "0" para el inicio. 

// con arrow function sería así: 	const examResults = exams.reduce((acc, alumnScore) => acc + alumnScore.score, 0); 

console.log(examResults);


// 7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los alumnos que esten aprobados usando la función .reduce(). FALLA 

const exams2 = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

/* const passed = exams2.reduce(function (acc, alumnPassed) {
	if (alumnPassed.score >= 5) {
		// return console.log(alumnPassed);  	ok me devuelve los alumnos aprobados
		return acc + alumnPassed.score;} },0);  // me da NaN ¿? 

console.log(passed); */


// probando con un filter y después un reduce 

const passedFilter = exams2.filter(alumnPassed => {
	if (alumnPassed.score >= 5) {
		// return console.log(alumnPassed);  	ok me devuelve los alumnos aprobados
		return alumnPassed.score; }}); 

	console.log(passedFilter); // hasta aqui bien porque filtra los alumnos aprobados 


const newPassedFilter = passedFilter.reduce(function(acc, nota){
	return acc + nota.score; }, 0 ); 

console.log(newPassedFilter);

// NOTAS: 
// 1. Filter para sacar los alumnos con esa condición de aprobados 
// 2. Después un reduce sobre la nueva variable (con los alumnos aprobados)


// 7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce(). 

const exams3 = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

/*
const examResults = exams.reduce(function(acc, newExamsValue){
	// return newExamsValue.score; // me suma 10 que son los alumnos (mal). 
}); */

const examResults = exams3.reduce(function(acc, alumnScore){
	return acc + alumnScore.score;}, 0); // hay que pasar un valor ese "0" para el inicio. 
	// console.log(exams3.lenght); 	te da 10 queson los 10 objetos que hay dentro del array. 
	console.log(examResults / exams3.length);



	/* 8.1 6.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando    // RESUELTO EN CLASE 
.filter() y usa .reduce() para conseguir la media de sus .score. 
La función .find() también podría ayudarte para encontrar el genero 'RPG' en el 
array .gender. */

const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10},
]; 


const result = videogames.filter(game => {
    const isRPG = game.genders.includes("RPG");
    
    return isRPG;

})

.reduce((acumulador, current) => {
    const counter = acumulador + current.score;

    return counter;
},0);

console.log("----- result -->", result / 3);


