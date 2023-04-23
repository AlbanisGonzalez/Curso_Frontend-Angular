// TIPOS DE DATOS AVANZADOS 

type StringOrNumber = string | number;
let value: StringOrNumber = 'Hello, World!';
value = 42; // También es válido, ya que el tipo es 'string | number

// Intersection 

interface Shape {
    area(): number;
}
interface Solid {
    volume(): number;
}
type SolidShape = Shape & Solid;
let cube: SolidShape = {
    area: () => 6,
    volume: () => 1
};

//Type alias 

type Age = number;
type FullName = string;
let userAge: Age = 30;
let userName: FullName = 'John Doe';

// Mapped types

type Readonly<T> = {
    readonly [P in keyof T]: T[P];
  };
  interface Person {
    name: string;
    age: number;
  }
  type ReadonlyPerson = Readonly<Person>;

