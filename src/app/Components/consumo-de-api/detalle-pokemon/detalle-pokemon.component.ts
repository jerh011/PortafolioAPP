import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Pokemon } from '../../../Models/Pokemon';
import { PokemonService } from '../../../Services/PokemonService/pokemon.service';
@Component({
  selector: 'app-detalle-pokemon',
  templateUrl: './detalle-pokemon.component.html',
  styleUrl: './detalle-pokemon.component.scss'
})
export class DetallePokemonComponent implements OnChanges {
  @Input() pokemon?: Pokemon;
  @Input() abierto:boolean = false;
  @Output() clicked = new EventEmitter();
  descripcion: string = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnChanges(): void {
    if (this.pokemon) {
      this.pokemonService.getDescripcion(this.pokemon?.id).then((res) => {
        this.descripcion = res
      });
    }
  }

}