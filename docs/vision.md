# CanvasFlow — Visión del producto

## 1. Propósito

CanvasFlow es una aplicación de escritorio de productividad visual que combina organización Kanban y lienzos visuales en una experiencia local, rápida y enfocada.

Su visión a largo plazo es evolucionar hacia un “segundo cerebro” personal. Esa evolución será incremental: la versión 1.0 debe resolver primero un flujo de estudio real de forma simple, estable y confiable.

## 2. Problema

Los estudiantes y usuarios que organizan trabajo intelectual suelen dividir su actividad entre herramientas separadas: tableros para planificar, lienzos para pensar visualmente y archivos para conservar material de referencia.

Esta fragmentación dificulta mantener juntas la planificación y la elaboración del contenido. Una tarea puede indicar qué hacer, pero el razonamiento, los diagramas y los documentos relacionados terminan dispersos en otras aplicaciones.

CanvasFlow busca reducir esa separación permitiendo organizar contenido textual y visual dentro de un mismo Project, sin depender de una conexión a Internet ni de servicios remotos.

## 3. Usuario principal

La V1 está orientada principalmente a estudiantes que necesitan:

- organizar materias, actividades o proyectos;
- dividir el trabajo mediante Boards y Columns;
- registrar información textual en Cards;
- desarrollar ideas visuales en Canvas independientes;
- conservar archivos PDF asociados a su trabajo;
- estudiar durante sesiones prolongadas en una interfaz clara y agradable.

Aunque el modelo podrá servir a otros usos personales, la validación inicial se realizará sobre este escenario estudiantil.

## 4. Propuesta de valor

CanvasFlow reúne planificación y pensamiento visual dentro de una misma estructura:

```text
Workspace → Project → Board → Column → Board Item
                                      ├── Card
                                      └── Canvas
```

Una Card permite trabajar principalmente con información textual y archivos adjuntos. Un Canvas permite dibujar, escribir y relacionar ideas visualmente, y se presenta en el Board mediante una Thumbnail.

Ambos son tipos diferentes de Board Item. Comparten las interacciones necesarias para organizarse, moverse, abrirse, buscarse y eliminarse, pero conservan una identidad visual y conceptual propia.

El valor diferencial de CanvasFlow no consiste en añadir dibujos a un Kanban, sino en permitir que la organización del trabajo y el contenido visual convivan como partes de un mismo sistema.

## 5. Principios del producto

### Local-first

Las funciones principales estarán disponibles completamente offline. Los datos permanecerán en el dispositivo y se guardarán automáticamente.

### Claridad

La interfaz deberá ser comprensible sin capacitación extensa y comunicar claramente creación, movimiento, guardado, eliminación, errores y resultados de búsqueda.

### Prevención de pérdidas

Las operaciones destructivas importantes requerirán confirmación o permitirán deshacer la acción. Los errores de persistencia nunca deberán presentarse como guardados exitosos.

### Fluidez

Crear, editar, abrir, reordenar y mover Board Items deberá sentirse inmediato durante un uso normal. Los contenidos pesados deberán cargarse progresivamente.

### Extensibilidad responsable

El dominio permitirá incorporar otros tipos de Board Item en el futuro, pero la V1 implementará solamente Card y Canvas. La extensibilidad no justificará complejidad prematura.

### Accesibilidad

La experiencia deberá mantener contraste legible, etiquetas accesibles, navegación básica por teclado y estados que no dependan únicamente del color.

## 6. Objetivos de la V1

La versión 1.0 deberá permitir que un estudiante pueda:

1. instalar y abrir CanvasFlow en Windows;
2. crear Projects y uno o varios Boards por Project;
3. crear, renombrar, ordenar y eliminar Columns;
4. crear Cards con título, descripción, color y archivos PDF;
5. crear Canvas independientes con herramientas visuales básicas;
6. visualizar una Preview textual de cada Card y una Thumbnail de cada Canvas;
7. mover Columns y Board Items mediante drag and drop;
8. buscar Cards y Canvas dentro del Project abierto;
9. trabajar completamente offline con Autosave;
10. cerrar y volver a abrir la aplicación conservando estructura, contenido, orden y personalización;
11. utilizar modo oscuro y recibir estados claros de carga, vacío y error.

## 7. Alcance funcional de la V1

La V1 comprende:

- gestión local de Projects, Boards y Columns;
- Cards como Board Items de contenido principalmente textual;
- Canvas como Board Items visuales independientes;
- Attachments PDF asociados a Cards o Canvas;
- ordenamiento y movimiento mediante drag and drop;
- búsqueda por coincidencias parciales dentro del Project actual;
- Autosave, recuperación del estado e indicador de persistencia;
- Preview diferenciada para Card y Canvas;
- modo oscuro;
- distribución de escritorio para Windows.

## 8. Fuera del alcance de la V1

La primera versión no incluirá:

- autenticación, cuentas o servidor remoto;
- sincronización entre dispositivos;
- colaboración en tiempo real, equipos, roles o permisos;
- inteligencia artificial;
- plugins o API pública;
- notas por bloques;
- edición avanzada de PDF;
- comentarios o historial avanzado;
- papelera persistente;
- aplicación móvil;
- soporte obligatorio para macOS o Linux.

Estas capacidades solo podrán incorporarse después de revisar formalmente su impacto en el alcance.

## 9. Objetivos de ingeniería y aprendizaje

CanvasFlow también es un proyecto de aprendizaje de ingeniería de software. Su desarrollo deberá favorecer:

- dominio progresivo de React y TypeScript;
- arquitectura modular y separación de responsabilidades;
- tipado estricto;
- estado global mínimo;
- persistencia desacoplada de la interfaz;
- pruebas de reglas de dominio y flujos críticos;
- refactorización basada en necesidades reales;
- documentación continua y decisiones registradas mediante ADR.

Cada tecnología deberá introducirse cuando resuelva un problema concreto, comprendiendo sus alternativas, ventajas, desventajas y límites.

## 10. Experiencia deseada

La aplicación deberá sentirse rápida, limpia, minimalista, moderna y cómoda durante sesiones prolongadas de estudio.

Linear, Arc, Raycast, Obsidian, Trello y Notion funcionan como referencias de calidad e interacción, no como modelos que deban copiarse.

Cards y Canvas compartirán patrones cuando realicen acciones comunes, pero deberán poder distinguirse visualmente. El color nunca será el único medio para comunicar información importante.

## 11. Criterio de éxito

La V1 será exitosa cuando un estudiante pueda completar un flujo real de organización y estudio con Projects, Boards, Columns, Cards y Canvas; adjuntar PDF; buscar contenido; reiniciar la aplicación sin perder datos y utilizarla sin conexión de manera estable.

No deberán existir errores conocidos que provoquen pérdida o corrupción de datos, y los flujos críticos deberán estar probados y documentados.

La definición verificable completa se mantiene en [success-criteria.md](success-criteria.md).

## 12. Evolución prevista

Después de la V1 podrán evaluarse papelera persistente, búsqueda global, etiquetas, fechas límite, Checklists, exportación e importación y mejoras de accesibilidad.

Versiones posteriores podrán explorar Notes, relaciones entre contenidos, Backlinks, sincronización, cuentas y otras capacidades de “segundo cerebro”. Estas ideas no forman parte del compromiso actual.

## 13. Documentación relacionada

- [Requisitos](requirements.md)
- [Glosario](glossary.md)
- [Modelo de dominio](domain-model.md)
- [Backlog](backlog.md)
- [Criterios de éxito](success-criteria.md)
- [Arquitectura](architecture.md)
- [ADR](adr/)
