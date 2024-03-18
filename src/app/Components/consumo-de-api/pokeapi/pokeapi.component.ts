import { Component ,ElementRef,OnInit,ViewChild } from '@angular/core';
import { Resultado } from '../../../Models/pokeapi';
import { Pokemon } from '../../../Models/Pokemon';
import { PokemonService } from '../../../Services/PokemonService/pokemon.service';
@Component({
  selector: 'app-pokeapi',
  templateUrl: './pokeapi.component.html',
  styleUrl: './pokeapi.component.scss'
})
export class PokeapiComponent implements OnInit {

  constructor(private pokemonService: PokemonService){}
  @ViewChild('tarjetas') tarjetasElement!:ElementRef;

  listaPokemon:Resultado[] = [];

  pagina:number = 1;
  cargando:boolean = false;
  pokemonSeleccionado?:Pokemon;
  detalle:boolean=false;

  ngOnInit(): void {
    this.cargarLista();
    this.pokemonService.getById("1");
  }

  async cargarLista(){
    this.cargando = true;

    this.listaPokemon = [...this.listaPokemon,  ...await this.pokemonService.getByPage(this.pagina)];
    this.cargando = false;
    this.pagina++;
  }

  onScroll(e:any){
    if(this.cargando) return;
    if(
      Math.round(
        this.tarjetasElement.nativeElement.clientHeight + this.tarjetasElement.nativeElement.scrollTop
        )
        === e.srcElement.scrollHeight){
        this.cargarLista();
      }

  }

  async tarjetaClickeada(id:string){
    if(this.pokemonSeleccionado && id === this.pokemonSeleccionado?.id.toString()){
      return this.cambiarEstadoDetalle()
    }
    this.pokemonSeleccionado = await this.pokemonService.getById(id);
  }


  cambiarEstadoDetalle(){
    if(this.pokemonSeleccionado) this.detalle = !this.detalle;
  }

}