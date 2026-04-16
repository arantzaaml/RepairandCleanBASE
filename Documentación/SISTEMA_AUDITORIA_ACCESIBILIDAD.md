# Sistema de Auditoría y Optimización de Accesibilidad (WCAG 2.1 - 2.2 AA) — Edición de Élite

Este documento es una guía maestra de nivel experto diseñada para realizar auditorías de alto impacto, consultoría profesional y optimización avanzada de accesibilidad en proyectos web.

---

## 🎯 Objetivo y Referencia Principal
El objetivo es el cumplimiento del estándar **WCAG 2.2 Nivel AA** (incluyendo pautas críticas de la versión 2.1).

> [!IMPORTANT]
> **Referencia Obligatoria:** [WCAG 2.2 Quick Reference (Niveles A y AA)](https://www.w3.org/WAI/WCAG22/quickref/?levels=a%2Caa).

---

## 🚫 Protocolo de Ejecución (CRÍTICO)
1.  **AUDITORÍA Y REPORTE:** Análisis técnico y entrega del reporte previo a cualquier cambio.
2.  **RECOMENDACIONES:** Sugerir soluciones basadas en estándares W3C/ARIA APG.
3.  **PROHIBICIÓN DE CAMBIOS:** **NO modificar el código fuente** hasta aprobación explícita.
4.  **RE-TESTING:** Validar cada corrección mediante pruebas manuales y automáticas simultáneas.

---

## 🛠️ Fase 1: Metodología de Auditoría (Principios WCAG)

### 1. Perceptible (Perceivable)
- **Contenido no textual (1.1.1):** Metadatos `alt` descriptivos o vacíos si son decorativos.
- **Alternativas para Medios (1.2.x):** Subtítulos, transcripciones y audiodescripciones sincronizadas.
- **Información y Relaciones (1.3.1):** 
    - **Jerarquía Semántica:** Se recomienda un **único <h1> descriptivo** por página para máxima claridad estructural (Best Practice).
    - **Landmarks HTML5:** Navegación por puntos de referencia (`main`, `nav`, etc.).
- **Propósito de Entrada (1.3.5):** Uso de `autocomplete` en campos comunes de usuario.
- **Uso del Color (1.4.1):** Evitar comunicación visual de información crítica exclusivamente por color.
- **Contraste (1.4.3, 1.4.11):** Texto (4.5:1 / 3:1) y elementos de UI (3:1).
- **Adaptabilidad / Reflow (1.4.10):** Soporte de zoom al 200% sin scroll horizontal ni pérdida de funcionalidad.

### 2. Operable (Operable)
- **Teclado (2.1.1):** Operabilidad completa 100% por teclado, sin trampas de foco (2.1.2).
- **Control de Tiempo (2.2.1, 2.2.2):** Pausa/parada de animaciones y límites de tiempo ajustables.
- **Pautas de Foco:**
    - **Foco Visible (2.4.7):** Indicador de foco claro y de alto contraste.
    - **Foco NO Oculto (2.4.11 - WCAG 2.2):** El elemento enfocado nunca debe quedar tapado por elementos flotantes, *sticky headers* o *overlays*.
    - **Apariencia del Foco (2.4.13 - WCAG 2.2) [NUEVO]:** El indicador de foco debe poseer un contraste mínimo de **3:1** respecto al fondo y una **área mínima visible** (2 pixels de grosor mínimo recomendado o cambio visual significativo).
- **Interacciones Táctiles y Puntero:**
    - **Tamaño del Objetivo (Target Size):** Los elementos interactivos deben tener un área mínima de **44x44px** (Best Practice AA) para facilitar el uso táctil.
    - **Gestos del Puntero (2.5.1):** Evitar acciones que exijan gestos complejos (pinch, swipe múltiple) sin una alternativa simple de un solo toque (click/touch).
    - **Movimientos de Arrastre (2.5.7 - WCAG 2.2):** No depender exclusivamente del *drag & drop*; proveer alternativa mediante botones o clicks.

### 3. Comprensible (Understandable)
- **Idiomas (3.1.1, 3.1.2):** Atributo `lang` correcto a nivel global y parcial.
- **Navegación Consistente:**
    - **Ayuda Consistente (3.2.6 - WCAG 2.2) [NUEVO]:** Los mecanismos de ayuda (chat, contacto, soporte) deben aparecer en la misma ubicación física y de forma consistente en todas las páginas del sitio.
- **Asistencia en la Entrada:**
    - **Prevención de Errores (3.3.4 - AA):** Para acciones críticas (pagos, eliminación de datos), se debe: 1. Confirmar la acción antes de enviarla, o 2. Permitir revisar y corregir los datos antes de la sumisión final.
    - **Entrada Redundante (3.3.7 - WCAG 2.2) [NUEVO]:** No solicitar la misma información más de una vez en un mismo flujo de usuario, a menos que sea esencial para la seguridad o se autocomplete automáticamente el campo para el usuario.
    - **Identificación de Errores (3.3.1):** Errores descritos mediante texto y asociados (`aria-describedby`).
- **Autenticación Accesible (3.3.7 - WCAG 2.2):** No depender de pruebas cognitivas complejas o CAPTCHAs puramente visuales sin alternativas sencillas o autenticación por dispositivo.

### 4. Robusto (Robust)
- **Nombre, Rol, Valor (4.1.2):** Etiquetado correcto de todos los componentes interactivos.
- **Regiones Vivas (ARIA Live) (4.1.3):** Utilizar `aria-live="polite"` para notificar cambios dinámicos (errores en vivo, alertas, carga de contenido). Evitar el uso excesivo de `aria-live="assertive"` para no interrumpir agresivamente al usuario si no es una emergencia.
- **Validación Técnica:** Semántica HTML nativa prioritaria sobre ARIA.

---

## 🧪 Fase 1.5: Protocolo de Testing de Élite [NUEVO]
1.  **Testing en Navegador sin CSS:** Desactivar estilos para verificar que el orden del DOM y la estructura lógica del contenido se mantienen coherentes para un lector de pantalla.
2.  **Testing Combinado (Zoom + Teclado):** Navegar la web solo con teclado mientras se mantiene un zoom del 200%. Detectar colisiones de foco u ocultamiento de elementos.
3.  **Degradación Selectiva (Testing sin JS):** Verificar que el contenido crítico y la navegación básica siguen siendo accesibles aunque el JavaScript no cargue o esté parcialmente deshabilitado.
4.  **Simulación de Condiciones Reales:** Auditar la web bajo **conexión lenta (3G Throttling)** para asegurar que los anuncios de `aria-live` y la carga de contenido no rompen la experiencia de lectura de pantalla.
5.  **Audit Automático:** axe DevTools, Lighthouse y WAVE.

---

## 📝 Fase 2: Formato del Reporte de Auditoría Pro
- **Severidad:** Crítico (Bloqueante) / Alto / Medio / Bajo.
- **Tabla de Hallazgos Profesional:**
| ID | URL | Hallazgo | Criterio WCAG | Evidencia (Screenshot/Code) | Prioridad | Recomendación Técnica |
|---|---|---|---|---|---|---|

---

## ✅ Lista de Verificación Final (Élite)
- [ ] ¿Idioma (`lang`) y Responsive viewport definidos?
- [ ] ¿Tamaño de botones/enlaces >= 44x44px?
- [ ] ¿El foco tiene contraste 3:1 y nunca queda oculto por sticky headers?
- [ ] ¿Existe alternativa a gestos táctiles complejos (swipe/drag)?
- [ ] ¿Las acciones críticas requieren confirmación de seguridad?
- [ ] ¿Se notifican cambios dinámicos mediante ARIA Live regions (polite)?
- [ ] ¿La ayuda (soporte/chat) está siempre en la misma ubicación?
- [ ] ¿Se evita solicitar información redundante al usuario?
- [ ] ¿Funciona el sitio al 200% de zoom navegando solo con teclado?
- [ ] ¿La estructura del DOM es lógica al desactivar el CSS y JS parcialmente?

---
*Este sistema ha sido diseñado como un estándar de consultoría premium para el desarrollo web de alto rendimiento.*
