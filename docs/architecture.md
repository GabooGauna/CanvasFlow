# CanvasFlow — Arquitectura

## 1. Propósito

Este documento describe la arquitectura general prevista para CanvasFlow y las reglas que guiarán su evolución.

Define límites, responsabilidades, dependencias y decisiones conocidas. No fija todavía la estructura exacta de carpetas, interfaces de TypeScript, esquema de IndexedDB ni detalles que los ADR mantienen como provisionales o diferidos.

## 2. Objetivos arquitectónicos

La arquitectura deberá favorecer:

- separación de responsabilidades;
- módulos con alta cohesión y bajo acoplamiento;
- reglas de dominio independientes de React y de la persistencia;
- estado global limitado a información realmente compartida;
- persistencia reemplazable y desacoplada de la interfaz;
- tipado estricto con TypeScript;
- pruebas de dominio y flujos críticos;
- carga progresiva de contenido pesado;
- incorporación futura de nuevos tipos de Board Item sin rediseñar el Board;
- preparación para sincronización futura sin implementarla en la V1.

## 3. Contexto del sistema

CanvasFlow será una aplicación de escritorio local-first. La primera plataforma de desarrollo y validación será Windows.

```text
┌──────────────────── Usuario ────────────────────┐
│ crea, organiza, busca y edita contenido         │
└────────────────────────┬────────────────────────┘
                         │
                ┌────────▼────────┐
                │   CanvasFlow    │
                │ Tauri + React   │
                └────────┬────────┘
                         │
                ┌────────▼────────┐
                │ Datos y archivos│
                │     locales     │
                └─────────────────┘
```

Las funciones principales no dependerán de Internet. En la V1 no existirán servidor, autenticación, nube ni sincronización.

## 4. Stack y estado de las decisiones

| Área | Tecnología o enfoque | Estado |
| --- | --- | --- |
| Contenedor de escritorio | Tauri | Aceptada — ADR-001 |
| Interfaz | React + TypeScript + Vite | Aceptada — ADR-002 |
| Estrategia de datos | Local-first y sync-ready | Aceptada — ADR-003 |
| Persistencia estructurada | IndexedDB mediante Dexie | Aceptada provisionalmente — ADR-004 |
| Modelo del tablero | Board Item con tipos Card y Canvas | Aceptada — ADR-005 |
| Estado global | Zustand solo para estado compartido | Aceptada provisionalmente — ADR-006 |
| Motor visual | Excalidraw | Aceptada provisionalmente — ADR-007 |
| Drag and drop | dnd-kit | Aceptada provisionalmente — ADR-008 |

Las decisiones provisionales deberán validarse con pruebas técnicas antes de consolidarse. Un ADR conserva autoridad sobre el estado y las consecuencias de cada decisión.

## 5. Modelo arquitectónico

CanvasFlow seguirá una arquitectura modular con dependencias dirigidas hacia el dominio y contratos explícitos en los límites externos.

```text
┌───────────────────────────────────────────────┐
│ Presentación                                 │
│ App Shell · Workspace · Kanban · Canvas UI   │
└──────────────────────┬────────────────────────┘
                       │ acciones y consultas
┌──────────────────────▼────────────────────────┐
│ Aplicación / Estado                          │
│ coordinación de casos de uso y estado común  │
└──────────────────────┬────────────────────────┘
                       │ contratos
┌──────────────────────▼────────────────────────┐
│ Dominio                                      │
│ entidades · invariantes · reglas de negocio  │
└──────────────────────┬────────────────────────┘
                       │ puertos
┌──────────────────────▼────────────────────────┐
│ Infraestructura                              │
│ persistencia · archivos · Tauri · adaptadores│
└───────────────────────────────────────────────┘
```

La interfaz podrá depender de capacidades de aplicación y tipos de dominio. El dominio no deberá depender de React, Zustand, Dexie, IndexedDB, Excalidraw, dnd-kit ni Tauri.

## 6. Módulos previstos

### App Shell

Responsable del arranque, layout principal, navegación de alto nivel, tema, límites de error y composición de módulos.

No deberá contener reglas de negocio de Projects, Boards o Board Items.

### Workspace

Responsable del Workspace local implícito y de los flujos para listar, crear, abrir y eliminar Projects, además de acceder a sus Boards.

En la V1 no habrá gestión manual de Workspaces.

### Kanban

Responsable de Boards, Columns, Board Items, ordenamiento, movimiento, Preview, búsqueda dentro del Project y operaciones comunes del tablero.

Trabajará con el concepto general Board Item. Card y Canvas no se almacenarán como colecciones independientes dentro de una Column.

### Canvas

Responsable de abrir y editar un Canvas, integrar Excalidraw, conservar escenas independientes y generar o actualizar Thumbnail.

Los Canvas Elements pertenecen al Canvas y no forman parte directa de una Column.

### Storage

Responsable de implementar contratos de persistencia, Autosave, recuperación, migraciones, transacciones y comunicación de errores de guardado.

Dexie e IndexedDB son la propuesta provisional para datos estructurados. La estrategia de PDF, imágenes, escenas y Thumbnail deberá validarse antes de considerarse definitiva.

### Shared UI

Contendrá componentes visuales reutilizables, patrones de interacción, estados de carga, vacío y error, confirmaciones, acciones de deshacer y fundamentos de accesibilidad.

No deberá conocer reglas específicas del dominio.

### Settings

Responsable de preferencias locales de la aplicación, incluido el modo oscuro. Su alcance inicial será deliberadamente pequeño.

### Core

Contendrá capacidades transversales estables: tipos compartidos mínimos, generación de identidad, manejo común de errores y contratos que no pertenezcan a un módulo funcional concreto.

No deberá convertirse en un contenedor genérico de lógica sin dueño.

### Future / Notes

Reserva conceptual para una futura capacidad de notas enriquecidas. No se implementará en la V1 ni deberá condicionar prematuramente el diseño actual.

## 7. Modelo de dominio central

```text
Workspace 1 ─── N Project
Project   1 ─── N Board
Board     1 ─── N Column
Column    1 ─── N Board Item
Board Item 1 ─── N Attachment
Canvas    1 ─── N Canvas Element
```

Board Item es la abstracción de dominio común. Sus tipos iniciales son Card y Canvas.

Las invariantes completas pertenecen a [domain-model.md](domain-model.md). Entre las principales:

- todo Board pertenece a un Project;
- toda Column pertenece a un Board;
- todo Board Item pertenece exactamente a una Column en la V1;
- una Card requiere título no vacío;
- cada Canvas conserva contenido visual independiente;
- el orden de Columns y Board Items debe persistir;
- todo Attachment pertenece a un Board Item.

La representación técnica de Board Item todavía no está decidida: podrá evaluarse composición, interfaces o uniones discriminadas sin asumir herencia.

## 8. Reglas de dependencia

1. Los componentes de React no accederán directamente a IndexedDB, Dexie ni APIs de archivos.
2. Las reglas de dominio no importarán librerías de interfaz o infraestructura.
3. Los módulos se comunicarán mediante APIs públicas y contratos explícitos, no mediante acceso arbitrario a sus detalles internos.
4. El estado local permanecerá en el componente cuando no necesite coordinación externa.
5. Zustand, si supera su validación, contendrá solamente estado compartido y se dividirá por responsabilidades de dominio.
6. Excalidraw quedará encapsulado detrás del módulo Canvas.
7. dnd-kit quedará encapsulado en las interacciones de Kanban y no definirá el modelo persistente de orden.
8. Tauri y el acceso al sistema operativo se utilizarán mediante adaptadores con permisos mínimos.

## 9. Estado y flujo de datos

```text
Interacción del usuario
        │
        ▼
Acción o caso de uso
        │
        ├── valida reglas de dominio
        ├── actualiza estado observable
        └── solicita persistencia
                    │
                    ▼
             Adaptador Storage
                    │
                    ▼
              Datos locales
```

La interfaz deberá representar los estados `Guardando…`, `Guardado` y `Error al guardar` sin confundir estado visual con confirmación real de persistencia.

No todo dato persistente deberá duplicarse en un store global. El diseño exacto de stores, cachés y consultas se decidirá al implementar los primeros flujos verticales.

## 10. Persistencia local y Autosave

La persistencia deberá cubrir Projects, Boards, Columns, Board Items, orden, personalización, escenas de Canvas, Thumbnail y Attachments.

Principios:

- la capa Storage será independiente de la interfaz;
- las operaciones relacionadas deberán usar transacciones cuando corresponda;
- los cambios comunes se guardarán automáticamente;
- un error de escritura deberá comunicarse y no marcarse como éxito;
- las entidades persistentes tendrán identificadores generables localmente, fecha de creación y fecha de modificación;
- los cambios de esquema deberán resolverse mediante migraciones versionadas;
- PDF e imágenes se tratarán como contenido externo y se abrirán mediante mecanismos seguros de la plataforma.

La estrategia concreta para archivos pesados, escenas y Thumbnail permanece pendiente de la prueba técnica indicada en ADR-004.

## 11. Drag and drop y orden

dnd-kit es la opción provisional para reordenar Columns y Board Items y mover Board Items entre Columns.

El orden persistente forma parte del dominio, pero el algoritmo de posicionamiento todavía no está definido. Mover un Board Item entre Columns deberá actualizar de forma consistente su pertenencia y su posición.

La interacción deberá ofrecer retroalimentación inmediata, ser estable durante un uso normal y contemplar teclado cuando la librería lo permita razonablemente.

## 12. Integración del Canvas

Excalidraw proporcionará inicialmente selección, desplazamiento, zoom, texto, dibujo libre, formas, líneas, flechas, conectores, borrado, imágenes, deshacer y rehacer.

La integración deberá:

- mantener una escena independiente por Canvas;
- encapsular el formato externo dentro del módulo Canvas;
- guardar cambios mediante Autosave;
- generar o actualizar Thumbnail después de cambios relevantes;
- evitar cargar escenas, imágenes o miniaturas cuando no sean necesarias;
- mantener fuera colaboración, IA, plugins y herramientas personalizadas para la V1.

## 13. Búsqueda

La búsqueda de la V1 tendrá como límite el Project abierto y podrá encontrar Board Items de cualquiera de sus Boards.

Deberá soportar coincidencias parciales, ignorar mayúsculas y minúsculas, filtrar por Card o Canvas y permitir navegar al resultado.

La búsqueda global entre Projects queda fuera de la V1. La estrategia de índices y consulta se definirá junto con el diseño de persistencia.

## 14. Operaciones destructivas

- eliminar Project, Board o Column requerirá confirmación explícita;
- al eliminar una Column se informará cuántos Board Items serán afectados;
- no existirán Board Items huérfanos en la V1;
- eliminar Card o Canvas ofrecerá una acción temporal de deshacer;
- no habrá papelera persistente en la V1.

Estas reglas deberán coordinar dominio, estado y persistencia de modo atómico o recuperable.

## 15. Rendimiento

La arquitectura deberá admitir Projects con múltiples Boards y cientos de Board Items sin un rediseño completo.

Se aplicarán, cuando las mediciones lo justifiquen:

- carga progresiva de Canvas, Thumbnail, imágenes y PDF;
- selectores de estado acotados;
- aislamiento de renderizados costosos;
- generación controlada de Thumbnail;
- consultas e índices orientados a los flujos reales.

La referencia inicial es una interfaz utilizable en aproximadamente tres segundos en un equipo moderno de gama media. Este objetivo deberá medirse; no se prometerá rendimiento para miles de Canvas o archivos pesados sin evidencia.

## 16. Seguridad y privacidad

Los datos de la V1 permanecerán localmente y no se enviarán a servicios externos.

La aplicación solicitará solo los permisos necesarios. Attachments y enlaces se considerarán contenido no confiable y se abrirán mediante mecanismos seguros proporcionados por Tauri y la plataforma.

La incorporación de capacidades de Tauri deberá respetar su modelo de seguridad y quedar limitada a adaptadores de infraestructura.

## 17. Accesibilidad y experiencia

Shared UI y los módulos funcionales deberán asegurar:

- contraste legible;
- etiquetas accesibles para controles basados en iconos;
- estados que no dependan exclusivamente del color;
- navegación básica mediante teclado;
- respuesta visual para creación, guardado, movimiento, eliminación, errores y búsqueda;
- identidad diferenciable entre Card y Canvas.

## 18. Estrategia de pruebas

La arquitectura deberá permitir pruebas en varios niveles:

- pruebas unitarias de invariantes y reglas de dominio sin React ni persistencia real;
- pruebas de contratos y adaptadores de Storage;
- pruebas de stores o coordinación de casos de uso;
- pruebas de integración para Autosave, recuperación, drag and drop, búsqueda, Attachments y Thumbnail;
- pruebas de los flujos críticos de usuario antes del release.

Una funcionalidad no estará terminada hasta pasar por análisis, diseño, implementación, pruebas, revisión, refactorización necesaria y documentación.

## 19. Preparación para sincronización futura

Sync-ready significa que las entidades tendrán identidad local estable y marcas temporales, y que la persistencia estará separada de la interfaz.

No significa que la sincronización esté resuelta. Conflictos, versiones, eliminaciones remotas, usuarios, dispositivos, autenticación, concurrencia y servidor permanecen fuera de la V1.

No se introducirán abstracciones de red sin un caso de uso aprobado.

## 20. Decisiones diferidas y validaciones necesarias

Permanecen abiertas para sus etapas técnicas:

- estructura exacta de carpetas y APIs públicas de módulos;
- representación de Board Item en TypeScript;
- esquema e índices de IndexedDB;
- estrategia de ordenamiento persistente;
- formato y almacenamiento de escenas de Excalidraw;
- almacenamiento físico de PDF e imágenes;
- formato, frecuencia y almacenamiento de Thumbnail;
- diseño exacto de stores y cachés;
- estrategia de migraciones;
- validación de Dexie, Zustand, Excalidraw y dnd-kit con datos representativos.

Cada decisión relevante deberá documentarse o actualizarse mediante ADR.

## 21. Referencias

- [Visión](vision.md)
- [Requisitos](requirements.md)
- [Glosario](glossary.md)
- [Modelo de dominio](domain-model.md)
- [Backlog](backlog.md)
- [Criterios de éxito](success-criteria.md)
- [Estado actual](CURRENT_STATE.md)
- [Registros de decisiones de arquitectura](adr/)
