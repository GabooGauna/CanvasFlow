# CanvasFlow

CanvasFlow es una aplicación de escritorio de productividad visual que integrará organización Kanban, un canvas infinito y gestión de conocimiento en una experiencia rápida, limpia y modular.

La Etapa 01 — Configuración Profesional del Proyecto está completada. CanvasFlow cuenta con una base web y desktop validada; la próxima etapa es la Etapa 02 — Arquitectura.

## Requisitos previos

- Windows 11.
- Node.js 24.x y npm 11 o superior.
- Rust con el toolchain estable MSVC.
- Visual Studio con **Desarrollo para el escritorio con C++**, MSVC x64 y Windows 11 SDK.
- WebView2.

## Stack actual

- Node.js 24.x y npm 11 o superior.
- Rust estable con target `x86_64-pc-windows-msvc`.
- React 19, TypeScript 6, Vite 8, Tailwind CSS 4.3.2 y Tauri CLI 2.11.4.

## Instalación

```bash
npm ci
```

`npm ci` reproduce exactamente las dependencias registradas en `package-lock.json`. Para agregar o actualizar dependencias durante el desarrollo se utiliza `npm install`.

## Comandos

```bash
npm run dev
npm run build
npm run lint
npm run tauri dev
npm run tauri build
```

- `npm run dev`: inicia la aplicación web.
- `npm run build`: valida TypeScript y genera el build frontend.
- `npm run lint`: ejecuta ESLint.
- `npm run tauri dev`: inicia la aplicación de escritorio.
- `npm run tauri build`: genera el build desktop de producción.

## Calidad y validación

```bash
npm run format
npm run format:check
npm run typecheck
npm run check
```

`npm run check` es la validación principal y comprueba formato, lint y build.

La documentación del producto y de arquitectura se mantiene en [`docs/`](docs/).
