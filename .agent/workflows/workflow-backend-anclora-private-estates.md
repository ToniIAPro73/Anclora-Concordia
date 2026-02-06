---
description: Antigravity — Workflow Backend (Workspace: Anclora Private Estates)
---

# Antigravity — Workflow Backend (Workspace: Anclora Private Estates)

Este workflow extiende el workflow global backend y fija criterios específicos para el dominio Private Estates (real estate lujo 100% online).

---

## 0) Regla de oro (Private Estates)

“Domain first” significa aquí: **Propiedades, Leads, Inversores, Dossiers y Operaciones**.  
Cualquier decisión técnica debe justificar cómo protege: consistencia de datos, privacidad (GDPR) y trazabilidad.

---

## 1) Fase 1 — Análisis del dominio (obligatorio)

1. Actores
- Visitante anónimo (marketing)
- Lead (contacto identificado)
- Inversor (perfilado + elegible)
- Agente/Asesor
- Admin/Backoffice

2. Casos de uso core (mínimos)
- Captación: formulario / booking / solicitud de dossier
- Gestión de leads: estado, scoring, asignación
- Catálogo de propiedades: listado, filtros, disponibilidad, precio
- Dossier/Documentos: generación, versión, descarga controlada
- Comunicación: eventos (email/whatsapp) y timeline

3. Reglas e invariantes típicas
- Un lead tiene un estado único y un historial (auditable).
- Propiedad: estado (activa/reservada/vendida/off-market), cambios auditados.
- Documentos: acceso por rol + expiración de enlaces.

Salida de fase:
- Lista de entidades + lifecycle
- Reglas de negocio (invariantes)
- Límites de permisos por rol

---

## 2) Fase 2 — Modelo de datos (mínimo viable)

Entidades recomendadas (MVP):
- `User` (roles: admin, agent, analyst)
- `Lead` (origen, estado, score, ownerId)
- `InvestorProfile` (rango inversión, preferencias, país, idioma)
- `Property` (ubicación, tipo, precio, divisa, status)
- `Inquiry` (leadId, propertyId, intención)
- `Document` (tipo: dossier, contrato, NDA; owner/lead; versionado)
- `Activity` (timeline: notas, llamadas, emails)

Reglas:
- Auditoría: `createdAt/updatedAt`, soft delete donde aplique.
- Índices: búsqueda por `Lead.status`, `Lead.ownerId`, `Property.status`, `Property.location`, fechas.

---

## 3) Fase 3 — Diseño de API (contratos estables)

Estándar:
- REST versionado: `/api/v1/...`
- Respuestas consistentes (data + meta)
- Paginación en listados (por defecto 20)

Recursos mínimos:
- `GET /api/v1/properties`
- `GET /api/v1/properties/:id`
- `POST /api/v1/leads`
- `GET /api/v1/leads` (filters: status, ownerId, q)
- `PATCH /api/v1/leads/:id` (estado, owner, notas)
- `POST /api/v1/documents` (generación/registro)
- `GET /api/v1/documents/:id` (control acceso)
- `POST /api/v1/inquiries`

Errores:
- Estructura estándar y códigos (400/401/403/404/409/422/429/500).

---

## 4) Fase 4 — Lógica de negocio (capas)

- Controllers/Handlers: validan input, auth, llaman a use-cases.
- Application services: reglas (status transitions, scoring, ownership).
- Repositorios: acceso a datos (sin SQL disperso).
- Adaptadores: integraciones (email, storage, IA).

Reglas Private Estates:
- Cualquier “score” debe ser explicable (features/razones).
- Transiciones de estado de Lead/Property deben validarse (no saltos arbitrarios).

---

## 5) Fase 5 — Seguridad, permisos y privacidad

- Auth: JWT/OAuth2/SSO según plataforma.
- Autorización por rol + ownership.
- PII minimizada; cifrado en tránsito siempre; cifrado en reposo si aplica.
- No logs con emails/teléfonos completos (enmascarar).
- Rate limit en endpoints públicos (lead capture, login, documents).

Documentos:
- Enlaces firmados y con expiración (si storage lo permite).
- Control de acceso por rol/lead.

---

## 6) Fase 6 — Observabilidad y calidad

Logs estructurados:
- requestId, userId (si existe), endpoint, latency, status.

Métricas mínimas:
- tasa de errores
- latencia p95
- throughput de captación (leads/day)
- generación de documentos (success/fail)

Testing:
- Unit: reglas de transición y scoring.
- Integration: endpoints + DB.
- E2E: flujo “crear lead → crear inquiry → generar dossier”.

---

## 7) Fase 7 — Operación y despliegue

- Config por env vars (no hardcode).
- Migraciones versionadas + rollback strategy.
- Seeds para catálogos mínimos (tipos, estados).

---

## 8) Checklist (antes de cerrar PR)

- Contratos API documentados (OpenAPI o equivalente).
- Permisos cubiertos (403/401 testados).
- Paginación/filtros consistentes.
- PII y documentos tratados con control de acceso y expiración.
- Auditoría básica implementada.
