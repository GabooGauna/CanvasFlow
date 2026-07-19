# Roadmap

# CanvasFlow — Roadmap del Proyecto

## Objetivo

Este roadmap organiza el desarrollo de CanvasFlow en etapas y sprints pequeños.

Cada sprint tiene dos objetivos igualmente importantes:

1. avanzar en el desarrollo del producto;
2. aprender progresivamente React, TypeScript e Ingeniería de Software.

Ninguna etapa se considerará finalizada únicamente porque el código funcione.

Cada sprint deberá completar:

- análisis;
- diseño;
- implementación;
- pruebas;
- refactorización;
- documentación.

---

# Etapa 00 — Planificación y Diseño

**Estado: completada.**

## Objetivo

Definir completamente el producto antes de escribir código.

### Sprint 0

**Objetivos**

- Definir la visión del producto.
- Definir el alcance de la V1.
- Elegir el stack tecnológico.
- Diseñar la arquitectura de alto nivel.
- Diseñar el modelo de dominio.
- Crear la documentación inicial.
- Registrar las primeras decisiones de arquitectura (ADR).

**Conceptos que se aprenden**

- Ingeniería de Software.
- Arquitectura.
- Modelado de dominio.
- Documentación profesional.
- Alcance del producto.
- Roadmaps.
- Backlog.

**Criterio de finalización**

Toda la documentación principal se encuentra aprobada y consistente.

---

# Etapa 01 — Configuración Profesional del Proyecto

**Estado: completada.**

## Objetivo

Construir una base sólida antes de implementar funcionalidades.

### Sprint 1 — Herramientas

**Aprendizaje**

- Git.
- GitHub.
- Vite.
- Tauri.
- npm.
- Organización de proyectos.

**Implementación**

- Crear el repositorio.
- Configurar React.
- Configurar TypeScript.
- Configurar Vite.
- Configurar Tauri.
- Configurar ESLint.
- Configurar Prettier.

**Criterio**

El proyecto compila correctamente y mantiene una estructura profesional.

### Progreso real de la Etapa 01

- [x] **01.1 — Auditoría del entorno.** Toolchain web y nativa verificada; proyecto trasladado fuera de una carpeta sincronizada.
- [x] **01.2 — Repositorio profesional.** Git y GitHub configurados; convenciones base y primer commit creados.
- [x] **01.3 — React + TypeScript + Vite.** Scaffold creado; lint, build y ejecución web validados.
- [x] **01.4 — Integración de Tauri.** Aplicación nativa ejecutada correctamente en Windows.
- [x] **01.5 — Tailwind CSS y base visual mínima.** Integración validada en navegador y Tauri; scaffold de Vite limpiado.
- [x] **01.6 — Calidad automática y configuración compartida de VS Code.** Formato, lint, tipos, build y editor compartido validados.
- [x] **01.7 — Estructura mínima del proyecto.** Entrada, raíz visual y estilos globales organizados sin arquitectura prematura.
- [x] **01.8 — Verificación final y cierre de la Etapa 01.** Instalación reproducible, validaciones web y nativas, y builds de producción aprobados.

---

# Etapa 02 — Arquitectura

**Estado: en progreso.**

### Progreso real de la Etapa 02

- [x] **02.1 — Modelo arquitectónico y dirección de dependencias.** Arquitectura modular orientada por funcionalidades y reglas de dependencia documentadas.
- [x] **02.2 — Límites de módulos y responsabilidades detalladas.** Propiedad, fronteras y comunicación entre módulos documentadas.
- [ ] **02.3 — Dominio y primer flujo vertical.** Diseño conceptual en progreso.

### Sprint 2 — Arquitectura base

**Aprendizaje**

- Arquitectura React.
- Organización por módulos.
- Separación de responsabilidades.
- Convenciones.

**Implementación**

- Crear la estructura de carpetas.
- Configurar aliases.
- Crear App Shell.
- Crear Layout principal.

**Criterio**

Existe una arquitectura limpia preparada para crecer.

---

# Etapa 03 — Sistema de Diseño

## Objetivo

Construir la identidad visual de CanvasFlow.

### Sprint 3

**Aprendizaje**

- Tailwind CSS.
- Design System.
- Componentes reutilizables.
- Accesibilidad.

**Implementación**

- Paleta de colores.
- Tipografía.
- Espaciados.
- Botones.
- Inputs.
- Cards base.
- Sidebar.
- Header.

**Criterio**

Existe un sistema visual consistente.

---

# Etapa 04 — Fundamentos de React y TypeScript

## Objetivo

Dominar los conceptos esenciales antes de desarrollar funcionalidades complejas.

### Sprint 4

**React**

- Componentes.
- JSX.
- Props.
- Renderizado.

**TypeScript**

- Tipos.
- Interfaces.
- Type aliases.

**Implementación**

- Componentes básicos.

---

### Sprint 5

**React**

- Estado.
- Eventos.
- Hooks.

**TypeScript**

- Tipado de props.
- Tipado de funciones.

**Implementación**

- Componentes interactivos.

---

### Sprint 6

**React**

- Renderizado condicional.
- Listas.
- Composición.

**TypeScript**

- Genéricos.
- Utility Types.

**Implementación**

- Componentes reutilizables.

---

# Etapa 05 — Kanban

## Objetivo

Construir el núcleo organizativo de CanvasFlow.

### Sprint 7

- Modelo Project.
- Modelo Board.
- Modelo Column.
- Modelo Board Item.

### Sprint 8

- Crear Boards.
- Crear Columns.
- Crear Cards.

### Sprint 9

- Drag & Drop.
- Reordenamiento.
- Movimiento entre Columns.

---

# Etapa 06 — Persistencia

## Objetivo

Guardar toda la información localmente.

### Sprint 10

**Aprendizaje**

- IndexedDB.
- Dexie.
- Persistencia.

**Implementación**

- Persistencia de Projects.
- Persistencia de Boards.
- Persistencia de Board Items.

---

### Sprint 11

- Guardado automático.
- Recuperación del estado.
- Migraciones.

---

# Etapa 07 — Canvas

## Objetivo

Integrar el lienzo visual.

### Sprint 12

**Aprendizaje**

- Excalidraw.
- Integración de librerías.

**Implementación**

- Primer Canvas.

---

### Sprint 13

- Miniaturas.
- Persistencia del Canvas.
- Apertura desde Board Item.

---

# Etapa 08 — Búsqueda

### Sprint 14

- Buscador.
- Índices.
- Filtros.
- Navegación a resultados.

---

# Etapa 09 — Optimización

### Sprint 15

**Aprendizaje**

- Performance.
- Memoización.
- Renderizado.

**Implementación**

- Optimización de renders.
- Lazy Loading.
- Optimización de miniaturas.

---

# Etapa 10 — Testing

### Sprint 16

**Aprendizaje**

- Vitest.
- React Testing Library.

**Implementación**

- Tests de dominio.
- Tests de componentes.
- Tests de flujos críticos.

---

# Etapa 11 — Release 1.0

### Sprint 17

- Corrección de errores.
- Documentación.
- Empaquetado.
- Build para Windows.

---

# Objetivo de la versión 1.0

Al finalizar este roadmap, CanvasFlow deberá permitir a un estudiante:

- crear Projects;
- crear Boards;
- organizar Columns;
- crear Cards;
- crear Canvas;
- dibujar;
- adjuntar archivos PDF, Word y de texto plano;
- buscar contenido;
- guardar automáticamente;
- trabajar completamente offline.

La versión 1.0 se considerará terminada únicamente cuando todas las funcionalidades P0 definidas en el backlog funcionen de forma estable, estén documentadas y hayan sido probadas.
