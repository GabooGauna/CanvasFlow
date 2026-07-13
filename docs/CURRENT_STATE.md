# CanvasFlow — Estado actual

## Etapa actual

**Etapa 01 — Configuración Profesional del Proyecto**

## Estado

🟡 En progreso.

La Etapa 00 — Planificación y Diseño del Producto está cerrada. La Etapa 01 permanece activa y no se considera terminada.

## Checkpoints

- [x] 01.1 — Auditoría del entorno.
- [x] 01.2 — Repositorio profesional.
- [x] 01.3 — React + TypeScript + Vite.
- [x] 01.4 — Integración de Tauri.
- [x] 01.5 — Tailwind CSS y base visual mínima.
- [ ] 01.6 — Calidad automática y configuración compartida de VS Code.

## Estado técnico del repositorio

- Repositorio ubicado fuera de OneDrive en `C:\dev\CanvasFlow`.
- Git inicializado con rama `main`, vinculada a `origin/main`.
- Remoto: `https://github.com/GabooGauna/CanvasFlow.git`.
- Convenciones base versionadas mediante `.gitignore`, `.gitattributes` y `.editorconfig`.
- Frontend creado con React 19, TypeScript 6, Vite 8 y ESLint.
- Dependencias administradas con npm y `package-lock.json` versionable.
- Node.js 24.x y npm 11 o superior declarados en `package.json`.
- Tauri CLI 2.11.4 integrada en `src-tauri/`.
- Tailwind CSS 4.3.2 y `@tailwindcss/vite` 4.3.2 integrados mediante el plugin oficial de Vite.
- `src/index.css` carga Tailwind mediante `@import "tailwindcss"`.
- Base visual mínima temporal validada en navegador y dentro de Tauri.
- Archivos de demostración de Vite eliminados.
- Aplicación validada en navegador y como ventana nativa de Windows.
- `npm audit` completado con 0 vulnerabilidades.
- `npm run lint` y `npm run build` aprobados.
- Primera ejecución de `npm run tauri dev` exitosa.

## Entorno validado

- Windows 11 Pro 24H2.
- Node.js 24.18.0 y npm 11.5.2.
- Git 2.51.0.windows.1.
- VS Code 1.127.0 x64.
- rustup 1.29.0.
- rustc y cargo 1.97.0.
- Toolchain `stable-x86_64-pc-windows-msvc`.
- Visual Studio Community 2026.
- Desarrollo para el escritorio con C++, MSVC x64 y Windows 11 SDK.
- WebView2 provisto por Windows 11.

## Configuración de Tauri confirmada

- Producto y título: CanvasFlow.
- Identifier: `com.cesargauna.canvasflow`.
- `devUrl`: `http://localhost:5173`.
- `frontendDist`: `../dist`.
- `beforeDevCommand`: `npm run dev`.
- `beforeBuildCommand`: `npm run build`.

## Commits de la etapa

- `chore: initialize CanvasFlow repository`.
- `chore: scaffold React TypeScript application with Vite`.
- `chore: integrate Tauri desktop runtime`.

## Incidencias resueltas

### Prefix incorrecto de npm

La configuración de usuario contenía un `prefix` basado en `%AppData%`. Se eliminó esa configuración incorrecta.

### Rust no disponible en PATH

Rust estaba instalado, pero la terminal no encontraba sus ejecutables. Se agregó `C:\Users\gauna\.cargo\bin` al PATH.

### `link.exe` no encontrado

La terminal no había cargado el entorno MSVC x64. Se utilizó `vcvars64.bat` y se verificaron `cl.exe` y `link.exe` en `Hostx64\x64`.

### Error EBUSY durante la observación de Vite

Vite intentaba observar `src-tauri/target` mientras Cargo compilaba. Se configuró `vite.config.ts` para ignorar `**/src-tauri/**`.

### Preservación de documentación y README

Vite se creó en la raíz no vacía conservando `docs/`. El README genérico de Vite se descartó y se mantuvo la visión original de CanvasFlow.

## Riesgos vigentes

- Las terminales nuevas deberán disponer de Rust y del entorno MSVC x64 para compilar Tauri.
- `src-tauri/target` debe permanecer fuera de la observación de Vite.
- Las herramientas deberán respetar las versiones declaradas para evitar diferencias de entorno.

## Próximo checkpoint

**01.6 — Calidad automática y configuración compartida de VS Code.**
