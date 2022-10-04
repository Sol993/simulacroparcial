import { query } from '@angular/animations';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Actor } from '../clases/actor';
import { Peliculas } from '../clases/peliculas';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {


  peliculasLista: AngularFirestoreCollection<Peliculas> ;
  listaActor: AngularFirestoreCollection<Actor> ;

  constructor(private _db: AngularFirestore) { 
    this.peliculasLista = _db.collection('pelicula');
    this.listaActor = _db.collection('actor');
  }

  crearPelicula(peli : Peliculas): any {
    return this.peliculasLista.add({...peli});
  }
  trearTodasLasPelis(): AngularFirestoreCollection<Peliculas> {
    return this.peliculasLista;
  }
  Modificar(id: string, data: any): Promise<void> {
    return this.peliculasLista.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.peliculasLista.doc(id).delete();
  }

  crearActor(actor : Actor): any {
    return this.listaActor.add({...actor});
  }
  trearActores(): AngularFirestoreCollection<Actor> {
    return this.listaActor;
  }

  traerPeliculasPorActor(actorFilter:any) : AngularFirestoreCollection<Peliculas>{
    return this._db.collection('pelicula', ref => ref.where('Actor.id','==', actorFilter ));
        //const q= query(AngularFirestoreCollection(this._db,'pelicula'),where('actor/id','==', actorFilter ))
  }
}
