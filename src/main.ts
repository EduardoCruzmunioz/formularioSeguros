import './styles/main.css';
import { crearReglas } from './rules/crear-reglas';
import type { AlmacenHistorial } from './services/almacen-historial';
import { AlmacenLocal } from './services/almacen-local';
import { CalculadoraPoliza } from './services/calculadora-poliza';
import { validarDatos } from './services/validador-datos';
import { buscarElemento } from './ui/buscar-elemento';
import { FormularioPoliza } from './ui/formulario-poliza';
import { PantallaHistorial } from './ui/pantalla-historial';
import { PantallaResultado } from './ui/pantalla-resultado';

const formulario = new FormularioPoliza(buscarElemento<HTMLFormElement>(document, '#formulario'));
const pantallaResultado = new PantallaResultado(buscarElemento(document, '#resultado'));
const pantallaHistorial = new PantallaHistorial(buscarElemento(document, '#historial'));
const calculadora = new CalculadoraPoliza(crearReglas());
const almacen: AlmacenHistorial = new AlmacenLocal();

function calcular(): void {
  const datos = formulario.leer();
  const error = validarDatos(datos);

  if (error) {
    formulario.mostrarError(error);
    return;
  }

  formulario.limpiarError();
  const resultado = calculadora.calcular(datos);
  pantallaResultado.mostrar(resultado);

  almacen.guardar({
    fecha: new Date().toISOString(),
    datos,
    precioFinal: resultado.precioFinal,
  });
  pantallaHistorial.mostrar(almacen.leer());
}

function borrarHistorial(): void {
  almacen.borrar();
  pantallaHistorial.mostrar([]);
}

formulario.alEnviar(calcular);
pantallaHistorial.alBorrar(borrarHistorial);
pantallaHistorial.mostrar(almacen.leer());
