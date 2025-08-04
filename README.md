# 👑 Imperio del Postre

**Donde los sueños se vuelven dulces**

Una aplicación web completa para la gestión de pedidos de postres artesanales, quesillos imperiales y delicias personalizadas.

## ✨ Características

- 🍰 **Catálogo Completo**: Copas mágicas, quesillos imperiales y postres reales
- 👑 **Sistema de Roles**: Administrador y clientes con permisos específicos
- 🛒 **Carrito Inteligente**: Personalización de hasta 5 sabores
- 📱 **WhatsApp Integration**: Contacto directo (+57 314 218 5621)
- 🎨 **Diseño Atractivo**: Colores pasteles y animaciones suaves
- 📊 **Panel de Admin**: Gestión completa de pedidos y productos
- 🚀 **Responsive**: Optimizado para móviles y tablets

## 🛠 Tecnologías

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Base de Datos**: Supabase (PostgreSQL)
- **Autenticación**: Supabase Auth
- **Despliegue**: Vercel
- **Control de Versiones**: Git

## 🚀 Despliegue Rápido

### 1. Clonar el Repositorio
\`\`\`bash
git clone [tu-repositorio]
cd imperio-del-postre
npm install
\`\`\`

### 2. Configurar Supabase
1. Crear cuenta en [supabase.com](https://supabase.com)
2. Crear nuevo proyecto
3. Ejecutar scripts SQL en el editor de Supabase:
   - `scripts/supabase-schema.sql`
   - `scripts/supabase-seed-data.sql`

### 3. Variables de Entorno
Crear archivo `.env.local`:
\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=https://[tu-proyecto].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[tu-anon-key]
SUPABASE_SERVICE_ROLE_KEY=[tu-service-role-key]
NEXT_PUBLIC_WHATSAPP_NUMBER=+573142185621
\`\`\`

### 4. Desplegar en Vercel
1. Conectar repositorio en [vercel.com](https://vercel.com)
2. Configurar variables de entorno
3. ¡Desplegar automáticamente!

## 📱 Funcionalidades Principales

### Para Clientes
- ✅ Registro y autenticación
- ✅ Explorar catálogo de productos
- ✅ Personalizar postres con hasta 5 sabores
- ✅ Carrito de compras inteligente
- ✅ Realizar pedidos con información de entrega
- ✅ Contacto directo por WhatsApp

### Para Administradores
- ✅ Panel de control completo
- ✅ Gestión de pedidos en tiempo real
- ✅ Administración de productos y precios
- ✅ Base de datos de clientes
- ✅ Estadísticas y reportes
- ✅ Configuración del sistema

## 🎨 Productos Disponibles

### Copas Mágicas
- Personalizable hasta 5 sabores
- Tamaños: 8oz, 12oz, 16oz
- Precios desde $8.000

### Quesillos Imperiales
- Quesillo tradicional casero
- Entero ($25.000) o Mitad ($12.000)
- Receta secreta familiar

### Postres Reales
- 50% Quesillo + 50% Postres (hasta 5 sabores)
- Tamaños: 8oz, 12oz, 16oz
- Precios desde $10.000

## 🌈 Sabores Disponibles

- 🟣 **Mora Encantada**: Dulce y mágica
- 🟡 **Natas Celestiales**: Cremosas y suaves
- 🟠 **Arequipe Imperial**: Tradicional y rico
- 🟨 **Piña Tropical**: Fresca y exótica
- 🟧 **Bocadillo Real**: Auténtico sabor

## 📞 Contacto

- **WhatsApp**: +57 314 218 5621
- **Email**: admin@imperiodelpostre.com
- **Horarios**: Lun-Vie 8:00-20:00, Sáb 9:00-21:00, Dom 10:00-18:00

## 🤝 Contribuir

1. Fork el proyecto
2. Crear rama para feature (\`git checkout -b feature/nueva-funcionalidad\`)
3. Commit cambios (\`git commit -m 'Agregar nueva funcionalidad'\`)
4. Push a la rama (\`git push origin feature/nueva-funcionalidad\`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver \`LICENSE\` para más detalles.

---

**Hecho con 💜 para endulzar tu vida**

*Imperio del Postre - Donde los sueños se vuelven dulces* 👑✨
