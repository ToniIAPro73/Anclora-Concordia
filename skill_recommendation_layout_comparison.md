# Recomendación de Skills para Comparación de Layouts

Tras analizar las habilidades disponibles en el workspace, esta es la combinación óptima para realizar comparaciones precisas entre un **Layout Base** y una **Web**, detectando inconsistencias y sugiriendo mejoras.

## 🏆 El "Skill Stack" Ganador

| Skill | Función | Por qué es mejor |
| :--- | :--- | :--- |
| **`creador_apps_luxury`** | **Estándar de Validación** | Contiene el **Brand Kit Universal Anclora (v4.0)**. Es la "Fuente de Verdad" para colores, tipografía, componentes y estructura legal obligatoria. |
| **`ui-visual-validator`** | **Lógica de Auditoría** | Define la metodología de comparación. Sus checklists de verificación visual y procesos de análisis son ideales para encontrar fallos de consistencia. |
| **`playwright-skill`** | **Motor de Captura** | Permite cargar tanto el archivo `.html` base como la web de destino para extraer estilos computados, DOM y capturas de pantalla para la comparativa. |
| **`web-visibility-analyzer`** | **Plantilla de Reporte** | Proporciona un framework de "Prioridades" (P0 a P3). Es perfecto para generar el documento final con "Modificaciones Necesarias" de forma jerarquizada. |

---

## 🛠️ Flujo de Trabajo Propuesto

Para ejecutar la comparación solicitada, se recomienda seguir este proceso:

1. **Carga de Datos (Playwright):**
   - Utilizar `playwright-skill` para navegar a la web y renderizar el `base_layout_private_estates.html`.
   - Extraer el árbol DOM y los estilos computados de elementos clave (Header, Hero, Botones, Footer).

2. **Validación de Marca (Creador Apps Luxury):**
   - Comparar los tokens de color (`--anclora-gold`, `--anclora-teal`, etc.) y fuentes (`Cardo`, `Inter`, `Fraunces`) detectados en la web contra las reglas innegociables del Skill Master v4.0.

3. **Análisis de Inconsistencias (UI Visual Validator):**
   - Aplicar el "Mandatory Verification Checklist" para detectar:
     - Diferencias de espaciado o alineación.
     - Fallos en estados hover/active de botones.
     - Ausencia de elementos obligatorios (badges legales en el footer).

4. **Generación del Reporte (Web Visibility Analyzer):**
   - Documentar los hallazgos en un Markdown siguiendo la estructura:
     - **P0 - Críticos:** Fallos de marca grave o elementos obligatorios ausentes.
     - **P1 - Alta Prioridad:** Inconsistencias visuales en el Hero o navegación.
     - **P2 - Media:** Ajustes de padding, sombras o micro-transiciones.
     - **P3 - Optimización:** Mejoras en accesibilidad visual.

## 💡 Skills Complementarias

- **`ui-ux-pro-max`**: Útil para validar si las modificaciones propuestas siguen las mejores prácticas de UX (contraste WCAG, tamaños de target, etc.).
- **`research-engineer`**: Si se necesita analizar cómo otras webs del sector resuelven la adaptación a layouts similares.

---

> [!TIP]
> Dado que el workspace está orientado a **Anclora Private Estates**, prioriza siempre el cumplimiento de la **Parte I: Brand Kit Universal** del skill `creador_apps_luxury`, ya que cualquier desviación de estos colores o tipografías se considera un error crítico de marca.
