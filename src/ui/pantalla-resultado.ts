import type { ResultadoPoliza } from '../models/resultado-poliza';
import { buscarElemento } from './buscar-elemento';
import { formatearCambio, formatearEuros } from './formato';

type TipoCambio = 'sube' | 'baja' | 'normal';

export class PantallaResultado {
  private readonly precio: HTMLElement;
  private readonly nota: HTMLElement;
  private readonly lista: HTMLUListElement;

  constructor(private readonly contenedor: HTMLElement) {
    this.precio = buscarElemento(contenedor, '#precio-final');
    this.nota = buscarElemento(contenedor, '#nota-resultado');
    this.lista = buscarElemento<HTMLUListElement>(contenedor, '#desglose');
  }

  mostrar(resultado: ResultadoPoliza): void {
    this.precio.textContent = formatearEuros(resultado.precioFinal);
    this.nota.textContent = 'Así se forma tu precio';
    this.lista.replaceChildren(
      this.crearLinea('Precio base', formatearEuros(resultado.precioBase), 'normal'),
      ...resultado.desglose.map((linea) =>
        this.crearLinea(
          linea.nombre,
          formatearCambio(linea.cambio),
          linea.cambio > 0 ? 'sube' : 'baja',
        ),
      ),
    );
    this.animarPrecio();
    this.acercarAPantalla();
  }

  private crearLinea(nombre: string, valor: string, tipo: TipoCambio): HTMLLIElement {
    const linea = document.createElement('li');
    linea.className = 'desglose__linea';

    const textoNombre = document.createElement('span');
    textoNombre.textContent = nombre;

    const textoValor = document.createElement('span');
    textoValor.className = `desglose__valor desglose__valor--${tipo}`;
    textoValor.textContent = valor;

    linea.append(textoNombre, textoValor);
    return linea;
  }

  private animarPrecio(): void {
    if (this.sinMovimiento()) {
      return;
    }
    this.precio.animate(
      [
        { opacity: 0, transform: 'translateY(0.5rem)' },
        { opacity: 1, transform: 'translateY(0)' },
      ],
      { duration: 280, easing: 'ease-out' },
    );
  }

  private acercarAPantalla(): void {
    this.contenedor.scrollIntoView({
      behavior: this.sinMovimiento() ? 'auto' : 'smooth',
      block: 'nearest',
    });
  }

  private sinMovimiento(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}
