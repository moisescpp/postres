import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ExternalLink, Github, Globe, Zap, Crown, Sparkles } from "lucide-react"
import Link from "next/link"

export default function DeployPage() {
  const deploymentSteps = [
    {
      title: "Configurar Base de Datos",
      description: "Ejecutar scripts SQL para crear la estructura",
      status: "completed",
      icon: "🗄️",
      details: [
        "Crear base de datos dulces_delicias",
        "Ejecutar create-database.sql",
        "Ejecutar seed-data.sql",
        "Ejecutar update-database-imperio.sql",
      ],
    },
    {
      title: "Variables de Entorno",
      description: "Configurar las variables necesarias",
      status: "pending",
      icon: "⚙️",
      details: [
        "DATABASE_URL=mysql://...",
        "NEXTAUTH_SECRET=tu_secreto_aqui",
        "NEXTAUTH_URL=https://tu-dominio.com",
        "WHATSAPP_NUMBER=+573142185621",
      ],
    },
    {
      title: "Desplegar en Vercel",
      description: "Subir la aplicación a producción",
      status: "ready",
      icon: "🚀",
      details: [
        "Conectar repositorio GitHub",
        "Configurar variables de entorno",
        "Desplegar automáticamente",
        "Configurar dominio personalizado",
      ],
    },
    {
      title: "Configurar Pagos",
      description: "Integrar pasarela de pagos",
      status: "optional",
      icon: "💳",
      details: ["Mercado Pago API", "PayU Colombia", "Stripe (internacional)", "Pagos contra entrega"],
    },
  ]

  const features = [
    {
      title: "Sistema de Roles Completo",
      description: "Administrador y clientes con permisos específicos",
      icon: <Crown className="h-6 w-6 text-purple-600" />,
      status: "✅ Implementado",
    },
    {
      title: "Catálogo de Productos",
      description: "Copas mágicas, quesillos imperiales y postres reales",
      icon: <Sparkles className="h-6 w-6 text-pink-600" />,
      status: "✅ Implementado",
    },
    {
      title: "Carrito de Compras",
      description: "Sistema completo de pedidos con personalización",
      icon: <CheckCircle className="h-6 w-6 text-green-600" />,
      status: "✅ Implementado",
    },
    {
      title: "Panel de Administración",
      description: "Gestión completa de pedidos, productos y clientes",
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      status: "✅ Implementado",
    },
    {
      title: "WhatsApp Integration",
      description: "Botón flotante para contacto directo",
      icon: <Globe className="h-6 w-6 text-green-600" />,
      status: "✅ Implementado",
    },
    {
      title: "Diseño Responsivo",
      description: "Optimizado para móviles y tablets",
      icon: <CheckCircle className="h-6 w-6 text-purple-600" />,
      status: "✅ Implementado",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">👑</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Imperio del Postre
                </h1>
                <p className="text-xs text-gray-500">Guía de Despliegue</p>
              </div>
            </Link>
            <Button
              asChild
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              <Link href="/">Volver al Reino</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-2 mb-6">
            <Crown className="h-5 w-5 text-purple-600" />
            <span className="text-purple-700 font-medium">Despliegue Imperial</span>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            ¡Tu Imperio del Postre está Listo!
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            La aplicación está completamente desarrollada con todas las funcionalidades solicitadas. Sigue esta guía
            para desplegarla y comenzar a recibir pedidos.
          </p>
        </div>

        {/* Features Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Funcionalidades Implementadas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    {feature.icon}
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">{feature.description}</p>
                  <Badge className="bg-green-100 text-green-700 border-green-200">{feature.status}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Deployment Steps */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Pasos para el Despliegue
          </h2>
          <div className="space-y-6">
            {deploymentSteps.map((step, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">{step.icon}</div>
                      <div>
                        <CardTitle className="text-xl">{step.title}</CardTitle>
                        <CardDescription className="text-lg">{step.description}</CardDescription>
                      </div>
                    </div>
                    <Badge
                      className={
                        step.status === "completed"
                          ? "bg-green-100 text-green-700 border-green-200"
                          : step.status === "ready"
                            ? "bg-blue-100 text-blue-700 border-blue-200"
                            : step.status === "pending"
                              ? "bg-yellow-100 text-yellow-700 border-yellow-200"
                              : "bg-gray-100 text-gray-700 border-gray-200"
                      }
                    >
                      {step.status === "completed"
                        ? "Completado"
                        : step.status === "ready"
                          ? "Listo"
                          : step.status === "pending"
                            ? "Pendiente"
                            : "Opcional"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Deploy Buttons */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">Despliegue Rápido</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white" asChild>
              <Link href="https://vercel.com/new" target="_blank">
                <ExternalLink className="mr-2 h-5 w-5" />
                Desplegar en Vercel
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 hover:bg-gray-50 bg-transparent" asChild>
              <Link href="https://github.com" target="_blank">
                <Github className="mr-2 h-5 w-5" />
                Subir a GitHub
              </Link>
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Usa el botón "Download Code" en la parte superior para obtener todos los archivos
          </p>
        </div>

        {/* Contact Info */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-purple-100 to-pink-100 border-0 shadow-xl max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-purple-700">¡Tu Imperio del Postre está Completo! 👑</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                La aplicación incluye todas las funcionalidades solicitadas: sistema de roles, catálogo completo con
                personalización de hasta 5 sabores para el postre quesillo, integración con WhatsApp (+57 314 218 5621),
                diseño atractivo con colores pasteles y animaciones, y panel de administración completo.
              </p>
              <div className="flex items-center justify-center space-x-2 text-purple-600">
                <Sparkles className="h-5 w-5" />
                <span className="font-medium">¡Listo para recibir pedidos mágicos!</span>
                <Sparkles className="h-5 w-5" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
