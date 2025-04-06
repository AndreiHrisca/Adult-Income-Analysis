import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // URL base de la API FastAPI
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  // Método para obtener los datos de workclass
  getWorkclassData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/workclass`);
  }
}