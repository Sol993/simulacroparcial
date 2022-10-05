import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Actor } from 'src/app/clases/actor';
import { Peliculas } from 'src/app/clases/peliculas';
import { TipoPelicula } from 'src/app/clases/tipo-pelicula';
import { MiServicioService } from 'src/app/services/mi-servicio.service';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {
  pelicula : Peliculas = new Peliculas();
  public tipoPeliculas = Object.values(TipoPelicula);
  actor: Actor=new Actor();
  altaForm = this.fb.group({
    'nombre': ['', Validators.required],
    'tipo': ['', Validators.required],
    'fecha': ['', Validators.required],
    'cantidadDePublico': ['',[Validators.required, Validators.min(0), Validators.max(100000)]],
    'actor': ['', Validators.required],
    
  });


  constructor(private _servicio: MiServicioService, private fb: FormBuilder, private _router : Router) { }
  
  ngOnInit(): void {
  }
  guardarPelicula(){
    this.pelicula.nombre = this.altaForm.value.nombre?.toString();
    this.pelicula.tipo = TipoPelicula[this.altaForm.value.tipo?.toString() as TipoPelicula];
    this.pelicula.cantidadDePublico = Number(this.altaForm.value.cantidadDePublico?.toString());
    this.pelicula.fechaDeEstreno = this.altaForm.value.fecha?.toString();
    this.pelicula.fotoDeLaPelicula = 'assets/Imagenes/Pelicula.jpg';
    this.pelicula.Actor =this.actor;
    
    this._servicio.crearPelicula(this.pelicula).then(() => {
      this._router.navigate(['home']);

    });

  }
  
  obtenerActor(actor : Actor){
    this.actor= actor;
    this.altaForm.get('actor')?.setValue(actor.nombre + ' ' +actor.apellido)
  }

}
