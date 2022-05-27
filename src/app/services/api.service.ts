import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http'
import { Observable } from 'rxjs';
import { IResponse } from '../interfaces/thefork.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL : string = 'https://api-the-fork.vercel.app/'

  constructor( private http : HttpClient ) { }

  getSliders( path : string = '' ) : Observable<IResponse> {
    return this.http.get<IResponse>( this.baseURL + `sliders/${path}` )
  }

  getRestaurantes() : Observable<IResponse> {
    return this.http.get<IResponse>( this.baseURL + `restaurantes` )
  }

  getRestauranteById( id : string ) : Observable<IResponse> {
    return this.http.get<IResponse>( this.baseURL + `restaurantes/${id}` )
  }

  getCity() : Observable<any>{
    return this.http.get<IResponse>( this.baseURL + `ciudades` )
  }
}
