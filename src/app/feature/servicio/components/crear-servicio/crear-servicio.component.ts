import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cliente } from '@cliente/shared/model/cliente';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Servicio } from '@servicio/shared/model/servicio';
import { ServicioService } from '../../shared/service/servicio.service';

@Component({
  selector: 'app-crear-servicio',
  templateUrl: './crear-servicio.component.html',
  styleUrls: ['./crear-servicio.component.css']
})
export class CrearServicioComponent implements OnInit {
  servicioForm: FormGroup;
  cliente: Cliente;
  constructor(protected servicioService: ServicioService,
              private activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.construirFormularioServicio();
  }

  onCerrar() {
    this.activeModal.close();
  }

  crear() {
    this.servicioService.guardar(this.servicioForm.value);
  }

  private construirFormularioServicio() {
    this.servicioForm = new FormGroup({
      idCliente: new FormControl('', [Validators.required]),
      origen: new FormControl('', [Validators.required]),
      destino: new FormControl('', [Validators.required]),
      fechaServicio: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
    });
  }

  public onGuardar() {
    const servicio: Servicio = this.servicioForm.getRawValue();
    servicio.idCliente = this.cliente.id;
    this.servicioService.guardar(servicio).subscribe(() => {
      alert('se creo servicio');
      this.onCerrar();
    }, error => alert(error.error.mensaje));
  }

}
