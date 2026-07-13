# ADR-003 — Estrategia local-first y preparada para sincronización

## Estado

Aceptada.

## Contexto

CanvasFlow debe ser utilizable sin conexión y no debe depender inicialmente de infraestructura remota.

La visión futura incluye sincronización entre dispositivos.

## Decisión

La V1 será completamente local-first.

Los datos se almacenarán localmente y las funciones principales estarán disponibles offline.

La arquitectura se preparará para una futura sincronización, pero no la implementará todavía.

## Motivos

- reduce la complejidad inicial;
- permite entregar una aplicación útil sin servidor;
- mejora privacidad y disponibilidad;
- evita introducir prematuramente autenticación y resolución de conflictos;
- mantiene abierta la evolución futura.

## Consecuencias positivas

- funcionamiento offline;
- menor infraestructura;
- mayor control local;
- desarrollo inicial más enfocado.

## Consecuencias negativas

- la V1 no sincronizará dispositivos;
- la pérdida del dispositivo puede implicar pérdida de información si no existe exportación;
- diseñar una sincronización futura seguirá requiriendo trabajo especializado.

## Implicaciones

Las entidades persistentes deberán utilizar identificadores únicos y fechas de creación y modificación.

Esto no significa que la sincronización futura quede resuelta automáticamente.
