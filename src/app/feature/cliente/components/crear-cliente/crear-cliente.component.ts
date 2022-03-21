import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cliente } from '@cliente/shared/model/cliente';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteService } from '../../shared/service/cliente.service';

/**const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 20; */

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {
  clienteForm: FormGroup;
  constructor(protected clienteService: ClienteService,
              private activeModal: NgbActiveModal) { }


  onCerrar(){
    this.activeModal.close();
  }

  ngOnInit() {
    this.construirFormularioCliente();
  }

  crear() {
    this.clienteService.guardar(this.clienteForm.value);
  }

  private construirFormularioCliente() {
    this.clienteForm = new FormGroup({
      nombre: new FormControl('',[Validators.required]),
      apellido: new FormControl('',[Validators.required]),
      fechaNacimiento: new FormControl('',[Validators.required]),
      cedula: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      /**descripcion: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
                                                             Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)])
       */                                                       
    });
  }

  public onGuardar() {
    const cliente: Cliente = this.clienteForm.getRawValue();
    this.clienteService.guardar(cliente).subscribe( data => {
      alert('se creo cliente');
      console.log(data);
      this.onCerrar();
    },error => alert(error.error.mensaje))
  }

}
