# CanvasFlow — Contexto del proyecto

Documento maestro destinado a reunir la visión, el alcance y el contexto esencial de CanvasFlow para colaboradores y asistentes de desarrollo.

## Estado técnico

La Etapa 00 — Planificación y Diseño del Producto y la Etapa 01 — Configuración Profesional del Proyecto están cerradas.

El repositorio está configurado con Git, utiliza la rama `main` y cuenta con una base técnica web y desktop reproducible y validada: React, TypeScript y Vite integrados con Tauri.

La aplicación fue validada en navegador, como ventana nativa de Windows y mediante builds de producción. La siguiente etapa será la definición de arquitectura; la arquitectura completa de funcionalidades todavía no está implementada.

El estado detallado se mantiene en [CURRENT_STATE.md](CURRENT_STATE.md).

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
