import { Component, OnInit } from '@angular/core';
import { Cliente } from '@cliente/shared/model/cliente';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Servicio } from '@servicio/shared/model/servicio';
import { ServicioService } from '@servicio/shared/service/servicio.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-consultar-servicio',
  templateUrl: './consultar-servicio.component.html',
  styleUrls: ['./consultar-servicio.component.css']
})
export class ConsultarServicioComponent implements OnInit {
  public listaServicios: Observable<Servicio[]>;
  cliente : Cliente;
 

  constructor(protected servicioService: ServicioService,
              private activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.listaServicios= this.servicioService.consultarServicios(this.cliente.id);
  }

  onCerrar(){
    this.activeModal.close();
  }

}
