import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicio } from '../../shared/model/servicio';
import { ServicioService } from '../../shared/service/servicio.service';


@Component({
  selector: 'app-listar-servicio',
  templateUrl: './listar-servicio.component.html',
  styleUrls: ['./listar-servicio.component.css']
})
export class ListarServicioComponent implements OnInit {
  public listaServicios: Observable<Servicio[]>;

  constructor(protected servicioService: ServicioService) { }

  ngOnInit() {
    this.listaServicios = this.servicioService.consultar();
  }

}
