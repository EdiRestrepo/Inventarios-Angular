import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoListaComponent } from './components/producto-lista/producto-lista.component';
import { provideHttpClient } from '@angular/common/http';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { FormsModule } from '@angular/forms';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component'


@NgModule({
  declarations: [
    AppComponent,
    ProductoListaComponent,
    AgregarProductoComponent,
    EditarProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [provideHttpClient(),],
  bootstrap: [AppComponent]
})
export class AppModule { }
