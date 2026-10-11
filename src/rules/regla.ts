import type { DatosPoliza } from '../models/datos-poliza';

export interface Regla {
  readonly nombre: string;
  aplicar(precio: number, datos: DatosPoliza): number;
}
