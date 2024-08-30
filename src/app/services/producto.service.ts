import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlBase = "http://localhost:8080/inventario-app/productos";

  constructor(private http: HttpClient) {

  }

  obtenerProductosLista(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.urlBase);
  }

  agregarProducto(producto: Producto): Observable<Object> {
    return this.http.post<Object>(this.urlBase, producto);
  }

  obtenerProductoPorId(id: number | undefined){
    return this.http.get<Producto>(`${this.urlBase}/${id}`);
  }

  editarProducto(id: number | undefined, producto: Producto): Observable<Object> {
    return this.http.put<Object>(`${this.urlBase}/${id}`, producto);
  }

  eliminarProductoPorId(id: number | undefined): Observable<Object>{
    return this.http.delete<Producto>(`${this.urlBase}/${id}`);
  }
}
