import { EDAD_LIMITE, RECARGO_MENOR_25 } from '../models/constantes';
import type { DatosPoliza } from '../models/datos-poliza';
import type { Regla } from './regla';

export class ReglaMenor25 implements Regla {
  readonly nombre = 'Menor de 25 años';

  aplicar(precio: number, datos: DatosPoliza): number {
    if (datos.edad < EDAD_LIMITE) {
      return precio + RECARGO_MENOR_25;
    }
    return precio;
  }
}
