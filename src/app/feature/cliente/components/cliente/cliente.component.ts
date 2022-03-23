import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CrearServicioComponent } from '@servicio/components/crear-servicio/crear-servicio.component';
import { ConsultaClienteComponent } from '../consulta-cliente/consulta-cliente.component';
import { ConsultarServicioComponent } from '../consultar-servicio/consultar-servicio.component';
import { CrearClienteComponent } from '../crear-cliente/crear-cliente.component';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(private modalService: NgbModal) { }


  registrarCliente() {
    this.modalService.open(CrearClienteComponent, {
      backdrop: 'static'
    })
  }

 

  registrarServicio() {
    const modalref = this.modalService.open(ConsultaClienteComponent)
    modalref.componentInstance.emiter.subscribe(data =>{
    const modalref2 =  this.modalService.open(CrearServicioComponent, {
        backdrop: 'static'
      })
      modalref2.componentInstance.cliente=data; 
    })
  }

  consultarServicio() {
    const modalref = this.modalService.open(ConsultaClienteComponent)
    modalref.componentInstance.emiter.subscribe(data =>{
    const modalref2 =  this.modalService.open(ConsultarServicioComponent, {
        backdrop: 'static'
      })
      
      modalref2.componentInstance.cliente=data; 
    })
  }


  ngOnInit() {


  }



}
