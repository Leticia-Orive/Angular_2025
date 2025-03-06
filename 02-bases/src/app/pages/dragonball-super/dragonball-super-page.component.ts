
import { Component,  signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',

  templateUrl: './dragonball-super-page.component.html',
  styleUrls: ['./dragonball-super-page.component.css']
})
export class DragonballSuperPageComponent {

  //Creamos unas señales voy hacer dos señales independientes
  name = signal('')
  power = signal(0)

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
     { id: 2, name: 'Vegeta', power: 8000 },

  ]);


  addCharacter() {
    //console.log(this.name(), this.power());
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    this.characters.update((list) => [...list, newCharacter]);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
  }



