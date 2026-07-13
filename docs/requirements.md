# CanvasFlow — Requisitos del producto

## 1. Requisitos funcionales

Los requisitos funcionales describen las acciones que el usuario podrá realizar dentro de CanvasFlow. En esta etapa se define el comportamiento esperado del producto sin especificar todavía cómo será implementado técnicamente.

---

## RF-01 — Gestión de proyectos

### RF-01.1 — Crear un proyecto

El usuario debe poder crear un nuevo proyecto dentro de CanvasFlow.

Cada proyecto funcionará como un espacio de organización independiente y podrá contener uno o varios tableros.

### RF-01.2 — Visualizar proyectos existentes

El usuario debe poder acceder a una vista donde se muestren los proyectos existentes.

Desde esta vista podrá seleccionar el proyecto con el que desea trabajar.

### RF-01.3 — Abrir un proyecto

El usuario debe poder abrir un proyecto existente y acceder a los tableros asociados a él.

### RF-01.4 — Eliminar un proyecto

El usuario debe poder eliminar un proyecto existente.

Antes de completar la eliminación, CanvasFlow debe solicitar una confirmación clara para evitar pérdidas accidentales de información.

La eliminación de un proyecto también eliminará todos los tableros, columnas, Board Items, archivos adjuntos y demás contenidos asociados al proyecto.

---

## RF-02 — Gestión de tableros

### RF-02.1 — Crear un tablero

Dentro de un proyecto, el usuario debe poder crear uno o varios tableros Kanban.

### RF-02.2 — Asignar un nombre al tablero

Al crear un tablero, el usuario debe poder asignarle un nombre.

El nombre permitirá identificar el propósito del tablero, por ejemplo:

* Desarrollo Web
* Matemática
* Proyecto final
* Tareas universitarias

### RF-02.3 — Visualizar tableros existentes

El usuario debe poder ver los tableros pertenecientes al proyecto seleccionado.

### RF-02.4 — Abrir un tablero

El usuario debe poder acceder a un tablero existente para visualizar y administrar su contenido.

### RF-02.5 — Renombrar un tablero

El usuario debe poder modificar el nombre de un tablero existente.

### RF-02.6 — Eliminar un tablero

El usuario debe poder eliminar un tablero.

Antes de completar la eliminación, el sistema debe solicitar una confirmación para evitar la pérdida accidental de columnas y contenidos.

---

## RF-03 — Gestión de columnas

### RF-03.1 — Crear columnas

El usuario debe poder agregar al tablero tantas columnas como considere necesarias.

Cada columna representará una etapa, categoría o agrupación dentro del flujo de trabajo.

Ejemplos:

* Pendiente
* En progreso
* En revisión
* Finalizado

### RF-03.2 — Asignar un nombre a una columna

El usuario debe poder asignar un nombre a cada columna.

### RF-03.3 — Renombrar una columna

El usuario debe poder modificar el nombre de una columna existente.

### RF-03.4 — Reordenar columnas

El usuario debe poder modificar el orden de las columnas mediante una interacción de arrastrar y soltar.

### RF-03.5 — Eliminar columnas

El usuario debe poder eliminar una columna.

Si la columna contiene Board Items, el sistema deberá informar esta situación, indicar cuántos Board Items serán afectados y solicitar una confirmación explícita.

La columna y sus Board Items solamente se eliminarán después de la confirmación.

En la V1 no existirán Board Items sin columna.

---

## RF-04 — Gestión de Cards

### RF-04.1 — Crear una Card

El usuario debe poder crear una Card dentro de una columna.

### RF-04.2 — Asignar contenido textual

Cada Card deberá contener un título obligatorio y podrá contener una descripción opcional.

Ejemplo:

> Crear navbar

### RF-04.3 — Abrir una Card

El usuario debe poder abrir una Card para consultar o modificar su contenido.

La apertura de una Card debe mostrar una vista detallada sin hacer que el usuario pierda el contexto del tablero actual.

### RF-04.4 — Editar una Card

El usuario debe poder consultar y modificar el título, la descripción y el color de una Card existente.

La Card deberá registrar su fecha de creación y su fecha de última modificación.

En la V1, una Card podrá contener archivos PDF adjuntos. No incluirá fechas límite, etiquetas, responsables, comentarios, prioridades, colaboración ni historial avanzado.

### RF-04.5 — Mover una Card dentro de una columna

El usuario debe poder cambiar la posición de una Card dentro de su columna mediante arrastrar y soltar.

### RF-04.6 — Mover una Card entre columnas

El usuario debe poder trasladar una Card desde una columna hacia otra mediante arrastrar y soltar.

### RF-04.7 — Eliminar una Card

El usuario debe poder eliminar una Card.

Después de eliminarla, el sistema deberá mostrar temporalmente una acción de “Deshacer”.

### RF-04.8 — Mostrar una previsualización de la Card

En la V1, una Card no tendrá una miniatura gráfica.

Su previsualización estará compuesta por los datos disponibles, como el título, el color, un fragmento de la descripción y un indicador de archivos adjuntos.

---

## RF-05 — Personalización visual de Cards

### RF-05.1 — Cambiar el color de una Card

El usuario debe poder asignar diferentes colores a las Cards.

Los colores permitirán personalizar el tablero y diferenciar visualmente tareas, categorías, prioridades o tipos de contenido.

### RF-05.2 — Modificar el color de una Card

El usuario debe poder cambiar el color asignado a una Card existente.

### RF-05.3 — Mantener la personalización

El color seleccionado debe conservarse después de cerrar y volver a abrir la aplicación.

En la primera versión, el color será una propiedad visual y no tendrá un significado obligatorio definido por CanvasFlow.

---

## RF-06 — Lienzos visuales

### RF-06.1 — Crear un lienzo

El usuario debe poder crear un lienzo visual dentro de una columna del tablero.

### RF-06.2 — Representar el lienzo como un Board Item

El lienzo deberá representarse dentro del tablero como un Board Item.

Visualmente podrá compartir la apariencia general de una Card, pero conceptualmente será un tipo diferente de Board Item.

Esto permitirá organizarlo utilizando las mismas interacciones generales del tablero.

### RF-06.3 — Mostrar una previsualización del lienzo

El Board Item de tipo Canvas deberá mostrar una miniatura o previsualización de su contenido.

La previsualización deberá actualizarse automáticamente cuando el contenido del lienzo cambie.

### RF-06.4 — Abrir el lienzo

El usuario debe poder abrir el lienzo desde su Board Item de previsualización.

### RF-06.5 — Editar el lienzo

El usuario debe poder agregar, modificar y eliminar elementos visuales dentro del lienzo.

En la V1, el Canvas utilizará las herramientas básicas de Excalidraw necesarias para un uso funcional: selección, desplazamiento y zoom, texto, dibujo libre, rectángulos, elipses, líneas, flechas, conectores, borrado, incorporación de imágenes, deshacer y rehacer.

No incluirá colaboración en tiempo real, inteligencia artificial, plugins, edición avanzada de PDF, bloques estilo Notion, fórmulas matemáticas avanzadas propias ni herramientas personalizadas fuera de las capacidades iniciales de Excalidraw.

### RF-06.6 — Mover el lienzo

El Board Item de tipo Canvas deberá poder reordenarse dentro de una columna o trasladarse hacia otra columna mediante drag & drop.

### RF-06.7 — Eliminar el lienzo

El usuario deberá poder eliminar un Board Item de tipo Canvas.

Después de eliminarlo, el sistema deberá mostrar temporalmente una acción de “Deshacer”.

---

## RF-07 — Archivos PDF

### RF-07.1 — Adjuntar archivos PDF

El usuario debe poder adjuntar uno o varios archivos PDF a un Board Item.

Inicialmente, tanto las Cards como los Canvas podrán contener archivos PDF adjuntos.

Los archivos adjuntos deberán permanecer asociados al Board Item correspondiente y conservarse después de cerrar y volver a abrir la aplicación.

### RF-07.2 — Visualizar archivos adjuntos

El usuario debe poder identificar claramente que una Card o Canvas contiene uno o más archivos PDF.

### RF-07.3 — Abrir un archivo PDF

El usuario debe poder abrir o visualizar un PDF adjunto desde CanvasFlow.

### RF-07.4 — Eliminar un archivo adjunto

El usuario debe poder eliminar un PDF adjunto sin eliminar necesariamente la Card o el Canvas que lo contiene.

---

## RF-08 — Guardado automático

### RF-08.1 — Guardar cambios automáticamente

CanvasFlow debe guardar automáticamente las modificaciones realizadas por el usuario.

El usuario no debería necesitar presionar manualmente un botón de guardado para conservar cambios comunes.

Esto incluye, como mínimo:

* creación y modificación de proyectos;
* creación y modificación de tableros;
* creación y modificación de columnas;
* creación y modificación de Cards;
* posición de Board Items y columnas;
* colores seleccionados;
* contenido de los Canvas;
* archivos adjuntos;
* nombres y títulos.

### RF-08.2 — Informar el estado del guardado

La interfaz debe comunicar de manera discreta el estado de persistencia.

Ejemplos:

* Guardando…
* Guardado
* Error al guardar

### RF-08.3 — Recuperar los datos

Al cerrar y volver a abrir CanvasFlow, el usuario debe encontrar la información en el mismo estado en el que fue guardada.

---

## RF-09 — Búsqueda

### RF-09.1 — Acceder al buscador

El usuario debe disponer de un buscador fácilmente accesible, preferentemente ubicado en una zona superior de la interfaz.

La posición exacta será definida durante la etapa de diseño de experiencia de usuario.

### RF-09.2 — Buscar por texto

El usuario debe poder buscar contenido mediante texto.

La búsqueda debe encontrar coincidencias parciales.

Por ejemplo, si existe una Card llamada:

> Crear navbar

al escribir:

> cre

el sistema debe mostrar esa Card entre los resultados.

### RF-09.3 — Ignorar mayúsculas y minúsculas

La búsqueda no debe depender del uso de mayúsculas o minúsculas.

Por ejemplo, las consultas `crear`, `Crear` y `CREAR` deben producir resultados equivalentes.

### RF-09.4 — Mostrar múltiples coincidencias

Cuando varios Board Items coincidan con el texto ingresado, el sistema debe mostrar todas las coincidencias relevantes.

### RF-09.5 — Filtrar por tipo de contenido

El usuario debe poder filtrar los resultados según el tipo de contenido.

Tipos considerados inicialmente:

* Card
* Canvas

### RF-09.6 — Navegar hacia un resultado

Al seleccionar un resultado, CanvasFlow debe llevar al usuario hasta el proyecto, tablero, columna y Board Item correspondiente.

### RF-09.7 — Delimitar el alcance de la búsqueda

En la versión 1.0, la búsqueda funcionará dentro del proyecto actualmente abierto.

La búsqueda podrá encontrar Board Items pertenecientes a cualquiera de los tableros del proyecto.

La búsqueda global entre todos los proyectos queda fuera del alcance inicial.

---

## RF-10 — Organización de Board Items

### RF-10.1 — Reordenar Board Items

Todo Board Item deberá poder cambiar su posición dentro de una columna mediante drag & drop.

### RF-10.2 — Trasladar Board Items

Todo Board Item deberá poder trasladarse entre columnas.

### RF-10.3 — Conservar el orden

CanvasFlow debe conservar el orden de columnas y Board Items después de cerrar y volver a abrir la aplicación.

### RF-10.4 — Diferenciar tipos de contenido

El usuario deberá poder identificar visualmente el tipo de cada Board Item.

Inicialmente existirán dos tipos:

* Card
* Canvas

Cada uno deberá poseer una identidad visual claramente diferenciable.

---

## 2. Resumen de capacidades del usuario

En la primera versión planificada, el usuario podrá:

1. Crear, abrir y eliminar proyectos.
2. Crear, abrir, renombrar y eliminar tableros.
3. Crear, renombrar, reordenar y eliminar columnas.
4. Crear, abrir, editar, mover y eliminar Cards.
5. Personalizar el color de las Cards.
6. Crear Canvas representados como Board Items con previsualización.
7. Abrir, editar, mover y eliminar Canvas.
8. Adjuntar y administrar archivos PDF.
9. Guardar automáticamente todo el contenido.
10. Buscar contenido por coincidencias parciales de texto.
11. Filtrar resultados por tipo de contenido.
12. Navegar desde un resultado de búsqueda hasta su ubicación.
13. Recuperar el estado del proyecto al volver a abrir la aplicación.

---

## Decisiones de dominio (provisionales)

Las siguientes decisiones forman parte del diseño del dominio y podrán revisarse antes de comenzar la implementación.

### DD-01 — Elemento base del tablero

Una columna no contendrá distintos tipos independientes de contenido.

Cada columna contendrá únicamente **Board Items**.

**Board Item** será el concepto base del dominio para cualquier elemento que pueda existir dentro de una columna del tablero.

Inicialmente existirán dos tipos de Board Item:

- Card
- Canvas

En versiones futuras podrán incorporarse nuevos tipos (por ejemplo, Notes, PDF, Checklist, Whiteboard, etc.) sin modificar la estructura general del tablero.

Esta decisión busca favorecer una arquitectura extensible y reducir el impacto de futuras funcionalidades.

---

# 4. Requisitos no funcionales

Los requisitos no funcionales describen las condiciones de calidad, rendimiento, confiabilidad y mantenibilidad que CanvasFlow deberá cumplir.

## RNF-01 — Funcionamiento local-first

### RNF-01.1 — Operación sin conexión

CanvasFlow deberá permitir crear, consultar, editar, mover y eliminar contenido sin requerir conexión a Internet.

Las funcionalidades principales de la versión 1.0 deberán estar disponibles completamente offline.

### RNF-01.2 — Persistencia local

Todos los datos del usuario deberán almacenarse localmente en el dispositivo mediante una capa de persistencia desacoplada de la interfaz.

### RNF-01.3 — Preparación para sincronización futura

Aunque la sincronización no forme parte de la versión 1.0, el modelo de datos deberá diseñarse para permitir una futura sincronización remota.

Las entidades persistentes deberán contar, como mínimo, con:

- identificadores únicos;
- fecha de creación;
- fecha de última modificación.

No se implementará todavía servidor, autenticación, resolución de conflictos ni almacenamiento en la nube.

## RNF-02 — Confiabilidad de los datos

### RNF-02.1 — Guardado automático

Los cambios comunes deberán guardarse automáticamente sin requerir una acción manual del usuario.

### RNF-02.2 — Recuperación del estado

Después de cerrar y volver a abrir la aplicación, los proyectos deberán conservar su estructura, contenido, orden y personalización.

### RNF-02.3 — Errores de persistencia

Si un cambio no puede guardarse, la aplicación deberá comunicar el error sin indicar falsamente que la operación fue completada.

### RNF-02.4 — Operaciones destructivas

Las operaciones con pérdida significativa de información deberán requerir confirmación o proporcionar una acción de deshacer, según el tipo de elemento.

## RNF-03 — Rendimiento

### RNF-03.1 — Inicio de la aplicación

La aplicación deberá iniciar y mostrar una interfaz utilizable en un tiempo razonable para una aplicación de escritorio local.

El objetivo inicial de referencia será alcanzar una interfaz utilizable en aproximadamente tres segundos en un equipo moderno de gama media.

Este valor deberá medirse y revisarse durante la etapa de optimización.

### RNF-03.2 — Interacciones del tablero

Las operaciones de crear, editar, abrir, reordenar y mover Board Items deberán sentirse fluidas durante un uso normal.

### RNF-03.3 — Drag and drop

El movimiento de columnas y Board Items deberá proporcionar retroalimentación visual inmediata y evitar bloqueos perceptibles.

### RNF-03.4 — Carga progresiva

Los contenidos pesados, especialmente Canvas, miniaturas, imágenes y PDF, no deberán cargarse de forma innecesaria cuando no estén visibles o abiertos.

### RNF-03.5 — Escala inicial

La arquitectura deberá admitir proyectos con múltiples tableros y cientos de Board Items sin requerir un rediseño completo.

No se establecerán todavía promesas de rendimiento para miles de lienzos o archivos pesados sin mediciones reales.

## RNF-04 — Usabilidad

### RNF-04.1 — Aprendizaje de la interfaz

Un estudiante deberá poder comprender las acciones principales sin necesitar documentación extensa.

### RNF-04.2 — Retroalimentación

Las acciones importantes deberán proporcionar una respuesta visual clara, incluyendo:

- creación;
- guardado;
- movimiento;
- eliminación;
- errores;
- resultados de búsqueda.

### RNF-04.3 — Consistencia

Las Cards y los Canvas deberán compartir patrones de interacción cuando representen acciones comunes, pero conservar una identidad visual diferenciable.

### RNF-04.4 — Prevención de errores

La interfaz deberá priorizar la prevención de pérdidas accidentales y ofrecer mensajes comprensibles cuando una operación no pueda completarse.

## RNF-05 — Accesibilidad

### RNF-05.1 — Navegación básica mediante teclado

Las acciones principales deberán poder utilizarse mediante teclado cuando los componentes y librerías seleccionados lo permitan razonablemente.

### RNF-05.2 — Contraste

Los textos, controles y estados interactivos deberán mantener un contraste legible.

### RNF-05.3 — Estados no dependientes únicamente del color

El color no deberá ser el único mecanismo para comunicar información importante.

### RNF-05.4 — Etiquetas accesibles

Los botones basados únicamente en iconos deberán contar con nombres o descripciones accesibles.

## RNF-06 — Mantenibilidad

### RNF-06.1 — Separación de responsabilidades

La interfaz, el estado, las reglas de dominio y la persistencia deberán mantenerse desacoplados.

### RNF-06.2 — Modularidad

Las funcionalidades deberán organizarse por módulos o dominios claramente delimitados.

### RNF-06.3 — Tipado

El código de la aplicación deberá utilizar TypeScript con tipado estricto.

### RNF-06.4 — Convenciones

El proyecto deberá mantener convenciones consistentes de nombres, organización de archivos, formato y documentación.

### RNF-06.5 — Decisiones documentadas

Las decisiones arquitectónicas relevantes deberán registrarse mediante Architecture Decision Records.

## RNF-07 — Portabilidad

### RNF-07.1 — Aplicación de escritorio

CanvasFlow se desarrollará como aplicación de escritorio mediante Tauri.

### RNF-07.2 — Plataformas

La primera plataforma de desarrollo y validación será Windows.

La arquitectura no deberá impedir una futura distribución para macOS y Linux, pero esas plataformas no serán un criterio obligatorio para completar la primera versión.

## RNF-08 — Privacidad y seguridad local

### RNF-08.1 — Datos locales

En la V1, los datos del usuario permanecerán almacenados localmente y no serán enviados a servicios externos.

### RNF-08.2 — Acceso a archivos

La aplicación deberá solicitar y utilizar únicamente los permisos necesarios para las operaciones con archivos.

### RNF-08.3 — Contenido no confiable

Los enlaces y archivos adjuntos deberán tratarse como contenido externo y abrirse mediante mecanismos seguros proporcionados por la plataforma.

## RNF-09 — Calidad

### RNF-09.1 — Pruebas

Las reglas de dominio y los flujos críticos deberán contar con pruebas automatizadas apropiadas.

### RNF-09.2 — Errores críticos

La versión 1.0 no deberá contener errores conocidos que provoquen pérdida de datos, corrupción del estado o imposibilidad de utilizar las funciones principales.

### RNF-09.3 — Revisiones

Las funcionalidades deberán pasar por implementación, testing, refactorización y documentación antes de considerarse terminadas.
