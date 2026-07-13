# ADR-006 — Estado global mediante Zustand

## Estado

Aceptada provisionalmente.

## Contexto

CanvasFlow tendrá estado compartido entre vistas, tableros, drag and drop, búsqueda y persistencia.

No todo el estado deberá ser global.

## Decisión

Utilizar Zustand para el estado global que realmente necesite compartirse.

El estado local de componentes deberá permanecer local cuando no requiera coordinación global.

## Motivos

- API pequeña;
- menor complejidad inicial que otras alternativas;
- buena integración con React y TypeScript;
- permite organizar stores por dominio.

## Consecuencias positivas

- menor cantidad de código repetitivo;
- aprendizaje progresivo;
- acceso simple al estado compartido.

## Consecuencias negativas

- no impone una arquitectura;
- un store sin límites puede convertirse en estado global excesivo;
- requiere diseñar selectores y responsabilidades correctamente.
