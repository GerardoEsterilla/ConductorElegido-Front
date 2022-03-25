import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Conductor } from '@conductor/shared/model/conductor';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConductorService } from '../../shared/service/conductor.service';


/**const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 20;* */

@Component({
  selector: 'app-crear-conductor',
  templateUrl: './crear-conductor.component.html',
  styleUrls: ['./crear-conductor.component.css']
})
export class CrearConductorComponent implements OnInit {
  conductorForm: FormGroup;
  constructor(protected conductorService: ConductorService,
              private activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.construirFormularioConductor();
  }

  onCerrar(){
    this.activeModal.close();
  }

  crear() {
    this.conductorService.guardar(this.conductorForm.value);
  }

  private construirFormularioConductor() {
    this.conductorForm = new FormGroup({
      nombre: new FormControl('',[Validators.required]),
      apellido: new FormControl('',[Validators.required]),
      fechaNacimiento: new FormControl('',[Validators.required]),
      cedula: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      telefono: new FormControl('',[Validators.required]),
      foto: new FormControl('',[Validators.required]),

      /*descripcion: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
                                                             Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)])
    */});
  }
  public onGuardar() {
    const conductor: Conductor = this.conductorForm.getRawValue();
    this.conductorService.guardar(conductor).subscribe( () => {
      alert('se creo conductor');
      this.onCerrar();
    },error => alert(error.error.mensaje));
  }


}
