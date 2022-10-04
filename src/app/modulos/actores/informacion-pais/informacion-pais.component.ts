import { Component, Input, OnInit } from '@angular/core';
import { PaisesServicioService } from 'src/app/services/paises-servicio.service';

@Component({
  selector: 'app-informacion-pais',
  templateUrl: './informacion-pais.component.html',
  styleUrls: ['./informacion-pais.component.css']
})
export class InformacionPaisComponent implements OnInit {

  @Input() nacionalidad ?= '';
  countryInfo? :any;

  constructor(private _servpais: PaisesServicioService) { }

  ngOnInit(): void {
    console.log(this.nacionalidad);
    this._servpais.buscarpais(this.nacionalidad).subscribe((data)=>{
      this.countryInfo = data;
    });
  }

}
