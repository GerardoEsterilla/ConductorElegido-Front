import { NgModule } from '@angular/core';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { ListarClienteComponent } from './components/listar-cliente/listar-cliente.component';
import { BorrarClienteComponent } from './components/borrar-cliente/borrar-cliente.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ClienteService } from './shared/service/cliente.service';
import { HomeClienteComponent } from './home-cliente.component';



@NgModule({
  declarations: [
    CrearClienteComponent,
    ListarClienteComponent,
    BorrarClienteComponent,
    ClienteComponent,
    HomeClienteComponent
  ],
  imports: [
    ClienteRoutingModule,
    SharedModule,
  ],
  providers: [ClienteService]
  
})
export class ClienteModule { }
