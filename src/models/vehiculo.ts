export type TipoVehiculo =
  | 'familiar'
  | 'comercial'
  | 'deportivo-menos-200'
  | 'deportivo-mas-200';

export interface OpcionVehiculo {
  tipo: TipoVehiculo;
  etiqueta: string;
  recargo: number;
}

export const OPCIONES_VEHICULO: OpcionVehiculo[] = [
  { tipo: 'familiar', etiqueta: 'Familiar', recargo: 0 },
  { tipo: 'comercial', etiqueta: 'Comercial', recargo: 165 },
  { tipo: 'deportivo-menos-200', etiqueta: 'Deportivo de menos de 200 cv', recargo: 280 },
  { tipo: 'deportivo-mas-200', etiqueta: 'Deportivo de más de 200 cv', recargo: 350 },
];

export function buscarOpcion(tipo: TipoVehiculo): OpcionVehiculo {
  const opcion = OPCIONES_VEHICULO.find((o) => o.tipo === tipo);
  if (!opcion) {
    throw new Error(`Vehiculo no existe: ${tipo}`);
  }
  return opcion;
}
