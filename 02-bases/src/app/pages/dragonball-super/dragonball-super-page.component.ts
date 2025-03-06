import { Component, inject, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { Character } from '../../interfaces/charecter.interface';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';


@Component({
  templateUrl: 'app-dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
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
        id: 1000,
        name: this.name(),
        power: this.power(),
      };

      //this.characters.update((list) => [...list, newCharacter]);
      console.log(newCharacter)
      this.resetFields();
    }

    resetFields() {
      this.name.set('');
      this.power.set(0);
    }

}


