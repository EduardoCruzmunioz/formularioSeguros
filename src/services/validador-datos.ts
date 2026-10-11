import { EDAD_MAXIMA, EDAD_MINIMA } from '../models/constantes';
import type { DatosPoliza } from '../models/datos-poliza';

export function validarDatos(datos: DatosPoliza): string | null {
  if (!Number.isInteger(datos.edad)) {
    return 'Escribe tu edad con un número entero.';
  }
  if (datos.edad < EDAD_MINIMA) {
    return `Hay que tener ${EDAD_MINIMA} años o más.`;
  }
  if (datos.edad > EDAD_MAXIMA) {
    return `La edad máxima es ${EDAD_MAXIMA} años.`;
  }
  return null;
}
