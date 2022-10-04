import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Peliculas } from 'src/app/clases/peliculas';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {
  @Input() listadoPeliculas:any;
  selectedPeli?: Peliculas;
  @Output() peliculaEvent = new EventEmitter<Peliculas>();


  constructor() { }
  ngOnInit(): void {
  }

  onSelect(peli: Peliculas) {
    this.peliculaEvent.emit(peli);
  }

}
