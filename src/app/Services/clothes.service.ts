import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = "http://localhost/clothes-track-api/index.php";
  constructor(private http: HttpClient) { }

  public getData(): Observable<any>{
    return this.http.get<any>(this.url);
  }

  createClothe(clotheData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.url, clotheData, { headers });
  }

  public setUsed(id: String, clotheData: any): Observable<any>{
    let url = this.url + id;
    return this.http.put(url, clotheData);
  }

}
