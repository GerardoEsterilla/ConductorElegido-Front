import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BorrarConductorComponent } from './components/borrar-conductor/borrar-conductor.component';
import { ConductorComponent } from './components/conductor/conductor.component';
import { CrearConductorComponent } from './components/crear-conductor/crear-conductor.component';
import { ListarConductorComponent } from './components/listar-conductor/listar-conductor.component';
import { HomeConductorComponent } from './home-conductor.component';


const routes: Routes = [
  {
    path: '',
    component: HomeConductorComponent,
    children: [
      {
        path: '',
        component: ConductorComponent
      },
      {
        path: 'crear',
        component: CrearConductorComponent
      },
      {
        path: 'listar',
        component: ListarConductorComponent
      },
      {
        path: 'borrar',
        component: BorrarConductorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConductorRoutingModule { }
