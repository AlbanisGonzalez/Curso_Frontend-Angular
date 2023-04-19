// Un evento puede teter lista de invitados

class User {
    constructor(firstName, email, adminUser) {
        this.firstName = firstName;
        this.email = email;
        this.adminUser = adminUser; // objeto de la clase User 
    }
}


class Event {
    constructor(tittle, date) {
        this.tittle = tittle;
        this.date = date;
        this.adminUser = adminUser; // objeto de la clase User 
       // Lista de usuario invitados
       this.users = [];
    }

     // metodo para añadir invitado 
     addUser(user) {
     this.users.push(user);
     
 }
}
 let date1 = new Date();
let event1 = new Event("Clase de JavaScript", date1, juan);
event1.addUser(jeane);
event1.addUser(alan);
event1.addUser(user4);
event1.addUser(user5);
console.log(event1);
console.log(`Hay un total de ${event1.users.length} usuarios invitados`);
console.log(`La reunión ${event1.title} ha ido organizada por ${event1.adminUser.firstName}`)
