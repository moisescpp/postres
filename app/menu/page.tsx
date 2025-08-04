"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ShoppingCart, Plus, Sparkles, Heart, Crown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { WhatsAppButton } from "@/components/whatsapp-button"

const flavors = [
  { id: "mora", name: "Mora Encantada", color: "bg-purple-400", description: "Dulce y mágica" },
  { id: "natas", name: "Natas Celestiales", color: "bg-yellow-200", description: "Cremosas y suaves" },
  { id: "arequipe", name: "Arequipe Imperial", color: "bg-amber-500", description: "Tradicional y rico" },
  { id: "pina", name: "Piña Tropical", color: "bg-yellow-400", description: "Fresca y exótica" },
  { id: "bocadillo", name: "Bocadillo Real", color: "bg-orange-400", description: "Auténtico sabor" },
]

const sizes = [
  { id: "8oz", name: "8 oz", price: 8000, description: "Perfecto para una persona" },
  { id: "12oz", name: "12 oz", price: 12000, description: "Ideal para compartir" },
  { id: "16oz", name: "16 oz", price: 16000, description: "Para los más golosos" },
]

export default function MenuPage() {
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([])
  const [selectedSize, setSelectedSize] = useState("")
  const [activeTab, setActiveTab] = useState("copas")

  const toggleFlavor = (flavorId: string) => {
    if (selectedFlavors.includes(flavorId)) {
      setSelectedFlavors(selectedFlavors.filter((id) => id !== flavorId))
    } else {
      const maxFlavors = activeTab === "mixtos" ? 5 : 5 // Cambiado para permitir 5 sabores en postre quesillo
      if (selectedFlavors.length < maxFlavors) {
        setSelectedFlavors([...selectedFlavors, flavorId])
      }
    }
  }

  const getPrice = () => {
    const basePrice = sizes.find((s) => s.id === selectedSize)?.price || 0
    return basePrice
  }

  const getMaxFlavors = () => {
    return activeTab === "mixtos" ? 5 : 5
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-purple-100 sticky top-0 z-40">
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
                <p className="text-xs text-gray-500">Menú Real</p>
              </div>
            </Link>
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
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-2 mb-6">
            <Crown className="h-5 w-5 text-purple-600" />
            <span className="text-purple-700 font-medium">Menú Imperial</span>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Tesoros del Reino
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Descubre nuestras creaciones mágicas, cada una diseñada para conquistar tu corazón y despertar tus sentidos
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-white/60 backdrop-blur-sm border border-purple-100">
            <TabsTrigger
              value="copas"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
            >
              Copas Mágicas
            </TabsTrigger>
            <TabsTrigger
              value="quesillos"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
            >
              Quesillos Imperiales
            </TabsTrigger>
            <TabsTrigger
              value="mixtos"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
            >
              Postres Reales
            </TabsTrigger>
          </TabsList>

          <TabsContent value="copas" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                <CardHeader className="bg-gradient-to-r from-purple-100 to-pink-100">
                  <CardTitle className="flex items-center space-x-2">
                    <Sparkles className="h-6 w-6 text-purple-600" />
                    <span>Copa de Postres Personalizada</span>
                  </CardTitle>
                  <CardDescription className="text-gray-700">
                    Crea tu combinación perfecta eligiendo hasta 5 sabores celestiales
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 p-6">
                  <div>
                    <h4 className="font-semibold mb-4 text-purple-700">Elige tus sabores mágicos (máximo 5):</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {flavors.map((flavor) => (
                        <Button
                          key={flavor.id}
                          variant={selectedFlavors.includes(flavor.id) ? "default" : "outline"}
                          className={`justify-start h-auto p-4 ${
                            selectedFlavors.includes(flavor.id)
                              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                              : "border-purple-200 hover:bg-purple-50"
                          }`}
                          onClick={() => toggleFlavor(flavor.id)}
                          disabled={!selectedFlavors.includes(flavor.id) && selectedFlavors.length >= getMaxFlavors()}
                        >
                          <div className="flex items-center space-x-3 w-full">
                            <div className={`w-4 h-4 rounded-full ${flavor.color} shadow-sm`}></div>
                            <div className="text-left flex-1">
                              <div className="font-medium">{flavor.name}</div>
                              <div className="text-xs opacity-75">{flavor.description}</div>
                            </div>
                            {selectedFlavors.includes(flavor.id) && <Heart className="h-4 w-4 fill-current" />}
                          </div>
                        </Button>
                      ))}
                    </div>
                    <p className="text-sm text-purple-600 mt-3 font-medium">
                      Seleccionados: {selectedFlavors.length}/{getMaxFlavors()} ✨
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4 text-purple-700">Elige tu tamaño imperial:</h4>
                    <Select value={selectedSize} onValueChange={setSelectedSize}>
                      <SelectTrigger className="border-purple-200 focus:border-purple-400">
                        <SelectValue placeholder="Selecciona el tamaño perfecto" />
                      </SelectTrigger>
                      <SelectContent>
                        {sizes.map((size) => (
                          <SelectItem key={size.id} value={size.id}>
                            <div className="flex justify-between items-center w-full">
                              <span className="font-medium">{size.name}</span>
                              <span className="text-purple-600 font-bold ml-4">${size.price.toLocaleString()}</span>
                            </div>
                            <div className="text-xs text-gray-500">{size.description}</div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {selectedFlavors.length > 0 && selectedSize && (
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200 animate-fade-in">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-semibold text-purple-700">Total Mágico:</span>
                        <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          ${getPrice().toLocaleString()}
                        </span>
                      </div>
                      <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-2">Tu combinación:</p>
                        <div className="flex flex-wrap gap-2">
                          {selectedFlavors.map((flavorId) => {
                            const flavor = flavors.find((f) => f.id === flavorId)
                            return (
                              <Badge key={flavorId} className="bg-white text-purple-700 border border-purple-200">
                                {flavor?.name}
                              </Badge>
                            )
                          })}
                        </div>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all duration-300">
                        <Plus className="h-4 w-4 mr-2" />
                        Agregar al Reino del Carrito
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              <div className="space-y-6">
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="/placeholder.svg?height=400&width=400&text=Copa+Mágica+de+Postres"
                    alt="Copa Mágica de Postres"
                    width={400}
                    height={400}
                    className="w-full transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">Copa Mágica Imperial</h3>
                    <p className="text-sm opacity-90">Donde cada sabor cuenta una historia</p>
                  </div>
                </div>

                <Card className="bg-gradient-to-r from-purple-100 to-pink-100 border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-4 text-purple-700 flex items-center">
                      <Sparkles className="h-5 w-5 mr-2" />
                      Sabores del Reino Disponibles:
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {flavors.map((flavor) => (
                        <div key={flavor.id} className="flex items-center space-x-3 bg-white/60 rounded-lg p-3">
                          <div className={`w-6 h-6 rounded-full ${flavor.color} shadow-sm`}></div>
                          <div className="flex-1">
                            <span className="font-medium text-gray-800">{flavor.name}</span>
                            <p className="text-xs text-gray-600">{flavor.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="quesillos" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300&text=Quesillo+Imperial+Entero"
                    alt="Quesillo Imperial Entero"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/30 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Imperial
                  </div>
                </div>
                <CardHeader className="bg-gradient-to-r from-yellow-100 to-orange-100">
                  <CardTitle className="flex items-center space-x-2">
                    <Crown className="h-5 w-5 text-yellow-600" />
                    <span>Quesillo Imperial Entero</span>
                  </CardTitle>
                  <CardDescription>
                    El quesillo más cremoso del reino, perfecto para compartir momentos especiales
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                      $25.000
                    </span>
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white">Tradicional</Badge>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <span>✨</span>
                      <span>Receta secreta familiar</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <span>🥛</span>
                      <span>Ingredientes premium</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <span>👑</span>
                      <span>Perfecto para 4-6 personas</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 shadow-lg hover:shadow-xl transition-all duration-300">
                    <Plus className="h-4 w-4 mr-2" />
                    Agregar al Reino
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300&text=Media+Quesillo+Real"
                    alt="Media Quesillo Real"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/30 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-400 to-purple-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Individual
                  </div>
                </div>
                <CardHeader className="bg-gradient-to-r from-pink-100 to-purple-100">
                  <CardTitle className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-pink-600" />
                    <span>Mitad de Quesillo Real</span>
                  </CardTitle>
                  <CardDescription>
                    Porción perfecta para disfrutar en soledad o como antesala del paraíso
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                      $12.000
                    </span>
                    <Badge className="bg-gradient-to-r from-pink-400 to-purple-400 text-white">Personal</Badge>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <span>💝</span>
                      <span>Porción individual perfecta</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <span>🌟</span>
                      <span>Misma calidad imperial</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <span>⚡</span>
                      <span>Listo para disfrutar</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 shadow-lg hover:shadow-xl transition-all duration-300">
                    <Plus className="h-4 w-4 mr-2" />
                    Agregar al Reino
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="mixtos" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                <CardHeader className="bg-gradient-to-r from-green-100 to-blue-100">
                  <CardTitle className="flex items-center space-x-2">
                    <Crown className="h-6 w-6 text-green-600" />
                    <span>Postre Quesillo Real</span>
                  </CardTitle>
                  <CardDescription className="text-gray-700">
                    La perfecta armonía: mitad quesillo imperial y mitad paraíso de hasta 5 sabores de tu elección
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 p-6">
                  <div>
                    <h4 className="font-semibold mb-4 text-green-700">
                      Elige hasta 5 sabores para tu mitad de postres:
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {flavors.map((flavor) => (
                        <Button
                          key={flavor.id}
                          variant={selectedFlavors.includes(flavor.id) ? "default" : "outline"}
                          className={`justify-start h-auto p-4 ${
                            selectedFlavors.includes(flavor.id)
                              ? "bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg"
                              : "border-green-200 hover:bg-green-50"
                          }`}
                          onClick={() => toggleFlavor(flavor.id)}
                          disabled={!selectedFlavors.includes(flavor.id) && selectedFlavors.length >= 5}
                        >
                          <div className="flex items-center space-x-3 w-full">
                            <div className={`w-4 h-4 rounded-full ${flavor.color} shadow-sm`}></div>
                            <div className="text-left flex-1">
                              <div className="font-medium">{flavor.name}</div>
                              <div className="text-xs opacity-75">{flavor.description}</div>
                            </div>
                            {selectedFlavors.includes(flavor.id) && <Sparkles className="h-4 w-4 fill-current" />}
                          </div>
                        </Button>
                      ))}
                    </div>
                    <p className="text-sm text-green-600 mt-3 font-medium">
                      Seleccionados: {selectedFlavors.length}/5 para tu mitad de postres ✨
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4 text-green-700">Tamaño de tu creación real:</h4>
                    <Select value={selectedSize} onValueChange={setSelectedSize}>
                      <SelectTrigger className="border-green-200 focus:border-green-400">
                        <SelectValue placeholder="Selecciona el tamaño perfecto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="8oz">8 oz - $10.000 (Individual)</SelectItem>
                        <SelectItem value="12oz">12 oz - $14.000 (Para compartir)</SelectItem>
                        <SelectItem value="16oz">16 oz - $18.000 (Experiencia completa)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {selectedFlavors.length > 0 && selectedSize && (
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-green-200 animate-fade-in">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-semibold text-green-700">Total Real:</span>
                        <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                          ${selectedSize === "8oz" ? "10.000" : selectedSize === "12oz" ? "14.000" : "18.000"}
                        </span>
                      </div>
                      <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-2">Tu combinación real:</p>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge className="bg-yellow-100 text-yellow-700 border border-yellow-200">
                            50% Quesillo Imperial
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {selectedFlavors.map((flavorId) => {
                            const flavor = flavors.find((f) => f.id === flavorId)
                            return (
                              <Badge key={flavorId} className="bg-white text-green-700 border border-green-200">
                                {flavor?.name}
                              </Badge>
                            )
                          })}
                        </div>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 shadow-lg hover:shadow-xl transition-all duration-300">
                        <Plus className="h-4 w-4 mr-2" />
                        Crear Mi Postre Real
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              <div className="space-y-6">
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="/placeholder.svg?height=400&width=400&text=Postre+Quesillo+Real"
                    alt="Postre Quesillo Real"
                    width={400}
                    height={400}
                    className="w-full transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">Postre Quesillo Real</h3>
                    <p className="text-sm opacity-90">Lo mejor de dos mundos en perfecta armonía</p>
                  </div>
                </div>

                <Card className="bg-gradient-to-r from-green-100 to-blue-100 border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-4 text-green-700 flex items-center">
                      <Crown className="h-5 w-5 mr-2" />
                      ¿Qué incluye tu creación real?
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span>50% Quesillo tradicional casero de la más alta calidad</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span>50% Postres de hasta 5 sabores de tu elección</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                        <span>Combinación perfecta de texturas y sabores</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>Ideal para los indecisos que lo quieren todo</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span>Una experiencia única en cada bocado</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <WhatsAppButton />
    </div>
  )
}
