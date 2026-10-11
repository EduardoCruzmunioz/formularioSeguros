import type { TipoVehiculo } from './vehiculo';

export interface DatosPoliza {
  edad: number;
  vehiculo: TipoVehiculo;
  hijosACargo: boolean;
  padresACargo: boolean;
}
