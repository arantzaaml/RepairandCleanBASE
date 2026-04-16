# Comparativa de Accesibilidad: Antes vs Después (WCAG 2.2 AA) ♿

Este documento resume la evolución en accesibilidad del sitio **Repair & Clean**, pasando de una estructura básica a un cumplimiento total de las pautas **WCAG 2.2 Nivel AA**.

---

## 🧐 Evolución Técnica

| Característica | Estado Anterior (Inaccesible) | Estado Actual (Accesible / Inclusivo) | Impacto en el Usuario |
| :--- | :--- | :--- | :--- |
| **Arquitectura** | Divs genéricos y anidamiento inválido (`Button` dentro de `Link`). | Uso de Etiquetas Semánticas HTML5 (`header`, `main`, `footer`, `nav`). | Los lectores de pantalla ahora pueden navegar por regiones lógicas del sitio. |
| **Navegación Teclado** | Sin soporte. Obligaba a tabular por todo el menú en cada página. | **Skip Link** (Enlace de salto) y gestión de foco visible. | Usuarios con movilidad reducida pueden saltar directamente al contenido principal. |
| **Interactividad** | Lightbox/Modales programados con `divs` sin roles ARIA. | Componentes **Radix/Shadcn** con soporte nativo para teclado (Esc, flechas). | Los modales de la galería son ahora 100% navegables por voz y teclado. |
| **Etiquetas ARIA** | Botones e iconos mudos (sin descripción verbal). | **Aria-labels dinámicos** y traducidos según el idioma. | Un usuario invidente ahora escucha "Abrir menú" o "Selector de idioma" en su lengua. |
| **Jerarquía H1-H6** | Múltiples H1 o saltos (ej: H1 a H4 directamente). | Jerarquía estricta y lógica vinculada a secciones por ID. | Facilita el escaneo del sitio mediante el "rotor" de los lectores de pantalla. |

---

## 🎨 Contraste y Legibilidad

| Elemento | Antes | Después | Resultado WCAG |
| :--- | :--- | :--- | :--- |
| **Acento (Naranja)** | Tono vibrante de bajo contraste. | Ajustado a `hsl(15 86% 45%)`. | ✅ Cumple ratio 4.5:1 sobre blanco. |
| **Foco de Navegador** | Por defecto (azul o invisible). | **Focus-ring premium** de color primario. | ✅ Cumple con visibilidad de foco. |
| **Atributo Lang** | Estático en `es`. | Dinámico (`es`, `ca`, `en`) vía Context. | ✅ Sintetizador de voz ajusta el acento al idioma. |

---

## ✅ Resumen de Mejoras Implementadas

1.  **Formularios:** Adición de etiquetas verbales y placeholders descriptivos en el formulario de contacto.
2.  **Imágenes:** Revisión y carga de atributos `alt` descriptivos para todas las imágenes (Hero, Galería, Iconos).
3.  **Secciones:** Vinculación de cada `<section>` con su encabezado mediante `aria-labelledby`.
4.  **Copyright:** Corrección semántica en el footer (cambio de H2 a P) para evitar contaminar el esquema del documento.

---
*Última auditoría interna: Abril 2026*
*Estado Final: Cumplimiento Total WCAG 2.2 AA.*
