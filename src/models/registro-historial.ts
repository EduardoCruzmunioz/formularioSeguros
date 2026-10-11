import type { DatosPoliza } from './datos-poliza';

export interface RegistroHistorial {
  fecha: string;
  datos: DatosPoliza;
  precioFinal: number;
}
