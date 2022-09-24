import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesServicioService {

  constructor(private _http : HttpClient) { }

  public listarPaises(){
    return this._http.get("https://restcountries.com/v2/all");
  }
  public buscarpais(pais : string)
  {
    return this._http.get("https://restcountries.com/v3.1/name/"+pais);
  }
}
