## **Arquitectura**

```
src/
├── App.tsx                     # Define <Routes> y usa layout + error
├── main.tsx
├── routes/                     # Rutas principales
│   ├── Layout.tsx              # Layout y creación del AppContext
│   ├── Error.tsx               # Componente de error global
│   ├── Page.tsx                # Ruta "/"
│   ├── index.ts
│   ├── login/                  # Ruta "/login"
│   │   ├── Page.tsx
│   │   └── components/         # Componentes locales de login
├── components/                 # Componentes globales
├── lib/                        # Lógica compartida
│   ├── context/                # Definición de AppContext (autenticación de supabase...)
│   ├── queries/                # Hooks (fetching en db)
│   ├── mutations/              # Mutaciones (cambios en db)
│   ├── types/                  # Tipos globales (user, product...)
│   └── utils/
```
