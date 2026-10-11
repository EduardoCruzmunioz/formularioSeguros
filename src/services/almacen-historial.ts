import type { RegistroHistorial } from '../models/registro-historial';

export interface AlmacenHistorial {
  leer(): RegistroHistorial[];
  guardar(registro: RegistroHistorial): void;
  borrar(): void;
}
