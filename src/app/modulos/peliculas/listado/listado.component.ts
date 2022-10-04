import { Component, OnInit } from '@angular/core';
import { Peliculas } from 'src/app/clases/peliculas';
import { MiServicioService } from 'src/app/services/mi-servicio.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  peliculas?: Peliculas[];
  selectedPelicula ?: Peliculas;

  constructor(private _db : MiServicioService) { }

  ngOnInit(): void {
    this._db.trearTodasLasPelis().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.peliculas = data;
    });
  }
  mostrar(peli:Peliculas){
    this.selectedPelicula = peli;

   }

  

}
