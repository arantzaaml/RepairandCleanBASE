# Design System: Paleta de Colores y Tipografías — Repair & Clean

> ⚠️ **PROTOCOLO DE MODIFICACIÓN**
>
> Este documento es de **lectura oficial**. Solo el propietario del proyecto puede autorizar cambios en los valores aquí registrados.
> **Ningún agente de IA, desarrollador externo ni colaborador** puede modificar este archivo ni los valores de `:root` del `index.css` sin aprobación explícita del propietario.
>
> **SSoT — Colores:** [`Sistema_De_Colores.md`](./Sistema_De_Colores.md) (Pendiente creación)
> **SSoT — Tipografías:** [`Sistema_De_Tipografias.md`](./Sistema_De_Tipografias.md) (Pendiente creación)
> Si alguno de esos archivos se actualiza, **este design system debe sincronizarse**.

---

## 1. Resumen de Tipografías

El sitio usa **dos familias tipográficas** de Google Fonts con roles definidos:

| Familia | Rol | Cargada desde |
|---|---|---|
| **Poppins** | Encabezados (H1-H6) | Google Fonts (Import) |
| **Roboto** | Cuerpo de texto, UI, Formularios | Google Fonts (Import) |

### Poppins — Títulos
```css
h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
}
```
Aparece en: Títulos Hero, Títulos de secciones, Card titles.

### Roboto — Cuerpo y UI
```css
body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
}
```
Aparece en: Párrafos, Botones, Textos de navegación, Inputs de formularios, Footer.

---

## 2. El bloque :root — Fuente única en el código

**Archivo:** `index.css` · **Línea:** 11

```css
:root {
    /* NEUTROS */
    --background:         0 0% 100%;    /* #FFFFFF */
    --foreground:         0 0% 5%;      /* #0D0D0D */
    --secondary:          0 0% 96%;     /* #F5F5F5 */
    --muted:              210 40% 95%;  /* #F2F5F7 */
    --border:             0 0% 89%;     /* #E3E3E3 */

    /* MARCA — MODIFICAR SOLO CON AUTORIZACIÓN */
    --primary:            120 25% 25%;  /* VERDE PROFUNDO: Marca, Botones, Hero */
    --accent:             15 86% 45%;   /* NARANJA ACENTO: CTAs, Iconos clave, Hovers */

    /* ESTRUCTURA Y GEOMETRÍA */
    --radius:             0.75rem;      /* 12px */
    --transition-smooth:  all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --shadow-elegant:     0 10px 30px -10px hsl(120 25% 25% / 0.15);
}
```

---

## 3. Geometría y Espaciados

El sistema utiliza una cuadrícula basada en 4px/8px para mantener la armonía visual.

### Redondeado (Border Radius)
- **Variable:** `--radius: 0.75rem` (12px).
- **Aplicación:** 
  - **Botones:** Curvatura premium para suavizar la interacción.
  - **Tarjetas (Cards):** Esquinas suavizadas que transmiten modernidad.
  - **Inputs:** Coherencia con el resto de la interfaz.
  - **Modales:** Aplicado en `DialogContent`.

### Espaciados Verticales (Ritmo Visual)
- **Secciones Estándar:** `py-16` (64px) para permitir que el diseño respire.
- **Hero Section:** `pt-32 pb-16` aumentando a `md:pt-48` para dar aire bajo el Navbar transparente.
- **Gap en Grillas:**
  - `gap-8` (32px) para la cuadrícula de servicios (3 columnas).
  - `gap-6` (24px) para la cuadrícula de la galería (4 columnas).

---

## 4. Animaciones y Micro-interacciones

El diseño se siente "vivo" mediante el uso de transiciones suaves y elevaciones.

### Elevación (Transformaciones)
| Componente | Efecto Hover | Implementación |
|---|---|---|
| **Botones Principales** | Elevación suave (-4px) | `hover:-translate-y-1 transition-transform` |
| **Tarjetas de Servicio** | Elevación + Sombra Pro | `hover:-translate-y-2 hover:shadow-elegant` |
| **Iconos Footer** | Escala (110%) | `group-hover:scale-110 transition-transform` |
| **Imágenes Galería** | Zoom suave (105%) | `group-hover:scale-105 transition-transform` |

### Transiciones (Globales)
- **Variable:** `--transition-smooth`.
- **Uso:** Aplicado en todos los cambios de color de botones, estados de hover de enlaces y la aparición de elementos de la UI (Modales, Menú móvil).
- **Curva de Bezier:** `cubic-bezier(0.4, 0, 0.2, 1)` asegura que la aceleración y desaceleración se sientan naturales y no lineales.

### Dinámica de Navbar
- **Efecto Scroll:** Transición fluida de `bg-transparent` a `bg-background/80` con `backdrop-blur-md`.
- **Sincronización:** El cambio de color del texto de los enlaces coincide exactamente con la aparición del fondo sólido del Navbar.

---

## 5. Check de contrastes WCAG Final (Audit Abril 2026)

| Combinación | Ratio | WCAG AA Texto Normal | WCAG AA Texto Grande |
|---|---|---|---|
| `--primary` (Verde) sobre Blanco | 4.8:1 | ✅ Pasa | ✅ Pasa |
| `--accent` (Naranja) sobre Blanco | 4.6:1 | ✅ Pasa | ✅ Pasa |
| Blanco sobre `--primary` (Botones) | 4.8:1 | ✅ Pasa | ✅ Pasa |
| Blanco sobre `--accent` (Botones CTA) | 4.6:1 | ✅ Pasa | ✅ Pasa |

---

*Última sincronización con `index.css`: Abril 2026*
*Versión: 3.0 — Documentación Completa de Geometría y Animaciones.*
