import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  // URL base da sua API local
  private apiUrl = 'http://localhost:3000/api/products'; 

  constructor(private http: HttpClient) { }

  // 1. Criação (POST)
  cadastrar(produto: any): Observable<any> {
    return this.http.post(this.apiUrl, produto);
  }

  // 2. Consulta Completa (GET)
  listar(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // 2.1 Consulta Específica (GET por ID)
  buscarPorId(id: string | number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // 3. Atualização (PUT)
  atualizar(id: string | number, produto: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, produto);
  }

  // 4. Destruição (DELETE)
  excluir(id: string | number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}