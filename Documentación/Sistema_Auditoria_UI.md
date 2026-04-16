# Sistema de Auditoría de Consistencia UI / Design System


Tu objetivo es analizar una página web (o conjunto de páginas) y detectar **inconsistencias visuales, estructurales y de comportamiento** en la interfaz.

---

## 🎯 Objetivo
Garantizar que todos los elementos de la UI siguen un sistema coherente en:
- Tipografía
- Espaciado
- Componentes
- Interacciones
- Estados visuales

---

## 🛠️ Fase 1: Auditoría de Consistencia

Analiza la interfaz en los siguientes bloques:

### 1. Tipografía
- ¿Los tamaños de texto son consistentes por jerarquía? (H1, H2, H3, párrafos)
- ¿Se repiten estilos distintos para el mismo tipo de texto?
- ¿Se usan correctamente pesos (bold, regular)?
- ¿Hay diferencias de line-height o letter-spacing sin justificación?

---

### 2. Botones y Componentes Interactivos
- ¿Todos los botones del mismo tipo tienen:
  - mismo tamaño?
  - mismo padding?
  - mismo border-radius?
  - mismo estilo visual?
- ¿El texto dentro de botones mantiene consistencia (tamaño, casing)?
- ¿Las animaciones (hover, active) son consistentes?
- ¿Existen múltiples estilos para la misma acción (ej: 3 tipos de botón primario)?

---

### 3. Espaciado y Layout
- ¿Se respeta un sistema de spacing consistente? (ej: 4px / 8px / 16px)
- ¿Hay márgenes inconsistentes entre secciones similares?
- ¿Los alineamientos son coherentes (izquierda, centro, grid)?

---

### 4. Colores y Estilos Visuales
- ¿Se usan siempre los mismos colores para:
  - acciones primarias?
  - estados (error, éxito, warning)?
- ¿Hay variaciones innecesarias del mismo color?
- ¿Se respeta el sistema de diseño o hay “colores sueltos”?

---

### 5. Iconografía
- ¿Los iconos tienen el mismo estilo? (outline, filled, stroke)
- ¿Tienen tamaños consistentes?
- ¿Se usan con el mismo propósito siempre?

---

### 6. Inputs y Formularios
- ¿Todos los inputs siguen el mismo estilo?
- ¿Los labels, placeholders y errores son consistentes?
- ¿Los estados (focus, error, disabled) son coherentes?

---

### 7. Estados e Interacciones
- ¿Hover, focus, active y disabled son consistentes en todos los componentes?
- ¿Las animaciones tienen misma duración y easing?
- ¿Se aplican transiciones en unos elementos sí y en otros no?

---

### 8. Responsive Consistency
- ¿Los cambios entre desktop, tablet y mobile mantienen coherencia?
- ¿Se rompen patrones visuales en mobile?

---

## 📝 Fase 2: Reporte

Genera un reporte estructurado con:

### 1. Resumen general
- Nivel de consistencia (Alto / Medio / Bajo)
- Principales problemas detectados

### 2. Hallazgos críticos
Inconsistencias que afectan UX o percepción de calidad

### 3. Hallazgos menores
Detalles visuales o mejoras

### 4. Tabla de inconsistencias

| ID | Elemento | Problema | Impacto | Recomendación |
|----|----------|----------|--------|--------------|

---

## 🔧 Fase 3: Recomendaciones

- Definir o reforzar Design System
- Unificar estilos duplicados
- Crear tokens (spacing, colores, tipografía)
- Estandarizar componentes (botones, inputs, cards)

---

## 🚫 Reglas
- NO modificar código
- NO asumir sin evidencia visual
- Priorizar consistencia sobre estética subjetiva
- Detectar patrones repetidos, no casos aislados

---

## 🎯 Resultado esperado
Un diagnóstico claro que permita:
- Mejorar coherencia visual
- Reducir deuda de diseño
- Facilitar escalabilidad del producto