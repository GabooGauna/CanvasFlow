# CanvasFlow — Criterios de éxito de la versión 1.0

## 1. Propósito

La versión 1.0 estará terminada cuando CanvasFlow pueda ser utilizada de forma básica, funcional y confiable por un estudiante para organizar sus actividades mediante Projects, Boards, Columns, Cards y Canvas.

La versión no necesitará incluir todas las ideas futuras para considerarse exitosa.

## 2. Escenario principal de validación

Un estudiante debe poder:

1. instalar y abrir CanvasFlow en Windows;
2. crear un Project para una materia o actividad;
3. crear uno o varios Boards;
4. crear y organizar Columns;
5. crear Cards con título, descripción, color y PDF adjuntos;
6. crear Canvas independientes;
7. dibujar y escribir dentro de cada Canvas;
8. visualizar una miniatura de cada Canvas en el Board;
9. mover Cards y Canvas dentro del tablero;
10. buscar contenido dentro del Project;
11. cerrar la aplicación;
12. volver a abrirla y encontrar la información conservada.

## 3. Criterios funcionales

La V1 se considerará funcionalmente completa cuando:

- todos los requisitos funcionales incluidos en el alcance de la V1 estén implementados;
- los Board Items puedan organizarse y moverse correctamente;
- cada Canvas mantenga contenido independiente;
- las miniaturas se actualicen correctamente;
- los PDF puedan adjuntarse, abrirse y eliminarse;
- la búsqueda encuentre resultados relevantes;
- el guardado automático funcione;
- la aplicación recupere el estado persistido.

## 4. Criterios de confiabilidad

- No deben existir errores conocidos que provoquen pérdida o corrupción de datos.
- Cerrar la aplicación durante un uso normal no debe eliminar cambios previamente guardados.
- Los errores de guardado deben comunicarse.
- Las operaciones destructivas deben estar protegidas.
- Los archivos adjuntos deben conservar su asociación correcta.

## 5. Criterios de experiencia de usuario

- Un usuario nuevo debe poder comprender las acciones principales sin capacitación extensa.
- La interfaz debe ofrecer estados vacíos, mensajes de error y retroalimentación visual.
- Cards y Canvas deben diferenciarse visualmente.
- El drag and drop debe sentirse estable.
- La aplicación debe resultar utilizable en sesiones normales de estudio.
- El modo oscuro debe estar disponible.

## 6. Criterios técnicos

- La aplicación deberá distribuirse como build de escritorio para Windows.
- TypeScript deberá ejecutarse en modo estricto.
- La arquitectura deberá separar dominio, interfaz, estado y persistencia.
- Las decisiones importantes deberán estar documentadas.
- Los flujos críticos deberán contar con pruebas.
- El proyecto no deberá depender de conexión a Internet para su uso principal.

## 7. Definición de terminado

Una funcionalidad se considerará terminada solamente cuando haya pasado por:

1. análisis;
2. diseño;
3. implementación;
4. pruebas;
5. revisión;
6. refactorización necesaria;
7. documentación.

## 8. Condición de release

La versión 1.0 podrá publicarse cuando:

- todos los criterios P0 de la V1 estén cumplidos;
- no existan errores críticos abiertos;
- los flujos principales hayan sido probados;
- exista un instalador o build ejecutable;
- la documentación de instalación y uso básico esté actualizada;
- CanvasFlow pueda utilizarse durante una prueba real de estudio sin impedir el flujo principal.
