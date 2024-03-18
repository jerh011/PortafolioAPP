import { Component, Input } from '@angular/core';
import { Pokemon } from '../../../Models/Pokemon';

@Component({
  selector: 'app-foto-pokemon',
  templateUrl: './foto-pokemon.component.html',
  styleUrl: './foto-pokemon.component.scss'
})
export class FotoPokemonComponent {

  @Input() pokemon?:Pokemon;
}
