"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { ShoppingCart, Plus, Minus, Trash2, MapPin, Clock, Crown, Sparkles, Heart } from "lucide-react"
import Link from "next/link"
import { WhatsAppButton } from "@/components/whatsapp-button"

interface CartItem {
  id: string
  type: "copa" | "quesillo" | "mixto"
  name: string
  flavors?: string[]
  size?: string
  quantity: number
  price: number
  notes?: string
}

export default function OrderPage() {
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: "1",
      type: "copa",
      name: "Copa de Postres Mágica",
      flavors: ["Mora Encantada", "Arequipe Imperial"],
      size: "12oz",
      quantity: 2,
      price: 12000,
    },
    {
      id: "2",
      type: "quesillo",
      name: "Quesillo Imperial Entero",
      quantity: 1,
      price: 25000,
    },
  ])

  const [customerInfo, setCustomerInfo] = useState({
    name: "María González",
    phone: "+57 300 123 4567",
    address: "Calle 123 #45-67, Barrio Centro",
    notes: "",
  })

  const [deliveryTime, setDeliveryTime] = useState("")

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setCart(cart.filter((item) => item.id !== id))
    } else {
      setCart(cart.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    }
  }

  const removeItem = (id: string) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const deliveryFee = subtotal >= 30000 ? 0 : 3000
  const total = subtotal + deliveryFee

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Order submitted:", {
      cart,
      customerInfo,
      deliveryTime,
      total,
    })
    alert("¡Pedido enviado exitosamente al Reino! Te contactaremos pronto para confirmar tu orden mágica.")
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
                <p className="text-xs text-gray-500">Carrito Imperial</p>
              </div>
            </Link>
            <div className="flex items-center space-x-2">
              <ShoppingCart className="h-5 w-5 text-purple-600" />
              <span className="font-medium text-purple-700">{cart.length} productos mágicos</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-2 mb-4">
            <Crown className="h-5 w-5 text-purple-600" />
            <span className="text-purple-700 font-medium">Finalizar Pedido Imperial</span>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Tu Carrito Mágico
          </h1>
          <p className="text-gray-600">Revisa tu pedido y completa la información para recibir tus delicias</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Carrito de Compras */}
          <div className="lg:col-span-2">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-purple-100 to-pink-100">
                <CardTitle className="flex items-center space-x-2 text-purple-700">
                  <ShoppingCart className="h-6 w-6" />
                  <span>Tu Pedido Imperial</span>
                </CardTitle>
                <CardDescription className="text-purple-600">
                  Revisa y modifica tu pedido antes de enviarlo al reino
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-24 h-24 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <ShoppingCart className="h-12 w-12 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Tu carrito está vacío</h3>
                    <p className="text-gray-500 mb-6">¡Agrega algunos postres mágicos para comenzar!</p>
                    <Button
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                      asChild
                    >
                      <Link href="/menu">
                        <Sparkles className="mr-2 h-4 w-4" />
                        Explorar Menú Real
                      </Link>
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cart.map((item, index) => (
                      <div
                        key={item.id}
                        className={`flex items-center space-x-4 p-6 border-2 rounded-xl transition-all duration-300 hover:shadow-lg ${
                          item.type === "copa"
                            ? "border-purple-200 bg-purple-50/50"
                            : item.type === "quesillo"
                              ? "border-yellow-200 bg-yellow-50/50"
                              : "border-green-200 bg-green-50/50"
                        }`}
                      >
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h4 className="font-bold text-gray-800">{item.name}</h4>
                            {item.type === "copa" && <Crown className="h-4 w-4 text-purple-500" />}
                            {item.type === "quesillo" && <Heart className="h-4 w-4 text-yellow-500" />}
                            {item.type === "mixto" && <Sparkles className="h-4 w-4 text-green-500" />}
                          </div>

                          {item.flavors && (
                            <div className="flex items-center space-x-1 mb-2">
                              <span className="text-sm text-gray-600 font-medium">Sabores:</span>
                              <div className="flex flex-wrap gap-1">
                                {item.flavors.map((flavor, idx) => (
                                  <Badge
                                    key={idx}
                                    variant="secondary"
                                    className={`text-xs ${
                                      item.type === "copa"
                                        ? "bg-purple-100 text-purple-700"
                                        : item.type === "mixto"
                                          ? "bg-green-100 text-green-700"
                                          : "bg-gray-100 text-gray-700"
                                    }`}
                                  >
                                    {flavor}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}

                          {item.size && (
                            <p className="text-sm text-gray-600 mb-2">
                              <span className="font-medium">Tamaño:</span> {item.size}
                            </p>
                          )}

                          <p className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            ${item.price.toLocaleString()} c/u
                          </p>
                        </div>

                        <div className="flex items-center space-x-3 bg-white rounded-lg p-2 shadow-sm">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 p-0 border-purple-200 hover:bg-purple-50"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center font-bold text-purple-700">{item.quantity}</span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 p-0 border-purple-200 hover:bg-purple-50"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="text-right">
                          <p className="text-xl font-bold text-green-600 mb-2">
                            ${(item.price * item.quantity).toLocaleString()}
                          </p>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}

                    <div className="text-center pt-6 border-t border-purple-100">
                      <Button variant="outline" className="border-purple-200 hover:bg-purple-50 bg-transparent" asChild>
                        <Link href="/menu">
                          <Plus className="mr-2 h-4 w-4" />
                          Agregar más delicias
                        </Link>
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Información de Entrega y Resumen */}
          <div className="space-y-6">
            {/* Información del Cliente */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-green-100 to-blue-100">
                <CardTitle className="flex items-center space-x-2 text-green-700">
                  <MapPin className="h-6 w-6" />
                  <span>Información de Entrega</span>
                </CardTitle>
                <CardDescription className="text-green-600">Dinos dónde entregar tu pedido mágico</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                <div>
                  <Label htmlFor="name" className="text-green-700 font-medium">
                    Nombre Completo
                  </Label>
                  <Input
                    id="name"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                    placeholder="Tu nombre real"
                    className="border-green-200 focus:border-green-400"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-green-700 font-medium">
                    Teléfono
                  </Label>
                  <Input
                    id="phone"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                    placeholder="+57 300 123 4567"
                    className="border-green-200 focus:border-green-400"
                  />
                </div>

                <div>
                  <Label htmlFor="address" className="text-green-700 font-medium">
                    Dirección de tu Castillo
                  </Label>
                  <Textarea
                    id="address"
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                    placeholder="Dirección completa con referencias mágicas"
                    rows={3}
                    className="border-green-200 focus:border-green-400"
                  />
                </div>

                <div>
                  <Label htmlFor="delivery-time" className="text-green-700 font-medium">
                    Hora Preferida de Entrega
                  </Label>
                  <Select value={deliveryTime} onValueChange={setDeliveryTime}>
                    <SelectTrigger className="border-green-200 focus:border-green-400">
                      <SelectValue placeholder="Selecciona una hora mágica" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">Lo antes posible ⚡</SelectItem>
                      <SelectItem value="morning">Mañana (8:00 AM - 12:00 PM) 🌅</SelectItem>
                      <SelectItem value="afternoon">Tarde (12:00 PM - 6:00 PM) ☀️</SelectItem>
                      <SelectItem value="evening">Noche (6:00 PM - 9:00 PM) 🌙</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="notes" className="text-green-700 font-medium">
                    Notas Especiales
                  </Label>
                  <Textarea
                    id="notes"
                    value={customerInfo.notes}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, notes: e.target.value })}
                    placeholder="Instrucciones especiales, alergias, deseos mágicos, etc."
                    rows={2}
                    className="border-green-200 focus:border-green-400"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Resumen del Pedido */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-yellow-100 to-orange-100">
                <CardTitle className="flex items-center space-x-2 text-orange-700">
                  <Crown className="h-6 w-6" />
                  <span>Resumen Imperial</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                <div className="flex justify-between text-lg">
                  <span className="text-gray-700">Subtotal:</span>
                  <span className="font-semibold">${subtotal.toLocaleString()}</span>
                </div>

                <div className="flex justify-between text-lg">
                  <span className="text-gray-700">Domicilio:</span>
                  <span className="font-semibold">
                    {deliveryFee === 0 ? (
                      <span className="text-green-600 flex items-center">
                        ¡Gratis! <Sparkles className="ml-1 h-4 w-4" />
                      </span>
                    ) : (
                      `$${deliveryFee.toLocaleString()}`
                    )}
                  </span>
                </div>

                {deliveryFee > 0 && (
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <p className="text-xs text-blue-700 text-center">
                      💡 Domicilio gratis en pedidos superiores a $30.000
                    </p>
                  </div>
                )}

                <Separator className="bg-gradient-to-r from-purple-200 to-pink-200 h-0.5" />

                <div className="flex justify-between text-2xl font-bold">
                  <span className="text-gray-800">Total Imperial:</span>
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    ${total.toLocaleString()}
                  </span>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-200">
                  <div className="flex items-center space-x-2 text-blue-800 mb-2">
                    <Clock className="h-5 w-5" />
                    <span className="font-medium">Tiempo estimado: 45-60 min</span>
                  </div>
                  <p className="text-xs text-blue-600">
                    Nuestros chefs imperiales están preparando tu pedido con amor ✨
                  </p>
                </div>

                <Button
                  className="w-full h-12 text-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={handleSubmitOrder}
                  disabled={cart.length === 0}
                >
                  <Crown className="mr-2 h-5 w-5" />
                  Confirmar Pedido Imperial
                </Button>

                <p className="text-xs text-gray-500 text-center leading-relaxed">
                  Al confirmar tu pedido, aceptas nuestros términos del reino y te unes a la familia imperial de postres
                  👑
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <WhatsAppButton />
    </div>
  )
}
