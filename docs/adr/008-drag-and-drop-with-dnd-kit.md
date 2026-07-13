# ADR-008 — Drag and drop mediante dnd-kit

## Estado

Aceptada provisionalmente.

## Contexto

CanvasFlow necesita reordenar Columns y Board Items, además de mover Board Items entre Columns.

## Decisión

Utilizar dnd-kit para implementar drag and drop.

## Motivos

- está orientada a React;
- permite comportamientos personalizados;
- ofrece primitivas para accesibilidad;
- soporta listas ordenables;
- evita implementar interacciones complejas desde cero.

## Consecuencias positivas

- flexibilidad;
- control de la experiencia;
- reutilización para Columns y Board Items.

## Consecuencias negativas

- el drag and drop complejo requiere diseño cuidadoso;
- puede ser necesario optimizar renderizados;
- accesibilidad y teclado deberán configurarse y probarse.
