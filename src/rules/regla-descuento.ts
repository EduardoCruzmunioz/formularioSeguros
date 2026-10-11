import type { DatosPoliza } from '../models/datos-poliza';
import type { Regla } from './regla';

export class ReglaDescuento implements Regla {
  constructor(
    readonly nombre: string,
    private readonly porcentaje: number,
    private readonly aplicaSi: (datos: DatosPoliza) => boolean,
  ) {}

  aplicar(precio: number, datos: DatosPoliza): number {
    if (!this.aplicaSi(datos)) {
      return precio;
    }
    return precio - (precio * this.porcentaje) / 100;
  }
}
