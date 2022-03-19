import { Component } from '@angular/core';
import { ClienteService } from '@cliente/shared/service/cliente.service';
import { MenuItem } from '@core/modelo/menu-item';
import { ConductorService } from './feature/conductor/shared/service/conductor.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ClienteService,ConductorService]
})
export class AppComponent {
  title = 'app-base';
  public companies: MenuItem[] = [
    { url: '/home', nombre: 'home' },
    { url: '/producto', nombre: 'producto' },
    { url: '/cliente',  nombre: 'cliente'},
    { url: '/conductor',  nombre: 'conductor'}
  ];
  

  
}
