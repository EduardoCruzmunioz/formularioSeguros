import type { RegistroHistorial } from '../models/registro-historial';
import { buscarOpcion } from '../models/vehiculo';
import { buscarElemento } from './buscar-elemento';
import { formatearEuros, formatearFecha } from './formato';

export class PantallaHistorial {
  private readonly lista: HTMLUListElement;
  private readonly botonBorrar: HTMLButtonElement;

  constructor(private readonly contenedor: HTMLElement) {
    this.lista = buscarElemento<HTMLUListElement>(contenedor, '#lista-historial');
    this.botonBorrar = buscarElemento<HTMLButtonElement>(contenedor, '#borrar-historial');
  }

  alBorrar(accion: () => void): void {
    this.botonBorrar.addEventListener('click', accion);
  }

  mostrar(registros: RegistroHistorial[]): void {
    this.contenedor.hidden = registros.length === 0;
    this.lista.replaceChildren(...registros.map((registro) => this.crearItem(registro)));
  }

  private crearItem(registro: RegistroHistorial): HTMLLIElement {
    const item = document.createElement('li');
    item.className = 'historial__item';

    const detalle = document.createElement('span');
    detalle.textContent = this.describir(registro);

    const precio = document.createElement('strong');
    precio.className = 'historial__precio';
    precio.textContent = formatearEuros(registro.precioFinal);

    const fecha = document.createElement('time');
    fecha.className = 'historial__fecha';
    fecha.dateTime = registro.fecha;
    fecha.textContent = formatearFecha(registro.fecha);

    item.append(detalle, precio, fecha);
    return item;
  }

  private describir(registro: RegistroHistorial): string {
    const { edad, vehiculo, hijosACargo, padresACargo } = registro.datos;
    const partes = [`${edad} años`, buscarOpcion(vehiculo).etiqueta];

    const personas: string[] = [];
    if (hijosACargo) {
      personas.push('hijos');
    }
    if (padresACargo) {
      personas.push('padres');
    }
    if (personas.length > 0) {
      partes.push(`${personas.join(' y ')} a cargo`);
    }

    return partes.join(', ');
  }
}
