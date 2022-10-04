import { Component, Input, OnInit } from '@angular/core';
import { MiServicioService } from 'src/app/services/mi-servicio.service';
import { map } from 'rxjs/operators';
import { Actor } from 'src/app/clases/actor';
import { Observable } from 'rxjs';
import { Peliculas } from 'src/app/clases/peliculas';

@Component({
  selector: 'app-listadopelicula-filtrado',
  templateUrl: './listadopelicula.component.html',
  styleUrls: ['./listadopelicula.component.css']
})
export class ListadopeliculaComponent implements OnInit {


  
  @Input() idActor ?= '';
  peliculas?:Array<Peliculas>;
  
  constructor(private _db : MiServicioService) { }

  ngOnInit(): void {
    this.mostrarPeliculasFiltradas();
    
  }
mostrarPeliculasFiltradas()
{
  this.peliculas=new Array<Peliculas>;
  this._db.traerPeliculasPorActor(this.idActor).snapshotChanges().pipe(
    map(changes =>
      changes.map(c =>
        ({ id: c.payload.doc.id, ...c.payload.doc.data() })
      )
    )
  ).subscribe(data => {
    this.peliculas = data;
    
  });
}

}
