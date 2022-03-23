import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Conductor } from '@conductor/shared/model/conductor';
import { ConductorService } from '@conductor/shared/service/conductor.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;

@Component({
  selector: 'app-consulta-conductor',
  templateUrl: './consulta-conductor.component.html',
  styleUrls: ['./consulta-conductor.component.css']
})
export class ConsultaConductorComponent implements OnInit {
  consultaForm: FormGroup;
 
  constructor(protected conductorService: ConductorService,
              private activeModal: NgbActiveModal, 
              private router: Router) { }


  onCerrar(){
      this.activeModal.close();
    }

  ngOnInit() {
      this.construirFormularioConsultaConductor();
    }

    private construirFormularioConsultaConductor() {
      this.consultaForm = new FormGroup({
         cedula: new FormControl('',[Validators.required,Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO)]),
                                     
      });
    }

    public onConsultar() {
      const conductor: Conductor = this.consultaForm.getRawValue();
      this.conductorService.consultarCedula(conductor.cedula).subscribe( () => {
      this.onCerrar(); 
      this.router.navigate(['/conductor/servicio']);
      },error => alert(error.error.mensaje))

    }




}
