import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../../models/producto.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html',
  styleUrl: './producto-lista.component.css',
  providers: [HttpClient]
})
export class ProductoListaComponent {

  productos: Producto[] = [];

  constructor(
    private serviceProducto: ProductoService,
    private enrutador: Router
  ) {

  }

  ngOnInit(): void {
    this.obtenerProductos();

  }

  private obtenerProductos() {
    this.serviceProducto.obtenerProductosLista().subscribe(
      datos => {
        console.log('Datos de productos recibidos:', datos);
        this.productos = datos;
      }
    )
  }

  editarProducto(id: number | undefined){
    this.enrutador.navigate(['editar-producto',id])
  }

  eliminarProducto(id: number | undefined){
    this.serviceProducto.eliminarProductoPorId(id).subscribe(
      {
        next: (datos) => this.obtenerProductos(),
        error: (error) => console.log(error)
      }
    )
  }

}
