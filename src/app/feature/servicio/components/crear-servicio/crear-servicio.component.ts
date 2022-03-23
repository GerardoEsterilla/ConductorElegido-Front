import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cliente } from '@cliente/shared/model/cliente';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Servicio } from '@servicio/shared/model/servicio';
import { ServicioService } from '../../shared/service/servicio.service';

/**const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 20; */

@Component({
  selector: 'app-crear-servicio',
  templateUrl: './crear-servicio.component.html',
  styleUrls: ['./crear-servicio.component.css']
})
export class CrearServicioComponent implements OnInit {
  servicioForm: FormGroup;
  cliente : Cliente;
  constructor(protected servicioService: ServicioService,
              private activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.construirFormularioServicio();
  }

  onCerrar(){
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

      
      /**descripcion: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
                                                             Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)])
       */});
  }

  public onGuardar() {
    const servicio: Servicio = this.servicioForm.getRawValue();
    servicio.idCliente= this.cliente.id;
    this.servicioService.guardar(servicio).subscribe( () => {
      alert('se creo servicio');
      this.onCerrar();
    },error => alert(error.error.mensaje))
  }

}
