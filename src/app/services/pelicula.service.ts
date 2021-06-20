import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  private apikey="058a837beadfdcd259654fb11b4dc40f";
  private ulrmovie="https://api.themoviedb.org/3";
  constructor( private http:HttpClient) { 
  
  }

  getPopulares(){
    let url=`${this.ulrmovie}/movie/popular?api_key=${this.apikey}&language=es-US&page=1`;
    return this.http.get(url).pipe(map((resp:any)=>{
      return resp['results']
    }))
  }
  
  getPeliculas(parametro:string,pagina:any){
  
    let url=`${this.ulrmovie}/search/movie?api_key=${this.apikey}&language=es-US&query=${parametro}&page=${pagina}&include_adult=false`;
 
    return this.http.get(url).pipe(map((resp:any)=>{
      return resp['results']
    }))
  }

  getPelicula(id:number,){
    
let url=`${this.ulrmovie}/movie/${id}?api_key=${this.apikey}&language=es-ES`
    return this.http.get(url)

  }
/*   https://api.themoviedb.org/3/movie/637649/videos?api_key=058a837beadfdcd259654fb11b4dc40f&language=en */
  getTrailer(id:any){
    let url=`${this.ulrmovie}/movie/${id}/videos?api_key=${this.apikey}&language=en`
  
    return this.http.get(url)
  }
  getActors(id:any){
    let url=`${this.ulrmovie}/movie/${id}/credits?api_key=${this.apikey}&language=en`
  
    return this.http.get(url)
  }
/*  https://api.themoviedb.org/3/movie/now_playing?api_key=058a837beadfdcd259654fb11b4dc40f&language=es&page=1*/
  getCatelera(){
    let url=`${this.ulrmovie}/movie/now_playing?api_key=${this.apikey}&language=es&page=1`
    return this.http.get(url).pipe(map((resp:any)=>{
      return resp['results']
    }))
  }
/*   https://api.themoviedb.org/3/genre/movie/list?api_key=058a837beadfdcd259654fb11b4dc40f&language=es */
  getGenero(){
    let url=`${this.ulrmovie}/genre/movie/list?api_key=${this.apikey}&language=es&page=1`
    return this.http.get(url).pipe(map((resp:any)=>{
      return resp['genres']
    }))
  }
/*   
https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1 */
  getMejores(){
    let url=`${this.ulrmovie}/movie/top_rated?api_key=${this.apikey}&language=es&page=1`
    return this.http.get(url).pipe(map((resp:any)=>{
      return resp['genres']
    }))
  }
  /*https://api.themoviedb.org/3/discover/movie?api_key=058a837beadfdcd259654fb11b4dc40f&with_genres=27&language=es&page=1 */
  getGeneropelilist(id:string,pagina=1){
    let url=`${this.ulrmovie}/discover/movie?api_key=${this.apikey}&with_genres=${id}&language=es&page=${pagina}`
  
    return this.http.get(url).pipe(map((resp:any)=>{
      return resp['results']
    }))
  }
 
}
