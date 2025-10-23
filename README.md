# Events Management System - Frontend

Sistema de gestión de eventos construido con React, TypeScript y Clean Architecture.

## 🚀 Stack Tecnológico

### Core
- **React 19.1.1** - Biblioteca de UI
- **TypeScript 5.9.3** - Tipado estático
- **Vite 7.1.7** - Build tool y dev server

### Estado y Datos
- **Redux Toolkit 2.9.1** - Gestión de estado global
- **React Redux 9.2.0** - Conectar React con Redux
- **Axios 1.12.2** - Cliente HTTP
- **TanStack Query 5.90.5** - Cache y sincronización de datos del servidor

### Navegación y Rutas
- **React Router DOM 7.9.4** - Enrutamiento

### Formularios y Validación
- **React Hook Form 7.65.0** - Gestión de formularios
- **Zod 4.1.12** - Validación de schemas
- **@hookform/resolvers 5.2.2** - Integración RHF con Zod
- **Formik 2.4.6** - Alternativa para formularios

### UI y Estilos
- **TailwindCSS 4.1.15** - Framework CSS utility-first
- **React Icons 5.5.0** - Iconos
- **React Toastify 11.0.5** - Notificaciones

### Utilidades
- **date-fns 4.1.0** - Manejo de fechas

## 📁 Estructura del Proyecto (Clean Architecture)

```
frontend_y/
├── src/
│   ├── config/                      # Configuración y adaptadores
│   │   ├── axios.adapter.ts         # Cliente HTTP configurado
│   │   ├── env.ts                   # Variables de entorno
│   │   └── validators.ts            # Validadores reutilizables
│   │
│   ├── core/                        # DOMAIN LAYER
│   │   ├── entities/                # Entidades del dominio
│   │   │   ├── user.entity.ts
│   │   │   ├── role.entity.ts
│   │   │   ├── institution.entity.ts
│   │   │   ├── branch.entity.ts
│   │   │   ├── room.entity.ts
│   │   │   ├── group.entity.ts
│   │   │   ├── event.entity.ts
│   │   │   └── occurrence.entity.ts
│   │   │
│   │   ├── dtos/                    # Data Transfer Objects con validación Zod
│   │   │   ├── auth/
│   │   │   │   ├── login.dto.ts
│   │   │   │   └── register.dto.ts
│   │   │   ├── user/
│   │   │   ├── role/
│   │   │   ├── institution/
│   │   │   ├── branch/
│   │   │   ├── room/
│   │   │   ├── group/
│   │   │   ├── event/
│   │   │   └── occurrence/
│   │   │
│   │   ├── repositories/            # Interfaces de repositorios
│   │   │   ├── auth.repository.ts
│   │   │   └── user.repository.ts
│   │   │
│   │   └── use-cases/               # Casos de uso (lógica de negocio)
│   │       └── auth/
│   │           ├── login.use-case.ts
│   │           ├── register.use-case.ts
│   │           └── renew-token.use-case.ts
│   │
│   ├── infrastructure/              # INFRASTRUCTURE LAYER
│   │   ├── datasources/             # Implementación de datasources (API calls)
│   │   │   ├── auth.datasource.impl.ts
│   │   │   └── user.datasource.impl.ts
│   │   │
│   │   └── repositories/            # Implementación de repositorios
│   │       ├── auth.repository.impl.ts
│   │       └── user.repository.impl.ts
│   │
│   ├── presentation/                # PRESENTATION LAYER
│   │   ├── components/
│   │   │   ├── ui/                  # Componentes UI reutilizables
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Input.tsx
│   │   │   │   └── Card.tsx
│   │   │   │
│   │   │   └── layout/              # Layouts
│   │   │       ├── DashboardLayout.tsx
│   │   │       ├── AuthLayout.tsx
│   │   │       ├── Sidebar.tsx
│   │   │       └── Navbar.tsx
│   │   │
│   │   ├── pages/                   # Páginas de la aplicación
│   │   │   ├── auth/
│   │   │   │   ├── LoginPage.tsx
│   │   │   │   └── RegisterPage.tsx
│   │   │   ├── dashboard/
│   │   │   │   └── DashboardPage.tsx
│   │   │   ├── users/
│   │   │   │   └── UsersListPage.tsx
│   │   │   └── roles/
│   │   │       └── RolesListPage.tsx
│   │   │
│   │   ├── hooks/                   # Custom hooks
│   │   │   └── useAuth.ts
│   │   │
│   │   └── routes/                  # Configuración de rutas
│   │       ├── AppRouter.tsx
│   │       ├── PrivateRoute.tsx
│   │       └── PublicRoute.tsx
│   │
│   ├── store/                       # REDUX STATE
│   │   ├── store.ts                 # Configuración del store
│   │   ├── slices/                  # Redux slices
│   │   │   └── authSlice.ts
│   │   └── thunks/                  # Redux thunks (async actions)
│   │       └── authThunks.ts
│   │
│   ├── helpers/                     # Utilidades
│   │   ├── constants.ts             # Constantes (rutas, estados, etc.)
│   │   ├── errors.ts                # Manejo de errores
│   │   └── formatters.ts            # Formateadores (fechas, texto, etc.)
│   │
│   ├── App.tsx                      # Componente principal
│   ├── main.tsx                     # Entry point
│   └── index.css                    # Estilos globales + Tailwind
│
├── .env                             # Variables de entorno
├── .env.example                     # Ejemplo de variables
├── tailwind.config.js               # Configuración Tailwind
├── tsconfig.json                    # Configuración TypeScript
├── vite.config.ts                   # Configuración Vite
└── package.json

```

## ⚙️ Configuración e Instalación

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar variables de entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME=Events Management System
```

### 3. Ejecutar en modo desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### 4. Compilar para producción

```bash
npm run build
npm run preview
```

## 🏗️ Arquitectura Clean Architecture

### Capas de la Aplicación

#### 1. Domain Layer (core/)
- **Entidades**: Objetos de dominio con lógica de negocio
- **DTOs**: Objetos de transferencia de datos con validación
- **Repositorios**: Interfaces que definen operaciones de datos
- **Casos de Uso**: Lógica de negocio encapsulada

#### 2. Infrastructure Layer (infrastructure/)
- **Datasources**: Implementaciones de acceso a datos (API)
- **Repositories**: Implementaciones concretas de repositorios

#### 3. Presentation Layer (presentation/)
- **Componentes**: UI components reutilizables
- **Páginas**: Vistas completas de la aplicación
- **Hooks**: Custom hooks para lógica reutilizable
- **Routes**: Configuración de rutas y navegación

#### 4. State Management (store/)
- **Redux Store**: Configuración global del estado
- **Slices**: Reducers y actions con Redux Toolkit
- **Thunks**: Acciones asíncronas

## 🔐 Sistema de Autenticación

### Flujo de Autenticación

1. **Login/Register**: Usuario ingresa credenciales
2. **API Request**: Se envía al backend vía Axios
3. **JWT Token**: Backend retorna token de acceso
4. **Local Storage**: Token se guarda en localStorage
5. **Redux State**: Usuario y estado se almacenan en Redux
6. **Axios Interceptor**: Agrega token automáticamente a requests
7. **Token Renewal**: Interceptor renueva token expirado automáticamente

### Rutas Protegidas

```typescript
// PrivateRoute verifica autenticación
<Route element={<PrivateRoute />}>
  <Route path="/dashboard" element={<DashboardPage />} />
</Route>

// PublicRoute redirige si ya está autenticado
<Route element={<PublicRoute />}>
  <Route path="/auth/login" element={<LoginPage />} />
</Route>
```

### Hook useAuth

```typescript
const { user, isAuthenticated, login, logout, loading, error } = useAuth();

// Login
await login({ email, password });

// Register
await register({ username, email, password, name, lastname, rolId });

// Logout
logout();
```

## 📝 Validación de Formularios

### React Hook Form + Zod

```typescript
// Definir schema de validación con Zod
export const loginSchema = z.object({
  email: z.string().email('Debe ser un email válido'),
  password: z.string().min(6, 'Mínimo 6 caracteres'),
});

// Usar en componente
const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(loginSchema),
});
```

## 🎨 Sistema de Temas (Dark/Light Mode)

El tema se guarda en localStorage y se aplica automáticamente:

```typescript
// Cambiar tema
const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', darkMode ? 'light' : 'dark');
};
```

## 🌐 Integración con Backend

### Configuración de API

```typescript
// config/axios.adapter.ts
const httpClient = new AxiosAdapter(ENV.API_URL);

// Uso en datasources
const response = await httpClient.post('/auth/login', loginDto);
```

### Interceptores Axios

#### Request Interceptor
- Agrega token JWT automáticamente a cada request
- Header: `Authorization: Bearer <token>`

#### Response Interceptor
- Detecta errores 401 (token expirado)
- Intenta renovar token automáticamente
- Si falla, redirige a login

## 📦 Módulos del Sistema

### Autenticación
- Login
- Registro
- Renovación de token
- Logout

### Gestión de Usuarios
- Listar usuarios
- Crear usuario
- Editar usuario
- Eliminar usuario

### Gestión de Roles
- CRUD completo de roles

### Gestión de Instituciones
- CRUD completo de instituciones
- Relación con sucursales

### Gestión de Sucursales
- CRUD completo de sucursales
- Relación con salas

### Gestión de Salas
- CRUD completo de salas
- Capacidad y disponibilidad

### Gestión de Grupos
- CRUD completo de grupos de eventos

### Gestión de Eventos
- Crear eventos únicos
- Crear eventos recurrentes
- Estados: NOT_INITIATED, STARTED, IN_PROGRESS, FINISHED, CANCELED
- Frecuencias: DAILY, WEEKLY, MONTHLY, YEARLY

### Gestión de Ocurrencias
- Listar ocurrencias
- Filtrar por fecha y sucursal
- Asignación de salas

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview de producción
npm run preview

# Linting
npm run lint
```

## 🔑 Variables de Entorno

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `VITE_API_URL` | URL del backend API | `http://localhost:3000/api` |
| `VITE_APP_NAME` | Nombre de la aplicación | `Events Management System` |

## 📚 Dependencias Principales

### Producción
```json
{
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-router-dom": "^7.9.4",
  "@reduxjs/toolkit": "^2.9.1",
  "react-redux": "^9.2.0",
  "axios": "^1.12.2",
  "react-hook-form": "^7.65.0",
  "zod": "^4.1.12",
  "@tanstack/react-query": "^5.90.5",
  "react-icons": "^5.5.0",
  "react-toastify": "^11.0.5",
  "date-fns": "^4.1.0"
}
```

### Desarrollo
```json
{
  "typescript": "~5.9.3",
  "vite": "^7.1.7",
  "@vitejs/plugin-react": "^5.0.4",
  "tailwindcss": "^4.1.15",
  "autoprefixer": "^10.4.21",
  "postcss": "^8.5.6"
}
```

## 🎯 Próximos Pasos

- [ ] Implementar CRUD completo para todos los módulos
- [ ] Agregar paginación en listas
- [ ] Implementar búsqueda y filtros avanzados
- [ ] Agregar calendario visual para eventos
- [ ] Implementar drag & drop para asignación de salas
- [ ] Agregar tests unitarios y de integración
- [ ] Implementar i18n (internacionalización)
- [ ] Optimizar rendimiento con React.memo y useMemo
- [ ] Agregar PWA support

## 👨‍💻 Desarrollo

### Agregar un nuevo módulo

1. Crear entidad en `core/entities/`
2. Crear DTOs en `core/dtos/[module]/`
3. Crear repositorio en `core/repositories/`
4. Crear casos de uso en `core/use-cases/[module]/`
5. Implementar datasource en `infrastructure/datasources/`
6. Implementar repositorio en `infrastructure/repositories/`
7. Crear slice de Redux en `store/slices/`
8. Crear páginas en `presentation/pages/[module]/`
9. Agregar rutas en `presentation/routes/AppRouter.tsx`

## 📄 Licencia

Este proyecto es privado y está desarrollado para uso interno.

---

**Ubicación del proyecto**: `C:\Users\David\Downloads\Apps\frontend_y`
