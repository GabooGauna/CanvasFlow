# CanvasFlow — Modelo de dominio

## 1. Objetivo

Este documento define los conceptos principales del negocio, sus responsabilidades y sus relaciones.

No define todavía interfaces de TypeScript, tablas de base de datos, componentes de React ni detalles de implementación.

## 2. Estructura general

```text
Workspace
└── Project
    └── Board
        └── Column
            └── Board Item
                ├── Card
                └── Canvas
                    └── Canvas Elements

Board Item
└── Attachments
```

## 3. Entidades principales

### Workspace

Representa el entorno general de uso de CanvasFlow.

En la versión 1.0 existirá un único Workspace local e implícito.

Responsabilidades:

* contener los Projects;
* actuar como punto de entrada de la aplicación.

Reglas:

* el usuario no deberá crear ni configurar manualmente el Workspace en la V1;
* el Workspace podrá evolucionar en el futuro para representar espacios personales o compartidos.

### Project

Representa un espacio independiente de organización.

Ejemplos:

* una carrera universitaria;
* una materia;
* un proyecto de software;
* una actividad personal.

Responsabilidades:

* tener un nombre;
* contener uno o varios Boards;
* definir el alcance de búsqueda de la versión 1.0;
* agrupar información relacionada.

Reglas:

* un Project debe tener un identificador único;
* un Project puede existir sin Boards;
* un Project puede contener múltiples Boards;
* eliminar un Project elimina su contenido asociado después de una confirmación explícita.

### Board

Representa un tablero Kanban perteneciente a un Project.

Responsabilidades:

* tener un nombre;
* pertenecer a un Project;
* contener Columns ordenadas.

Reglas:

* un Board pertenece a un único Project;
* un Project puede contener varios Boards;
* un Board puede existir sin Columns;
* eliminar un Board elimina sus Columns y Board Items después de una confirmación explícita.

### Column

Representa una agrupación vertical dentro de un Board.

Puede expresar una etapa, estado o categoría definida por el usuario.

Responsabilidades:

* pertenecer a un Board;
* tener un nombre;
* mantener una posición;
* contener Board Items ordenados.

Reglas:

* una Column pertenece a un único Board;
* una Column puede existir sin Board Items;
* un Board Item no puede quedar sin Column en la V1;
* eliminar una Column elimina sus Board Items únicamente después de una confirmación explícita.

### Board Item

Representa el concepto general para cualquier contenido organizable dentro de una Column.

Responsabilidades compartidas:

* pertenecer a una Column;
* mantener una posición;
* poder abrirse;
* poder moverse;
* poder eliminarse;
* poder aparecer en búsquedas;
* registrar fecha de creación;
* registrar fecha de última modificación;
* poder contener Attachments.

Los tipos iniciales serán:

* Card;
* Canvas.

El modelo debe permitir incorporar nuevos tipos de Board Item en el futuro sin modificar la relación principal entre Column y Board Item.

Esta decisión de dominio no obliga todavía a utilizar herencia, clases, interfaces o uniones discriminadas en TypeScript.

### Card

Representa un Board Item orientado principalmente a contenido textual.

Datos planificados para la V1:

* identificador;
* título obligatorio;
* descripción opcional;
* color opcional;
* posición;
* fecha de creación;
* fecha de última modificación;
* archivos adjuntos.

Reglas:

* pertenece a una única Column;
* debe tener un título no vacío;
* puede existir sin descripción;
* puede existir sin archivos adjuntos;
* no tendrá miniatura gráfica en la V1;
* su Preview mostrará información textual y visual resumida.

### Canvas

Representa un Board Item orientado a contenido visual.

Datos planificados para la V1:

* identificador;
* título;
* posición;
* datos del lienzo;
* referencia o datos de la miniatura;
* fecha de creación;
* fecha de última modificación;
* archivos adjuntos.

Reglas:

* pertenece a una única Column;
* cada Canvas posee contenido visual independiente;
* su contenido no se comparte automáticamente con otros Canvas;
* debe generar o actualizar una Thumbnail después de cambios relevantes;
* utilizará inicialmente las capacidades de Excalidraw.

### Canvas Element

Representa un elemento visual contenido dentro de un Canvas.

Puede representar:

* texto;
* dibujo libre;
* rectángulo;
* elipse;
* línea;
* flecha;
* conector;
* imagen;
* otros elementos compatibles con Excalidraw.

Reglas:

* no pertenece directamente a una Column;
* no es un Board Item;
* su estructura concreta dependerá del formato proporcionado por Excalidraw.

### Attachment

Representa un archivo asociado a un Board Item.

Datos conceptuales:

* identificador;
* Board Item propietario;
* nombre original;
* tipo de archivo;
* referencia local;
* tamaño;
* fecha de incorporación.

Reglas:

* un Attachment pertenece a un único Board Item;
* un Board Item puede tener varios Attachments;
* en la V1 se soportarán explícitamente archivos PDF;
* eliminar un Board Item elimina la asociación y sus recursos locales correspondientes.

## 4. Relaciones

```text
Workspace 1 ─── N Project
Project   1 ─── N Board
Board     1 ─── N Column
Column    1 ─── N Board Item
Board Item 1 ─── N Attachment
Canvas    1 ─── N Canvas Element
```

## 5. Pertenencia y ciclo de vida

Las entidades seguirán una relación jerárquica de propiedad.

```text
Workspace
└── Project
    └── Board
        └── Column
            └── Board Item
                └── Attachment
```

La eliminación de una entidad propietaria puede eliminar sus entidades dependientes, siempre respetando las reglas de confirmación definidas en los requisitos.

Ejemplos:

* eliminar un Project elimina sus Boards;
* eliminar un Board elimina sus Columns;
* eliminar una Column elimina sus Board Items;
* eliminar un Board Item elimina sus Attachments asociados.

## 6. Orden

Boards, Columns y Board Items necesitarán conservar un orden persistente.

El modelo conceptual establece que:

* las Columns tienen una posición dentro de un Board;
* los Board Items tienen una posición dentro de una Column;
* mover una Column actualiza su posición;
* mover un Board Item dentro de una Column actualiza su posición;
* mover un Board Item entre Columns actualiza su pertenencia y posición.

La estrategia técnica de ordenamiento se decidirá durante la etapa de persistencia.

## 7. Identidad

Cada entidad persistente deberá tener un identificador único que no dependa de un servidor remoto.

Los identificadores deberán poder generarse localmente.

La estrategia exacta se decidirá durante la implementación, evaluando alternativas como UUID o identificadores equivalentes.

## 8. Fechas y sincronización futura

Las entidades modificables deberán registrar:

* fecha de creación;
* fecha de última modificación.

Estas propiedades ayudarán a preparar el sistema para sincronización futura.

Sin embargo, no resuelven por sí solas:

* conflictos;
* versiones;
* usuarios;
* dispositivos;
* eliminaciones sincronizadas;
* concurrencia;
* almacenamiento remoto.

La sincronización queda fuera del alcance de la V1.

## 9. Previsualizaciones

Todo Board Item tendrá una representación resumida dentro del Board.

### Preview de Card

Podrá mostrar:

* título;
* color;
* fragmento de descripción;
* indicador de Attachments.

### Preview de Canvas

Podrá mostrar:

* título;
* Thumbnail gráfica;
* indicador de Attachments.

La generación y almacenamiento exactos de las Thumbnail se decidirán durante el módulo Canvas y la etapa de persistencia.

## 10. Invariantes iniciales

Las siguientes reglas deberán mantenerse siempre:

1. Un Board pertenece a un Project.
2. Una Column pertenece a un Board.
3. Un Board Item pertenece a una Column.
4. Un Board Item no puede pertenecer simultáneamente a varias Columns.
5. No existirán Board Items sin Column en la V1.
6. Una Card debe tener un título no vacío.
7. Cada Canvas mantiene contenido visual independiente.
8. El orden de Columns y Board Items debe persistir.
9. Un Attachment debe tener un Board Item propietario.
10. Un Canvas Element pertenece a un Canvas y no a una Column.
11. La eliminación de un Project requiere confirmación explícita.
12. La eliminación de un Board requiere confirmación explícita.
13. La eliminación de una Column con contenido requiere confirmación explícita.
14. La eliminación de Card y Canvas debe permitir una acción temporal de deshacer.

## 11. Decisiones diferidas

Todavía no se define:

* la representación exacta mediante tipos de TypeScript;
* el esquema de IndexedDB;
* la estrategia concreta para ordenar elementos;
* el formato de almacenamiento de escenas de Excalidraw;
* el formato y frecuencia de generación de Thumbnail;
* el almacenamiento físico de PDF e imágenes;
* la estrategia de sincronización remota;
* la resolución de conflictos;
* el versionado del esquema de persistencia;
* la estrategia de migraciones;
* la separación exacta entre entidades y modelos de persistencia.

Estas decisiones se tomarán en las etapas técnicas correspondientes.
