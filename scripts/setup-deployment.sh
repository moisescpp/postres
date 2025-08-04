#!/bin/bash

# Script para configurar el despliegue del Imperio del Postre
echo "🍰 Configurando Imperio del Postre para despliegue..."

# 1. Inicializar Git (si no existe)
if [ ! -d ".git" ]; then
    echo "📁 Inicializando repositorio Git..."
    git init
    git add .
    git commit -m "🎉 Initial commit: Imperio del Postre completo"
fi

# 2. Crear archivo .env.local para desarrollo
echo "⚙️ Creando archivo de variables de entorno..."
cat > .env.local << EOL
# Base de datos Supabase
DATABASE_URL="postgresql://[usuario]:[password]@[host]:5432/[database]"
DIRECT_URL="postgresql://[usuario]:[password]@[host]:5432/[database]"

# Supabase
NEXT_PUBLIC_SUPABASE_URL="https://[tu-proyecto].supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="[tu-anon-key]"
SUPABASE_SERVICE_ROLE_KEY="[tu-service-role-key]"

# Autenticación
NEXTAUTH_SECRET="[genera-un-secreto-seguro]"
NEXTAUTH_URL="http://localhost:3000"

# WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER="+573142185621"

# Configuración del negocio
NEXT_PUBLIC_BUSINESS_NAME="Imperio del Postre"
NEXT_PUBLIC_BUSINESS_TAGLINE="Donde los sueños se vuelven dulces"
EOL

echo "✅ Configuración inicial completada!"
echo "📝 Edita el archivo .env.local con tus credenciales reales"
