import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://servicodados.ibge.gov.br/api/v2/censos/nomes';

  constructor(private http: HttpClient) {}

  getFrequencyData(nome: string): Observable<any> {
    const url = `${this.baseUrl}/${nome}`;
    return this.http.get(url);
  }
}
