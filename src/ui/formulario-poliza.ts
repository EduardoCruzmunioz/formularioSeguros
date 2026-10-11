import type { DatosPoliza } from '../models/datos-poliza';
import { OPCIONES_VEHICULO, type TipoVehiculo } from '../models/vehiculo';
import { buscarElemento } from './buscar-elemento';

export class FormularioPoliza {
  private readonly campoEdad: HTMLInputElement;
  private readonly campoVehiculo: HTMLSelectElement;
  private readonly campoHijos: HTMLInputElement;
  private readonly campoPadres: HTMLInputElement;
  private readonly textoError: HTMLElement;

  constructor(private readonly formulario: HTMLFormElement) {
    this.campoEdad = buscarElemento<HTMLInputElement>(formulario, '#edad');
    this.campoVehiculo = buscarElemento<HTMLSelectElement>(formulario, '#vehiculo');
    this.campoHijos = buscarElemento<HTMLInputElement>(formulario, '#hijos');
    this.campoPadres = buscarElemento<HTMLInputElement>(formulario, '#padres');
    this.textoError = buscarElemento(formulario, '#error-edad');
    this.llenarVehiculos();
  }

  alEnviar(accion: () => void): void {
    this.formulario.addEventListener('submit', (evento) => {
      evento.preventDefault();
      accion();
    });
  }

  leer(): DatosPoliza {
    return {
      edad: this.campoEdad.value === '' ? Number.NaN : Number(this.campoEdad.value),
      vehiculo: this.campoVehiculo.value as TipoVehiculo,
      hijosACargo: this.campoHijos.checked,
      padresACargo: this.campoPadres.checked,
    };
  }

  mostrarError(mensaje: string): void {
    this.textoError.textContent = mensaje;
    this.campoEdad.setAttribute('aria-invalid', 'true');
    this.campoEdad.focus();
  }

  limpiarError(): void {
    this.textoError.textContent = '';
    this.campoEdad.removeAttribute('aria-invalid');
  }

  private llenarVehiculos(): void {
    for (const opcion of OPCIONES_VEHICULO) {
      const elemento = document.createElement('option');
      elemento.value = opcion.tipo;
      elemento.textContent = opcion.etiqueta;
      this.campoVehiculo.append(elemento);
    }
  }
}
