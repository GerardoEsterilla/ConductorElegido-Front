import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Conductor } from '../../shared/model/conductor';

import { ConductorService } from '../../shared/service/conductor.service';

@Component({
  selector: 'app-listar-conductor',
  templateUrl: './listar-conductor.component.html',
  styleUrls: ['./listar-conductor.component.css']
})
export class ListarConductorComponent implements OnInit {
  public listaConductor: Observable<Conductor[]>;

  constructor(protected conductorService: ConductorService) { }

  ngOnInit() {
    this.listaConductor = this.conductorService.consultar();
  }

}
