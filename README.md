# TypoCraft

Un editor interactivo de Markdown que transforma tu escritura en arte tipográfico. TypoCraft permite visualizar y escribir contenido Markdown con múltiples temas diseñados para realzar la belleza de la tipografía.

## Descripción

TypoCraft es una herramienta web moderna que combina un editor de Markdown en tiempo real con un sistema de vista previa con múltiples temas tipográficos. Diseñado para escritores, diseñadores y desarrolladores que valoran la estética de la tipografía.

El proyecto demuestra cómo los diferentes sistemas tipográficos pueden transformar la experiencia de lectura del mismo contenido, desde la elegancia del manuscrito hasta la precisión modernista.

## Características

- **Editor Markdown en vivo** - Escribe Markdown y ve los cambios en tiempo real
- **Múltiples temas tipográficos** - Cambia entre diferentes estilos de presentación:
  - Manuscript - Estilo clásico y elegante
  - Modernist - Diseño limpio y contemporáneo
  - Deep Night - Tema oscuro y sofisticado
- **Interfaz responsiva** - Funciona en dispositivos de escritorio y tabletas
- **Soporte completo de Markdown** - Incluyendo títulos, listas, código, blockquotes y más
- **Cambio de tema en tiempo real** - Alterna entre temas sin perder tu contenido

## Tecnología

El proyecto está construido con tecnologías modernas y ampliamente usadas:

- **Astro** - Framework web para aplicaciones rápidas y optimizadas
- **React** - Biblioteca de componentes de interfaz de usuario
- **TypeScript** - Tipado estático para JavaScript
- **Tailwind CSS** - Framework de utilidades CSS para estilos
- **Marked** - Procesador de Markdown eficiente
- **Lucide React** - Iconos SVG accesibles

## Requisitos previos

- Node.js 18.0.0 o superior
- pnpm 8.0.0 o superior (o npm/yarn alternativamente)

## Estructura del proyecto

```
TypoCraft/
├── src/
│   ├── components/
│   │   ├── MarkdownEditor.tsx      - Editor de Markdown
│   │   ├── MarkdownPreview.tsx     - Vista previa con soporte de temas
│   │   ├── ThemeNav.tsx            - Navegador de temas
│   │   └── TypoCraft.tsx           - Componente principal
│   ├── layouts/
│   │   └── Layout.astro            - Plantilla de diseño
│   ├── pages/
│   │   └── index.astro             - Página principal
│   └── styles/
│       └── global.css              - Estilos globales
├── lib/
│   └── utils.ts                    - Utilidades compartidas
├── public/                         - Archivos estáticos
├── astro.config.mjs                - Configuración de Astro
├── tsconfig.json                   - Configuración de TypeScript
├── postcss.config.mjs              - Configuración de PostCSS
├── tailwind.config.mjs             - Configuración de Tailwind CSS
└── pnpm-workspace.yaml             - Configuración del monorepo
```

## Cómo funciona

1. **Editor** - El panel izquierdo contiene un editor de texto donde puedes escribir en Markdown
2. **Preview** - El panel derecho muestra una vista previa en tiempo real del contenido
3. **Temas** - La navegación superior permite cambiar entre diferentes temas tipográficos
4. **Sincronización** - La edición es bidireccional y se actualiza instantáneamente

## Personalización

### Agregar nuevos temas

Los temas se definen en el componente `TypoCraft.tsx`. Para agregar un nuevo tema:

1. Define una nueva entrada en `THEME_CLASSES`
2. Crea los estilos CSS correspondientes
3. Agrega el nuevo tema a la navegación

### Modificar estilos

Los estilos globales se encuentran en `src/styles/global.css`. La configuración de Tailwind CSS está en `tailwind.config.mjs`.

## Desarrollo

### Scripts disponibles

- `pnpm dev` - Inicia el servidor de desarrollo
- `pnpm build` - Compila el proyecto para producción
- `pnpm preview` - Vista previa local de la compilación
- `pnpm clean --lockfile` - Limpia el proyecto y el archivo de bloqueo

### Consideraciones de desarrollo

- El proyecto usa Astro con integración de React
- TypeScript está configurado con nivel de verificación estricto
- Los componentes React deben usar la directiva `"use client"` para interactividad
- Los estilos están organizados usando Tailwind CSS con configuración personalizada

## Licencia

Este proyecto está disponible bajo la licencia Apache 2.0. Siéntete libre de usar, modificar y distribuir este código.
