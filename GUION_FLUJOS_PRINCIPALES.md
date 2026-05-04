# Terralia — Guion de flujos principales

## 1. Registro y Onboarding
1. Pantalla de bienvenida con logo Terralia
2. Registro con email + contraseña (o Google OAuth)
3. **Onboarding 4 pasos:**
   - Paso 1: Bienvenida
   - Paso 2: Datos personales + ubicación (provincia, municipio, geolocalización)
   - Paso 3: Selección de categorías de interés (grid visual con iconos, multi-select)
   - Paso 4: Pantalla de éxito
4. El usuario queda en estado `pending_approval` hasta que el admin lo apruebe
5. **Admin recibe notificación** (email + panel) de nuevo usuario pendiente
6. Admin aprueba/rechaza desde el panel → usuario recibe notificación + email

---

## 2. Publicación de trabajo
1. Desde Home, pulsar "Crear trabajo"
2. **Wizard de 5 pasos:**
   - Paso 1: Título, descripción, tipo de servicio
   - Paso 2: Categorías (1-3, grid visual)
   - Paso 3: Ubicación (manual o "usar mi ubicación actual")
   - Paso 4: Fechas, duración, precio estimado
   - Paso 5: Fotos (hasta X imágenes, HEIC se convierte a JPEG automáticamente)
3. Pantalla de resumen estilo detalle → confirmar publicación
4. El trabajo queda en `pending_approval`
5. **Admin recibe notificación** de nuevo trabajo pendiente
6. Admin aprueba → trabajo aparece en el feed público
7. Notificación push a usuarios con categorías coincidentes

---

## 3. Feed y búsqueda de trabajos
1. Home muestra feed inteligente ordenado por relevancia (categoría + ubicación + maquinaria del usuario)
2. Filtros disponibles: categoría, provincia, búsqueda por texto
3. Tarjetas con título, categoría, ubicación, precio, fotos
4. Pull-to-refresh para actualizar
5. Detalle de trabajo con lightbox para fotos

---

## 4. Aplicar a un trabajo
1. Desde el detalle del trabajo, pulsar "Aplicar"
2. Se envía la aplicación con datos del proveedor (anónimo con pseudónimo)
3. El solicitante ve las aplicaciones recibidas en "Mis trabajos" (sin datos reales, solo pseudónimos)
4. El solicitante NO selecciona directamente — es el **admin quien asigna**
5. Admin ve todas las aplicaciones en el panel → asigna al proveedor
6. Todos los candidatos reciben notificación (aceptado o rechazado)
7. Solo tras la asignación se revelan las identidades reales

---

## 5. Ciclo de vida del trabajo
```
Borrador → Pendiente aprobación → Publicado → Seleccionando → En progreso → Completado
```
- **Pendiente aprobación:** Admin debe aprobar
- **Publicado:** Visible en feed, acepta aplicaciones
- **Seleccionando:** Admin asigna proveedor
- **En progreso:** Trabajo en ejecución
- **Completado:** Ambas partes pueden valorar

---

## 6. Valoraciones y reputación
1. Cuando un trabajo se completa, ambas partes reciben notificación para valorar
2. **Formulario:** Rating (estrellas) + tags predefinidos + comentario libre
3. La valoración queda en `pending_approval` → admin la revisa y aprueba/rechaza
4. Las valoraciones aparecen en el perfil público del usuario (con pseudónimo del valorador)
5. **Badges automáticos** (5 tipos) se asignan según actividad → notificación push al usuario

---

## 7. Maquinaria
1. Desde Perfil → "Mi maquinaria"
2. **Crear maquinaria** en 4 pasos (nombre, categoría, descripción, fotos)
3. Queda en `pending_approval` → admin aprueba
4. La maquinaria se vincula al usuario y mejora su relevancia en el feed
5. CRUD completo: crear, editar, eliminar

---

## 8. Favoritos
1. Guardar trabajos o usuarios como favoritos
2. Accesibles desde Perfil → "Mis favoritos"
3. Los favoritos de usuarios muestran pseudónimo (privacidad protegida)

---

## 9. Notificaciones
1. **Push notifications** en tiempo real al dispositivo
2. **Emails transaccionales** (26+ tipos: bienvenida, aprobación, rechazo, nueva aplicación, etc.)
3. Pantalla de notificaciones con mark-as-read y time-ago
4. Navegación directa al detalle desde la notificación

---

## 10. Panel de administración (web)
1. **Dashboard** con métricas y contadores de pendientes
2. **Usuarios:** Lista, detalle, aprobar/rechazar/suspender/reactivar
3. **Trabajos:** Lista con tabs (pendientes, todos), detalle, editar, aprobar/rechazar, asignar aplicante
4. **Maquinaria:** Lista, detalle, aprobar/rechazar
5. **Reseñas:** Lista con tabs, detalle, aprobar/rechazar, timeline de acciones
6. Editar un trabajo desde admin → resetea a pendiente + soft-delete candidaturas + notifica

---

## 11. Privacidad y pseudónimos
- Todos los usuarios son **anónimos** hasta que el admin asigna un trabajo
- **Pseudónimos deterministas:** Cada usuario tiene siempre el mismo pseudónimo (consistente en toda la app)
- Perfiles públicos muestran "Ubicación privada"
- Solo el admin ve datos reales en todo momento
