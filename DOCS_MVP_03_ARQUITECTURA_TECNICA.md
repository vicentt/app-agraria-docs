# DOCS 03 - ARQUITECTURA TÉCNICA
## Plataforma de Gestión de Servicios Agrícolas - Versión Optimizada

**Versión:** 1.0 Optimizada
**Fecha:** 30 Octubre 2025
**Stack:** .NET 8 Web API + PostgreSQL + React Native (Expo)

---

## 1. VISIÓN ARQUITECTÓNICA

Arquitectura de 3 capas con frontend móvil, backend RESTful API y base de datos relacional.

```
┌─────────────────────────────────────────┐
│       MOBILE APP (React Native)         │
│  - iOS/Android apps (Expo)              │
│  - React Query (state + cache)          │
│  - i18next (ES/CA)                      │
└────────────────┬────────────────────────┘
                 │ HTTPS/REST
                 │
┌────────────────▼────────────────────────┐
│       BACKEND API (.NET 8)              │
│  - ASP.NET Core Web API                 │
│  - JWT Authentication                   │
│  - Entity Framework Core                │
│  - Background Jobs (Hangfire)           │
│  - Swagger/OpenAPI                      │
└────────────────┬────────────────────────┘
                 │ EF Core
                 │
┌────────────────▼────────────────────────┐
│       DATABASE (PostgreSQL 15+)         │
│  - Relational schema (3NF)              │
│  - JSONB for arrays                     │
│  - Full-text search                     │
│  - Indexes + Views                      │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│    STORAGE (Azure Blob / Cloudflare R2) │
│  - Image uploads (max 5 per entity)     │
│  - CDN for fast delivery                │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│   NOTIFICATIONS (Firebase Cloud Msg)    │
│  - Push notifications (4 types)         │
│  - Device token management              │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│    ADMIN PANEL (Web - React/Next.js)    │
│  - Dashboard for admins                 │
│  - Job coordination                     │
│  - User management                      │
└─────────────────────────────────────────┘
```

---

## 2. STACK TECNOLÓGICO DETALLADO

### 2.1 BACKEND (.NET 8)

#### Framework Principal
- **.NET 8 SDK** (LTS - soporte hasta nov 2026)
- **ASP.NET Core 8.0** (Web API)
- **Entity Framework Core 8.0** (ORM)
- **C# 12**

#### Librerías Clave
```xml
<!-- AgriculturalServicesAPI.csproj -->
<ItemGroup>
    <!-- Database -->
    <PackageReference Include="Npgsql.EntityFrameworkCore.PostgreSQL" Version="8.0.0" />
    <PackageReference Include="Microsoft.EntityFrameworkCore.Design" Version="8.0.0" />

    <!-- Authentication -->
    <PackageReference Include="Microsoft.AspNetCore.Authentication.JwtBearer" Version="8.0.0" />
    <PackageReference Include="Microsoft.AspNetCore.Authentication.Google" Version="8.0.0" />
    <PackageReference Include="System.IdentityModel.Tokens.Jwt" Version="7.1.0" />

    <!-- Password hashing -->
    <PackageReference Include="BCrypt.Net-Next" Version="4.0.3" />

    <!-- Background jobs -->
    <PackageReference Include="Hangfire.Core" Version="1.8.9" />
    <PackageReference Include="Hangfire.PostgreSql" Version="1.20.8" />

    <!-- File upload -->
    <PackageReference Include="Azure.Storage.Blobs" Version="12.19.1" />
    <!-- OR -->
    <PackageReference Include="Cloudflare.Workers" Version="1.0.0" />

    <!-- Push notifications -->
    <PackageReference Include="FirebaseAdmin" Version="2.4.0" />

    <!-- Validation -->
    <PackageReference Include="FluentValidation.AspNetCore" Version="11.3.0" />

    <!-- API documentation -->
    <PackageReference Include="Swashbuckle.AspNetCore" Version="6.5.0" />

    <!-- Logging -->
    <PackageReference Include="Serilog.AspNetCore" Version="8.0.0" />
    <PackageReference Include="Serilog.Sinks.PostgreSQL" Version="2.3.0" />

    <!-- Rate limiting -->
    <PackageReference Include="AspNetCoreRateLimit" Version="5.0.0" />

    <!-- CORS -->
    <PackageReference Include="Microsoft.AspNetCore.Cors" Version="2.2.0" />
</ItemGroup>
```

#### Estructura de Carpetas Backend

```
/AgriculturalServicesAPI
│
├── /Controllers                 # API endpoints
│   ├── AuthController.cs       # Login, register, refresh token
│   ├── UsersController.cs      # User profile, stats
│   ├── JobsController.cs       # CRUD jobs, feed
│   ├── ApplicationsController.cs # Apply, accept, reject
│   ├── MachineryController.cs  # CRUD machinery
│   ├── ReviewsController.cs    # Create review, list reviews
│   ├── NotificationsController.cs # List, mark read
│   ├── FavoritesController.cs  # Add, remove, list
│   └── AdminController.cs      # Admin panel operations
│
├── /Data                        # Database context
│   ├── ApplicationDbContext.cs # EF Core context
│   ├── /Entities               # Domain models
│   │   ├── User.cs
│   │   ├── Job.cs
│   │   ├── Application.cs
│   │   ├── Machinery.cs
│   │   ├── Category.cs
│   │   ├── Review.cs
│   │   ├── Badge.cs
│   │   ├── UserBadge.cs
│   │   ├── Notification.cs
│   │   ├── Favorite.cs
│   │   ├── AdminAction.cs
│   │   └── AppSetting.cs
│   ├── /Configurations         # Fluent API configs
│   │   ├── UserConfiguration.cs
│   │   ├── JobConfiguration.cs
│   │   └── ...
│   └── /Migrations             # EF migrations
│
├── /DTOs                        # Data Transfer Objects
│   ├── /Requests
│   │   ├── RegisterRequest.cs
│   │   ├── LoginRequest.cs
│   │   ├── CreateJobRequest.cs
│   │   ├── ApplyToJobRequest.cs
│   │   └── ...
│   └── /Responses
│       ├── AuthResponse.cs
│       ├── UserResponse.cs
│       ├── JobResponse.cs
│       ├── ApplicationResponse.cs
│       └── ...
│
├── /Services                    # Business logic
│   ├── /Interfaces
│   │   ├── IAuthService.cs
│   │   ├── IJobService.cs
│   │   ├── IUserService.cs
│   │   └── ...
│   ├── AuthService.cs
│   ├── JobService.cs
│   ├── UserService.cs
│   ├── NotificationService.cs
│   ├── FileUploadService.cs
│   ├── PseudonymService.cs
│   └── BadgeService.cs
│
├── /Repositories                # Data access layer
│   ├── /Interfaces
│   │   ├── IUserRepository.cs
│   │   ├── IJobRepository.cs
│   │   └── ...
│   ├── UserRepository.cs
│   ├── JobRepository.cs
│   ├── ApplicationRepository.cs
│   └── ...
│
├── /Middleware                  # Custom middleware
│   ├── ErrorHandlingMiddleware.cs
│   ├── RequestLoggingMiddleware.cs
│   └── JwtMiddleware.cs
│
├── /Validators                  # FluentValidation
│   ├── CreateJobValidator.cs
│   ├── RegisterValidator.cs
│   └── ...
│
├── /BackgroundJobs              # Hangfire jobs
│   ├── AssignBadgesJob.cs
│   ├── CleanOldNotificationsJob.cs
│   └── SendPushNotificationsJob.cs
│
├── /Helpers                     # Utilities
│   ├── JwtHelper.cs
│   ├── PasswordHasher.cs
│   ├── PseudonymGenerator.cs
│   └── PriceEstimator.cs
│
├── /Filters                     # Action filters
│   ├── AdminAuthFilter.cs
│   └── ValidateModelFilter.cs
│
├── appsettings.json             # Configuration
├── appsettings.Development.json
├── appsettings.Production.json
├── Program.cs                   # Entry point
└── Startup.cs                   # Service configuration
```

---

### 2.2 FRONTEND MÓVIL (React Native + Expo)

#### Framework Principal
- **React Native 0.74+**
- **Expo SDK 51+**
- **TypeScript 5.3+**

#### Librerías Clave
```json
{
  "dependencies": {
    // Core
    "react": "18.2.0",
    "react-native": "0.74.0",
    "expo": "~51.0.0",

    // Navigation
    "@react-navigation/native": "^6.1.9",
    "@react-navigation/native-stack": "^6.9.17",
    "@react-navigation/bottom-tabs": "^6.5.11",
    "react-native-screens": "~3.31.1",
    "react-native-safe-area-context": "4.10.1",

    // State Management + Data Fetching
    "@tanstack/react-query": "^5.17.0",
    "@tanstack/react-query-devtools": "^5.17.0",
    "axios": "^1.6.5",
    "zustand": "^4.5.0",

    // Authentication
    "@react-native-google-signin/google-signin": "^11.0.1",
    "@react-native-async-storage/async-storage": "1.23.1",
    "expo-secure-store": "~13.0.1",

    // UI Components
    "react-native-paper": "^5.12.1",
    "react-native-vector-icons": "^10.0.3",
    "@react-native-picker/picker": "2.7.5",

    // Images
    "expo-image-picker": "~15.0.5",
    "expo-image": "~1.12.9",
    "react-native-fast-image": "^8.6.3",

    // Forms
    "react-hook-form": "^7.49.3",
    "@hookform/resolvers": "^3.3.4",
    "zod": "^3.22.4",

    // Internationalization
    "i18next": "^23.7.16",
    "react-i18next": "^14.0.1",
    "expo-localization": "~15.0.3",

    // Push Notifications
    "expo-notifications": "~0.28.1",
    "expo-device": "~6.0.2",

    // Utilities
    "date-fns": "^3.2.0",
    "lodash": "^4.17.21"
  },
  "devDependencies": {
    "@babel/core": "^7.23.7",
    "@types/react": "~18.2.45",
    "@types/react-native": "^0.73.0",
    "typescript": "^5.3.3",
    "eslint": "^8.56.0",
    "prettier": "^3.1.1"
  }
}
```

#### Estructura de Carpetas Frontend

```
/agricultural-services-app
│
├── /src
│   ├── /api                     # API client
│   │   ├── client.ts           # Axios instance
│   │   ├── /endpoints
│   │   │   ├── auth.ts
│   │   │   ├── jobs.ts
│   │   │   ├── applications.ts
│   │   │   ├── users.ts
│   │   │   └── ...
│   │   └── /types              # TypeScript types from backend
│   │       ├── User.ts
│   │       ├── Job.ts
│   │       └── ...
│   │
│   ├── /screens                # Screen components
│   │   ├── /Auth
│   │   │   ├── LoginScreen.tsx
│   │   │   ├── RegisterScreen.tsx
│   │   │   └── OnboardingScreen.tsx
│   │   ├── /Home
│   │   │   ├── FeedScreen.tsx
│   │   │   └── JobDetailsScreen.tsx
│   │   ├── /Jobs
│   │   │   ├── CreateJobScreen.tsx
│   │   │   ├── MyJobsScreen.tsx
│   │   │   └── ApplicationsListScreen.tsx
│   │   ├── /Profile
│   │   │   ├── ProfileScreen.tsx
│   │   │   ├── EditProfileScreen.tsx
│   │   │   └── MachineryScreen.tsx
│   │   └── /Admin
│   │       └── AdminDashboardScreen.tsx
│   │
│   ├── /components             # Reusable components
│   │   ├── /common
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Dropdown.tsx
│   │   │   └── ImageUploader.tsx
│   │   ├── /jobs
│   │   │   ├── JobCard.tsx
│   │   │   ├── JobFilters.tsx
│   │   │   └── PriceEstimator.tsx
│   │   ├── /applications
│   │   │   ├── ApplicationCard.tsx
│   │   │   └── ApplyModal.tsx
│   │   └── /profile
│   │       ├── BadgeList.tsx
│   │       ├── RatingStars.tsx
│   │       └── MachineryCard.tsx
│   │
│   ├── /hooks                  # Custom React hooks
│   │   ├── useAuth.ts
│   │   ├── useJobs.ts
│   │   ├── useApplications.ts
│   │   ├── useNotifications.ts
│   │   └── useImageUpload.ts
│   │
│   ├── /stores                 # Zustand stores
│   │   ├── authStore.ts
│   │   └── settingsStore.ts
│   │
│   ├── /navigation             # Navigation config
│   │   ├── AppNavigator.tsx
│   │   ├── AuthNavigator.tsx
│   │   └── MainTabNavigator.tsx
│   │
│   ├── /i18n                   # Translations
│   │   ├── index.ts
│   │   ├── es.json
│   │   └── ca.json
│   │
│   ├── /utils                  # Utilities
│   │   ├── validators.ts
│   │   ├── formatters.ts
│   │   └── constants.ts
│   │
│   ├── /theme                  # Design system
│   │   ├── colors.ts
│   │   ├── typography.ts
│   │   └── spacing.ts
│   │
│   └── /types                  # TypeScript types
│       ├── index.ts
│       └── navigation.ts
│
├── /assets
│   ├── /images
│   ├── /icons
│   └── /fonts
│
├── App.tsx                      # Root component
├── app.json                     # Expo config
├── babel.config.js
├── tsconfig.json
└── package.json
```

---

### 2.3 BASE DE DATOS (PostgreSQL)

#### Configuración Recomendada

**PostgreSQL 15.5+** en servidor dedicado o managed service (AWS RDS, Azure Database, DigitalOcean).

**Configuración de producción (postgresql.conf):**
```conf
# Conexiones
max_connections = 100

# Memoria
shared_buffers = 256MB
effective_cache_size = 1GB
maintenance_work_mem = 64MB
work_mem = 4MB

# WAL (Write-Ahead Logging)
wal_level = replica
max_wal_size = 1GB
min_wal_size = 80MB

# Query tuning
random_page_cost = 1.1  # Para SSD
effective_io_concurrency = 200

# Logging
log_statement = 'mod'  # Log todas las modificaciones
log_duration = on
log_line_prefix = '%t [%p]: user=%u,db=%d,app=%a,client=%h '
```

**Connection String (.NET):**
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Host=localhost;Port=5432;Database=agricultural_services_db;Username=api_user;Password=***;Pooling=true;Minimum Pool Size=5;Maximum Pool Size=20;"
  }
}
```

---

### 2.4 ALMACENAMIENTO DE ARCHIVOS

#### Opción 1: Azure Blob Storage (Recomendado)

**Configuración:**
```json
{
  "AzureStorage": {
    "ConnectionString": "DefaultEndpointsProtocol=https;AccountName=***;AccountKey=***",
    "ContainerName": "agricultural-images",
    "CdnEndpoint": "https://cdn.agriculturalservices.com"
  }
}
```

**Servicio .NET:**
```csharp
public class AzureBlobStorageService : IFileUploadService
{
    private readonly BlobServiceClient _blobServiceClient;
    private readonly string _containerName;

    public async Task<string> UploadImageAsync(Stream imageStream, string fileName)
    {
        var containerClient = _blobServiceClient.GetBlobContainerClient(_containerName);
        var blobClient = containerClient.GetBlobClient($"{Guid.NewGuid()}-{fileName}");

        await blobClient.UploadAsync(imageStream, new BlobHttpHeaders {
            ContentType = "image/jpeg"
        });

        return blobClient.Uri.ToString();
    }
}
```

#### Opción 2: Cloudflare R2 (Alternativa económica)

Compatible con S3 API, sin costos de egress.

```csharp
var s3Client = new AmazonS3Client(
    accessKey,
    secretKey,
    new AmazonS3Config {
        ServiceURL = "https://<account-id>.r2.cloudflarestorage.com"
    }
);
```

---

### 2.5 NOTIFICACIONES PUSH

#### Firebase Cloud Messaging (FCM)

**Backend (.NET):**
```csharp
public class FirebaseNotificationService
{
    private readonly FirebaseMessaging _messaging;

    public async Task SendNotificationAsync(string deviceToken, string title, string body, Dictionary<string, string> data)
    {
        var message = new Message()
        {
            Token = deviceToken,
            Notification = new Notification
            {
                Title = title,
                Body = body
            },
            Data = data,
            Android = new AndroidConfig
            {
                Priority = Priority.High
            },
            Apns = new ApnsConfig
            {
                Headers = new Dictionary<string, string>
                {
                    { "apns-priority", "10" }
                }
            }
        };

        await _messaging.SendAsync(message);
    }
}
```

**Frontend (React Native):**
```typescript
import * as Notifications from 'expo-notifications';

// Registrar device token
export const registerForPushNotifications = async () => {
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== 'granted') return null;

  const token = (await Notifications.getExpoPushTokenAsync()).data;

  // Enviar token al backend
  await api.post('/users/device-token', { token });

  return token;
};

// Listener de notificaciones
Notifications.addNotificationReceivedListener(notification => {
  console.log('Notification received:', notification);
});
```

---

## 3. PATRONES ARQUITECTÓNICOS

### 3.1 Backend: Clean Architecture + Repository Pattern

```
Presentation Layer (Controllers)
        ↓
Application Layer (Services)
        ↓
Domain Layer (Entities)
        ↓
Infrastructure Layer (Repositories, DB Context)
```

**Ejemplo de flujo completo:**

1. **Controller** recibe request HTTP
```csharp
[HttpPost("jobs")]
public async Task<IActionResult> CreateJob([FromBody] CreateJobRequest request)
{
    var userId = GetUserIdFromToken();
    var job = await _jobService.CreateJobAsync(userId, request);
    return CreatedAtAction(nameof(GetJob), new { id = job.Id }, job);
}
```

2. **Service** ejecuta lógica de negocio
```csharp
public async Task<JobResponse> CreateJobAsync(Guid userId, CreateJobRequest request)
{
    // Validar usuario puede crear trabajo
    await ValidateUserCanCreateJob(userId);

    // Generar pseudónimo
    var pseudonym = _pseudonymService.Generate("Agricultor");

    // Estimar precio
    var priceEstimate = _priceEstimator.Estimate(request);

    // Crear entidad
    var job = new Job {
        RequesterId = userId,
        Pseudonym = pseudonym,
        // ... resto de campos
    };

    // Guardar
    await _jobRepository.AddAsync(job);
    await _jobRepository.SaveChangesAsync();

    // Notificar proveedores cercanos
    await _notificationService.NotifyProvidersOfNewJob(job);

    return _mapper.Map<JobResponse>(job);
}
```

3. **Repository** accede a datos
```csharp
public class JobRepository : IJobRepository
{
    private readonly ApplicationDbContext _context;

    public async Task AddAsync(Job job)
    {
        await _context.Jobs.AddAsync(job);
    }

    public async Task<Job?> GetByIdAsync(Guid id)
    {
        return await _context.Jobs
            .Include(j => j.Requester)
            .Include(j => j.Category)
            .FirstOrDefaultAsync(j => j.Id == id);
    }
}
```

---

### 3.2 Frontend: Component-Based + React Query

**React Query para data fetching:**
```typescript
// hooks/useJobs.ts
export const useJobFeed = (filters: JobFilters) => {
  return useQuery({
    queryKey: ['jobs', 'feed', filters],
    queryFn: () => api.jobs.getFeed(filters),
    staleTime: 60000, // 1 minuto
    refetchOnWindowFocus: true
  });
};

export const useCreateJob = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (jobData: CreateJobRequest) => api.jobs.create(jobData),
    onSuccess: () => {
      // Invalidar cache del feed
      queryClient.invalidateQueries({ queryKey: ['jobs', 'feed'] });
    }
  });
};
```

**Uso en componente:**
```typescript
const FeedScreen = () => {
  const { data: jobs, isLoading, error } = useJobFeed({ province: 'Barcelona' });
  const createJob = useCreateJob();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorView error={error} />;

  return (
    <FlatList
      data={jobs}
      renderItem={({ item }) => <JobCard job={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};
```

---

### 3.3 Autenticación: JWT + Refresh Token

**Backend (.NET):**
```csharp
public class JwtHelper
{
    public TokenPair GenerateTokens(User user)
    {
        // Access token (15 min)
        var accessToken = new JwtSecurityToken(
            claims: new[] {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim("is_admin", user.IsAdmin.ToString())
            },
            expires: DateTime.UtcNow.AddMinutes(15),
            signingCredentials: _credentials
        );

        // Refresh token (7 días)
        var refreshToken = new JwtSecurityToken(
            claims: new[] { new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()) },
            expires: DateTime.UtcNow.AddDays(7),
            signingCredentials: _credentials
        );

        return new TokenPair {
            AccessToken = new JwtSecurityTokenHandler().WriteToken(accessToken),
            RefreshToken = new JwtSecurityTokenHandler().WriteToken(refreshToken)
        };
    }
}
```

**Frontend (React Native):**
```typescript
// stores/authStore.ts
export const useAuthStore = create<AuthState>((set, get) => ({
  accessToken: null,
  refreshToken: null,

  login: async (email: string, password: string) => {
    const { accessToken, refreshToken } = await api.auth.login(email, password);

    // Guardar en secure storage
    await SecureStore.setItemAsync('access_token', accessToken);
    await SecureStore.setItemAsync('refresh_token', refreshToken);

    set({ accessToken, refreshToken });
  },

  refreshAccessToken: async () => {
    const { refreshToken } = get();
    const { accessToken } = await api.auth.refresh(refreshToken);

    await SecureStore.setItemAsync('access_token', accessToken);
    set({ accessToken });
  }
}));
```

**Axios interceptor para refresh automático:**
```typescript
api.interceptors.response.use(
  response => response,
  async error => {
    if (error.response?.status === 401 && !error.config._retry) {
      error.config._retry = true;

      await useAuthStore.getState().refreshAccessToken();

      // Reintentar request original
      error.config.headers.Authorization = `Bearer ${useAuthStore.getState().accessToken}`;
      return api.request(error.config);
    }
    return Promise.reject(error);
  }
);
```

---

## 4. ENDPOINTS API PRINCIPALES

### 4.1 Autenticación

```
POST   /api/auth/register              # Registro email/password
POST   /api/auth/login                 # Login
POST   /api/auth/google                # Login con Google
POST   /api/auth/refresh               # Refresh access token
POST   /api/auth/logout                # Logout (invalidar tokens)
```

### 4.2 Usuarios

```
GET    /api/users/me                   # Perfil actual
PUT    /api/users/me                   # Actualizar perfil
GET    /api/users/{id}/public          # Perfil público (post-selección)
GET    /api/users/me/stats             # Estadísticas propias
POST   /api/users/device-token         # Registrar token FCM
```

### 4.3 Trabajos

```
GET    /api/jobs                       # Feed inteligente (con filtros)
POST   /api/jobs                       # Crear trabajo
GET    /api/jobs/{id}                  # Detalle trabajo
PUT    /api/jobs/{id}                  # Editar trabajo (solo si no tiene aplicaciones)
DELETE /api/jobs/{id}                  # Cancelar trabajo
GET    /api/jobs/me                    # Mis trabajos publicados
GET    /api/jobs/{id}/applications     # Aplicaciones de un trabajo
```

### 4.4 Aplicaciones

```
POST   /api/applications               # Aplicar a trabajo
GET    /api/applications/me            # Mis aplicaciones enviadas
POST   /api/applications/{id}/accept   # Aceptar aplicación (solo requester)
POST   /api/applications/{id}/reject   # Rechazar aplicación
```

### 4.5 Maquinaria

```
GET    /api/machinery                  # Mi maquinaria
POST   /api/machinery                  # Añadir máquina
PUT    /api/machinery/{id}             # Editar máquina
DELETE /api/machinery/{id}             # Eliminar máquina
```

### 4.6 Reseñas

```
POST   /api/reviews                    # Crear reseña
GET    /api/reviews/user/{id}          # Reseñas de un usuario
```

### 4.7 Notificaciones

```
GET    /api/notifications              # Lista de notificaciones
PUT    /api/notifications/{id}/read    # Marcar como leída
PUT    /api/notifications/read-all     # Marcar todas leídas
```

### 4.8 Favoritos

```
GET    /api/favorites                  # Mis favoritos
POST   /api/favorites                  # Añadir favorito
DELETE /api/favorites/{id}             # Eliminar favorito
```

### 4.9 Categorías

```
GET    /api/categories                 # Lista de categorías
```

### 4.10 Admin

```
GET    /api/admin/jobs/assigned        # Trabajos asignados pendientes
PUT    /api/admin/jobs/{id}/status     # Cambiar estado trabajo
GET    /api/admin/users                # Lista usuarios
PUT    /api/admin/users/{id}/suspend   # Suspender usuario
GET    /api/admin/stats                # Dashboard stats
```

---

## 5. CONFIGURACIÓN Y DESPLIEGUE

### 5.1 Variables de Entorno (.NET)

**appsettings.Production.json:**
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Host=production-db.postgres.database.azure.com;Database=agricultural_services;Username=***;Password=***"
  },
  "JwtSettings": {
    "SecretKey": "***",
    "Issuer": "https://api.agriculturalservices.com",
    "Audience": "agricultural-services-app",
    "AccessTokenExpirationMinutes": 15,
    "RefreshTokenExpirationDays": 7
  },
  "AzureStorage": {
    "ConnectionString": "***",
    "ContainerName": "images",
    "CdnEndpoint": "https://cdn.agriculturalservices.com"
  },
  "GoogleAuth": {
    "ClientId": "***.apps.googleusercontent.com",
    "ClientSecret": "***"
  },
  "Firebase": {
    "ProjectId": "agricultural-services",
    "PrivateKey": "***"
  },
  "RateLimiting": {
    "EnableEndpointRateLimiting": true,
    "GeneralRules": [{
      "Endpoint": "*",
      "Period": "1m",
      "Limit": 100
    }]
  },
  "Serilog": {
    "MinimumLevel": "Information",
    "WriteTo": [{
      "Name": "PostgreSQL",
      "Args": {
        "connectionString": "***",
        "tableName": "Logs"
      }
    }]
  }
}
```

---

### 5.2 Configuración React Native (Expo)

**app.json:**
```json
{
  "expo": {
    "name": "Agricultural Services",
    "slug": "agricultural-services",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.agriculturalservices.app",
      "buildNumber": "1.0.0"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "package": "com.agriculturalservices.app",
      "versionCode": 1,
      "permissions": [
        "CAMERA",
        "READ_EXTERNAL_STORAGE",
        "WRITE_EXTERNAL_STORAGE",
        "NOTIFICATIONS"
      ]
    },
    "extra": {
      "apiUrl": "https://api.agriculturalservices.com",
      "googleClientId": "***.apps.googleusercontent.com",
      "eas": {
        "projectId": "***"
      }
    },
    "plugins": [
      "@react-native-google-signin/google-signin",
      "expo-notifications"
    ]
  }
}
```

**Acceder a variables:**
```typescript
import Constants from 'expo-constants';

export const API_URL = Constants.expoConfig?.extra?.apiUrl || 'http://localhost:5000';
```

---

### 5.3 Docker (Backend)

**Dockerfile:**
```dockerfile
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["AgriculturalServicesAPI.csproj", "./"]
RUN dotnet restore
COPY . .
RUN dotnet build -c Release -o /app/build

FROM build AS publish
RUN dotnet publish -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "AgriculturalServicesAPI.dll"]
```

**docker-compose.yml:**
```yaml
version: '3.8'

services:
  api:
    build: .
    ports:
      - "5000:80"
    environment:
      - ASPNETCORE_ENVIRONMENT=Production
      - ConnectionStrings__DefaultConnection=Host=db;Database=agricultural_services;Username=postgres;Password=***
    depends_on:
      - db

  db:
    image: postgres:15
    environment:
      POSTGRES_DB: agricultural_services
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: ***
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

volumes:
  postgres_data:
```

---

### 5.4 CI/CD Pipeline (GitHub Actions)

**Backend (.NET):**
```yaml
# .github/workflows/backend-deploy.yml
name: Deploy Backend

on:
  push:
    branches: [main]
    paths:
      - 'backend/**'

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3

    - name: Setup .NET
      uses: actions/setup-dotnet@v3
      with:
        dotnet-version: 8.0.x

    - name: Restore dependencies
      run: dotnet restore
      working-directory: ./backend

    - name: Build
      run: dotnet build --no-restore -c Release
      working-directory: ./backend

    - name: Test
      run: dotnet test --no-build -c Release
      working-directory: ./backend

    - name: Publish
      run: dotnet publish -c Release -o ./publish
      working-directory: ./backend

    - name: Deploy to Azure App Service
      uses: azure/webapps-deploy@v2
      with:
        app-name: 'agricultural-services-api'
        publish-profile: ${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}
        package: './backend/publish'
```

**Frontend (Expo EAS):**
```yaml
# .github/workflows/frontend-build.yml
name: Build Mobile App

on:
  push:
    branches: [main]
    paths:
      - 'mobile/**'

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3

    - name: Setup Node
      uses: actions/setup-node@v3
      with:
        node-version: 18

    - name: Install dependencies
      run: npm install
      working-directory: ./mobile

    - name: Setup Expo
      uses: expo/expo-github-action@v8
      with:
        expo-version: latest
        token: ${{ secrets.EXPO_TOKEN }}

    - name: Build Android APK
      run: eas build --platform android --profile production --non-interactive
      working-directory: ./mobile
```

---

## 6. SEGURIDAD

### 6.1 Autenticación y Autorización

- **JWT tokens** con expiración corta (15 min access, 7 días refresh)
- **Password hashing** con BCrypt (cost factor 11)
- **Rate limiting** (100 req/min por usuario, 1000 req/min global)
- **HTTPS obligatorio** en producción
- **CORS configurado** solo para dominios autorizados

### 6.2 Validación de Inputs

- **FluentValidation** en backend para todos los DTOs
- **Zod schemas** en frontend
- **Sanitización SQL** automática con EF Core (previene SQL injection)
- **XSS protection** en campos de texto libre

### 6.3 Protección de Datos Sensibles

- **Datos personales cifrados** en DB (emails, teléfonos)
- **Pseudónimos** para interacciones anónimas
- **Azure Key Vault** para secrets en producción
- **Logs sin información sensible** (no passwords, no tokens completos)

### 6.4 GDPR Compliance

- **Soft delete** en todas las tablas (no eliminación física)
- **Endpoint de exportación de datos** personales
- **Endpoint de eliminación de cuenta** (soft delete + anonimización)
- **Consentimientos** registrados en tabla `user_consents`

---

## 7. MONITORIZACIÓN Y LOGGING

### 7.1 Application Insights (Azure)

```csharp
// Program.cs
builder.Services.AddApplicationInsightsTelemetry(options => {
    options.ConnectionString = builder.Configuration["ApplicationInsights:ConnectionString"];
});
```

**Métricas clave:**
- Request duration (P95 < 500ms)
- Error rate (<1%)
- Availability (>99.5%)
- Database query duration

### 7.2 Serilog (Structured Logging)

```csharp
Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Information()
    .WriteTo.Console()
    .WriteTo.PostgreSQL(
        connectionString,
        tableName: "Logs",
        needAutoCreateTable: true
    )
    .CreateLogger();
```

**Logs importantes:**
- Errores 500 con stack traces
- Aplicaciones aceptadas (coordinación admin)
- Cambios de estado de trabajos
- Login/logout de usuarios
- Rate limiting triggers

### 7.3 Health Checks

```csharp
builder.Services.AddHealthChecks()
    .AddNpgSql(connectionString, name: "database")
    .AddAzureBlobStorage(storageConnectionString, name: "blob-storage")
    .AddUrlGroup(new Uri("https://fcm.googleapis.com"), name: "fcm");

app.MapHealthChecks("/health");
```

---

## 8. PERFORMANCE

### 8.1 Backend Optimizations

- **EF Core eager loading** con `.Include()` para evitar N+1 queries
- **Paginación** en todos los endpoints de lista (20 items por página)
- **Caché en memoria** (IMemoryCache) para categorías y configuraciones
- **Async/await** en todos los métodos I/O
- **Connection pooling** en PostgreSQL

### 8.2 Frontend Optimizations

- **React Query cache** (stale time 1 min, cache time 5 min)
- **Lazy loading** de pantallas con `React.lazy()`
- **Imágenes optimizadas** con `expo-image` (cache + progressive loading)
- **FlatList virtualization** para listas largas
- **Debouncing** en búsquedas (500ms)

### 8.3 Database Optimizations

- **Índices compuestos** para queries frecuentes
- **VACUUM ANALYZE** semanal
- **Particionamiento** de tabla `notifications` por fecha (mensual)
- **Materialized views** para dashboard admin

---

## 9. TESTING

### 9.1 Backend Tests

**Unit Tests (xUnit):**
```csharp
public class JobServiceTests
{
    [Fact]
    public async Task CreateJob_ValidData_ReturnsJob()
    {
        // Arrange
        var service = new JobService(_mockRepo.Object, _mockNotificationService.Object);
        var request = new CreateJobRequest { /* ... */ };

        // Act
        var result = await service.CreateJobAsync(userId, request);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(request.Title, result.Title);
    }
}
```

**Integration Tests:**
```csharp
public class JobsControllerIntegrationTests : IClassFixture<WebApplicationFactory<Program>>
{
    [Fact]
    public async Task GET_Jobs_ReturnsOkWithJobs()
    {
        // Arrange
        var client = _factory.CreateClient();

        // Act
        var response = await client.GetAsync("/api/jobs");

        // Assert
        response.EnsureSuccessStatusCode();
        var jobs = await response.Content.ReadFromJsonAsync<List<JobResponse>>();
        Assert.NotEmpty(jobs);
    }
}
```

### 9.2 Frontend Tests

**Component Tests (Jest + React Native Testing Library):**
```typescript
describe('JobCard', () => {
  it('renders job details correctly', () => {
    const job = { title: 'Arado 10 ha', province: 'Barcelona' };
    const { getByText } = render(<JobCard job={job} />);

    expect(getByText('Arado 10 ha')).toBeTruthy();
    expect(getByText('Barcelona')).toBeTruthy();
  });
});
```

---

## 10. ROADMAP DE IMPLEMENTACIÓN

### Fase 1: Setup Inicial (Semana 1)
- [ ] Crear proyecto .NET 8 Web API
- [ ] Configurar PostgreSQL + EF Core
- [ ] Crear proyecto React Native Expo
- [ ] Configurar CI/CD básico

### Fase 2: Autenticación (Semana 2)
- [ ] Registro/login email/password
- [ ] Google OAuth
- [ ] JWT + refresh tokens
- [ ] Onboarding 3 pasos

### Fase 3: Core Features (Semanas 3-6)
- [ ] CRUD trabajos
- [ ] Feed inteligente
- [ ] Sistema de aplicaciones anónimas
- [ ] Maquinaria
- [ ] Notificaciones push

### Fase 4: Reputación y Admin (Semanas 7-8)
- [ ] Sistema de reseñas
- [ ] Badges automáticos
- [ ] Panel de admin web
- [ ] Coordinación de trabajos

### Fase 5: Polish y Testing (Semana 9)
- [ ] Tests unitarios + integración
- [ ] Optimización performance
- [ ] Testing en dispositivos reales
- [ ] Documentación API

### Fase 6: Deploy (Semana 10)
- [ ] Deploy backend a Azure
- [ ] Deploy DB a managed PostgreSQL
- [ ] Build apps con EAS
- [ ] Publicación en App Store + Google Play

---

**FIN DEL DOCUMENTO**

Esta arquitectura técnica está lista para implementar la versión optimizada con .NET 8, PostgreSQL y React Native.
