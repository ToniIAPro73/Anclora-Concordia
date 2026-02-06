---
trigger: always_on
---

# Antigravity — Workspace Rules (Anclora Private Estates)

Estas reglas se aplican **solo** al workspace “Anclora Private Estates” dentro del ecosistema Antigravity.  
**No sustituyen** las reglas globales de componentes; las **extienden** y fijan decisiones de marca, IA y arquitectura para todas las apps Private Estates (incluye Blog, Data Lab, Synergi Portal y futuros módulos como Concordia).

Referencia obligatoria:
- Reglas globales de componentes (Antigravity Master Component Rules).
- Workflows globales backend/frontend.

---

## 1) Principios de marca (Private Estates)

1. Posicionamiento: lujo sobrio, tecnológico, orientado a inversor (HNW / tech-forward).
2. Estética: “dark premium” por defecto, alto contraste, detalles metálicos (oro) solo como acento.
3. Legibilidad primero: no sacrificar contraste por “glass” o fondos complejos.
4. Minimalismo funcional: pocos elementos, mucho aire, tipografía con jerarquía clara.
5. Consistencia inter-app: **Hero y Footer** son elementos de marca, no “por página”.

---

## 2) Design tokens (fuente de verdad del workspace)

Fuente de verdad: `base_layout_private_estates.html` (tokens CSS).  
Todos los proyectos del workspace deben adoptar **el mismo set** (no redefinir tokens por app).

### 2.1 Colores (tokens mínimos)
- `--anclora-teal-primary: #0B313F`
- `--anclora-teal-dark: #07252F`
- `--anclora-teal-hover: #124A50`
- `--anclora-teal-bg: #0F3F45`
- `--anclora-gold: #D4AF37`
- `--anclora-gold-light: #E6C96E`
- `--bg-dark: var(--anclora-teal-dark)`
- `--text-primary: #F5F5F0`
- `--text-secondary: rgba(245, 245, 240, 0.7)`
- `--glass: rgba(11, 49, 63, 0.45)`
- `--border-gold: rgba(212, 175, 55, 0.2)`

### 2.2 Tipografía
- Headline: `Cardo`
- Body: `Inter`
- Accents premium: `Fraunces`
- Secondary serif: `Cormorant Garamond`

Regla: **Fraunces solo para acentos** (labels premium, números clave, micro-títulos). No usarla como body.

### 2.3 Gradiente metálico oro
Token: `--gold-gradient`  
Regla: usarlo en dosis pequeñas (bordes, highlights, divisores). Evitar como fondo grande.

### 2.4 Motion y spacing
- `--transition-premium: all 0.8s cubic-bezier(0.19, 1, 0.22, 1)`
- `--spacing-base: 8px`

Regla: transiciones suaves, sin rebotes agresivos. Hover con micro-elevación o cambio sutil.

---

## 3) Layout de marca obligatorio

### 3.1 Hero (obligatorio)
Todas las apps Private Estates deben incluir un Hero alineado con:
- Titular breve + subtítulo (máx. 2 líneas).
- CTA primario único.
- Fondo dark premium con “glass” moderado.
- Tipografía: titular en `Cardo`, acentos en `Fraunces`.

### 3.2 Footer (obligatorio)
Footer coherente en todas las apps:
- Secciones: Marca + enlaces + legal + contacto (según aplique).
- Contraste: texto secundario mínimo AA (ideal AAA en body).
- Evitar “minúsculas grises” ilegibles.

### 3.3 Navegación
- Header fijo (si aplica) con fondo sólido/blur controlado.
- Navegación clara, máximo 6 ítems visibles.
- En mobile: menú colapsado accesible (focus trap + ESC).

---

## 4) Componentes Antigravity: decisiones de uso en Private Estates

Estas reglas no redefinen el componente; definen **cómo usarlo**.

### 4.1 Botones
- Primary: teal sólido, texto claro; borde oro solo si el contexto lo pide (por ejemplo, CTA premium).
- Secondary: borde + fondo transparente/surface.
- Danger: solo en áreas internas (admin/ops), nunca en marketing.

Regla: 1 Primary por vista/superficie.

### 4.2 Inputs y formularios (leads y onboarding)
- Labels siempre visibles.
- Validación consistente (recomendado: onBlur para marketing/leads, onChange para apps internas).
- Errores: copy accionable, sin jerga (“Revisa el email: falta ‘@’”).

### 4.3 Cards
- Fondo surface con shadow suave.
- Si la card es clickable: no meter dentro otro Primary que compita.

### 4.4 Tablas
- Por defecto: densidad media, paginación > 20.
- Acciones secundarias: kebab menu.
- Columnas clave fijas: “Propiedad” o “Lead” según contexto.

### 4.5 Modales
- Confirmaciones destructivas siempre explícitas (no cerrar con overlay).
- Orden de botones consistente en todo el workspace.

### 4.6 Toasts
- Mensaje corto, con título + detalle opcional.
- Errores críticos: persistentes hasta cerrar.

---

## 5) Copy y microcopy (tono Private Estates)

1. Directo, premium, sin “marketing ruidoso”.
2. Preferir verbos concretos: “Solicitar dossier”, “Agendar llamada”, “Descargar informe”.
3. Evitar tecnicismos salvo en apps internas (Data Lab, Synergi).
4. Multilenguaje: ES/EN previsto; diseñar UI para strings largos.

---

## 6) Accesibilidad (no negociable)

- Navegación por teclado completa.
- Focus ring visible también en dark mode.
- Contraste mínimo AA; en body ideal AAA.
- No depender solo de color para estados (añadir icono/label).

---

## 7) IA en el workspace (principios)

IA se usa para:
- Redacción de dossiers y resúmenes (con trazabilidad de fuentes).
- Clasificación de leads y priorización (explicable).
- Asistentes internos (Data Lab / Synergi) con permisos por rol.

Reglas:
- Nunca exponer datos sensibles en logs.
- PII: minimizar; consentimiento cuando aplique; GDPR by design.
- Respuestas con “confianza” o “fuente” si se trata de análisis/informes.

---

## 8) Estructura recomendada de repos por app (mínimos)

- `/design-tokens` o paquete compartido: tokens CSS/TS (único por workspace).
- `/ui` o librería de componentes Antigravity (si se comparte).
- `/apps/<app>`: Blog, Data Lab, Synergi, Concordia.
- Convención de nombres: `anclora-private-estates-*`.

---

## 9) Checklist de cumplimiento (antes de merge)

- Tokens: usa el set oficial (sin duplicar variables).
- Hero/Footer: presentes y alineados con layout base.
- a11y: tab order + focus visible + labels visibles.
- Mobile: navegación y modales usables.
- Copy: acciones claras; sin “OK/Yes” genéricos.
- Estados: loading/empty/error implementados.

