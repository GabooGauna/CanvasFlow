# ADR-005 — Board Item como elemento base del tablero

## Estado

Aceptada.

## Contexto

Una Column debe poder contener diferentes tipos de contenido, comenzando con Cards y Canvas, y permitir nuevos tipos en el futuro.

## Decisión

Definir Board Item como concepto general del dominio.

Los tipos iniciales serán:

- Card;
- Canvas.

Una Column contendrá Board Items y no mantendrá relaciones independientes para cada tipo concreto.

## Alternativas consideradas

- permitir solamente Cards;
- mantener colecciones separadas para Cards y Canvas;
- representar un Canvas como una Card especial;
- utilizar un elemento general Board Item.

## Motivos

- unifica los comportamientos compartidos;
- simplifica drag and drop y ordenamiento;
- facilita búsqueda y persistencia;
- permite incorporar tipos futuros;
- evita considerar incorrectamente al Canvas como una Card.

## Consecuencias positivas

- modelo extensible;
- reglas comunes;
- menor duplicación conceptual;
- incorporación futura de nuevos tipos.

## Consecuencias negativas

- requiere diseñar cuidadosamente las diferencias entre tipos;
- una abstracción excesiva podría volver el modelo innecesariamente complejo;
- la representación técnica deberá decidirse más adelante.

## Aclaración

Este ADR define el dominio, pero no obliga a utilizar herencia en TypeScript.
