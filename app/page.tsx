import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star, Clock, MapPin, Heart, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  const featuredProducts = [
    {
      id: 1,
      name: "Copa de Postres Mágica",
      description: "Combina hasta 5 sabores celestiales en una experiencia única",
      price: "Desde $8.000",
      image: "/placeholder.svg?height=300&width=300&text=Copa+Postres+Mágica",
      rating: 4.9,
      sizes: ["8oz", "12oz", "16oz"],
      gradient: "from-purple-200 to-pink-200",
    },
    {
      id: 2,
      name: "Quesillo Imperial",
      description: "El quesillo más cremoso del reino, hecho con amor",
      price: "Desde $12.000",
      image: "/placeholder.svg?height=300&width=300&text=Quesillo+Imperial",
      rating: 5.0,
      sizes: ["Entero", "Mitad"],
      gradient: "from-yellow-200 to-orange-200",
    },
    {
      id: 3,
      name: "Postre Quesillo Real",
      description: "La perfecta armonía: mitad quesillo, mitad paraíso de sabores",
      price: "Desde $10.000",
      image: "/placeholder.svg?height=300&width=300&text=Postre+Quesillo+Real",
      rating: 4.8,
      sizes: ["8oz", "12oz", "16oz"],
      gradient: "from-green-200 to-blue-200",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-white font-bold text-lg">👑</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Imperio del Postre
                </h1>
                <p className="text-xs text-gray-500">Donde los sueños se vuelven dulces</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-purple-700 hover:text-pink-600 font-medium transition-colors">
                Inicio
              </Link>
              <Link href="/menu" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">
                Menú Real
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">
                Nuestra Historia
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">
                Contacto
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-purple-200 hover:bg-purple-50 bg-transparent" asChild>
                <Link href="/login">Iniciar Sesión</Link>
              </Button>
              <Button
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                asChild
              >
                <Link href="/register">Registrarse</Link>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-purple-200 hover:bg-purple-50 relative bg-transparent"
              >
                <ShoppingCart className="h-4 w-4" />
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-bold">0</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 to-pink-100/50"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-60 animate-bounce delay-300"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-200 rounded-full opacity-60 animate-bounce delay-700"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-6 shadow-lg">
            <Sparkles className="h-5 w-5 text-purple-500" />
            <span className="text-purple-700 font-medium">¡Bienvenido al Reino de los Sabores!</span>
            <Sparkles className="h-5 w-5 text-pink-500" />
          </div>

          <h2 className="text-4xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent animate-pulse">
              Imperio del
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Postre
            </span>
          </h2>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Descubre un mundo mágico donde cada postre es una obra de arte. Nuestros quesillos imperiales y copas de
            postres te transportarán a un paraíso de sabores únicos. ¡Pedidos online con entrega real a tu castillo!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="/menu">
                <Sparkles className="mr-2 h-5 w-5" />
                Explorar Reino de Sabores
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-transparent"
              asChild
            >
              <Link href="/order">
                <Heart className="mr-2 h-5 w-5" />
                Hacer Pedido Mágico
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-purple-700">Entrega Mágica</h3>
              <p className="text-gray-600">Tus postres llegan frescos y perfectos a tu puerta en tiempo récord</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-orange-700">Calidad Imperial</h3>
              <p className="text-gray-600">Ingredientes premium y recetas secretas transmitidas por generaciones</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Reino Completo</h3>
              <p className="text-gray-600">Llevamos la magia a toda la ciudad con cobertura total</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-2 mb-6">
              <Crown className="h-5 w-5 text-purple-600" />
              <span className="text-purple-700 font-medium">Nuestras Joyas de la Corona</span>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Postres Imperiales
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Cada creación es una obra maestra diseñada para conquistar tu paladar y crear momentos inolvidables
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <Card
                key={product.id}
                className={`overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br ${product.gradient} border-0 animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                  </div>
                </div>
                <CardHeader className="bg-white/80 backdrop-blur-sm">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-gray-800">{product.name}</CardTitle>
                    <Heart className="h-5 w-5 text-pink-400 hover:text-pink-600 cursor-pointer transition-colors" />
                  </div>
                  <CardDescription className="text-gray-600">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="bg-white/80 backdrop-blur-sm">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {product.price}
                    </span>
                    <div className="flex gap-1">
                      {product.sizes.map((size) => (
                        <Badge
                          key={size}
                          variant="secondary"
                          className="text-xs bg-purple-100 text-purple-700 hover:bg-purple-200"
                        >
                          {size}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    asChild
                  >
                    <Link href={`/product/${product.id}`}>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Descubrir Magia
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-500"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4">¿Listo para vivir la experiencia imperial?</h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a miles de súbditos que ya disfrutan de nuestros postres mágicos. ¡Tu reino de sabores te espera!
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-purple-700 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            asChild
          >
            <Link href="/register">
              <Crown className="mr-2 h-5 w-5" />
              Convertirse en Súbdito Real
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-purple-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">👑</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Imperio del Postre</h3>
                  <p className="text-sm text-gray-300">Donde los sueños se vuelven dulces</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Creamos momentos mágicos a través de postres únicos, hechos con amor y los ingredientes más frescos del
                reino.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-purple-300">Enlaces Imperiales</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link href="/menu" className="hover:text-pink-300 transition-colors">
                    Menú Real
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-pink-300 transition-colors">
                    Nuestra Historia
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-pink-300 transition-colors">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-pink-300 transition-colors">
                    Términos del Reino
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-purple-300">Contacto Real</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span>📞</span>
                  <span>+57 314 218 5621</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>📧</span>
                  <span>pedidos@imperiodelpostre.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>📍</span>
                  <span>Reino de los Sabores, Ciudad Mágica</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-purple-300">Horarios del Reino</h4>
              <ul className="space-y-3 text-gray-300">
                <li>Lun - Vie: 8:00 AM - 8:00 PM</li>
                <li>Sábado: 9:00 AM - 9:00 PM</li>
                <li>Domingo: 10:00 AM - 6:00 PM</li>
                <li className="text-pink-300 font-medium">¡Siempre listos para la magia!</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2024 Imperio del Postre. Todos los derechos reservados.
              <span className="text-pink-300"> Hecho con 💜 para endulzar tu vida</span>
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}

function Crown({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M5 16L3 7l5.5 5L12 4l3.5 8L21 7l-2 9H5zm2.7-2h8.6l.9-4.4L14 12l-2-5-2 5-3.2-2.4L7.7 14z" />
    </svg>
  )
}
