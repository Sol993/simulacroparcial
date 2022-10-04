import { Component, OnInit, Input } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { MiServicioService } from 'src/app/services/mi-servicio.service';


@Component({
  selector: 'app-actorpelicula',
  templateUrl: './actorpelicula.component.html',
  styleUrls: ['./actorpelicula.component.css']
})
export class ActorpeliculaComponent implements OnInit {
 
  actor: Actor=new Actor();
  mostrar=false;
  
  @Input() unActor?=Actor ;
  

  constructor(private _db : MiServicioService) { }

  ngOnInit(): void {
  }
  obtenerActor(actor : Actor){
    this.actor= actor; 
    this.mostrar=true;
   
  }
 

}
