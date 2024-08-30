import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoListaComponent } from './components/producto-lista/producto-lista.component';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';

const routes: Routes = [
  {
    path: 'productos',
    component: ProductoListaComponent
  },
  {
    path: 'agregar-producto',
    component: AgregarProductoComponent
  },
  {
    path: 'editar-producto/:id',
    component: EditarProductoComponent
  },
  {
    path: '**',
    redirectTo: 'productos',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
