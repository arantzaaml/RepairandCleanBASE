# 📝 Manual del Sistema de Blog Interno (Repair & Clean)

Este documento detalla el procedimiento para añadir, editar o eliminar entradas en la sección del Blog de la página web de Repair & Clean.

El sistema está diseñado para ser **interno y controlado por código**. Esto asegura la máxima estabilidad, SEO integrado y consistencia visual eliminando la necesidad de cargar pesados editores visuales (CMS) externos.

---

## Ubicación del Archivo Maestro

Toda la información del blog que se visualiza en la web reside en un único archivo de configuración:
📌 **Ruta del archivo:** `src/data/blogPosts.ts`

---

## ➕ Cómo Añadir un Nuevo Artículo

Para añadir una entrada nueva, abre el archivo `blogPosts.ts` y añade un nuevo bloque (objeto) dentro de la lista (Array) `blogPosts`.

Copia y pega la siguiente estructura base al final de la lista, antes del corchete de cierre `];` :

```typescript
{
  id: "identificador-unico-ej-2",
  slug: "mi-nuevo-articulo-seo",
  date: "YYYY-MM-DD",
  image: "/ruta/a/la/imagen.jpg",
  category: {
    es: "Categoría ES",
    ca: "Categoria CA",
    en: "Category EN"
  },
  title: {
    es: "Título del artículo en Español",
    ca: "Títol de l'article en Català",
    en: "Article Title in English"
  },
  excerpt: {
    es: "Breve resumen (máx 2 líneas) para la tarjeta.",
    ca: "Breu resum (màx 2 línies) per a la targeta.",
    en: "Short summary (max 2 lines) for the card."
  },
  content: {
    es: `
      <h2>Aquí empieza mi artículo</h2>
      <p>Este es el primer párrafo de mi artículo en español.</p>
    `,
    ca: `
      <h2>Aquí comença el meu article</h2>
      <p>Aquest és el primer paràgraf en català.</p>
    `,
    en: `
      <h2>Here begins my article</h2>
      <p>This is the first paragraph in English.</p>
    `
  }
}
```

> [!CAUTION]
> Asegúrate de separar cada bloque de artículo con una coma `,` si no es el último de la lista. Si rompes la estructura del JSON/TypeScript, la página podría fallar en compilación.

---

## 🖊️ Formatear el Contenido (HTML Básico)

El campo `content` soporta etiquetas HTML de forma segura (`dangerouslySetInnerHTML`) para permitir estilos enriquecidos con la UI de Tailwind:

*   **Párrafos:** Encierra cada bloque de texto entre `<p>` y `</p>`.
*   **Subtítulos:** Utiliza `<h2>` para apartados principales y `<h3>` para secciones menores. (No uses `<h1>`, ya que está reservado para el título principal del post por motivos de SEO).
*   **Negritas:** Utiliza `<strong>Texto destacado</strong>`.
*   **Listas:**
    ```html
    <ul>
      <li>Primer elemento</li>
      <li>Segundo elemento</li>
    </ul>
    ```
*   **Avisos o CTA internos (Cards):** Puedes usar contenedores (`<div>`) con clases de Tailwind si necesitas destacar un aviso de Contacto:
    ```html
    <div class="mt-8 p-6 bg-primary/10 rounded-xl border border-primary/20">
      <h3 class="text-xl font-bold">Llámanos ahora</h3>
      <p>Presupuestos gratuitos en Barcelona.</p>
    </div>
    ```

---

## 🗑️ Editar o Eliminar un Artículo

1. **Para Editar:** Simplemente localiza el campo que deseas cambiar (ya sea dentro de `es`, `ca` o `en`) y modifica el texto.
2. **Para Eliminar:** Selecciona todo el cloque de código desde la llave de apertura `{` hasta su cierre `},` que corresponda al artículo que deseas borrar, y suprímelo.

> [!TIP]
> **Mejores Prácticas SEO:** 
> - Asegúrate de que el campo `slug` contenga solo letras en minúscula, guiones y sin acentos ni eñes (ej: `como-pintar-fachada`).
> - Mantén el `excerpt` (resumen) entre 120-150 caracteres para mejorar el CTR en búsquedas y no desmaquetar las "cards".
