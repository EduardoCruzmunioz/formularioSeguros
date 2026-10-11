export interface LineaDesglose {
  nombre: string;
  cambio: number;
}

export interface ResultadoPoliza {
  precioBase: number;
  precioFinal: number;
  desglose: LineaDesglose[];
}
