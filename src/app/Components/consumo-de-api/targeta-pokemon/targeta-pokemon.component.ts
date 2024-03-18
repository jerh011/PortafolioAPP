import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges  } from '@angular/core';
import { Resultado } from '../../../Models/pokeapi';
import { Pokemon } from '../../../Models/Pokemon';
import { PokemonService } from '../../../Services/PokemonService/pokemon.service';

@Component({
  selector: 'app-targeta-pokemon',
  templateUrl: './targeta-pokemon.component.html',
  styleUrl: './targeta-pokemon.component.scss'
})
export class TargetaPokemonComponent implements OnChanges {

  constructor(private pokemonService: PokemonService){}

  ngOnChanges(): void {
    this.extraerInfromacion()
  }

  @Input() data?:Resultado;
  @Input() seleccionado:boolean = false;
  @Input() fullData?:Pokemon;
  @Output() clickeado = new EventEmitter<string>();
  id:string = "0";


  extraerInfromacion(){
    if(this.data && this.data.url !== ""){
      this.id = this.data.url.substring(34,this.data.url.length-1);
      return
    }
    if(this.fullData){
      this.id = this.fullData.species.url.substring(42,this.fullData.species.url.length-1);
      this.data = {
        name:this.fullData.species.name,
        url: ""
      }
    }
  }

}