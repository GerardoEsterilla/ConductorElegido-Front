import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarClienteComponent } from './components/listar-cliente/listar-cliente.component';
import { BorrarClienteComponent } from './components/borrar-cliente/borrar-cliente.component';
import { HomeClienteComponent } from './home-cliente.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { CrearServicioComponent } from '@servicio/components/crear-servicio/crear-servicio.component';


const routes: Routes = [
  {
    path: '',
    component: HomeClienteComponent,
    children: [
      {
        path: '',
        component: ClienteComponent
      },
      {
        path: 'listar',
        component: ListarClienteComponent
      },
      {
        path: 'borrar',
        component: BorrarClienteComponent
      },
      {
        path: 'servicio',
        component: CrearServicioComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
