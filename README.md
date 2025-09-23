## **Arquitectura**

```
src/
├── App.tsx                     # Define <Routes> y usa layout + error
├── main.tsx
├── routes/                     # Rutas principales
│   ├── layout.tsx              # Layout y creación del AppContext
│   ├── error.tsx               # Componente de error global
│   ├── page.tsx                 # Ruta "/"
│   ├── login/                  # Ruta "/login"
│   │   ├── page.tsx
│   │   └── components/         # Componentes locales de login
├── components/                 # Componentes globales
├── lib/                        # Lógica compartida
│   ├── context/                # Definición de AppContext (autenticación de supabase...)
│   ├── queries/                # Hooks (fetching en db)
│   ├── mutations/              # Mutaciones (cambios en db)
│   ├── types/                  # Tipos globales (user, product...)
│   └── utils/
```
