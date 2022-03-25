import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearServicioComponent } from './components/crear-servicio/crear-servicio.component';
import { ListarServicioComponent } from './components/listar-servicio/listar-servicio.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { HomeServicioComponent } from './home-servicio.component';


const routes: Routes = [
  {
    path: '',
    component: HomeServicioComponent,
    children: [
      {
        path: '',
        component: ServicioComponent
      },
      {
        path: 'crear',
        component: CrearServicioComponent
      },
      {
        path: 'listar',
        component: ListarServicioComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicioRoutingModule { }
