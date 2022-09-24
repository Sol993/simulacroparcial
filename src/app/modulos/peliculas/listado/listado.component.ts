import { Component, OnInit } from '@angular/core';
import { Peliculas } from 'src/app/clases/peliculas';
import { TipoPelicula } from 'src/app/clases/tipo-pelicula';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
    peliculas: Peliculas[] = [
    { id: 1, nombre: 'Dr Nice2', tipo: TipoPelicula.Terror, fechaDeEstreno:'14/03/2022',cantidadDePublico: 13,fotoDeLaPelicula:'assets/Imagenes/Pelicula.jpg'},
    { id: 2, nombre: 'Dr Nice3', tipo: TipoPelicula.Comedia, fechaDeEstreno:'',cantidadDePublico: 13,fotoDeLaPelicula:'assets/Imagenes/Pelicula.jpg' },
    { id: 3, nombre: 'Dr Nice4', tipo: TipoPelicula.Amor, fechaDeEstreno:'',cantidadDePublico: 13,fotoDeLaPelicula:'assets/Imagenes/Pelicula.jpg' },
    { id: 4, nombre: 'Dr Nice4', tipo: TipoPelicula.Otros, fechaDeEstreno:'',cantidadDePublico: 13,fotoDeLaPelicula:'assets/Imagenes/Pelicula.jpg' },

  ];
  selectedPelicula ?: Peliculas;
  constructor() { }

  ngOnInit(): void {
    
  }
  mostrar(peli:Peliculas){
    this.selectedPelicula = peli;
    console.log(peli);
   }
  

}
