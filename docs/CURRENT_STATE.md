# CanvasFlow — Estado actual

## Etapa actual

**Etapa 00 — Planificación y Diseño del Producto**

## Estado

🟢 En cierre

La planificación del producto se encuentra prácticamente finalizada.

Toda la documentación principal del proyecto fue creada y consolidada.

No existe todavía código fuente del producto.

## Documentación completada

- PROJECT_CONTEXT
- CURRENT_STATE
- Vision
- Requirements
- Glossary
- Domain Model
- Architecture
- Backlog
- Success Criteria
- Roadmap
- ADR iniciales

## Decisiones principales

- CanvasFlow será una aplicación Desktop.
- El stack tecnológico será React + TypeScript + Vite + Tauri.
- La estrategia de datos será Local-First y Sync-Ready.
- La persistencia local utilizará Dexie sobre IndexedDB.
- El estado global utilizará Zustand.
- El Canvas se implementará utilizando Excalidraw.
- El Drag & Drop utilizará dnd-kit.
- El concepto central del dominio será Board Item.
- Los primeros tipos de Board Item serán Card y Canvas.

## Alcance confirmado de la versión 1.0

La versión 1.0 permitirá:

- crear Projects;
- crear Boards;
- crear Columns;
- crear Cards;
- crear Canvas;
- organizar elementos mediante Drag & Drop;
- adjuntar archivos PDF;
- realizar búsquedas dentro del Project;
- guardar automáticamente;
- trabajar completamente offline.

La sincronización remota, colaboración, inteligencia artificial y demás funcionalidades avanzadas quedan fuera del alcance de la primera versión.

## Próxima etapa

**Etapa 01 — Preparación del Proyecto**

Objetivos:

- crear el repositorio definitivo;
- configurar Git;
- configurar React;
- configurar TypeScript;
- configurar Vite;
- configurar Tauri;
- configurar ESLint;
- configurar Prettier;
- crear la estructura inicial del proyecto.

## Estado del aprendizaje

La planificación del producto quedó suficientemente definida para comenzar el desarrollo técnico.

Las siguientes etapas estarán orientadas a aprender React, TypeScript y Arquitectura mientras se implementa CanvasFlow de forma incremental.

## Observaciones

A partir de la Etapa 01, toda nueva funcionalidad deberá seguir el flujo:

Objetivo → Análisis → Diseño → Implementación → Testing → Refactorización → Documentación.

No se incorporarán nuevas funcionalidades sin revisar previamente su impacto en el backlog y en el alcance de la versión 1.0.
