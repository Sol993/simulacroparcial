import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { MiServicioService } from 'src/app/services/mi-servicio.service';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {
  actor : Actor = new Actor();

  altaForm = this.fb.group({
    'nombre': ['', Validators.required],
    'apellido': ['', Validators.required],
    'nacionalidad': ['', Validators.required],
    'edad': ['',[Validators.required, Validators.min(18), Validators.max(100)]],
    'sexo': ['', Validators.required]
    
  });

  constructor(private _servicio: MiServicioService, private fb: FormBuilder, private _router : Router) { }

  
  ngOnInit(): void {
    


  }

  aceptar() {
    // TODO: Use EventEmitter with form value
    this.actor.nombre = this.altaForm.value.nombre?.toString();
    this.actor.apellido = this.altaForm.value.apellido?.toString();
    this.actor.edad = this.altaForm.value.edad?.toString();
    this.actor.sexo = this.altaForm.value.sexo?.toString();
    this.actor.nacionalidad = this.altaForm.value.nacionalidad?.toString();

    this._servicio.crearActor(this.actor).then(() => {
      this._router.navigate(['home']);

    });
  }
  
  paisSelecionado(pais: string){
  this.altaForm.get("nacionalidad")?.setValue(pais);
  }
}
