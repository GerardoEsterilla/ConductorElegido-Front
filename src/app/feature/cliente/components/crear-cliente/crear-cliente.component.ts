import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cliente } from '@cliente/shared/model/cliente';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteService } from '../../shared/service/cliente.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {
  clienteForm: FormGroup;
  constructor(protected clienteService: ClienteService,
              private activeModal: NgbActiveModal) { }


  onCerrar() {
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
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      fechaNacimiento: new FormControl('', [Validators.required]),
      cedula: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
    });
  }

  public onGuardar() {
    const cliente: Cliente = this.clienteForm.getRawValue();
    this.clienteService.guardar(cliente).subscribe(() => {
      alert('se creo cliente');
      this.onCerrar();
    }, error => alert(error.error.mensaje));
  }

}
