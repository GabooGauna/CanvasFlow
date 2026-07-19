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

Datos conceptuales iniciales:

* `id`;
* `name`;
* `createdAt`;
* `updatedAt`.

Responsabilidades:

* tener un nombre;
* relacionarse con cero o más Boards;
* definir el alcance de búsqueda de la versión 1.0;
* agrupar información relacionada.

Reglas:

* su identidad debe ser local, estable y única;
* el primer flujo utilizará un UUID generado localmente para identificarlo;
* un Project puede existir sin Boards;
* un Project puede contener múltiples Boards;
* el nombre se normaliza eliminando espacios en blanco iniciales y finales y reemplazando cada secuencia interna de espacios en blanco por un único espacio;
* los espacios en blanco incluyen espacios, tabulaciones, saltos de línea y otros caracteres equivalentes, por lo que el nombre normalizado queda en una sola línea;
* después de la normalización, el nombre debe contener entre 1 y 100 caracteres;
* diferentes Projects pueden tener el mismo nombre porque su identidad depende de `id`;
* al crear un Project, `createdAt` y `updatedAt` representan exactamente el mismo instante;
* las fechas se representan inicialmente como instantes ISO 8601 en UTC;
* `id` y `createdAt` no cambian durante el ciclo de vida del Project;
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

Metadatos conceptuales:

* identificador;
* Board Item propietario;
* nombre original;
* tipo de archivo;
* tamaño;
* fecha de incorporación;
* referencia al contenido físico, si la estrategia de almacenamiento finalmente la requiere.

Los metadatos describen y relacionan el Attachment dentro del dominio. El contenido físico es el archivo almacenado o referenciado por infraestructura y no forma parte de esos metadatos.

Reglas:

* un Attachment pertenece a un único Board Item;
* un Board Item puede tener varios Attachments;
* en la V1 se admitirán `.pdf`, `.doc`, `.docx` y `.txt`;
* PDF, Word y texto plano no se modelarán mediante subtipos separados;
* un Attachment podrá asociarse a una Card o un Canvas;
* un Attachment deberá poder identificarse por nombre, tipo y tamaño;
* los Attachments se abrirán externamente con la aplicación predeterminada del sistema operativo;
* la V1 no editará, convertirá ni buscará dentro del contenido de los Attachments;
* eliminar un Attachment siempre elimina su asociación con el Board Item;
* si el contenido físico es una copia administrada por CanvasFlow, esa copia podrá eliminarse junto con la asociación;
* si el contenido físico es el archivo original referenciado, eliminar el Attachment no deberá borrar ni modificar ese archivo;
* eliminar un Board Item elimina las asociaciones con sus Attachments y respeta las mismas reglas sobre el contenido físico.

La estrategia física permanece diferida. Todavía no se decide entre almacenar el contenido en IndexedDB, crear una copia administrada mediante Tauri o conservar una referencia al archivo original, ni se define una papelera o recuperación persistente.

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

Para el primer flujo de Project se utilizará un UUID generado localmente. Esta decisión se limita a Project y no determina automáticamente la representación de identidad del resto de las entidades.

La estrategia exacta para las demás entidades permanece diferida.

## 8. Fechas y sincronización futura

Las entidades modificables deberán registrar:

* fecha de creación;
* fecha de última modificación.

En Project, ambas fechas representan instantes ISO 8601 en UTC y contienen exactamente el mismo instante al crearse. `createdAt` permanece inmutable; `updatedAt` representa el instante de la última modificación.

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

1. Un Project debe tener una identidad local válida y estable.
2. El nombre normalizado de un Project debe contener entre 1 y 100 caracteres.
3. Al crear un Project, `createdAt` y `updatedAt` deben representar exactamente el mismo instante.
4. `id` y `createdAt` no cambian durante el ciclo de vida de Project.
5. Un Board pertenece a un Project.
6. Una Column pertenece a un Board.
7. Un Board Item pertenece a una Column.
8. Un Board Item no puede pertenecer simultáneamente a varias Columns.
9. No existirán Board Items sin Column en la V1.
10. Una Card debe tener un título no vacío.
11. Cada Canvas mantiene contenido visual independiente.
12. El orden de Columns y Board Items debe persistir.
13. Un Attachment debe tener un Board Item propietario.
14. Un Canvas Element pertenece a un Canvas y no a una Column.
15. La eliminación de un Project requiere confirmación explícita.
16. La eliminación de un Board requiere confirmación explícita.
17. La eliminación de una Column con contenido requiere confirmación explícita.
18. La eliminación de Card y Canvas debe permitir una acción temporal de deshacer.

## 11. Decisiones diferidas

Todavía no se define:

* la representación exacta mediante tipos de TypeScript;
* el esquema de IndexedDB;
* la estrategia concreta para ordenar elementos;
* el formato de almacenamiento de escenas de Excalidraw;
* el formato y frecuencia de generación de Thumbnail;
* el almacenamiento físico de Attachments e imágenes;
* la estrategia de sincronización remota;
* la resolución de conflictos;
* el versionado del esquema de persistencia;
* la estrategia de migraciones;
* la separación exacta entre entidades y modelos de persistencia.

Estas decisiones se tomarán en las etapas técnicas correspondientes.
