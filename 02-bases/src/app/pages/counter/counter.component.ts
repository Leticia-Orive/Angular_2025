import { Component } from "@angular/core";


@Component({
  template: `
  <h1>Counter: {{counter}}</h1><!--Podemos poner cualquier expresion en blanco nos va a dar error-->
  <button (click)="increaseBy(1)">+1</button>`,
})


export class CounterComponent {
  counter = 10;

  // Metodo
  increaseBy(value: number){
    this.counter += value;
  }

}
