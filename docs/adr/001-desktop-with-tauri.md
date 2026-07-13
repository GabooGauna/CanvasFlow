# ADR-001 — Aplicación de escritorio mediante Tauri

## Estado

Aceptada.

## Contexto

CanvasFlow necesita funcionar como una aplicación de escritorio local, acceder a archivos y ofrecer una experiencia independiente del navegador.

## Decisión

Utilizar Tauri como contenedor de escritorio.

## Alternativas consideradas

- Aplicación web tradicional.
- Electron.
- WPF.
- Aplicación nativa independiente por plataforma.

## Motivos

- permite utilizar React y TypeScript;
- genera aplicaciones más ligeras que una solución basada completamente en Chromium;
- permite acceso controlado a capacidades del sistema;
- mantiene una futura posibilidad multiplataforma;
- se alinea con los objetivos de aprendizaje del proyecto.

## Consecuencias positivas

- experiencia de escritorio;
- integración con el stack frontend;
- menor consumo potencial que Electron;
- posibilidad de distribuir la aplicación.

## Consecuencias negativas

- incorpora Rust y la arquitectura de Tauri como complejidad adicional;
- algunas integraciones requieren comandos o plugins específicos;
- será necesario comprender el modelo de seguridad de Tauri.
