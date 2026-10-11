import { MAXIMO_HISTORIAL } from '../models/constantes';
import type { RegistroHistorial } from '../models/registro-historial';
import type { AlmacenHistorial } from './almacen-historial';

const CLAVE = 'historial-polizas';

export class AlmacenLocal implements AlmacenHistorial {
  leer(): RegistroHistorial[] {
    try {
      const texto = localStorage.getItem(CLAVE);
      return texto ? (JSON.parse(texto) as RegistroHistorial[]) : [];
    } catch {
      return [];
    }
  }

  guardar(registro: RegistroHistorial): void {
    const lista = [registro, ...this.leer()].slice(0, MAXIMO_HISTORIAL);
    try {
      localStorage.setItem(CLAVE, JSON.stringify(lista));
    } catch {
      return;
    }
  }

  borrar(): void {
    try {
      localStorage.removeItem(CLAVE);
    } catch {
      return;
    }
  }
}
