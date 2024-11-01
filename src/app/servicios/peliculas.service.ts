import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Peliculas {
  id: number
  title: string
  posterURL: string
  imdbId: string
}

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private url = "https://api.sampleapis.com/movies";
  constructor(
    private readonly http:HttpClient
  ) { }
  obtenerAnimacion(){
    return this.http.get(this.url+'/animation')
  }
  obtenerClasicos(){
    return this.http.get(this.url+'/classic')
  }
  obtenerComedias(){
    return this.http.get(this.url+'/comedy')
  }
  obtenerDramas(){
    return this.http.get(this.url+'/drama')
  }
  obtenerFamiliares(){
    return this.http.get(this.url+'/family')
  }
  obtenerMisterios(){
    return this.http.get(this.url+'/mystery')
  }
}
