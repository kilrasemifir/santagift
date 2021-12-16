import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cadeau } from '../models/Cadeau';

@Injectable({
  providedIn: 'root'
})
export class CadeauHttpService {

  baseUrl = "http://localhost:8080/cadeaux";

  constructor(private http: HttpClient) { }

  public findAll():Observable<Cadeau[]> {
    return this.http.get<Cadeau[]>(this.baseUrl)
  }

  public deleteById(id:string){
    return this.http.delete(this.baseUrl+"/"+id);
  }

  public save(cadeau:Cadeau){
    return this.http.post<Cadeau>(this.baseUrl, cadeau);
  }

}
