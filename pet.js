class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
    } else if (this.age < otherUser.age) {
      return `${this.firstName} è più giovane di ${otherUser.firstName}`;
    } else {
      return `${this.firstName} e ${otherUser.firstName} hanno la stessa età`;
    }
  }
}

// Creazione di oggetti utente

const user1 = new User("Mario", "Rossi", 20, "Roma");
const user2 = new User("Luigi", "Bianchi", 29, "Napoli");
const user3 = new User("Pino", "Verdi", 20, "Torino");

//console.log per confronto età
console.log(user1.compareAge(user2));
console.log(user2.compareAge(user3));
console.log(user1.compareAge(user3));

// secondo esercizio

// creare un form in cui registrare pet
//  salvarli come oggetti in js
//  verificare se due pet hanno lo stesso padrone

// creo una classe che rappresenti ogni pet

class Pet {
  constructor(petName, ownerName, species, breed) {
    // constructor salva i dati dei pet
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  hasSameOwner(otherPet) {
    //hasSAmeOwner è un metodo che riceve i dati di un altro pet e verifica
    // hanno lo stesso padrone
    return this.ownerName === otherPet.ownerName;
  }
}

// creo un array vuoto in cui appenderò i child
const pets = [];

// aggiungo un evento al submit del form
document.getElementById("petForm").addEventListener("submit", function (e) {
  e.preventDefault(); // evito il ricaricamento della pagina

  // ricerco e leggo i vari valori del form
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  // creo una nuova istanza
  const newPet = new Pet(petName, ownerName, species, breed);

  //confronto con altri pet gia registrati

  pets.forEach((pet) => {
    if (newPet.hasSameOwner(pet)) {
      console.log(`${newPet.petName} ha lo stesso padrone di ${pet.petName}`);
    }
  });

  pets.push(newPet);
  addPetToList(newPet);

  //reset del form per inserire nuovi dat

  document.getElementById("petForm").reset();
});

function addPetToList(pet) {
  const li = document.createElement("li");
  li.className = "list-group-item";
  li.textContent = `${pet.petName} (${pet.species}, ${pet.breed}) - Padrone: ${pet.ownerName}`;
  document.getElementById("petList").appendChild(li);
}
