import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  contador: number = 0;
  saludo: string="";
  incrementar(): void {
    this.contador++;
  }
  decrementar(): void {
    this.contador--;
  }
  resetear(): void{
    this.contador =0;
  }
  saludar():void{
    this.saludo ="Hola mundo!";
  }
  quitarSaludo(): void{
    this.saludo="";

  }
}
