import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from '@home/home.component';
import { ProductoModule } from '@producto/producto.module';
import { CoreModule } from '@core/core.module';
import { CookieService } from 'ngx-cookie-service';
import { ClienteModule } from './feature/cliente/cliente.module';
import { ConductorModule } from './feature/conductor/conductor.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServicioModule } from './feature/servicio/servicio.module';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductoModule,
    ClienteModule,
    ConductorModule,
    CoreModule,
    NgbModule,
    ServicioModule,
],
  providers: [CookieService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
