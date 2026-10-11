const formatoEuros = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR',
});

const formatoCambio = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR',
  signDisplay: 'exceptZero',
});

const formatoFecha = new Intl.DateTimeFormat('es-ES', {
  dateStyle: 'short',
  timeStyle: 'short',
});

export function formatearEuros(valor: number): string {
  return formatoEuros.format(valor);
}

export function formatearCambio(valor: number): string {
  return formatoCambio.format(valor);
}

export function formatearFecha(fecha: string): string {
  return formatoFecha.format(new Date(fecha));
}
