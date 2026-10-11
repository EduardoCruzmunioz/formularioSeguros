import { PORCENTAJE_HIJOS } from '../models/constantes';
import { ReglaDescuento } from './regla-descuento';

export class ReglaHijos extends ReglaDescuento {
  constructor() {
    super('Hijos a cargo', PORCENTAJE_HIJOS, (datos) => datos.hijosACargo);
  }
}
