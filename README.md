# CanvasFlow

CanvasFlow es una aplicación de escritorio de productividad visual que integrará organización Kanban, un canvas infinito y gestión de conocimiento en una experiencia rápida, limpia y modular.

El proyecto se encuentra en la Etapa 01 de configuración profesional. La base React + TypeScript + Vite funciona en navegador y ya está integrada con Tauri como aplicación nativa de Windows.

## Requisitos previos

- Windows 11.
- Node.js 24.x y npm 11 o superior.
- Rust con el toolchain estable MSVC.
- Visual Studio con **Desarrollo para el escritorio con C++**, MSVC x64 y Windows 11 SDK.
- WebView2.

## Entorno validado

- Node.js 24.18.0 y npm 11.5.2.
- Git 2.51.0.windows.1.
- rustup 1.29.0; rustc y cargo 1.97.0.
- Toolchain `stable-x86_64-pc-windows-msvc`.
- React 19, TypeScript 6, Vite 8, Tailwind CSS 4.3.2 y Tauri CLI 2.11.4.

## Instalación

```bash
npm install
```

## Comandos

```bash
npm run dev
npm run build
npm run lint
npm run tauri dev
```

- `npm run dev`: inicia la aplicación web.
- `npm run build`: valida TypeScript y genera el build frontend.
- `npm run lint`: ejecuta ESLint.
- `npm run tauri dev`: inicia la aplicación de escritorio.

## Calidad y validación

```bash
npm run format
npm run format:check
npm run typecheck
npm run check
```

`npm run check` es la validación principal y comprueba formato, lint y build.

La documentación del producto y de arquitectura se mantiene en [`docs/`](docs/).
