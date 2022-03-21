import { NgModule } from '@angular/core';
import { CrearServicioComponent } from './components/crear-servicio/crear-servicio.component';
import { ListarServicioComponent } from './components/listar-servicio/listar-servicio.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { HomeServicioComponent } from './home-servicio.component';
import { ServicioRoutingModule } from './servicio-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ServicioService } from './shared/service/servicio.service';



@NgModule({
  declarations: [
    CrearServicioComponent,
    ListarServicioComponent,
    ServicioComponent,
    HomeServicioComponent
  ],
  imports: [
    ServicioRoutingModule,
    SharedModule,
  ],
  providers: [ServicioService]
})
export class ServicioModule { }
