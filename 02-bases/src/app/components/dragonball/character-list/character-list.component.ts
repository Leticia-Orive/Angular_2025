import {  Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/charecter.interface';

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.component.html',

})
export class CharacterListComponent {
  //mandar info del padre al hijo mediante la funcion: input()

  characters = input.required<Character[]>();
  listName = input.required<string>();
 }
