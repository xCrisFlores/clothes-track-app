import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  selected_clothe?: number;

  private url = "http://localhost/clothes-track-api/index.php";
  constructor(private http: HttpClient) {
   }

   public setClothe(clothe_id: number): void{
    this.selected_clothe = clothe_id;
   }

  public getData(): Observable<any>{
    return this.http.get<any>(this.url);
  }

  createClothe(clotheData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.url, clotheData, { headers });
  }

  public setUsed(id: number): Observable<any>{
    return this.http.put(this.url, {"id": id});
  }

  public deleteClothe(id: string): Observable<any>{
    let url = `${this.url}/?id=${id}`; 
    return this.http.delete(url);
  }

}
