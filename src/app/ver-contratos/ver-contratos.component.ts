// src/app/components/ver-contratos/ver-contratos.component.ts
import { Component, OnInit } from '@angular/core';
import { Contrato } from '../models/contrato.model';
import { ContratoService } from '../services/contrato.service';

@Component({
  selector: 'app-ver-contratos',
  templateUrl: './ver-contratos.component.html',
  styleUrls: ['./ver-contratos.component.css']
})
export class VerContratosComponent implements OnInit {
  contratos: Contrato[] = [];

  constructor(private contratoService: ContratoService) {}

  ngOnInit(): void {
    this.getContratos();
  }

  // Obtener todos los contratos
  getContratos() {
    this.contratoService.getContratos().subscribe(
      (data) => {
        this.contratos = data;
        console.log('Contratos:', data);
      },
      (error) => {
        console.error('Error al obtener contratos', error);
      }
    );
  }
}
