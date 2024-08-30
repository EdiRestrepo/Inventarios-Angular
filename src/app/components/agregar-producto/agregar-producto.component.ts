import { Component } from '@angular/core';
import { Producto } from '../../models/producto.interface';
import { ProductoService } from '../../services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrl: './agregar-producto.component.css'
})
export class AgregarProductoComponent {

  producto: Producto = { // Inicialización de la variable `producto`
    descripcion: '',
    precio: 0,
    existencia: 0
  };

  constructor(
    private productoServicio: ProductoService,
    private enrutador: Router
  ){}

  onSubmit(){
    this.guardarProducto();
  }

  guardarProducto(){
    if(this.producto.descripcion === '') return;
    this.productoServicio.agregarProducto(this.producto).subscribe(
      {
        next: (datos) => {
          this.irListaProductos();
        },
        error: (error: any)=>{console.log(error)}
      }
    );
  }

  irListaProductos(){
    this.enrutador.navigate(['/productos']);
  }

}
