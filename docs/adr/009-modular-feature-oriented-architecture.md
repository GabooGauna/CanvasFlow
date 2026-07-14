# ADR-009 — Arquitectura modular orientada por funcionalidades

## Estado

Aceptada.

## Contexto

CanvasFlow necesita crecer desde una base mínima hacia funcionalidades como Workspace, Kanban y Canvas sin mezclar reglas de negocio, interfaz y detalles técnicos.

Una organización exclusivamente técnica puede dispersar una misma funcionalidad entre carpetas globales y aumentar el acoplamiento. En el extremo opuesto, agrupar todo por funcionalidad sin límites internos puede mezclar presentación, coordinación, dominio e infraestructura.

La arquitectura debe ofrecer una dirección clara sin crear carpetas, contratos o patrones antes de que exista código real que los justifique.

## Decisión

CanvasFlow utilizará una arquitectura modular orientada por funcionalidades.

Los módulos funcionales serán el criterio principal de organización. Dentro de cada módulo se mantendrá una separación interna ligera entre presentación, aplicación, dominio e infraestructura únicamente cuando existan responsabilidades reales que necesiten esa separación.

Las capas representan responsabilidades arquitectónicas, pero no obligan a crear cuatro carpetas dentro de cada módulo.

App Shell será responsable de la composición general y contendrá o coordinará el punto de composición de la aplicación.

Los módulos se comunicarán mediante APIs públicas pequeñas. Los contratos se introducirán solo cuando protejan una frontera real, como persistencia, archivos o capacidades nativas.

No se crearán estructuras reservadas para Notes, Sync, Collaboration ni otras capacidades futuras hasta que entren en alcance.

## Alternativas consideradas

### Capas técnicas globales

Organizar todo el proyecto mediante carpetas globales de presentación, aplicación, dominio e infraestructura.

Se descartó como criterio principal porque dispersaría el código de cada funcionalidad y podría aumentar el acoplamiento entre módulos.

### Organización exclusivamente por funcionalidades sin límites internos

Agrupar cada funcionalidad en un único espacio sin distinguir responsabilidades internas.

Se descartó porque facilitaría que componentes, casos de uso, reglas de dominio y adaptadores técnicos se mezclen a medida que crezca el módulo.

### Módulos funcionales con separación interna ligera

Organizar primero por funcionalidad y separar responsabilidades dentro de cada módulo solo cuando el código real lo requiera.

Esta es la alternativa elegida.

## Motivos

- mantiene juntas las piezas de una misma funcionalidad;
- favorece alta cohesión y bajo acoplamiento;
- protege las reglas del dominio frente a frameworks y detalles técnicos;
- permite evolucionar la estructura según necesidades verificables;
- evita carpetas vacías y abstracciones especulativas;
- facilita probar dominio y casos de uso sin infraestructura concreta;
- permite sustituir adaptadores técnicos sin modificar el dominio ni los casos de uso.

## Reglas de dependencia

1. Presentación expresa intenciones del usuario y administra la interfaz.
2. Aplicación coordina casos de uso y puede depender del dominio y de contratos internos.
3. Dominio contiene conceptos, reglas e invariantes de CanvasFlow.
4. Infraestructura implementa capacidades técnicas mediante contratos.
5. Dominio no depende de React, Zustand, Dexie, IndexedDB, Excalidraw, dnd-kit ni Tauri.
6. Aplicación no depende de implementaciones concretas de Dexie, Tauri u otras librerías externas.
7. Infraestructura puede depender de contratos internos y tipos de dominio para implementarlos; el dominio no depende de infraestructura.
8. React gestiona presentación, interacción y estado visual local.
9. Zustand se reserva para estado compartido observable en memoria; no sustituye dominio, casos de uso ni persistencia.
10. Actualizar un store en memoria no confirma la persistencia.
11. Los adaptadores de persistencia de CanvasFlow utilizarán provisionalmente Dexie como capa de acceso a IndexedDB; Dexie no constituye por sí mismo el adaptador arquitectónico.
12. Tauri encapsulará capacidades del sistema operativo mediante adaptadores y permisos mínimos.
13. Shared UI no contendrá reglas específicas de Workspace, Kanban o Canvas.

## Consecuencias positivas

- límites funcionales más comprensibles;
- reglas de dominio independientes de frameworks;
- infraestructura reemplazable mediante contratos concretos;
- módulos con APIs públicas reducidas;
- estructura capaz de crecer sin anticipar todas sus carpetas;
- distinción explícita entre estado en memoria y persistencia confirmada.

## Consecuencias negativas

- exige criterio para decidir cuándo una responsabilidad merece separación;
- los límites pueden evolucionar y requerir refactorización;
- una funcionalidad pequeña puede no mostrar inicialmente todas las responsabilidades;
- el punto de composición deberá evitar acoplar módulos de manera accidental.

## Riesgos de sobrearquitectura

La decisión podría aplicarse de forma excesiva creando capas, interfaces o adaptadores para operaciones triviales.

Durante esta etapa no se incorporarán contenedores de inyección de dependencias, CQRS, event buses, repositorios genéricos ni abstracciones de sincronización. Tampoco se crearán carpetas vacías para capacidades futuras.

Toda abstracción deberá proteger una frontera real o resolver un problema observado.

## Aclaraciones

Este ADR no fija todavía una estructura definitiva de carpetas ni las APIs públicas concretas de los módulos.

La decisión no exige utilizar clases, interfaces o repositorios para todas las operaciones. La representación técnica se elegirá según el caso de uso y el código real.
