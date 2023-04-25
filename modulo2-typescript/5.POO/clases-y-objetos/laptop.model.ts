export class Laptop{


    //estado
    constructor (private id: number, 
                 private ram: number,
                 private cores: number,
                 private manufacturer:string,
                 private model: string){}

    //comportamiento
public getFullName(){
    return `${this.manufacturer} ${this.model}`
}
}