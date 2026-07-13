# CanvasFlow — Contexto del proyecto

Documento maestro destinado a reunir la visión, el alcance y el contexto esencial de CanvasFlow para colaboradores y asistentes de desarrollo.

## Estado técnico

La Etapa 00 — Planificación y Diseño del Producto está cerrada. CanvasFlow se encuentra en la Etapa 01 — Configuración Profesional del Proyecto.

El repositorio activo está ubicado en `C:\dev\CanvasFlow`, utiliza Git con rama `main` vinculada a `origin/main` y ya cuenta con una base ejecutable de React, TypeScript y Vite integrada con Tauri.

La aplicación fue validada en navegador y como ventana nativa de Windows. Los checkpoints 01.1 a 01.4 están completados; el siguiente es 01.5 — Tailwind CSS y base visual mínima.

## Estrategia de datos

CanvasFlow V1 será local-first.

La aplicación funcionará completamente offline y persistirá los datos localmente.

La arquitectura será sync-ready para permitir sincronización futura, pero la V1 no incluirá servidor, cuentas, autenticación ni sincronización.

## Modelo central

La estructura principal será:

Workspace → Project → Board → Column → Board Item.

Los tipos iniciales de Board Item serán Card y Canvas.

## Alcance de la V1

La V1 deberá ser suficientemente estable y funcional para que un estudiante pueda utilizarla para organizar Projects, Boards, Columns, Cards y Canvas en actividades reales de estudio.

## Documentación relacionada

- [Requisitos](requirements.md)
- [Glosario](glossary.md)
- [Modelo de dominio](domain-model.md)
- [Backlog](backlog.md)
- [Criterios de éxito](success-criteria.md)
- [Registros de decisiones de arquitectura](adr/)
