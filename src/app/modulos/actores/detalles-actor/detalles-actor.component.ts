import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-detalles-actor',
  templateUrl: './detalles-actor.component.html',
  styleUrls: ['./detalles-actor.component.css']
})
export class DetallesActorComponent implements OnInit {

  @Input() actor:Actor=new Actor();
  mostrarinfo=false;
  constructor() { }

  ngOnInit(): void {

  }
  mostrarInformacion(){
    this.mostrarinfo= true;
  }

}
