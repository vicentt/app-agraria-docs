# DOCS 02 - MODELO DE DATOS SQL
## Plataforma de Gestión de Servicios Agrícolas - Versión Optimizada

**Versión:** 1.0 Optimizada
**Fecha:** 30 Octubre 2025
**Base de Datos:** PostgreSQL 15+
**ORM:** Entity Framework Core 8

---

## 1. VISIÓN GENERAL

Modelo relacional normalizado (3FN) diseñado para PostgreSQL que soporta:
- Identidades anónimas con pseudónimos
- Usuarios sin roles (pueden publicar Y aplicar)
- Maquinaria vinculada a usuarios
- Aplicaciones con mensajes predefinidos
- Sistema de reputación con badges
- 10 categorías simplificadas
- Multiidioma ES/CA

**Principios de diseño:**
- Normalización para evitar redundancia
- Índices optimizados para queries frecuentes
- Constraints para integridad de datos
- Soft deletes (no se eliminan registros físicamente)
- Timestamps automáticos (created_at, updated_at)
- UUID como primary keys (seguridad + distribución)

---

## 2. DIAGRAMA ENTIDAD-RELACIÓN

```
┌─────────────────┐         ┌─────────────────┐
│     Users       │◄────────│   Machinery     │
│  (usuarios)     │  1:N    │  (maquinaria)   │
└────────┬────────┘         └─────────────────┘
         │
         │ 1:N
         │
    ┌────▼─────────┐         ┌─────────────────┐
    │     Jobs     │◄────────│  Applications   │
    │  (trabajos)  │  1:N    │ (aplicaciones)  │
    └────┬─────────┘         └────────┬────────┘
         │                            │
         │ N:1                        │ N:1
         │                            │
    ┌────▼────────────────────────────▼───┐
    │         Categories                   │
    │        (categorias)                  │
    └──────────────────────────────────────┘

    ┌─────────────────┐         ┌─────────────────┐
    │     Users       │◄────────│    Reviews      │
    │                 │  1:N    │   (reseñas)     │
    └─────────────────┘         └─────────────────┘
            ▲                            │
            │                            │
            └────────────────────────────┘
                        1:N

    ┌─────────────────┐         ┌─────────────────┐
    │     Users       │◄────────│  Notifications  │
    │                 │  1:N    │ (notificaciones)│
    └─────────────────┘         └─────────────────┘

    ┌─────────────────┐         ┌─────────────────┐
    │     Users       │◄────────│   Favorites     │
    │                 │  1:N    │   (favoritos)   │
    └─────────────────┘         └─────────┬───────┘
            ▲                            │
            │                            │ N:1
            └────────────────────────────┘
                   (favorited_user_id)

    ┌─────────────────┐
    │     Badges      │
    │    (badges)     │
    └─────────┬───────┘
              │
              │ N:M
              │
    ┌─────────▼───────┐
    │   User_Badges   │
    │ (usuario_badges)│
    └─────────────────┘
```

---

## 3. TABLAS PRINCIPALES

### 3.1 users (Usuarios)

Almacena todos los usuarios (sin diferenciación de roles).

```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Autenticación
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NULL, -- Null si usa Google OAuth
    google_id VARCHAR(255) NULL UNIQUE,

    -- Datos personales (privados)
    full_name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NULL,
    avatar_url TEXT NULL,

    -- Ubicación
    province VARCHAR(100) NOT NULL,
    municipality VARCHAR(100) NOT NULL,

    -- Preferencias
    preferred_categories JSONB NULL, -- Array de IDs de categorías de interés
    language VARCHAR(2) NOT NULL DEFAULT 'es', -- 'es' o 'ca'

    -- Reputación
    rating_avg DECIMAL(2,1) DEFAULT 0.0 CHECK (rating_avg >= 0 AND rating_avg <= 5),
    rating_count INT DEFAULT 0,
    completed_jobs_count INT DEFAULT 0,
    cancelled_jobs_count INT DEFAULT 0,

    -- Estado
    is_active BOOLEAN DEFAULT true,
    is_suspended BOOLEAN DEFAULT false,
    suspension_reason TEXT NULL,

    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    last_login_at TIMESTAMP WITH TIME ZONE NULL,

    -- Soft delete
    deleted_at TIMESTAMP WITH TIME ZONE NULL
);

-- Índices
CREATE INDEX idx_users_email ON users(email) WHERE deleted_at IS NULL;
CREATE INDEX idx_users_province ON users(province) WHERE deleted_at IS NULL;
CREATE INDEX idx_users_rating ON users(rating_avg DESC) WHERE deleted_at IS NULL;
CREATE INDEX idx_users_google_id ON users(google_id) WHERE google_id IS NOT NULL;

-- Trigger para updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

**Notas:**
- `preferred_categories`: JSONB con array de UUIDs de categorías (ej: `["uuid1", "uuid2", "uuid3"]`)
- `password_hash`: NULL si el usuario usa solo Google OAuth
- Soft delete: `deleted_at` permite "recuperar" usuarios eliminados

---

### 3.2 categories (Categorías)

10 categorías principales con traducciones ES/CA.

```sql
CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Orden de visualización
    display_order INT NOT NULL UNIQUE,

    -- Nombres multiidioma
    name_es VARCHAR(255) NOT NULL,
    name_ca VARCHAR(255) NOT NULL,

    -- Descripciones
    description_es TEXT NULL,
    description_ca TEXT NULL,

    -- Estado
    is_active BOOLEAN DEFAULT true,

    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Índice
CREATE INDEX idx_categories_active ON categories(is_active, display_order);

-- Trigger
CREATE TRIGGER update_categories_updated_at BEFORE UPDATE ON categories
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Datos iniciales (seed)
INSERT INTO categories (display_order, name_es, name_ca) VALUES
(1, 'Preparación del Suelo', 'Preparació del Sòl'),
(2, 'Siembra y Plantación', 'Sembra i Plantació'),
(3, 'Tratamientos Fitosanitarios', 'Tractaments Fitosanitaris'),
(4, 'Riego', 'Reg'),
(5, 'Cosecha', 'Collita'),
(6, 'Poda y Mantenimiento', 'Poda i Manteniment'),
(7, 'Transporte Agrícola', 'Transport Agrícola'),
(8, 'Gestión de Forraje', 'Gestió de Farratge'),
(9, 'Infraestructuras', 'Infraestructures'),
(10, 'Otros Servicios', 'Altres Serveis');
```

---

### 3.3 machinery (Maquinaria)

Catálogo personal de maquinaria de cada usuario.

```sql
CREATE TABLE machinery (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Relación con usuario
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

    -- Información básica
    category_id UUID NOT NULL REFERENCES categories(id) ON DELETE RESTRICT,
    type VARCHAR(255) NOT NULL, -- Tipo específico (ej: "Tractor", "Cosechadora")
    brand VARCHAR(100) NULL,
    model VARCHAR(100) NULL,
    year INT NULL CHECK (year >= 1950 AND year <= 2100),

    -- Especificaciones
    technical_specs TEXT NULL, -- Texto libre (max 500 chars)

    -- Imágenes (URLs de Azure Blob Storage)
    images JSONB NULL, -- Array de URLs: ["url1", "url2", ...]

    -- Estado
    is_operational BOOLEAN DEFAULT true,

    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP WITH TIME ZONE NULL
);

-- Índices
CREATE INDEX idx_machinery_user ON machinery(user_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_machinery_category ON machinery(category_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_machinery_user_category ON machinery(user_id, category_id) WHERE deleted_at IS NULL;

-- Trigger
CREATE TRIGGER update_machinery_updated_at BEFORE UPDATE ON machinery
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

**Notas:**
- `images`: JSONB con array de URLs (ej: `["https://blob.azure.com/img1.jpg", "..."]`)
- Máximo 5 imágenes validado en capa de aplicación
- ON DELETE CASCADE: si se elimina usuario, se elimina su maquinaria

---

### 3.4 jobs (Trabajos)

Publicaciones de trabajos agrícolas.

```sql
CREATE TABLE jobs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Relación con usuario solicitante
    requester_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

    -- Pseudónimo generado (para anonimato)
    pseudonym VARCHAR(50) NOT NULL UNIQUE, -- Ej: "Agricultor_X7K2"

    -- Categoría
    category_id UUID NOT NULL REFERENCES categories(id) ON DELETE RESTRICT,

    -- Información básica
    title VARCHAR(255) NOT NULL, -- Auto-generado según categoría
    description TEXT NOT NULL, -- Max 1000 chars

    -- Ubicación
    province VARCHAR(100) NOT NULL,
    municipality VARCHAR(100) NOT NULL,

    -- Fechas flexibles
    start_month INT NOT NULL CHECK (start_month BETWEEN 1 AND 12),
    start_year INT NOT NULL CHECK (start_year >= 2025),
    estimated_duration VARCHAR(50) NOT NULL, -- '1 día', '2-3 días', '1 semana', etc.

    -- Especificaciones
    surface_hectares DECIMAL(10,2) NULL,
    required_machinery JSONB NULL, -- Array de strings: ["Tractor", "Sembradora"]
    operator_required BOOLEAN DEFAULT true,
    additional_specs TEXT NULL,

    -- Presupuesto
    estimated_price_min DECIMAL(10,2) NULL,
    estimated_price_max DECIMAL(10,2) NULL,

    -- Imágenes
    images JSONB NULL, -- Array de URLs (max 5)

    -- Estado
    status VARCHAR(50) NOT NULL DEFAULT 'published',
    -- Valores: 'published', 'selecting', 'assigned', 'in_progress', 'completed', 'cancelled'

    -- Proveedor seleccionado (si estado = assigned/in_progress/completed)
    selected_provider_id UUID NULL REFERENCES users(id) ON DELETE SET NULL,
    selected_at TIMESTAMP WITH TIME ZONE NULL,

    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP WITH TIME ZONE NULL,
    cancelled_at TIMESTAMP WITH TIME ZONE NULL,
    deleted_at TIMESTAMP WITH TIME ZONE NULL
);

-- Índices
CREATE INDEX idx_jobs_requester ON jobs(requester_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_jobs_category ON jobs(category_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_jobs_status ON jobs(status) WHERE deleted_at IS NULL;
CREATE INDEX idx_jobs_province ON jobs(province) WHERE deleted_at IS NULL;
CREATE INDEX idx_jobs_feed ON jobs(category_id, province, created_at DESC)
    WHERE status IN ('published', 'selecting') AND deleted_at IS NULL;
CREATE INDEX idx_jobs_pseudonym ON jobs(pseudonym) WHERE deleted_at IS NULL;

-- Trigger
CREATE TRIGGER update_jobs_updated_at BEFORE UPDATE ON jobs
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

**Notas:**
- `pseudonym`: Generado automáticamente al crear el trabajo
- `status`: Cambiado manualmente por admin (excepto 'published' → 'selecting' automático)
- `required_machinery`: Array JSON de strings (ej: `["Tractor", "Sembradora"]`)
- Índice compuesto para feed optimizado

---

### 3.5 applications (Aplicaciones)

Propuestas de proveedores para realizar trabajos.

```sql
CREATE TABLE applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Relaciones
    job_id UUID NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
    provider_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

    -- Pseudónimo del proveedor (anonimato)
    provider_pseudonym VARCHAR(50) NOT NULL, -- Ej: "Proveedor_M9P4"

    -- Maquinaria ofrecida
    machinery_ids JSONB NOT NULL, -- Array de UUIDs de maquinaria

    -- Propuesta
    proposed_price DECIMAL(10,2) NOT NULL CHECK (proposed_price > 0),
    availability_month INT NOT NULL CHECK (availability_month BETWEEN 1 AND 12),
    availability_year INT NOT NULL CHECK (availability_year >= 2025),
    comment TEXT NULL, -- Max 100 chars

    -- Estado
    status VARCHAR(50) NOT NULL DEFAULT 'pending',
    -- Valores: 'pending', 'accepted', 'rejected'

    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP WITH TIME ZONE NULL,

    -- Constraint: un proveedor solo puede aplicar una vez al mismo trabajo
    UNIQUE(job_id, provider_id)
);

-- Índices
CREATE INDEX idx_applications_job ON applications(job_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_applications_provider ON applications(provider_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_applications_status ON applications(status) WHERE deleted_at IS NULL;
CREATE INDEX idx_applications_job_status ON applications(job_id, status) WHERE deleted_at IS NULL;

-- Trigger
CREATE TRIGGER update_applications_updated_at BEFORE UPDATE ON applications
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

**Notas:**
- `machinery_ids`: Array JSON de UUIDs (ej: `["uuid1", "uuid2"]`)
- `provider_pseudonym`: Generado automáticamente al aplicar
- Constraint UNIQUE evita múltiples aplicaciones del mismo proveedor al mismo trabajo

---

### 3.6 reviews (Reseñas)

Valoraciones mutuas post-trabajo.

```sql
CREATE TABLE reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Relaciones
    job_id UUID NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
    reviewer_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    reviewed_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

    -- Valoración
    rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
    comment TEXT NOT NULL, -- Obligatorio, min 20 chars, max 200 chars

    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP WITH TIME ZONE NULL,

    -- Constraint: solo una reseña por reviewer por trabajo
    UNIQUE(job_id, reviewer_id)
);

-- Índices
CREATE INDEX idx_reviews_reviewed ON reviews(reviewed_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_reviews_job ON reviews(job_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_reviews_rating ON reviews(reviewed_id, rating DESC) WHERE deleted_at IS NULL;

-- Trigger
CREATE TRIGGER update_reviews_updated_at BEFORE UPDATE ON reviews
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

**Notas:**
- `reviewer_id`: Quien deja la reseña
- `reviewed_id`: Quien recibe la reseña
- Validación de longitud de comentario en capa de aplicación
- No se permite editar reseñas (no hay UPDATE desde app)

---

### 3.7 badges (Badges de Reputación)

Catálogo de badges disponibles.

```sql
CREATE TABLE badges (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Identificador interno
    code VARCHAR(50) NOT NULL UNIQUE, -- Ej: 'verified_provider', 'expert_provider'

    -- Nombres multiidioma
    name_es VARCHAR(255) NOT NULL,
    name_ca VARCHAR(255) NOT NULL,

    -- Descripciones
    description_es TEXT NULL,
    description_ca TEXT NULL,

    -- Icono
    icon_url TEXT NULL,

    -- Orden de visualización
    display_order INT NOT NULL,

    -- Estado
    is_active BOOLEAN DEFAULT true,

    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Índice
CREATE INDEX idx_badges_active ON badges(is_active, display_order);

-- Trigger
CREATE TRIGGER update_badges_updated_at BEFORE UPDATE ON badges
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Datos iniciales (seed)
INSERT INTO badges (code, name_es, name_ca, display_order) VALUES
('verified_provider', 'Proveedor Verificado', 'Proveïdor Verificat', 1),
('expert_provider', 'Proveedor Experto', 'Proveïdor Expert', 2),
('elite_provider', 'Proveedor Elite', 'Proveïdor Elit', 3),
('frequent_requester', 'Solicitante Frecuente', 'Sol·licitant Freqüent', 4),
('punctual', 'Puntual', 'Puntual', 5);
```

---

### 3.8 user_badges (Relación N:M entre Usuarios y Badges)

```sql
CREATE TABLE user_badges (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Relaciones
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    badge_id UUID NOT NULL REFERENCES badges(id) ON DELETE CASCADE,

    -- Timestamps
    earned_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

    -- Constraint: un usuario no puede tener el mismo badge múltiples veces
    UNIQUE(user_id, badge_id)
);

-- Índices
CREATE INDEX idx_user_badges_user ON user_badges(user_id);
CREATE INDEX idx_user_badges_badge ON user_badges(badge_id);
```

**Notas:**
- Badges se asignan automáticamente por triggers o jobs en background
- No se eliminan badges una vez ganados (incentivo permanente)

---

### 3.9 notifications (Notificaciones Push)

```sql
CREATE TABLE notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Relación con usuario
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

    -- Tipo de notificación
    type VARCHAR(50) NOT NULL,
    -- Valores: 'new_job_in_area', 'application_received', 'application_accepted', 'job_status_changed'

    -- Contenido
    title_es VARCHAR(255) NOT NULL,
    title_ca VARCHAR(255) NOT NULL,
    body_es TEXT NOT NULL,
    body_ca TEXT NOT NULL,

    -- Datos adicionales (para deep linking)
    data JSONB NULL, -- Ej: {"job_id": "uuid", "application_id": "uuid"}

    -- Estado
    is_read BOOLEAN DEFAULT false,
    sent_at TIMESTAMP WITH TIME ZONE NULL,
    read_at TIMESTAMP WITH TIME ZONE NULL,

    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP WITH TIME ZONE NULL
);

-- Índices
CREATE INDEX idx_notifications_user ON notifications(user_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_notifications_user_unread ON notifications(user_id, is_read)
    WHERE is_read = false AND deleted_at IS NULL;
CREATE INDEX idx_notifications_type ON notifications(type, created_at DESC) WHERE deleted_at IS NULL;

-- Trigger
CREATE TRIGGER update_notifications_updated_at BEFORE UPDATE ON notifications
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

**Notas:**
- Solo 4 tipos de notificaciones (según análisis funcional)
- `data`: JSONB con información para deep linking (ej: abrir trabajo específico)
- Notificaciones antiguas (>30 días leídas) se borran por job automático

---

### 3.10 favorites (Favoritos)

Usuarios guardando trabajos o proveedores favoritos.

```sql
CREATE TABLE favorites (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Relación con usuario que guarda
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

    -- Tipo de favorito
    favorited_type VARCHAR(50) NOT NULL,
    -- Valores: 'job', 'user'

    -- ID del elemento favorito
    favorited_job_id UUID NULL REFERENCES jobs(id) ON DELETE CASCADE,
    favorited_user_id UUID NULL REFERENCES users(id) ON DELETE CASCADE,

    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

    -- Constraint: debe tener job_id O user_id (no ambos, no ninguno)
    CHECK (
        (favorited_type = 'job' AND favorited_job_id IS NOT NULL AND favorited_user_id IS NULL) OR
        (favorited_type = 'user' AND favorited_user_id IS NOT NULL AND favorited_job_id IS NULL)
    ),

    -- Constraint: no duplicar favoritos
    UNIQUE(user_id, favorited_type, favorited_job_id, favorited_user_id)
);

-- Índices
CREATE INDEX idx_favorites_user ON favorites(user_id);
CREATE INDEX idx_favorites_job ON favorites(favorited_job_id) WHERE favorited_job_id IS NOT NULL;
CREATE INDEX idx_favorites_user_favorited ON favorites(favorited_user_id) WHERE favorited_user_id IS NOT NULL;

-- Límite de 20 favoritos validado en capa de aplicación
```

**Notas:**
- Polymorphic relationship: puede ser trabajo O usuario
- Límite de 20 favoritos activos por usuario validado en API
- No tiene `updated_at` porque no se actualiza, solo se crea/elimina

---

## 4. TABLAS AUXILIARES

### 4.1 admin_actions (Auditoría de Acciones Admin)

```sql
CREATE TABLE admin_actions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Admin que realizó la acción
    admin_user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

    -- Acción realizada
    action_type VARCHAR(100) NOT NULL, -- Ej: 'job_status_changed', 'user_suspended'
    target_type VARCHAR(50) NOT NULL, -- 'job', 'user', 'application'
    target_id UUID NOT NULL,

    -- Datos adicionales
    old_value TEXT NULL,
    new_value TEXT NULL,
    notes TEXT NULL,

    -- Timestamp
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Índices
CREATE INDEX idx_admin_actions_admin ON admin_actions(admin_user_id);
CREATE INDEX idx_admin_actions_target ON admin_actions(target_type, target_id);
CREATE INDEX idx_admin_actions_created ON admin_actions(created_at DESC);
```

---

### 4.2 app_settings (Configuración Global)

```sql
CREATE TABLE app_settings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Clave única
    key VARCHAR(100) NOT NULL UNIQUE,

    -- Valor
    value TEXT NOT NULL,

    -- Descripción
    description TEXT NULL,

    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Trigger
CREATE TRIGGER update_app_settings_updated_at BEFORE UPDATE ON app_settings
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Datos iniciales
INSERT INTO app_settings (key, value, description) VALUES
('max_active_jobs_new_user', '2', 'Máximo de trabajos activos para usuario nuevo'),
('max_active_jobs_established', '5', 'Máximo de trabajos activos para usuario consolidado'),
('min_jobs_for_established', '3', 'Mínimo de trabajos completados para ser "consolidado"'),
('max_favorites', '20', 'Máximo de favoritos activos por usuario'),
('max_images_per_job', '5', 'Máximo de imágenes por trabajo'),
('max_images_per_machinery', '5', 'Máximo de imágenes por maquinaria');
```

---

## 5. VISTAS SQL (Para Queries Frecuentes)

### 5.1 view_user_stats (Estadísticas de Usuario)

```sql
CREATE OR REPLACE VIEW view_user_stats AS
SELECT
    u.id AS user_id,
    u.full_name,
    u.pseudonym,
    u.province,
    u.rating_avg,
    u.rating_count,
    u.completed_jobs_count,

    -- Conteo de badges
    COUNT(DISTINCT ub.badge_id) AS badges_count,

    -- Conteo de maquinaria
    (SELECT COUNT(*) FROM machinery m
     WHERE m.user_id = u.id AND m.deleted_at IS NULL) AS machinery_count,

    -- Trabajos como solicitante
    (SELECT COUNT(*) FROM jobs j
     WHERE j.requester_id = u.id AND j.deleted_at IS NULL) AS jobs_requested_count,

    -- Aplicaciones enviadas
    (SELECT COUNT(*) FROM applications a
     WHERE a.provider_id = u.id AND a.deleted_at IS NULL) AS applications_sent_count,

    -- Aplicaciones aceptadas
    (SELECT COUNT(*) FROM applications a
     WHERE a.provider_id = u.id AND a.status = 'accepted' AND a.deleted_at IS NULL) AS applications_accepted_count

FROM users u
LEFT JOIN user_badges ub ON u.id = ub.user_id
WHERE u.deleted_at IS NULL
GROUP BY u.id;
```

---

### 5.2 view_job_feed (Feed Optimizado)

```sql
CREATE OR REPLACE VIEW view_job_feed AS
SELECT
    j.id,
    j.pseudonym,
    j.title,
    j.description,
    j.category_id,
    c.name_es AS category_name_es,
    c.name_ca AS category_name_ca,
    j.province,
    j.municipality,
    j.start_month,
    j.start_year,
    j.estimated_duration,
    j.estimated_price_min,
    j.estimated_price_max,
    j.images,
    j.status,
    j.created_at,

    -- Conteo de aplicaciones
    (SELECT COUNT(*) FROM applications a
     WHERE a.job_id = j.id AND a.deleted_at IS NULL) AS applications_count,

    -- Rating del solicitante
    u.rating_avg AS requester_rating,
    u.rating_count AS requester_rating_count

FROM jobs j
INNER JOIN categories c ON j.category_id = c.id
INNER JOIN users u ON j.requester_id = u.id
WHERE j.deleted_at IS NULL
  AND j.status IN ('published', 'selecting');
```

---

## 6. FUNCIONES Y TRIGGERS ADICIONALES

### 6.1 Actualizar Rating de Usuario Automáticamente

```sql
CREATE OR REPLACE FUNCTION update_user_rating()
RETURNS TRIGGER AS $$
BEGIN
    -- Recalcular rating promedio y count del usuario revisado
    UPDATE users
    SET
        rating_avg = (
            SELECT COALESCE(AVG(rating), 0.0)
            FROM reviews
            WHERE reviewed_id = NEW.reviewed_id AND deleted_at IS NULL
        ),
        rating_count = (
            SELECT COUNT(*)
            FROM reviews
            WHERE reviewed_id = NEW.reviewed_id AND deleted_at IS NULL
        )
    WHERE id = NEW.reviewed_id;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_user_rating
AFTER INSERT ON reviews
FOR EACH ROW
EXECUTE FUNCTION update_user_rating();
```

---

### 6.2 Generar Pseudónimo Automático

```sql
CREATE OR REPLACE FUNCTION generate_pseudonym(prefix TEXT)
RETURNS TEXT AS $$
DECLARE
    random_suffix TEXT;
    pseudonym TEXT;
    exists_count INT;
BEGIN
    LOOP
        -- Generar sufijo aleatorio de 4 caracteres alfanuméricos
        random_suffix := upper(substring(md5(random()::text) from 1 for 4));
        pseudonym := prefix || '_' || random_suffix;

        -- Verificar si ya existe
        SELECT COUNT(*) INTO exists_count
        FROM jobs
        WHERE jobs.pseudonym = pseudonym;

        EXIT WHEN exists_count = 0;
    END LOOP;

    RETURN pseudonym;
END;
$$ LANGUAGE plpgsql;

-- Uso desde aplicación:
-- INSERT INTO jobs (..., pseudonym) VALUES (..., generate_pseudonym('Agricultor'));
```

---

### 6.3 Asignar Badges Automáticamente

```sql
CREATE OR REPLACE FUNCTION assign_badges_to_user(target_user_id UUID)
RETURNS VOID AS $$
DECLARE
    completed_count INT;
    user_rating DECIMAL(2,1);
BEGIN
    -- Obtener stats del usuario
    SELECT completed_jobs_count, rating_avg
    INTO completed_count, user_rating
    FROM users
    WHERE id = target_user_id;

    -- Proveedor Verificado (1+ trabajo, rating >3.5)
    IF completed_count >= 1 AND user_rating > 3.5 THEN
        INSERT INTO user_badges (user_id, badge_id)
        SELECT target_user_id, id FROM badges WHERE code = 'verified_provider'
        ON CONFLICT (user_id, badge_id) DO NOTHING;
    END IF;

    -- Proveedor Experto (5+ trabajos, rating >4.0)
    IF completed_count >= 5 AND user_rating > 4.0 THEN
        INSERT INTO user_badges (user_id, badge_id)
        SELECT target_user_id, id FROM badges WHERE code = 'expert_provider'
        ON CONFLICT (user_id, badge_id) DO NOTHING;
    END IF;

    -- Proveedor Elite (20+ trabajos, rating >4.5)
    IF completed_count >= 20 AND user_rating > 4.5 THEN
        INSERT INTO user_badges (user_id, badge_id)
        SELECT target_user_id, id FROM badges WHERE code = 'elite_provider'
        ON CONFLICT (user_id, badge_id) DO NOTHING;
    END IF;

    -- Solicitante Frecuente (3+ trabajos publicados)
    IF (SELECT COUNT(*) FROM jobs WHERE requester_id = target_user_id AND deleted_at IS NULL) >= 3 THEN
        INSERT INTO user_badges (user_id, badge_id)
        SELECT target_user_id, id FROM badges WHERE code = 'frequent_requester'
        ON CONFLICT (user_id, badge_id) DO NOTHING;
    END IF;
END;
$$ LANGUAGE plpgsql;

-- Llamar desde aplicación después de completar trabajo o recibir reseña
```

---

## 7. ÍNDICES ADICIONALES PARA PERFORMANCE

```sql
-- Búsqueda de trabajos por múltiples filtros
CREATE INDEX idx_jobs_filters ON jobs(category_id, province, start_year, start_month, status)
    WHERE deleted_at IS NULL;

-- Aplicaciones ordenadas por fecha (para solicitante viendo aplicaciones)
CREATE INDEX idx_applications_job_created ON applications(job_id, created_at DESC)
    WHERE deleted_at IS NULL;

-- Reseñas recientes de un usuario
CREATE INDEX idx_reviews_user_created ON reviews(reviewed_id, created_at DESC)
    WHERE deleted_at IS NULL;

-- Notificaciones no leídas ordenadas por fecha
CREATE INDEX idx_notifications_unread_created ON notifications(user_id, created_at DESC)
    WHERE is_read = false AND deleted_at IS NULL;
```

---

## 8. POLÍTICAS DE SEGURIDAD (Row Level Security - Opcional)

Si se habilita RLS en PostgreSQL:

```sql
-- Habilitar RLS en tablas sensibles
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- Política: usuarios solo ven sus propios datos
CREATE POLICY users_own_data ON users
    FOR ALL
    USING (id = current_setting('app.user_id')::UUID);

-- Política: trabajos visibles públicamente, pero solo owner puede editar
CREATE POLICY jobs_public_read ON jobs
    FOR SELECT
    USING (deleted_at IS NULL);

CREATE POLICY jobs_owner_write ON jobs
    FOR ALL
    USING (requester_id = current_setting('app.user_id')::UUID);

-- Políticas similares para otras tablas...
```

**Nota:** RLS se gestiona mejor desde capa de aplicación (.NET) con validaciones explícitas.

---

## 9. MIGRACIONES ENTITY FRAMEWORK CORE

Estructura de carpetas recomendada:

```
/AgriculturalServicesAPI
  /Data
    ApplicationDbContext.cs
    /Entities
      User.cs
      Job.cs
      Application.cs
      ...
    /Configurations
      UserConfiguration.cs
      JobConfiguration.cs
      ...
    /Migrations
      20251030_InitialCreate.cs
      20251031_AddBadgesSystem.cs
      ...
```

### Ejemplo de Entity: User.cs

```csharp
public class User
{
    public Guid Id { get; set; }

    // Authentication
    public string Email { get; set; } = null!;
    public string? PasswordHash { get; set; }
    public string? GoogleId { get; set; }

    // Personal data
    public string FullName { get; set; } = null!;
    public string? Phone { get; set; }
    public string? AvatarUrl { get; set; }

    // Location
    public string Province { get; set; } = null!;
    public string Municipality { get; set; } = null!;

    // Preferences
    public List<Guid>? PreferredCategories { get; set; } // Stored as JSONB
    public string Language { get; set; } = "es";

    // Reputation
    public decimal RatingAvg { get; set; } = 0.0m;
    public int RatingCount { get; set; } = 0;
    public int CompletedJobsCount { get; set; } = 0;
    public int CancelledJobsCount { get; set; } = 0;

    // Status
    public bool IsActive { get; set; } = true;
    public bool IsSuspended { get; set; } = false;
    public string? SuspensionReason { get; set; }

    // Timestamps
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? LastLoginAt { get; set; }
    public DateTime? DeletedAt { get; set; }

    // Navigation properties
    public ICollection<Job> JobsRequested { get; set; } = new List<Job>();
    public ICollection<Application> Applications { get; set; } = new List<Application>();
    public ICollection<Machinery> Machinery { get; set; } = new List<Machinery>();
    public ICollection<Review> ReviewsGiven { get; set; } = new List<Review>();
    public ICollection<Review> ReviewsReceived { get; set; } = new List<Review>();
    public ICollection<Notification> Notifications { get; set; } = new List<Notification>();
    public ICollection<UserBadge> UserBadges { get; set; } = new List<UserBadge>();
}
```

### Ejemplo de Fluent API Configuration: UserConfiguration.cs

```csharp
public class UserConfiguration : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.ToTable("users");

        builder.HasKey(u => u.Id);
        builder.Property(u => u.Id).HasDefaultValueSql("gen_random_uuid()");

        builder.Property(u => u.Email).IsRequired().HasMaxLength(255);
        builder.HasIndex(u => u.Email).IsUnique();

        builder.Property(u => u.FullName).IsRequired().HasMaxLength(255);
        builder.Property(u => u.Phone).HasMaxLength(20);

        builder.Property(u => u.RatingAvg).HasColumnType("decimal(2,1)");

        // JSONB column for PreferredCategories
        builder.Property(u => u.PreferredCategories)
            .HasColumnType("jsonb")
            .HasConversion(
                v => JsonSerializer.Serialize(v, (JsonSerializerOptions)null!),
                v => JsonSerializer.Deserialize<List<Guid>>(v, (JsonSerializerOptions)null!)
            );

        // Soft delete query filter
        builder.HasQueryFilter(u => u.DeletedAt == null);

        // Relationships
        builder.HasMany(u => u.JobsRequested)
            .WithOne(j => j.Requester)
            .HasForeignKey(j => j.RequesterId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
```

---

## 10. QUERIES DE EJEMPLO (Para Desarrollo)

### 10.1 Feed Inteligente para Proveedor

```sql
-- Trabajos relevantes para usuario específico
SELECT
    j.id,
    j.pseudonym,
    j.title,
    j.description,
    c.name_es AS category,
    j.province,
    j.municipality,
    j.estimated_price_min,
    j.estimated_price_max,
    j.created_at,
    CASE
        WHEN j.category_id = ANY(u.preferred_categories::uuid[]) THEN 3
        WHEN j.province = u.province THEN 2
        ELSE 1
    END AS relevance_score
FROM jobs j
INNER JOIN categories c ON j.category_id = c.id
CROSS JOIN users u
WHERE u.id = '...' -- User ID del proveedor
  AND j.status IN ('published', 'selecting')
  AND j.deleted_at IS NULL
  AND j.requester_id != u.id -- No mostrar sus propios trabajos
ORDER BY relevance_score DESC, j.created_at DESC
LIMIT 20;
```

---

### 10.2 Aplicaciones de un Trabajo (Para Solicitante)

```sql
SELECT
    a.id,
    a.provider_pseudonym,
    a.proposed_price,
    a.availability_month,
    a.availability_year,
    a.comment,
    a.created_at,

    -- Stats del proveedor
    u.rating_avg,
    u.rating_count,
    u.completed_jobs_count,

    -- Badges del proveedor
    (SELECT array_agg(b.name_es)
     FROM user_badges ub
     INNER JOIN badges b ON ub.badge_id = b.id
     WHERE ub.user_id = a.provider_id) AS badges,

    -- Maquinaria ofrecida
    (SELECT json_agg(json_build_object('type', m.type, 'brand', m.brand, 'model', m.model))
     FROM machinery m
     WHERE m.id = ANY(a.machinery_ids::uuid[])) AS machinery

FROM applications a
INNER JOIN users u ON a.provider_id = u.id
WHERE a.job_id = '...' -- Job ID
  AND a.deleted_at IS NULL
ORDER BY a.created_at ASC;
```

---

### 10.3 Historial de Usuario (Trabajos + Aplicaciones)

```sql
-- Trabajos publicados
SELECT
    'job_requested' AS type,
    j.id,
    j.title,
    j.status,
    j.created_at,
    (SELECT COUNT(*) FROM applications a WHERE a.job_id = j.id) AS applications_count
FROM jobs j
WHERE j.requester_id = '...' -- User ID
  AND j.deleted_at IS NULL

UNION ALL

-- Aplicaciones enviadas
SELECT
    'application_sent' AS type,
    a.id,
    j.title,
    a.status,
    a.created_at,
    NULL AS applications_count
FROM applications a
INNER JOIN jobs j ON a.job_id = j.id
WHERE a.provider_id = '...' -- User ID
  AND a.deleted_at IS NULL

ORDER BY created_at DESC;
```

---

## 11. BACKUP Y MANTENIMIENTO

### 11.1 Backup Diario Automático

```bash
# Script para cron (ejecutar diariamente a las 3 AM)
#!/bin/bash
pg_dump -U postgres -h localhost agricultural_services_db | gzip > /backups/db_$(date +%Y%m%d).sql.gz

# Retener solo últimos 30 días
find /backups -name "db_*.sql.gz" -mtime +30 -delete
```

---

### 11.2 Jobs de Mantenimiento

```sql
-- Eliminar notificaciones antiguas leídas (>30 días)
DELETE FROM notifications
WHERE is_read = true
  AND read_at < CURRENT_TIMESTAMP - INTERVAL '30 days';

-- Eliminar favoritos de trabajos completados (>90 días)
DELETE FROM favorites
WHERE favorited_type = 'job'
  AND favorited_job_id IN (
      SELECT id FROM jobs
      WHERE status = 'completed'
        AND completed_at < CURRENT_TIMESTAMP - INTERVAL '90 days'
  );

-- Reindexar tablas (ejecutar mensualmente)
REINDEX TABLE users;
REINDEX TABLE jobs;
REINDEX TABLE applications;
REINDEX TABLE reviews;
```

---

## 12. DATOS DE PRUEBA (Seed)

```sql
-- Insertar usuario de prueba
INSERT INTO users (email, password_hash, full_name, phone, province, municipality, language)
VALUES
('test@example.com', '$2a$11$...', 'Juan Pérez', '600123456', 'Barcelona', 'Igualada', 'es'),
('test2@example.com', '$2a$11$...', 'Maria García', '600654321', 'Lleida', 'Mollerussa', 'ca');

-- Insertar trabajo de prueba
INSERT INTO jobs (
    requester_id,
    pseudonym,
    category_id,
    title,
    description,
    province,
    municipality,
    start_month,
    start_year,
    estimated_duration,
    estimated_price_min,
    estimated_price_max,
    status
)
SELECT
    (SELECT id FROM users WHERE email = 'test@example.com'),
    'Agricultor_TEST1',
    (SELECT id FROM categories WHERE name_es = 'Preparación del Suelo'),
    'Arado de 10 hectáreas',
    'Necesito arar 10 hectáreas para siembra de trigo en Igualada',
    'Barcelona',
    'Igualada',
    3, -- Marzo
    2025,
    '2-3 días',
    800.00,
    1200.00,
    'published';
```

---

## 13. DIAGRAMA DE RELACIONES SIMPLIFICADO

```
users (1) ----< (N) jobs
users (1) ----< (N) applications
users (1) ----< (N) machinery
users (1) ----< (N) reviews (reviewer)
users (1) ----< (N) reviews (reviewed)
users (1) ----< (N) notifications
users (1) ----< (N) favorites
users (N) >---< (N) badges [through user_badges]

jobs (1) ----< (N) applications
jobs (N) >---- (1) categories

applications (N) >---- (1) jobs
applications (N) >---- (1) users (provider)

reviews (N) >---- (1) jobs
reviews (N) >---- (1) users (reviewer)
reviews (N) >---- (1) users (reviewed)
```

---

**FIN DEL DOCUMENTO**

Este modelo de datos SQL está listo para implementación con Entity Framework Core y soporta todas las funcionalidades definidas en el análisis funcional de la versión optimizada.
