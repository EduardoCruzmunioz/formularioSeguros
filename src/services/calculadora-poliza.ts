import { PRECIO_BASE } from '../models/constantes';
import type { DatosPoliza } from '../models/datos-poliza';
import type { LineaDesglose, ResultadoPoliza } from '../models/resultado-poliza';
import type { Regla } from '../rules/regla';

export class CalculadoraPoliza {
  constructor(private readonly reglas: Regla[]) {}

  calcular(datos: DatosPoliza): ResultadoPoliza {
    const desglose: LineaDesglose[] = [];
    let precio = PRECIO_BASE;

    for (const regla of this.reglas) {
      const nuevoPrecio = this.redondear(regla.aplicar(precio, datos));
      const cambio = this.redondear(nuevoPrecio - precio);

      if (cambio !== 0) {
        desglose.push({ nombre: regla.nombre, cambio });
      }

      precio = nuevoPrecio;
    }

    return { precioBase: PRECIO_BASE, precioFinal: precio, desglose };
  }

  private redondear(valor: number): number {
    return Math.round(valor * 100) / 100;
  }
}
