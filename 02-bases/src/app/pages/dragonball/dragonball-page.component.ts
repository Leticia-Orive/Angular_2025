import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  imports: [/*NgClass*/],
  templateUrl: './dragonball-page.component.html',
  styleUrls: ['./dragonball-page.component.css']
})
export class DragonballPageComponent {

  //Creamos unas señales voy hacer dos señales independientes
  name = signal('Gohan')
  power = signal(100)

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
     { id: 2, name: 'Vegeta', power: 8000 },
     { id: 3, name: 'Piccolo', power: 3000 },
     { id: 4, name: 'Yamcha', power: 500 },
  ]);

  //Vamos a constuir nuevas Clases que se llama powerClasses
  /**Es otra forma de poner todos los power en rojo pero no es la mas apropiada
   * powerClasses = computed(()  => {
    return {
      'text-danger': true,
    }
  })
   */


}
