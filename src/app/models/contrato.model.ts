export interface Contrato {
    id: number;
    identificador: string;
    valor: number;
    nombreContratante: string;
    documentoContratante: string;
    nombreContratantista: string;
    documentoContratantista: string;
    fechaInicial: string; // O usa 'Date' si prefieres trabajar con objetos Date
    fechaFinal: string; // O usa 'Date' si prefieres trabajar con objetos Date
  }
  