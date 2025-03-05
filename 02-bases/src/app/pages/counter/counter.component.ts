import { Component, signal } from "@angular/core";


@Component({

  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})


export class CounterComponent {
  counter = 10;
  counterSignal = signal(10);

  // Metodo
  increaseBy(value: number){
    this.counter += value;
    /**No es la formas mas apropiada
     * this.counterSignal.set(this.counterSignal() + value);
     */

    this.counterSignal.update((current) => current + value);//nos da la opcion de mandar
  }

  resetCounter(){
    this.counter = 0;
    this.counterSignal.set(0); //el set ignora el valor
  }

}
