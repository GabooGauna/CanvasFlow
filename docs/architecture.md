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
| Organización arquitectónica | Módulos funcionales con separación interna ligera | Aceptada — ADR-009 |

Las decisiones provisionales deberán validarse con pruebas técnicas antes de consolidarse. Un ADR conserva autoridad sobre el estado y las consecuencias de cada decisión.

## 5. Modelo arquitectónico aceptado

CanvasFlow utilizará una arquitectura modular orientada por funcionalidades, según [ADR-009](adr/009-modular-feature-oriented-architecture.md).

Los módulos funcionales serán el criterio principal de organización. Dentro de cada módulo podrá existir una separación ligera entre presentación, aplicación, dominio e infraestructura cuando el código real lo justifique. Estas responsabilidades no obligan a crear cuatro carpetas por módulo.

La decisión está documentada, pero todavía no se implementó una estructura arquitectónica definitiva en `src/`.

### Dirección de dependencias

Las flechas siguientes significan “depende de”:

```text
Presentación ───────────────▶ Aplicación ───────────────▶ Dominio
                                  ▲                         ▲
                                  │ implementa contratos    │ usa tipos
                                  │                         │
                           Infraestructura ──────────────────┘

App Shell / punto de composición ─▶ Presentación
App Shell / punto de composición ─▶ Aplicación
App Shell / punto de composición ─▶ Infraestructura
```

El dominio queda en el centro de las dependencias y no depende de infraestructura. Infraestructura puede depender de contratos internos y de tipos de dominio para implementar persistencia, archivos o capacidades nativas.

### Responsabilidades internas

- **Presentación:** expresa intenciones del usuario y administra la interfaz.
- **Aplicación:** coordina casos de uso, reglas de secuencia y contratos necesarios para completarlos.
- **Dominio:** contiene conceptos, reglas e invariantes propios de CanvasFlow.
- **Infraestructura:** implementa capacidades técnicas mediante adaptadores concretos.
- **Estado compartido:** representa datos observables en memoria y no constituye por sí mismo una capa de aplicación ni una confirmación de persistencia.

## 6. Módulos y capacidades conceptuales

Los límites detallados se definirán en el checkpoint 02.2. En este momento solo se reconoce la siguiente dirección general, sin afirmar que existan carpetas o APIs implementadas.

### App Shell

Será responsable del arranque, layout general, navegación de alto nivel y composición de módulos. Contendrá o coordinará el punto de composición donde se conectan casos de uso, contratos y adaptadores.

No contendrá reglas de negocio de Projects, Boards o Board Items.

### Módulos funcionales

Workspace, Kanban y Canvas representan capacidades funcionales confirmadas por el producto. Su delimitación exacta, sus responsabilidades detalladas y sus APIs públicas se decidirán en los siguientes checkpoints.

Los módulos se comunicarán mediante APIs públicas pequeñas y no accederán arbitrariamente a detalles internos de otros módulos.

### Shared UI

Podrá reunir componentes y patrones visuales realmente compartidos. No contendrá reglas específicas de Workspace, Kanban o Canvas.

### Storage

Storage es una capacidad de infraestructura, no un dominio funcional equivalente a Workspace, Kanban o Canvas.

Implementará las operaciones de persistencia solicitadas: lecturas, escrituras, transacciones, recuperación y migraciones. También traducirá o propagará los fallos técnicos mediante resultados o errores apropiados.

Storage no decidirá cuándo guardar, la frecuencia o agrupación de los guardados, ni representará estados visuales o comunicará errores directamente al usuario. La capa de aplicación coordinará la política de Autosave, infraestructura ejecutará la persistencia solicitada y presentación representará el estado resultante.

Los adaptadores de persistencia utilizarán provisionalmente Dexie como capa de acceso a IndexedDB. Dexie no constituye por sí mismo un adaptador arquitectónico de CanvasFlow. La estrategia de PDF, imágenes, escenas y Thumbnail requiere validación específica.

### Settings

Settings permanece como capacidad conceptual pendiente de delimitación durante el checkpoint 02.2; todavía no se confirma como módulo independiente.

No se crearán módulos ni carpetas reservadas para Notes, Sync, Collaboration u otras capacidades futuras mientras no exista alcance y código real que los justifique.

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

1. El dominio no dependerá de React, Zustand, Dexie, IndexedDB, Excalidraw, dnd-kit, Tauri ni de infraestructura.
2. Presentación podrá depender de aplicación y de tipos expuestos por el dominio, pero no accederá directamente a Dexie, IndexedDB ni APIs nativas.
3. Aplicación podrá depender del dominio y de contratos internos; no dependerá de implementaciones concretas de infraestructura.
4. Infraestructura podrá depender de contratos internos y tipos de dominio para implementarlos.
5. Los módulos se comunicarán mediante APIs públicas pequeñas, no mediante acceso arbitrario a detalles internos.
6. El estado visual local permanecerá en React cuando no necesite coordinación externa.
7. Zustand, si supera su validación provisional, se reservará para estado compartido observable en memoria.
8. Excalidraw quedará encapsulado detrás de la capacidad Canvas.
9. dnd-kit quedará encapsulado en las interacciones de Kanban y no definirá el modelo persistente de orden.
10. Tauri y el acceso al sistema operativo se utilizarán mediante adaptadores con permisos mínimos.
11. Los contratos se introducirán únicamente cuando protejan una frontera real.
12. No se incorporarán contenedores de inyección de dependencias, CQRS, event buses, repositorios genéricos ni abstracciones de sincronización durante esta etapa.

## 9. Flujo de ejecución y estado

La dirección de dependencias describe relaciones estáticas entre código. El flujo de ejecución describe la secuencia que ocurre en tiempo de ejecución y puede atravesar esas fronteras mediante contratos.

### Ejemplo conceptual: crear Project

```text
React
  └──▶ caso de uso Crear Project
         ├──▶ dominio
         └──▶ contrato de persistencia
                └──▶ adaptador de persistencia de CanvasFlow
                       └──▶ Dexie
                              └──▶ IndexedDB
```

Aunque la ejecución llegue al adaptador de persistencia, la aplicación y el dominio no dependen de su implementación concreta. El adaptador implementa el contrato definido hacia el interior y utiliza provisionalmente Dexie como capa de acceso a IndexedDB.

### Responsabilidades de herramientas y estado

- **React:** presentación, interacción y estado visual local.
- **Zustand:** estado compartido observable en memoria cuando sea necesario; no sustituye dominio, casos de uso ni persistencia.
- **Dexie:** capa provisional de acceso a IndexedDB utilizada por los adaptadores de persistencia de CanvasFlow.
- **Tauri:** adaptadores para capacidades del sistema operativo y aplicación de permisos mínimos.

Actualizar React o un store de Zustand no equivale a confirmar que los datos fueron persistidos. La interfaz deberá representar los estados `Guardando…`, `Guardado` y `Error al guardar` según el resultado real de persistencia.

No todo dato persistente deberá duplicarse en un store global. El diseño exacto de stores, cachés y consultas se decidirá al implementar los primeros flujos verticales.

## 10. Persistencia local y Autosave

La persistencia deberá cubrir Projects, Boards, Columns, Board Items, orden, personalización, escenas de Canvas, Thumbnail y Attachments.

La capa de aplicación coordinará el Autosave: decidirá cuándo solicitar un guardado y cómo manejar su frecuencia o agrupación. Infraestructura ejecutará las operaciones de persistencia solicitadas y presentación mostrará los estados `Guardando…`, `Guardado` o `Error al guardar` según el resultado recibido.

Storage se tratará como capacidad de infraestructura y será responsable de:

- implementar operaciones de persistencia;
- realizar lecturas y escrituras;
- utilizar transacciones cuando corresponda;
- recuperar datos persistidos;
- ejecutar migraciones versionadas;
- traducir o propagar fallos técnicos mediante resultados o errores apropiados;
- permanecer independiente de la interfaz.

Además:

- un error de escritura no deberá interpretarse como éxito;
- las entidades persistentes tendrán identificadores generables localmente, fecha de creación y fecha de modificación;
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
- solicitar el guardado mediante el flujo de Autosave coordinado por la capa de aplicación;
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
- límites detallados y APIs públicas concretas de Workspace, Kanban y Canvas;
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
