import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contrato } from '../models/contrato.model';
import { ContratoService } from '../services/contrato.service';

@Component({
  selector: 'app-crear-contrato',
  standalone: true,
  imports: [],
  templateUrl: './crear-contrato.component.html',
  styleUrl: './crear-contrato.component.css'
})
export class CrearContratoComponent {
contrato: Contrato = {
    id: 0,
    identificador: '',
    valor: 0,
    nombreContratante: '',
    documentoContratante: '',
    nombreContratantista: '',
    documentoContratantista: '',
    fechaInicial: '',
    fechaFinal: ''
  };

  constructor(private contratoService: ContratoService, private router: Router) {}

  // Método para insertar un nuevo contrato
  insertarContrato() {
    this.contratoService.createContrato(this.contrato).subscribe(
      (response: any) => {
      console.log('Contrato creado', response);
      this.router.navigate(['/ver-contratos']); // Redirige al componente de ver contratos
      },
      (error: any) => {
      console.error('Error al crear el contrato', error);
      }
    );
  }
}

