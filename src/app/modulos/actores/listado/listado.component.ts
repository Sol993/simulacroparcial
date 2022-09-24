import { Component, OnInit ,Output ,EventEmitter } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { MiServicioService } from 'src/app/services/mi-servicio.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listado-actor',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  arrayActores? : Actor[];
  @Output() selecionarActorEvent = new EventEmitter<Actor>();

  constructor(private _db: MiServicioService) { }
  

  ngOnInit(): void {
   
  this.obtenerListado();

}
obtenerListado():void{
  this._db.trearActores().snapshotChanges().pipe(
    map(changes =>
      changes.map(c =>
        ({ id: c.payload.doc.id, ...c.payload.doc.data() })
      )
    )
  ).subscribe(data => {
    this.arrayActores = data;
  });
  }

  selecionarActor(actor : Actor){
 this.selecionarActorEvent.emit(actor); 
  }
}