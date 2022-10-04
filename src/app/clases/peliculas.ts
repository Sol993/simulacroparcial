import { Actor } from "./actor";
import { TipoPelicula } from "./tipo-pelicula";

export class Peliculas {
    id?: string;
    nombre?: string;
    tipo?: TipoPelicula;
    fechaDeEstreno?: string;
    cantidadDePublico?: number;
    fotoDeLaPelicula?: string;
    Actor: Actor =new Actor();

}
