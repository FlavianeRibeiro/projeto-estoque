import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http: HttpClient) { }

  apiUrl = 'http://localhost:3000/produts'


  getAllProduts():Observable<any>{
    return this._http.get(`${this.apiUrl}`);
  }

  getAllProdutsActive():Observable<any>{
    return this._http.get(`${this.apiUrl}All`);
  }

  creat(produt:any):Observable<any>{
    return this._http.post(`${this.apiUrl}`,produt)
  }

  delete(id:any):Observable<any>{
    return this._http.delete(`${this.apiUrl}/${id}`);
  }

  update(produt:any, id:any):Observable<any>{
    return this._http.put(`${this.apiUrl}/${id}`, produt)
  }

  getIdProdut(id: any):Observable<any>{
    return this._http.get(`${this.apiUrl}/${id}`)
  }
}
