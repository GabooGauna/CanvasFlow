# CanvasFlow — Backlog del producto

## 1. Objetivo

Este documento organiza las funcionalidades por prioridad y versión.

El backlog podrá evolucionar, pero ninguna funcionalidad deberá incorporarse a una versión sin analizar su impacto en el alcance.

## 2. Prioridades

- P0: imprescindible para completar la versión.
- P1: importante, pero puede postergarse si pone en riesgo el cierre.
- P2: mejora posterior.
- Future: idea fuera del horizonte inmediato.

## 3. MVP técnico

El MVP técnico permitirá validar la arquitectura sin representar todavía una versión terminada para usuarios.

### P0

- Crear la aplicación de escritorio.
- Configurar React, TypeScript, Vite y Tauri.
- Definir la arquitectura modular.
- Crear navegación básica.
- Crear Projects localmente.
- Crear un Board.
- Crear Columns.
- Crear Cards básicas.
- Persistir los datos localmente.
- Recuperar el estado al reiniciar la aplicación.

## 4. Versión 1.0 — Uso estudiantil básico y funcional

### Gestión de Projects

- Crear Projects.
- Visualizar Projects.
- Abrir Projects.
- Eliminar Projects con confirmación.
- Permitir varios Boards por Project.

### Gestión de Boards

- Crear Boards.
- Renombrar Boards.
- Abrir Boards.
- Eliminar Boards con confirmación.

### Gestión de Columns

- Crear Columns.
- Renombrar Columns.
- Reordenar Columns.
- Eliminar Columns con confirmación.
- Persistir su orden.

### Cards

- Crear Cards.
- Editar título.
- Editar descripción.
- Cambiar color.
- Mover Cards dentro de una Column.
- Mover Cards entre Columns.
- Eliminar Cards con opción de deshacer.
- Mostrar un resumen visual de la Card.

### Canvas

- Crear un Canvas como Board Item.
- Abrir el Canvas.
- Editar mediante herramientas básicas de Excalidraw.
- Guardar automáticamente el contenido.
- Generar una miniatura.
- Mostrar la miniatura en el Board.
- Mover Canvas dentro de una Column.
- Mover Canvas entre Columns.
- Eliminar Canvas con opción de deshacer.

### Attachments

- Adjuntar archivos `.pdf`, `.doc`, `.docx` y `.txt` a Cards y Canvas.
- Identificar cada Attachment por nombre, tipo y tamaño.
- Listar los Attachments de un Board Item.
- Abrir Attachments externamente con la aplicación predeterminada del sistema operativo.
- Eliminar la asociación de Attachments sin eliminar su Board Item propietario ni borrar archivos originales únicamente referenciados.
- Conservar la asociación y disponibilidad de los Attachments después de reiniciar.

### Búsqueda

- Buscar Board Items dentro del Project actual.
- Buscar por coincidencias parciales.
- Ignorar mayúsculas y minúsculas.
- Filtrar por Card o Canvas.
- Navegar desde el resultado hasta el elemento.

### Persistencia y experiencia

- Funcionamiento completamente offline.
- Guardado automático.
- Indicador de estado del guardado.
- Recuperación de datos al reiniciar.
- Modo oscuro.
- Estados de carga, vacío y error.
- Prevención de eliminaciones accidentales.

### Calidad

- Pruebas de reglas de dominio.
- Pruebas de los flujos principales.
- Ausencia de errores críticos conocidos.
- Documentación del proyecto.
- Build instalable para Windows.

## 5. Versión 1.1

### P1

- Papelera persistente.
- Restauración de elementos eliminados.
- Búsqueda global entre Projects.
- Más opciones de personalización.
- Etiquetas para Cards.
- Fechas límite.
- Checklists dentro de Cards.
- Mejoras de accesibilidad.
- Exportación e importación local.
- Optimización para proyectos grandes.
- Atajos de teclado ampliados.

## 6. Versión 2

### P2

- Sistema de notas enriquecidas.
- Bloques de contenido.
- Relaciones entre Cards, Canvas y Notes.
- Backlinks.
- Vistas alternativas del contenido.
- Historial de cambios.
- Plantillas.
- Soporte ampliado de archivos.
- Sincronización entre dispositivos.
- Cuentas de usuario.

## 7. Futuro

- Colaboración en tiempo real.
- Espacios compartidos.
- Comentarios.
- Roles y permisos.
- Inteligencia artificial.
- Búsqueda semántica.
- Resúmenes automáticos.
- Plugins.
- API pública.
- Aplicación móvil.
- Marketplace de plantillas.
- Segundo cerebro personal.

## 8. Fuera del alcance de la V1

Las siguientes funcionalidades no deben incorporarse durante la versión 1.0:

- autenticación;
- servidor remoto;
- sincronización;
- colaboración;
- IA;
- plugins;
- notas por bloques;
- edición interna de Attachments;
- previsualización interna obligatoria de Attachments;
- búsqueda dentro del contenido de Attachments;
- conversión de formatos;
- sincronización de archivos;
- aplicación móvil;
- comentarios;
- equipos;
- permisos;
- historial avanzado;
- papelera persistente.

Agregar cualquiera de estas funcionalidades requerirá revisar formalmente el alcance.
