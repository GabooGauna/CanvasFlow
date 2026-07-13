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
- [x] 01.6 — Calidad automática y configuración compartida de VS Code.
- [x] 01.7 — Estructura mínima del proyecto.
- [ ] 01.8 — Verificación final y cierre de la Etapa 01.

## Estado técnico del repositorio

- Repositorio trasladado fuera de una carpeta sincronizada.
- Git inicializado con rama `main`, vinculada a `origin/main`.
- Convenciones base versionadas mediante `.gitignore`, `.gitattributes` y `.editorconfig`.
- Frontend creado con React 19, TypeScript 6, Vite 8 y ESLint.
- Dependencias administradas con npm y `package-lock.json` versionable.
- Node.js 24.x y npm 11 o superior declarados en `package.json`.
- Tauri CLI 2.11.4 integrada en `src-tauri/`.
- Tailwind CSS 4.3.2 y `@tailwindcss/vite` 4.3.2 integrados mediante el plugin oficial de Vite.
- `src/styles/globals.css` carga Tailwind mediante `@import "tailwindcss"` y contiene los estilos globales.
- Base visual mínima temporal validada en navegador y dentro de Tauri.
- Archivos de demostración de Vite eliminados.
- Aplicación validada en navegador y como ventana nativa de Windows.
- `npm audit` completado con 0 vulnerabilidades.
- `npm run lint` y `npm run build` aprobados.
- Primera ejecución de `npm run tauri dev` exitosa.

## Estructura mínima del frontend

```text
src/
├── app/
│   └── App.tsx
├── styles/
│   └── globals.css
└── main.tsx
```

- `src/main.tsx` es el punto de entrada del frontend.
- `src/app/App.tsx` representa la raíz visual de la aplicación.
- `src/styles/globals.css` contiene Tailwind y los estilos globales.
- La estructura permanece deliberadamente mínima; la arquitectura completa se definirá en la Etapa 02.

## Calidad automática

- Prettier 3.9.5 y `eslint-config-prettier` 10.1.8 instalados con versiones exactas.
- Prettier configurado para formato; ESLint reservado para calidad y errores de código.
- TypeScript puede validarse de forma independiente mediante `npm run typecheck`.
- Scripts disponibles: `format`, `format:check`, `typecheck` y `check`.
- `npm run check` es el comando principal de validación y ejecuta `format:check`, `lint` y `build`.
- Configuración compartida de VS Code preparada con formato al guardar, correcciones explícitas de ESLint, finales LF y TypeScript local.
- Extensiones recomendadas: ESLint, Prettier, Tauri y rust-analyzer.
- `npm run format:check`, `npm run lint`, `npm run typecheck`, `npm run build`, `npm run check` y `git diff --check` aprobados.

## Requisitos generales de desarrollo

- Windows como plataforma inicial de desarrollo y validación.
- Versiones de Node.js y npm declaradas en `package.json`.
- Rust mediante rustup con toolchain estable MSVC.
- Visual Studio Build Tools con Desarrollo para el escritorio con C++, MSVC x64 y Windows SDK.
- WebView2 disponible en el sistema.

## Configuración de Tauri confirmada

- Producto y título: CanvasFlow.
- Identifier: `com.canvasflow.app`.
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

La configuración local de npm contenía un `prefix` incorrecto. Se eliminó esa configuración para recuperar el comportamiento estándar de la herramienta.

### Rust no disponible en PATH

Rust estaba instalado, pero la terminal no encontraba sus ejecutables. Se agregó `%USERPROFILE%\.cargo\bin` al PATH.

### `link.exe` no encontrado

La terminal no había cargado el entorno MSVC x64. Se utilizó `vcvars64.bat` y se verificó la disponibilidad de `cl.exe` y `link.exe`.

### Error EBUSY durante la observación de Vite

Vite intentaba observar `src-tauri/target` mientras Cargo compilaba. Se configuró `vite.config.ts` para ignorar `**/src-tauri/**`.

### Preservación de documentación y README

Vite se creó en la raíz no vacía conservando `docs/`. El README genérico de Vite se descartó y se mantuvo la visión original de CanvasFlow.

## Riesgos vigentes

- Las terminales nuevas deberán disponer de Rust y del entorno MSVC x64 para compilar Tauri.
- `src-tauri/target` debe permanecer fuera de la observación de Vite.
- Las herramientas deberán respetar las versiones declaradas para evitar diferencias de entorno.

## Próximo checkpoint

**01.8 — Verificación final y cierre de la Etapa 01.**
