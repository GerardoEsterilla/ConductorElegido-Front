import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { ListarClienteComponent } from './components/listar-cliente/listar-cliente.component';
import { BorrarClienteComponent } from './components/borrar-cliente/borrar-cliente.component';


const routes: Routes = [
  {
    path: '',
    component: ClienteComponent,
    children: [
      {
        path: 'crear',
        component: CrearClienteComponent
      },
      {
        path: 'listar',
        component: ListarClienteComponent
      },
      {
        path: 'borrar',
        component: BorrarClienteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
