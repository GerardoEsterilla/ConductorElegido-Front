import { NgModule } from '@angular/core';
import { HomeConductorComponent } from './home-conductor.component';
import { CrearConductorComponent } from './components/crear-conductor/crear-conductor.component';
import { ListarConductorComponent } from './components/listar-conductor/listar-conductor.component';
import { BorrarConductorComponent } from './components/borrar-conductor/borrar-conductor.component';
import { ConductorRoutingModule } from './conductor-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ConductorService } from './shared/service/conductor.service';
import { ConductorComponent } from './components/conductor/conductor.component';



@NgModule({
  declarations: [
    CrearConductorComponent,
    ListarConductorComponent,
    BorrarConductorComponent,
    ConductorComponent,
    HomeConductorComponent
  ],
  imports: [
    ConductorRoutingModule,
    SharedModule,
  ],
  providers: [ConductorService]
})
export class ConductorModule { }
