import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  getWorkclassData(): Observable<any[]> {
    // O especifica el tipo que esperas en lugar de any[]
    return this.http.get<any[]>(`${this.apiUrl}/workclass`);
  }
}