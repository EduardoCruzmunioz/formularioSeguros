import { PORCENTAJE_PADRES } from '../models/constantes';
import { ReglaDescuento } from './regla-descuento';

export class ReglaPadres extends ReglaDescuento {
  constructor() {
    super('Padres a cargo', PORCENTAJE_PADRES, (datos) => datos.padresACargo);
  }
}
