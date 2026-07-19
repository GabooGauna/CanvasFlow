# ADR-010 — Límites de módulos funcionales

## Estado

Aceptada.

## Contexto

ADR-009 estableció una arquitectura modular orientada por funcionalidades, pero dejó pendiente delimitar la propiedad de las capacidades confirmadas de CanvasFlow.

Sin límites explícitos, Workspace podría conocer detalles internos del tablero, Kanban podría acoplarse al formato de Excalidraw y las capacidades compartidas podrían convertirse en contenedores genéricos. También es necesario ubicar Search, Attachments y Settings sin crear módulos innecesarios.

Esta decisión define responsabilidades conceptuales. La arquitectura física todavía no fue implementada.

## Decisión

CanvasFlow reconocerá los siguientes módulos funcionales y capacidades de composición:

- **App Shell:** arranque, composición, navegación de alto nivel, aplicación del tema y límites generales de error.
- **Workspace:** Workspace local implícito y ciclo de vida de Projects.
- **Kanban:** Boards, Columns, Board Items, Cards, pertenencia, posición, movimiento y drag and drop.
- **Canvas:** escenas, contenido visual, integración con Excalidraw, edición y generación de Thumbnail.
- **Settings:** módulo funcional ligero para preferencias globales; el modo oscuro es la única preferencia confirmada actualmente.
- **Shared UI:** componentes y patrones visuales genéricos, accesibles y realmente reutilizables, sin reglas ni entidades funcionales.

Kanban poseerá inicialmente la asociación y los metadatos de Attachments porque todo Attachment pertenece a un Board Item. Las operaciones técnicas sobre archivos se realizarán mediante contratos requeridos por el módulo y adaptadores de infraestructura.

Eliminar un Attachment siempre eliminará su asociación. El tratamiento de una copia administrada dependerá de la estrategia física elegida, y un archivo original únicamente referenciado nunca deberá borrarse ni modificarse por esa acción.

Search será inicialmente una capacidad de aplicación de Kanban. Utilizará el Project abierto como contexto, buscará título y descripción de Cards y título de Canvas, y no inspeccionará escenas de Excalidraw ni contenido de Attachments.

No se confirma un módulo Core. Identidad, reloj, errores, constantes y utilidades permanecerán con sus propietarios hasta que exista una necesidad estable de compartirlos.

## Propiedad y relaciones

El dominio conserva la relación conceptual Project 1 — N Board. Workspace posee el ciclo de vida de Project; Kanban posee Board y mantiene su asociación mediante una identidad pública estable de Project.

La relación conceptual no exige que Workspace contenga objetos Board ni conozca detalles internos de Kanban. Las representaciones concretas en TypeScript y en persistencia permanecen diferidas.

Canvas mantiene una doble relación con el producto:

- Kanban conoce la identidad organizativa del Board Item de tipo Canvas, su pertenencia y su posición;
- Canvas conoce su contenido visual, escena, edición y Thumbnail.

Canvas utilizará la identidad pública estable del Board Item. No accederá a stores, tablas ni detalles internos de Kanban. Kanban no conocerá escenas ni tipos internos de Excalidraw.

## Reglas de comunicación

1. Los módulos se comunicarán mediante APIs públicas pequeñas.
2. App Shell coordinará navegación y composición entre módulos.
3. Workspace no dependerá de detalles internos de Kanban.
4. Kanban solo utilizará la identidad pública de Project que necesite.
5. Kanban y Canvas compartirán una identidad pública estable del Board Item de tipo Canvas, no sus detalles internos.
6. Los contratos de persistencia y archivos pertenecerán conceptualmente a las necesidades del módulo consumidor.
7. Los adaptadores concretos permanecerán en infraestructura y dependerán hacia el interior de esos contratos.
8. Shared UI no conocerá reglas ni entidades de los módulos funcionales.
9. Las preferencias específicas de una funcionalidad permanecerán inicialmente en su módulo propietario.

## Alternativas consideradas

### Concentrar Workspace, Kanban y Canvas en un único módulo

Se descartó porque mezclaría ciclos de vida, organización y contenido visual, y aumentaría el riesgo de acoplamiento con Excalidraw y persistencia.

### Crear módulos independientes para Search y Attachments

Se descartó para la V1 porque Search opera dentro del contexto de Kanban y la asociación de Attachments pertenece a Board Item. Separarlos ahora agregaría fronteras sin una necesidad comprobada.

### Crear un módulo Core para capacidades transversales

Se descartó por ahora porque podría transformarse en un destino genérico para utilidades sin propietario claro.

### Mantener Settings como detalle de App Shell

Se descartó porque las preferencias globales constituyen una responsabilidad funcional diferenciada, aunque su alcance inicial sea pequeño.

## Consecuencias positivas

- propiedad explícita de las capacidades confirmadas;
- menor acoplamiento entre organización y contenido visual;
- Excalidraw encapsulado dentro de Canvas;
- Search y Attachments ubicados sin crear módulos prematuros;
- preferencias globales separadas de las específicas de cada funcionalidad;
- contratos técnicos definidos desde las necesidades del consumidor.

## Consecuencias negativas

- algunos flujos requerirán coordinación entre App Shell, Workspace, Kanban y Canvas;
- la doble naturaleza del Canvas exige mantener estable su identidad pública;
- Settings puede resultar muy pequeño durante la V1;
- los límites deberán comprobarse al implementar el primer flujo vertical.

## Riesgos de acoplamiento y sobrearquitectura

- permitir que Canvas acceda a stores o tablas de Kanban acoplaría ambos módulos;
- exponer escenas o tipos de Excalidraw a Kanban filtraría detalles internos;
- convertir Shared UI en propietario de reglas funcionales degradaría sus límites;
- crear `utils`, `helpers`, `common` o `core` como destinos genéricos ocultaría la propiedad real;
- diseñar APIs, contratos o adaptadores especulativos antes del primer flujo vertical agregaría complejidad sin evidencia.

## Decisiones diferidas

- estructura física exacta de carpetas y archivos;
- uso de archivos `index.ts` y exports públicos concretos;
- firmas exactas de las APIs entre módulos;
- representación TypeScript de Board Item y de la identidad pública de Canvas;
- contratos concretos de persistencia y archivos;
- estrategia física de almacenamiento de Attachments;
- preferencias globales adicionales al modo oscuro;
- extracción futura de capacidades compartidas cuando exista evidencia estable.

## Aclaración

Este ADR define propiedad, límites y reglas de comunicación conceptuales. No afirma que existan carpetas, APIs o implementaciones físicas en `src/` y no obliga a crear una estructura específica antes de que el código real la justifique.
