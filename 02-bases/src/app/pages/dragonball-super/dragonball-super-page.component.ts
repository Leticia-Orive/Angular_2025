import { Component, inject } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';


@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent,],
})
export class DragonballSuperPageComponent {

}


