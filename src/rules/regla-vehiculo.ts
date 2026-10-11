import type { DatosPoliza } from '../models/datos-poliza';
import { buscarOpcion } from '../models/vehiculo';
import type { Regla } from './regla';

export class ReglaVehiculo implements Regla {
  readonly nombre = 'Tipo de vehículo';

  aplicar(precio: number, datos: DatosPoliza): number {
    return precio + buscarOpcion(datos.vehiculo).recargo;
  }
}
