import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '@cliente/shared/model/cliente';
import { ClienteService } from '@cliente/shared/service/cliente.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';



const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
@Component({
  selector: 'app-consulta-cliente',
  templateUrl: './consulta-cliente.component.html',
  styleUrls: ['./consulta-cliente.component.css']
})
export class ConsultaClienteComponent implements OnInit {
  consultaForm: FormGroup;
  @Output()
  emiter = new EventEmitter();

  constructor(protected clienteService: ClienteService,
    private activeModal: NgbActiveModal) { }

    onCerrar(){
      this.activeModal.close();
    }
  
    ngOnInit() {
      this.construirFormularioConsultaCliente();
    }
  
  
    private construirFormularioConsultaCliente() {
      this.consultaForm = new FormGroup({
         cedula: new FormControl('',[Validators.required,Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO)]),
                                     
      });
    }
  
    public onConsultar() {
      const cliente: Cliente = this.consultaForm.getRawValue();
      this.clienteService.consultarCedula(cliente.cedula).subscribe( data => {
        this.emiter.emit(data);
        this.onCerrar();
      },error => alert(error.error.mensaje));
    }

}
