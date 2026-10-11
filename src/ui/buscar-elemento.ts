export function buscarElemento<T extends HTMLElement = HTMLElement>(
  raiz: ParentNode,
  selector: string,
): T {
  const elemento = raiz.querySelector<T>(selector);
  if (!elemento) {
    throw new Error(`Falta ${selector} en el HTML`);
  }
  return elemento;
}
