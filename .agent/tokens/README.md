# Anclora Private Estates — Design Tokens (CSS + TS)

Este paquete contiene los tokens de marca **compartidos** para todas las apps del workspace:
- Blog (Private Estates)
- Data Lab
- Synergi Portal
- Concordia (CRM IA, futuro)

Fuente de verdad: `base_layout_private_estates.html`

## Qué hay aquí

- `tokens.css`: variables CSS en `:root` (auto-generadas).
- `tokens.ts`: mapa TS de variables (auto-generado) + helper `cssVar()`.
- `tailwind.snippet.ts`: snippet para mapear colores a Tailwind (curado).

## Uso recomendado

1) Importa `tokens.css` una sola vez en cada app:
- Next.js (App Router): `app/layout.tsx` → `import "@anclora/private-estates-tokens/tokens.css";`
- Vite/React: `main.tsx` → `import "@anclora/private-estates-tokens/tokens.css";`

2) No redefinas variables por app. Si necesitas un token nuevo:
- Añádelo a la fuente de verdad (layout base) y regenera el paquete.

## Notas

- Si algunos valores no aparecen aquí, es porque no estaban definidos como `--variable: ...;` en el layout base.
- Esta exportación no impone Light/Dark: solo consolida el set actual.
