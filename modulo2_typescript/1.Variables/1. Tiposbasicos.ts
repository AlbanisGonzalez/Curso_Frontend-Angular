
//TIPOS DE DATOS BÁSICOS

//Boolean
let esValido: boolean = true;
let esCorrecto: boolean = false;
let prueba : boolean = true;
console.log(prueba)

//Number
let count : number = 42 ;
let price: number = 19.99;

//String
let firstName: string = 'John Doe';
let greeting: string = `Hello, ${firstName}!`;

//Null
let nothing: null = null;

//Undefined
let notAssigned: undefined = undefined

//Void 
function logMessage(message: string): void {
    console.log(message);
  }

//Any
let unknownType: any = 'Some value';
unknownType = 42; // No hay error, ya que es de tipo 'any