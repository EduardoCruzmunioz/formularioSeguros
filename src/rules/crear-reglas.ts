import { ReglaHijos } from './regla-hijos';
import { ReglaMayor25 } from './regla-mayor-25';
import { ReglaMenor25 } from './regla-menor-25';
import { ReglaPadres } from './regla-padres';
import { ReglaVehiculo } from './regla-vehiculo';
import type { Regla } from './regla';

export function crearReglas(): Regla[] {
  return [
    new ReglaMenor25(),
    new ReglaMayor25(),
    new ReglaVehiculo(),
    new ReglaHijos(),
    new ReglaPadres(),
  ];
}
