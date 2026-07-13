# ADR-007 — Motor de Canvas mediante Excalidraw

## Estado

Aceptada provisionalmente.

## Contexto

CanvasFlow necesita un lienzo visual con herramientas de dibujo, formas, texto, conectores e imágenes.

Construir un motor completo desde cero no forma parte del objetivo principal.

## Decisión

Integrar Excalidraw como base del Canvas.

## Motivos

- ofrece herramientas visuales maduras;
- permite concentrarse en la integración con el producto;
- reduce el riesgo técnico;
- es compatible con React;
- se aproxima a la experiencia visual buscada.

## Consecuencias positivas

- Canvas funcional con menor esfuerzo;
- herramientas probadas;
- formato de escena reutilizable;
- experiencia conocida para muchos usuarios.

## Consecuencias negativas

- dependencia de su API y formato;
- personalización limitada por sus capacidades;
- actualizaciones futuras pueden requerir adaptación;
- la generación de miniaturas deberá validarse.
