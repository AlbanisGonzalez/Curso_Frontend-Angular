//Clase evento que tenga titulo, fecha, admin




// clase usuario
class User {
    constructor(firstName, email, adminUser) {
        this.firstName = firstName;
        this.email = email;
        this.adminUser = adminUser; // objeto de la clase User 
    }
}

let user1 = new User("usuario1", "usuario@gmail.com");
let user2 = new User("usuario2", "usuario@gmail.com");
let user3 = new User("usuario3", "usuario@gmail.com");


class Event {
    constructor(tittle, date) {
        this.tittle = tittle;
        this.date = date;
        this.adminUser = adminUser;
    }
}

let event1 = new Event("Reunion de desarrollo", new Date("2023-04-18"), user1);
console.log(event1.tittle);
console.log(event1.date);
console.log(event1.adminUser.email);
console.log(event1.adminUser.firstName);

// cambiar el usuario admin del event 1













