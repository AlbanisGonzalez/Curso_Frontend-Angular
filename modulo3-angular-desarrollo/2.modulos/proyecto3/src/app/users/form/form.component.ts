import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  fullName = "albans";
  numero1 = 0;
  numero2 = 0;
  numeros = [2, 3, 4];


  numberToAdd = 0;

  resetFullName(): void {
    this.fullName = ""
  }

  resultadoSuma() {
    let suma = this.numero1 + this.numero2
    return suma
  }

  addnumber() {
    this.numeros.push(this.numberToAdd)
  }

  clearArray() {
    this.numeros = [];
  }

}
