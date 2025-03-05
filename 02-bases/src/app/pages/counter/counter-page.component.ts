import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styles: `
    button {
      padding: 5px;
      margin: 5px;
      width: 100px;

  }`,

  changeDetection: ChangeDetectionStrategy.OnPush,
})



export class CounterPageComponent {
  counter = 10;
  counterSignal = signal(10); //se inicializa en 10

  constructor() {
    setInterval(() => {
      this.incrementar(1);
      console.log('Click');
  }, 2000);
  }


  incrementar(value: number) {
    this.counter += value;  //va incrementado en 1 el valor de counter
    this.counterSignal.update(current => current + value ); //explicar esto: actualiza el valor de counterSignal sumando el valor de value al valor actual de counterSignal
  }

  restarle(value: number) {
    this.counter -= value;  //va decrementando en -1 el valor de counter
    this.counterSignal.update(current => current - value ); //explicar esto: actualiza el valor de counterSignal sumando el valor de value al valor actual de counterSignal

  }

  resetear() {
    this.counter = 0;  //resetea el valor de counter a 10
    this.counterSignal.set(0); //resetea el valor de counterSignal a 0
  }

}
