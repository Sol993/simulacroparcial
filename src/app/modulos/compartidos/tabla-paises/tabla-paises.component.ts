import { Component, OnInit , Output , EventEmitter} from '@angular/core';
import { PaisesServicioService } from 'src/app/services/paises-servicio.service';


@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  countryInfo : any;
  filterTerm!: string;
  
  @Output() selecionarPaisEvent = new EventEmitter<string>();

  constructor(private api:PaisesServicioService) { }

  ngOnInit(): void {
      this.api.listarPaises().subscribe((data)=>{
      this.countryInfo = data;
      console.log(this.countryInfo);
      
    });
   
    }
   selecionarPais(pais : string){
    this.selecionarPaisEvent.emit(pais);
    
    }
 
  


}
