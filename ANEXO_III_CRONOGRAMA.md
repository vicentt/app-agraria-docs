# ANEXO III - ENTREGABLES Y CRONOGRAMA
## Proyecto AGRARIA - Agricultural Services Management Platform

**Versión:** 2.0 Simplificada
**Fecha:** Octubre 2025
**Duración Estimada Total:** 28 semanas (~7 meses)
**Metodología:** Ágil pragmática - entregar valor rápido

---

## TABLA DE CONTENIDOS

1. [Estructura del Proyecto](#1-estructura-del-proyecto)
2. [Fases y Duración](#2-fases-y-duración)
3. [Hitos de Facturación](#3-hitos-de-facturación)
4. [Cronograma Detallado por Fase](#4-cronograma-detallado-por-fase)
5. [Entregables Esenciales](#5-entregables-esenciales)
6. [Dependencias Críticas](#6-dependencias-críticas)

---

## 1. ESTRUCTURA DEL PROYECTO

### 1.1 Componentes Principales

| Componente | Tecnología | Propósito |
|------------|-----------|-----------|
| **Diseño UI/UX** | Wireframes simples | Guía visual básica |
| **App Móvil** | React Native + Expo | Aplicación iOS y Android |
| **Backend API** | .NET 8 Web API | Servicios REST |
| **Base de Datos** | PostgreSQL | Almacenamiento |
| **Panel Admin** | React Web | Gestión administrativa |
| **Hosting** | Cloud simple | Servidor + Storage |

### 1.2 Módulos Funcionales

- Autenticación (Email + Google)
- Gestión de Trabajos
- Gestión de Maquinaria
- Aplicaciones a trabajos
- Feed Inteligente
- Valoraciones y Badges
- Favoritos
- Notificaciones Push (4 tipos)
- Panel Admin Web

---

## 2. FASES Y DURACIÓN

### Resumen Ejecutivo

| Fase | Duración | Entregable Principal | % Proyecto |
|------|----------|---------------------|------------|
| **Fase 0: Setup Rápido** | 1 semana | Repos + DB + Hello World | 3% |
| **Fase 1: Diseño Básico** | 2 semanas | Wireframes + Colores | 7% |
| **Fase 2: Backend Core** | 4 semanas | API funcional | 15% |
| **Fase 3: App Móvil Base** | 4 semanas | Auth + Navegación | 14% |
| **Fase 4: Trabajos** | 5 semanas | Publicar + Aplicar | 18% |
| **Fase 5: Features Avanzadas** | 3 semanas | Feed + Favoritos + Maquinaria | 11% |
| **Fase 6: Reputación** | 3 semanas | Ratings + Badges | 11% |
| **Fase 7: Admin Panel** | 2 semanas | Dashboard básico | 7% |
| **Fase 8: Testing y Deploy** | 4 semanas | UAT + Producción | 14% |

**Total:** 28 semanas (~7 meses)

---

## 3. HITOS DE FACTURACIÓN

### Hito 1: Demo Funcional (30%)
**Momento:** Fin de Fase 5
**Qué funciona:**
- Registro → Publicar trabajo → Aplicar → Ver aplicaciones
- Feed inteligente
- Favoritos
- Catálogo de maquinaria

**Criterio:** Demo en vivo exitosa

---

### Hito 2: Beta Completa (40%)
**Momento:** Fin de Fase 7
**Qué funciona:**
- TODO del Análisis Funcional
- Valoraciones y badges
- Panel admin
- Notificaciones push
- Apps en TestFlight/distribución interna

**Criterio:** Cliente puede usar la app completa

---

### Hito 3: Producción (30%)
**Momento:** Fin de Fase 8
**Qué se entrega:**
- App funcionando en producción
- Código fuente
- Documentación básica
- Apps publicadas (o en proceso)

**Criterio:** Cliente acepta y app está viva

---

## 4. CRONOGRAMA DETALLADO POR FASE

### FASE 0: SETUP RÁPIDO
**Duración:** 1 semana

**Actividades:**
- Crear repos Git
- Setup DB PostgreSQL
- Proyecto .NET "Hello World"
- Proyecto React Native "Hello World"
- Deploy básico en cloud
- Configuración de herramientas básicas

**Entregables:**
- ✅ Repos accesibles
- ✅ API con endpoint /health
- ✅ App que abre en móvil

**Sin pérdidas de tiempo en:**
- ❌ Pipeline CI/CD complejo (se hace incremental)
- ❌ Múltiples ambientes (solo Dev + Prod)
- ❌ Documentación de setup (README simple)

---

### FASE 1: DISEÑO BÁSICO
**Duración:** 2 semanas

**Actividades:**
- Wireframes simples de pantallas principales (papel/Figma rápido)
- Definir colores (verde/tierra)
- Elegir tipografía
- Logo básico
- Revisión y ajustes con cliente

**Entregables:**
- ✅ Wireframes de ~20 pantallas clave
- ✅ Paleta de colores definida
- ✅ Tipografía elegida
- ✅ Aprobación cliente

**Sin pérdidas de tiempo en:**
- ❌ Design System completo
- ❌ Componentes exhaustivos
- ❌ Iteraciones infinitas (máximo 2 rondas)

---

### FASE 2: BACKEND CORE
**Duración:** 4 semanas

**Semana 1: Autenticación**
- Register, Login, JWT
- Google Sign-In
- CRUD usuarios

**Semana 2: Trabajos**
- CRUD trabajos
- Categorías
- Estados

**Semana 3: Imágenes y Aplicaciones**
- Upload imágenes
- CRUD aplicaciones
- Seleccionar proveedor

**Semana 4: Maquinaria y Ajustes**
- CRUD maquinaria
- Ajustes y optimizaciones
- Testing básico

**Endpoints:** ~30 endpoints REST

**Entregables:**
- ✅ API funcional con endpoints principales
- ✅ DB con tablas necesarias
- ✅ Swagger auto-generado

**Sin pérdidas de tiempo en:**
- ❌ Tests unitarios exhaustivos (solo críticos, ~40% cobertura)
- ❌ Documentación Postman adicional (Swagger es suficiente)
- ❌ Optimizaciones prematuras

---

### FASE 3: APP MÓVIL BASE
**Duración:** 4 semanas

**Semana 1:**
- Login/Register screens
- Google Sign-In nativo
- Navegación básica

**Semana 2:**
- Onboarding (3 pasos)
- Perfil de usuario
- Configuración

**Semana 3:**
- HTTP client + auth
- Manejo de errores
- Estado global básico

**Semana 4:**
- Integración completa backend
- Pulir UX básica
- Testing en dispositivos

**Entregables:**
- ✅ App instalable que autentica
- ✅ Navegación funcional
- ✅ Integración con backend

**Sin pérdidas de tiempo en:**
- ❌ Animaciones complejas (básicas solo)
- ❌ Caché sofisticada (simple al inicio)
- ❌ Optimizaciones de performance prematuras

---

### FASE 4: GESTIÓN DE TRABAJOS
**Duración:** 5 semanas

**Semana 1:**
- Publicar trabajo (formulario 5 pasos)
- Upload fotos
- Calculadora precio

**Semana 2:**
- Feed de trabajos
- Filtros básicos
- Detalle trabajo

**Semana 3:**
- Aplicar a trabajo
- Selección de maquinaria
- Ver aplicaciones recibidas

**Semana 4:**
- Seleccionar proveedor
- Estados del trabajo

**Semana 5:**
- Notificaciones push
- Testing y ajustes
- Pulir flujo completo

**Entregables:**
- ✅ Flujo completo funcional
- ✅ Notificaciones configuradas

**Sin pérdidas de tiempo en:**
- ❌ Filtros super avanzados (básicos primero)
- ❌ Validaciones excesivas (razonables solo)

---

### FASE 5: FEATURES AVANZADAS
**Duración:** 3 semanas

**Semana 1:**
- Catálogo maquinaria completo
- Sistema de favoritos

**Semana 2:**
- Feed ordenado por relevancia
- Optimizar feed

**Semana 3:**
- Pulir UX
- Ajustes y testing

**Entregables:**
- ✅ Todas las features secundarias funcionando

**Sin pérdidas de tiempo en:**
- ❌ Algoritmo de relevancia súper complejo (v1 simple)
- ❌ Mil opciones de configuración

---

### FASE 6: VALORACIONES Y REPUTACIÓN
**Duración:** 3 semanas

**Semana 1:**
- Sistema de valoraciones bidireccionales
- Cálculo de rating promedio

**Semana 2:**
- Badges automáticos (5 tipos)
- Límites según reputación

**Semana 3:**
- Visualización badges
- Testing y ajustes

**Entregables:**
- ✅ Sistema de reputación completo

**Sin pérdidas de tiempo en:**
- ❌ Algoritmos complejos de detección de fraude
- ❌ Estadísticas excesivas

---

### FASE 7: PANEL ADMIN
**Duración:** 2 semanas

**Semana 1:**
- Login admin
- Dashboard con métricas básicas
- Lista trabajos asignados

**Semana 2:**
- Cambiar estados
- Ver datos reales post-selección
- Ajustes y testing

**Entregables:**
- ✅ Panel funcional desde ordenador

**Sin pérdidas de tiempo en:**
- ❌ Reportes automáticos complejos (Excel manual al inicio)
- ❌ Gráficos elaborados (números simples)
- ❌ Sistema de logs de auditoría (puede esperar)
- ❌ Moderación automática (manual al inicio)

---

### FASE 8: TESTING Y DEPLOY
**Duración:** 4 semanas

**Semana 1-2:**
- Cliente prueba todo (UAT)
- Fix bugs críticos y menores
- Ajustes UX

**Semana 3:**
- Deploy a producción
- Configurar notificaciones push prod
- Testing en producción

**Semana 4:**
- Subir a stores (iniciar proceso)
- README básico
- Capacitación cliente

**Entregables:**
- ✅ App en producción funcionando
- ✅ Código entregado
- ✅ Apps en stores (o proceso iniciado)

**Sin pérdidas de tiempo en:**
- ❌ Tests E2E exhaustivos (solo flujos críticos)
- ❌ Tests de accesibilidad
- ❌ Auditoría de seguridad formal
- ❌ Tests en 10+ dispositivos (3-4 suficiente)
- ❌ Manual de usuario extenso (video de 5 min)
- ❌ Plan de contingencia formal
- ❌ Documentación técnica exhaustiva (README + comments)
- ❌ Múltiples sesiones de capacitación (1 sesión simple)
- ❌ Configuración de CDN
- ❌ Optimizaciones de BD avanzadas

---

## 5. ENTREGABLES ESENCIALES

### Por Fase
- **Fase 0:** Repos + DB + Hello Worlds
- **Fase 1:** Wireframes + Colores
- **Fase 2:** API funcional con Swagger
- **Fase 3:** App base autenticando
- **Fase 4:** Flujo trabajos completo
- **Fase 5:** Features avanzadas
- **Fase 6:** Sistema reputación
- **Fase 7:** Panel admin
- **Fase 8:** App en producción + código

### Documentación Mínima Viable
- README con setup
- Swagger auto-generado
- Comments en código crítico
- Video tutorial 5 min

**SIN:**
- ❌ Documentación técnica de 50 páginas
- ❌ Manuales exhaustivos
- ❌ Diagramas UML complejos
- ❌ Postman collections adicionales

---

## 6. DEPENDENCIAS CRÍTICAS

### Del Cliente

| Qué necesito | Cuándo | Impacto si demora |
|-------------|--------|-------------------|
| **Aprobar wireframes + colores** | Fin Fase 1 | Bloquea Fase 3 |
| **Feedback UAT** | Fase 8 | Demora entrega |
| **Credenciales cloud** | Inicio | Bloquea todo |
| **Cuentas Apple/Google Developer** | Fase 8 | Demora publicación |

### Supuestos Clave
1. Feedback del Cliente en <5 días
2. Sin cambios de alcance (CR requiere adenda)
3. Acceso a 2-3 móviles iOS/Android para pruebas
4. Reuniones: 1 por semana máximo (no interrumpir flow)

---

## RESUMEN DE HITOS Y PAGOS

| Hito | Fase | Semana | Qué cobras por | % | Acumulado |
|------|------|--------|----------------|---|-----------|
| **Inicio** | 0 | 0 | Setup | - | 0% |
| **Demo Funcional** | 5 | 16 | App funcionando con flujo principal | 30% | 30% |
| **Beta Completa** | 7 | 22 | TODO implementado | 40% | 70% |
| **Producción** | 8 | 28 | App viva + código | 30% | 100% |

---

## LO QUE NO HAREMOS (para no perder tiempo)

### Documentación Innecesaria
- ❌ Manuales técnicos extensos
- ❌ Documentación Postman (Swagger es suficiente)
- ❌ Planes de contingencia formales
- ❌ Matrices de trazabilidad complejas

### Testing Excesivo
- ❌ Cobertura >50% (innecesaria para MVP)
- ❌ Tests E2E de todo (solo críticos)
- ❌ Tests de accesibilidad
- ❌ Tests de penetración
- ❌ Tests en 10+ dispositivos

### Infraestructura Prematura
- ❌ Pipeline CI/CD complejo desde día 1
- ❌ Múltiples ambientes (Dev/Pre/Prod)
- ❌ CDN configurada
- ❌ Caches complejos
- ❌ Optimizaciones DB prematuras

### Administración Burocrática
- ❌ Reuniones diarias
- ❌ Reportes automáticos complejos
- ❌ Logs de auditoría exhaustivos
- ❌ Sistema de moderación automático
- ❌ Gráficos elaborados en admin

### Over-Engineering
- ❌ Algoritmos súper complejos desde inicio
- ❌ Arquitectura escalable a millones (YAGNI)
- ❌ Abstracciones excesivas
- ❌ Microservicios (monolito modular es suficiente)

---

## FILOSOFÍA: HACER > DOCUMENTAR

1. **Código funcional** > Documentación perfecta
2. **Demos reales** > Reuniones de status
3. **Iteraciones rápidas** > Planning perfecto
4. **Feedback de usuario real** > Tests exhaustivos
5. **Entregar valor** > Seguir procesos

---

## REUNIONES MÍNIMAS

- **Kickoff:** 1 hora
- **Aprobación diseño:** 30 min
- **Semanales:** 30 min (opcional si no hay blockers)
- **Demo Funcional:** 1 hora
- **Beta Review:** 1 hora
- **Capacitación:** 1 hora

**Total tiempo en reuniones:** ~10 horas en 6 meses

---

**Última actualización:** Octubre 2025 - Versión 2.0 Pragmática
**Filosofía:** Ship early, iterate based on real usage

---

© 2025 CODELIO S.L. - Proyecto AGRARIA
