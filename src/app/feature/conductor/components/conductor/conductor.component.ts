import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConsultaConductorComponent } from '../consulta-conductor/consulta-conductor.component';
import { CrearConductorComponent } from '../crear-conductor/crear-conductor.component';


@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.css']
})
export class ConductorComponent implements OnInit {

  constructor(private modalService: NgbModal) { }


  registrarConductor(){
    this.modalService.open(CrearConductorComponent,{
      backdrop: 'static'
    });
  }

  consultarConductor(){
    this.modalService.open(ConsultaConductorComponent,{
      backdrop: 'static'
    });
  }

  ngOnInit() {


  }

  

}
