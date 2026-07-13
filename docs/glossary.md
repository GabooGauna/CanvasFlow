# CanvasFlow — Glosario

Este documento define el vocabulario oficial de CanvasFlow.

Su objetivo es evitar ambigüedades entre producto, diseño, documentación y código.

## Workspace

Entorno general de la aplicación desde el cual el usuario accede a sus proyectos.

En la versión 1.0 existirá un único Workspace local implícito.

No será necesario que el usuario lo cree ni lo configure.

## Project

Espacio de organización independiente que agrupa uno o varios Boards relacionados con una finalidad común.

Ejemplos:

- Universidad;
- Desarrollo web;
- Proyecto final;
- Organización personal.

## Board

Tablero Kanban perteneciente a un Project.

Contiene Columns y permite organizar Board Items.

## Column

Agrupación vertical dentro de un Board.

Representa una etapa, categoría o estado definido por el usuario.

Una Column contiene Board Items ordenados.

En CanvasFlow, el término “lista” no se utilizará como sinónimo oficial de Column.

## Board Item

Concepto general del dominio que representa cualquier elemento organizable dentro de una Column.

Todos los Board Items comparten comportamientos básicos:

- pertenecer a una Column;
- tener una posición;
- poder reordenarse;
- poder moverse entre Columns;
- poder abrirse;
- poder eliminarse;
- poder aparecer en búsquedas.

Los tipos iniciales serán Card y Canvas.

## Card

Tipo de Board Item orientado principalmente a contenido textual y archivos adjuntos.

En la V1 podrá contener:

- título;
- descripción;
- color;
- PDF adjuntos;
- fecha de creación;
- fecha de modificación.

## Canvas

Tipo de Board Item que contiene un lienzo visual editable.

Se mostrará en el Board mediante una previsualización de su contenido.

## Canvas Element

Elemento visual contenido dentro de un Canvas.

Puede representar texto, formas, líneas, flechas, dibujos, imágenes u otros elementos compatibles con el motor del lienzo.

No debe confundirse con un Board Item.

## Attachment

Archivo asociado a un Board Item.

En la V1, el tipo de archivo adjunto planificado explícitamente será PDF, aunque el modelo podrá prepararse para otros formatos futuros.

## Preview

Representación resumida de un Board Item dentro del Board.

En una Card estará formada por información textual y visual.

En un Canvas incluirá una miniatura gráfica de su contenido.

## Thumbnail

Imagen reducida generada a partir del contenido visual de un Canvas.

Es un tipo específico de Preview.

## Local-first

Enfoque donde la aplicación puede funcionar y persistir datos localmente sin depender de una conexión o servidor remoto.

## Offline

Estado en el que la aplicación no tiene acceso a Internet.

Las funciones principales de CanvasFlow V1 deberán seguir disponibles en este estado.

## Sync-ready

Condición arquitectónica por la cual el modelo y la persistencia se preparan para incorporar sincronización futura, aunque dicha sincronización todavía no esté implementada.

## Sincronización

Proceso futuro mediante el cual los cambios locales podrán replicarse hacia un almacenamiento remoto y entre distintos dispositivos.

La sincronización no forma parte de la V1.

## Drag and drop

Interacción mediante la cual el usuario arrastra una Column o Board Item para cambiar su posición o ubicación.

## Autosave

Guardado automático de modificaciones sin que el usuario tenga que presionar manualmente un botón de guardar.

## V1

Primera versión estable y utilizable de CanvasFlow.

Debe permitir a un estudiante organizar proyectos mediante Boards, Columns, Cards y Canvas con persistencia local confiable.
