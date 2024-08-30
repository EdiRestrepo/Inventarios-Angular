import { Component } from '@angular/core';
import { Producto } from '../../models/producto.interface';
import { ProductoService } from '../../services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrl: './editar-producto.component.css'
})
export class EditarProductoComponent {

  producto: Producto = { // Inicialización de la variable `producto`
    descripcion: '',
    precio: 0,
    existencia: 0
  };

  id: number | undefined;

  constructor(
    private productoService: ProductoService,
    private ruta: ActivatedRoute,
    private enrutador: Router
  ){}

  ngOnInit(){
    this.id = this.ruta.snapshot.params['id'];
    this.productoService.obtenerProductoPorId(this.id).subscribe(
      {
        next: (datos) => this.producto = datos,
        error: (error: any) => console.log(error)
      }
    )
  }

  onSubmit(){
    this.guardarProducto();
  }

  guardarProducto(){
    this.productoService.editarProducto(this.id, this.producto).subscribe(
      {
        next: (datos) => this.irProductoLista(),
        error: (error) => console.log(error)
      }
    )
  }

  irProductoLista(){
    this.enrutador.navigate(['/productos']);
  }

}
