//Crear clase Employee con atributos: id, firstname, salary, company

class Employee {
    //atributos
    id: number;
    firstname: string;
    salary: number;
    company: string;

    //constructor
    constructor(id: number, firstname: string, salary: number, company: string) {
        this.id = id;
        this.firstname = firstname;
        this.salary = salary;
        this.company = company;

    }
    // metodos
    saludar(): string {
        return `hola mi nombre es ${this.firstname} y gano tanto ${this.salary}`;

    }
}
const employee1 = new Employee (1, 'employee', 280000, 'Deloitee');
console.log(employee1.salary);
console.log(employee1.saludar());