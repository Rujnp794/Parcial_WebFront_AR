import { Routes } from '@angular/router';
import { CrearContratoComponent } from './crear-contrato/crear-contrato.component';
import { VerContratosComponent } from './ver-contratos/ver-contratos.component';

export const routes: Routes = [
  { path: '', redirectTo: 'mostrar-contratos', pathMatch: 'full' }, // Ruta inicial
  { path: 'crear-contrato', component: CrearContratoComponent },   // Ruta para crear un contrato
  { path: 'mostrar-contratos', component: VerContratosComponent }, // Ruta para mostrar todos los contratos
  { path: '**', redirectTo: 'mostrar-contratos' }, // Ruta por defecto para manejar rutas no existentes
];
