import { DESCUENTO_MAYOR_25, EDAD_LIMITE } from '../models/constantes';
import type { DatosPoliza } from '../models/datos-poliza';
import type { Regla } from './regla';

export class ReglaMayor25 implements Regla {
  readonly nombre = 'Mayor de 25 años';

  aplicar(precio: number, datos: DatosPoliza): number {
    if (datos.edad > EDAD_LIMITE) {
      return precio - DESCUENTO_MAYOR_25;
    }
    return precio;
  }
}
