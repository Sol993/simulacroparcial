import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-detalles-actor',
  templateUrl: './detalles-actor.component.html',
  styleUrls: ['./detalles-actor.component.css']
})
export class DetallesActorComponent implements OnInit {

  @Input() actor : any;
  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['Actor']) {
      
     
    }
	}


}
