# ADR-004 — Persistencia local mediante Dexie e IndexedDB

## Estado

Aceptada provisionalmente.

## Contexto

CanvasFlow necesita guardar Projects, Boards, Columns, Board Items y metadatos localmente.

La persistencia no debe depender directamente de los componentes de React.

## Decisión

Utilizar IndexedDB como almacenamiento local y Dexie como capa de acceso.

La decisión será validada mediante una prueba técnica antes de consolidarse definitivamente.

## Motivos

- IndexedDB permite almacenar datos estructurados en el entorno web de Tauri;
- Dexie simplifica consultas, transacciones y versionado;
- permite separar persistencia e interfaz;
- resulta apropiado para una primera versión local-first.

## Consecuencias positivas

- persistencia local estructurada;
- soporte de consultas e índices;
- migraciones de esquema;
- integración con TypeScript.

## Consecuencias negativas

- IndexedDB tiene particularidades que deben aprenderse;
- los archivos pesados pueden requerir una estrategia distinta;
- una futura sincronización necesitará una capa adicional.

## Pendiente de validación

- estrategia física para los Attachments admitidos en la V1;
- almacenamiento de imágenes;
- formato de Canvas;
- generación y almacenamiento de miniaturas;
- rendimiento con datos representativos.
