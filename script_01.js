const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// QUESTION 1
console.log("1) Sors une array qui ne contient que le prénom et le nom des entrepreneurs");

function getFirstLastName() {
  const arrayFullName = entrepreneurs.map(entrepreneur => `${entrepreneur.first} ${entrepreneur.last}`);

  arrayFullName.forEach(entrepreneurs => {
    console.log(entrepreneurs)
  })
}

getFirstLastName();

// QUESTION 2
console.log("2) Pour chaque entrepreneur, remplace la date de naissance par l'âge de l'entrepreneur qu'il aurait aujourd'hui.");

function replaceWithAge() {
  const arrayWithAge = entrepreneurs.map(entrepreneur => `first: ${entrepreneur.first}, last: ${entrepreneur.last}, age: ${2020 - entrepreneur.year}`);

  arrayWithAge.forEach(entrepreneurs => {
    console.log(entrepreneurs)
  })
}

replaceWithAge();

// QUESTION 3
console.log("3) Les clés first et last manquent de lisibilité, remplace-les par firstName et lastName");

function replaceNaming() {
  const arrayNaming = entrepreneurs.map(entrepreneur => `firstName: ${entrepreneur.first}, lastName: ${entrepreneur.last}, year: ${entrepreneur.year}`);

  arrayNaming.forEach(entrepreneurs => {
    console.log(entrepreneurs)
  })
}

replaceNaming();

// QUESTION 4

console.log("4) Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70")

function bornIn70s() {
  const array70s = entrepreneurs.filter(entrepreneurs => entrepreneurs.year >= 1970 && entrepreneurs.year <= 1979)

  array70s.forEach(entrepreneurs => {
    console.log(`${entrepreneurs.first} ${entrepreneurs.last}`)
  })
}

bornIn70s();





