# 🤖 Guía de Replicación: Sistema de Blog Interno (Prompt para IA)

Este documento ha sido diseñado para que puedas pegarlo directamente en otra IA (o futuras sesiones) y repliques exactamente la estructura, lógica y diseño del Blog que hemos construido en **Repair & Clean**.

---

## 1. Contexto Técnico
- **Framework:** React + Vite (TypeScript).
- **Estilos:** Tailwind CSS.
- **Iconos:** Lucide-React.
- **Enrutado:** React Router DOM.
- **i18n:** Sistema personalizado basado en un Contexto (`LanguageContext`) y un objeto de traducciones.

---

## 2. Estructura de Datos (El "Cerebro")

Crea un archivo `src/data/blogPosts.ts`. La estructura debe ser multilingüe usando el tipo `Record<Language, string>` para permitir el cambio de idioma al vuelo.

**Esquema de Datos:**
```typescript
export interface BlogPost {
  id: string;
  slug: string;
  date: string;
  image: string;
  category: Record<Language, string>;
  title: Record<Language, string>;
  excerpt: Record<Language, string>;
  content: Record<Language, string>; // Soporta HTML básico para formato rico
}
```

---

## 3. Lógica de Componentes (UI)

Debes crear dos páginas principales manteniendo el "Design System" (Glassmorphism, sombras suaves y fuentes corporativas):

### A. Listado de Blog (`src/pages/Blog.tsx`)
- Renderiza un grid de tarjetas (`Card` de shadcn/ui o personalizado).
- Debe incluir una animación de entrada tipo "cascade" (fade-in-up con delay incremental).
- Los textos deben extraerse dinámicamente según el estado global de `language`.

### B. Detalle del Artículo (`src/pages/BlogPost.tsx`)
- Usa `useParams` para capturar el `slug`.
- Utiliza la etiqueta `dangerouslySetInnerHTML` para renderizar el campo `content` (esto permite negritas, listas y subtítulos).
- **Importante:** Incluye una clase `.prose` o personalizada para estilizar el HTML inyectado (márgenes, colores de encabezado y espaciado de párrafos).

---

## 4. Integración y Navegación

1.  **Rutas:** Añade las rutas `/blog` y `/blog/:slug` en el archivo de enrutado principal. Asegúrate de usar un hook `scrollToTop` para que la página siempre empiece arriba al navegar.
2.  **Navbar/Footer:** Añade el enlace al blog usando las claves de traducción correspondientes.
3.  **Visibilidad de Navbar:** Implementa una lógica en el `Navbar` para que detecte si la página es "clara" (como el blog) y fuerce el texto oscuro/fondo con desenfoque (`backdrop-blur`).

---

## 5. Reglas de Estilo y UX
- **Animaciones:** Usa `framer-motion` o `keyframes` de Tailwind para entradas suaves.
- **Consistencia:** Las tarjetas del blog deben usar el mismo `box-shadow` y `border-radius` que el resto de la web.
- **Accesibilidad:** Cada imagen debe tener un `alt` generado dinámicamente combinando el título del post y la categoría.

---

## Prompt sugerido para la nueva IA:
> *"Actúa como un experto en React y Tailwind. Necesito que repliques un sistema de Blog Interno Estático. El sistema debe leer artículos de un archivo TypeScript multilingüe (ES, CA, EN). Crea una página de grid con tarjetas animadas y una página de lectura que renderice HTML inyectado de forma segura. Usa un diseño Glassmorphism con bordes sutiles y asegura que el Navbar se adapte al fondo claro de estas nuevas secciones. Aquí tienes la estructura de datos que quiero usar: [Pegar sección 2 de este manual]."*
