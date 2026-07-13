# CanvasFlow — Diario de desarrollo

Este documento registra cronológicamente el proceso técnico, las decisiones, los problemas y los aprendizajes del desarrollo de CanvasFlow.

## Etapa 01 — Configuración Profesional del Proyecto

### Checkpoint 01.1 — Auditoría del entorno

Antes de crear la aplicación se auditó el entorno completo para reducir errores producidos por toolchains incompletas o incompatibles.

Se verificaron Windows 11 Pro 24H2, Node.js 24.18.0, npm 11.5.2, Git 2.51.0.windows.1 y VS Code 1.127.0 x64. Rust se instaló mediante rustup y quedó validado con rustup 1.29.0, rustc 1.97.0, cargo 1.97.0 y el toolchain `stable-x86_64-pc-windows-msvc`.

Para la compilación nativa se comprobó Visual Studio Community 2026 con Desarrollo para el escritorio con C++, MSVC x64 y Windows 11 SDK. WebView2 ya estaba disponible mediante Windows 11.

El repositorio se trasladó a `C:\dev\CanvasFlow`. Trabajar fuera de OneDrive evita que la sincronización interfiera con watchers, archivos generados y artefactos de compilación.

#### Incidencia: prefix incorrecto de npm

**Síntoma:** npm utilizaba un `prefix` incorrecto basado en `%AppData%`.

**Causa:** existía una configuración de usuario inválida o innecesaria.

**Solución:** se eliminó esa configuración para recuperar el comportamiento estándar de npm.

**Aprendizaje:** antes de atribuir un problema al proyecto conviene auditar la configuración global y de usuario de las herramientas.

#### Incidencia: Rust no disponible en PATH

**Síntoma:** Rust estaba instalado, pero sus comandos no eran accesibles desde la terminal.

**Causa:** `C:\Users\gauna\.cargo\bin` no estaba incluido en PATH.

**Solución:** se agregó la ruta y se volvieron a verificar `rustup`, `rustc` y `cargo`.

**Aprendizaje:** instalación, PATH y toolchain activa deben validarse por separado.

### Checkpoint 01.2 — Repositorio profesional

Se inicializó Git con la rama `main` y se configuró `init.defaultBranch` con la misma convención. La identidad quedó configurada como Cesar Gauna con el correo `gaunacesargabriel@gmail.com`.

Se añadieron `.gitignore`, `.gitattributes` y `.editorconfig` para establecer desde el inicio reglas de exclusión, finales de línea y estilo de edición. El primer punto estable se registró con:

```text
chore: initialize CanvasFlow repository
```

Después se conectó `https://github.com/GabooGauna/CanvasFlow.git` y `main` quedó vinculada a `origin/main`.

**Aprendizaje:** un repositorio profesional comienza con convenciones reproducibles y un historial compuesto por cambios pequeños y coherentes.

### Checkpoint 01.3 — React + TypeScript + Vite

Se creó Vite en la raíz existente con el template `react-ts` y ESLint. La operación preservó la documentación de `docs/`.

La base quedó configurada con React 19, TypeScript 6 y Vite 8. `package.json` declara Node.js 24.x, npm 11 o superior y `npm@11.5.2`; `package-lock.json` permite instalaciones reproducibles.

Se validaron `npm audit` con 0 vulnerabilidades, `npm run lint`, `npm run build` y `npm run dev` en navegador.

```text
chore: scaffold React TypeScript application with Vite
```

#### Decisión: conservar el README de CanvasFlow

El README genérico de Vite no representaba la visión del producto. Se descartó y se conservó el README original.

**Aprendizaje:** un scaffold es un punto de partida técnico, no la autoridad sobre la identidad o documentación del producto.

### Checkpoint 01.4 — Integración de Tauri

Se instaló `@tauri-apps/cli` 2.11.4 como dependencia de desarrollo y se añadió el script `npm run tauri`. Tauri fue inicializado en `src-tauri/`, generando su configuración, `Cargo.toml` y `Cargo.lock`.

La configuración quedó alineada con Vite: CanvasFlow como producto y título, identifier `com.cesargauna.canvasflow`, `devUrl` en `http://localhost:5173`, `frontendDist` en `../dist`, y los comandos previos `npm run dev` y `npm run build`.

La primera ejecución de `npm run tauri dev` abrió correctamente una ventana nativa de Windows.

```text
chore: integrate Tauri desktop runtime
```

#### Incidencia: `link.exe` no encontrado

**Síntoma:** Cargo no podía completar el enlazado de la aplicación nativa.

**Causa:** Visual Studio estaba instalado, pero la terminal no había cargado el entorno MSVC x64.

**Solución:** se cargó `vcvars64.bat` y se verificaron `cl.exe` y `link.exe` en `Hostx64\x64`.

**Aprendizaje:** en Windows, preparar el entorno MSVC forma parte del proceso de compilación aunque el compilador ya esté instalado.

#### Incidencia: EBUSY en `src-tauri/target`

**Síntoma:** Vite intentaba observar archivos utilizados por Cargo y producía EBUSY.

**Causa:** el watcher frontend incluía el directorio nativo y sus artefactos generados.

**Solución:** `vite.config.ts` fue ajustado para ignorar `**/src-tauri/**`.

**Aprendizaje:** los watchers de cada toolchain deben respetar sus límites; los artefactos de Cargo no pertenecen al ciclo de Vite.

## Estado al finalizar el checkpoint 01.4

La aplicación funciona en navegador y como ventana nativa de Windows. La Etapa 01 continúa activa y el siguiente checkpoint es **01.5 — Tailwind CSS y base visual mínima**.
