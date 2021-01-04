const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// QUESTION 1
console.log("1) Sors-moi la liste des titres des livres du CDI")

function bookTitles() {
    const arrayTitles = books.map(book => `${book.title}`);
  
    arrayTitles.forEach(books => {
      console.log(books)
    })
}

bookTitles();

// QUESTION 2
console.log("2) Est-ce que tous les livres ont été empruntés au moins une fois ?")

function rented() {
  let arrayOfBooks = [];
  books.forEach(book => book.rented === 0 && arrayOfNotRented.push(book));
  if (arrayOfBooks.length > 0) {
    arrayOfBooks.forEach(book => console.log(book));
  } else {
    console.log("Oui");
  }
}

rented();

// QUESTION 3
console.log("3) Quel est le livre le plus emprunté ?")

function mostBorrowed() {
  books.sort(function(a, b){
    if(a.rented < b.rented) { return 1; }
    if(a.rented > b.rented) { return -1; }
    return 0;
  })
  console.log(`Le livre le plus emprunté est : ${books[0].title}`);
}

mostBorrowed();

// QUESTION 4
console.log("4) Quel est le livre le moins emprunté ?")

function lessBorrowed() {
  books.sort(function(a, b){
    if(a.rented < b.rented) { return -1; }
    if(a.rented > b.rented) { return 1; }
    return 0;
  })
  console.log(`Le livre le moins emrpunté est ${books[0].title}`);
}

lessBorrowed();

// QUESTION 5
console.log("5) Supprime le livre avec l'ID 133712")

function delete133712() {
  for (let i in books) {
    if (books[i].id === 133712) {
      books.splice(i, 1);
    }
  }
}