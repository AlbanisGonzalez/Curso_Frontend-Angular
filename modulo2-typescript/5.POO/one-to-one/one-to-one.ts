import { IAddress } from "./address.model";
import { IUser } from "./user.model";
let address1: IAddress = {
    id: 1,
    street: "Calle falsa 123",
    postalCode: "33034",
    city: "Gijon",
    country: "spain"
}

let address2: IAddress = {
    id: 2,
    street: "calle verdadera 123",
    postalCode: "33034",
    city: "Gijon",
    country: "spain"
}

let user1: IUser = {
    id: 1,
    email: "user1@gmail.com",
    birthday: new Date(1990, 1, 1),
    phone: "666854587",
    address: address1 // one to one 
}
console.log(`usuario ${user1.email} vive en ${user1.address.city}`);

// Crear objeto address y user en la propia creacion 
let user2: IUser = {
    id: 2,
    email: "user2@gmail.com",
    birthday: new Date(1991, 1, 1),
    phone: "644569875",
    address: {//crear un objeto address
        id: 2,
        street: "otra calle",
        postalCode: "33021",
        city: "Leon",
        country: "spain"

    }
}