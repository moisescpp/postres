"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Package, DollarSign, TrendingUp, Clock, Eye, Edit, Trash2, Crown, Users, ShoppingBag } from "lucide-react"

// Datos de ejemplo mejorados
const orders = [
  {
    id: "IMP-001",
    customer: "María González",
    phone: "+57 300 123 4567",
    address: "Calle 123 #45-67, Barrio Centro",
    items: [
      {
        name: "Copa Mágica",
        flavors: ["Mora Encantada", "Arequipe Imperial"],
        size: "12oz",
        quantity: 2,
        price: 12000,
      },
    ],
    total: 24000,
    status: "pending",
    date: "2024-01-15 14:30",
    notes: "Sin azúcar adicional por favor",
  },
  {
    id: "IMP-002",
    customer: "Carlos Rodríguez",
    phone: "+57 301 234 5678",
    address: "Carrera 45 #12-34, Barrio Norte",
    items: [
      { name: "Quesillo Imperial", quantity: 1, price: 25000 },
      { name: "Copa Mágica", flavors: ["Piña Tropical", "Natas Celestiales"], size: "8oz", quantity: 1, price: 8000 },
    ],
    total: 33000,
    status: "preparing",
    date: "2024-01-15 15:45",
    notes: "",
  },
  {
    id: "IMP-003",
    customer: "Ana Martínez",
    phone: "+57 302 345 6789",
    address: "Avenida 67 #89-12, Barrio Sur",
    items: [
      {
        name: "Postre Quesillo Real",
        flavors: ["Bocadillo Real", "Mora Encantada", "Piña Tropical"],
        size: "16oz",
        quantity: 1,
        price: 18000,
      },
    ],
    total: 18000,
    status: "ready",
    date: "2024-01-15 16:20",
    notes: "Entrega después de las 6 PM",
  },
]

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
  preparing: "bg-blue-100 text-blue-800 border-blue-200",
  ready: "bg-green-100 text-green-800 border-green-200",
  delivered: "bg-gray-100 text-gray-800 border-gray-200",
  cancelled: "bg-red-100 text-red-800 border-red-200",
}

const statusLabels = {
  pending: "Pendiente",
  preparing: "Preparando",
  ready: "Listo",
  delivered: "Entregado",
  cancelled: "Cancelado",
}

export default function AdminDashboard() {
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null)
  const [orderFilter, setOrderFilter] = useState("all")

  const filteredOrders = orders.filter((order) => orderFilter === "all" || order.status === orderFilter)

  const stats = {
    totalOrders: orders.length,
    pendingOrders: orders.filter((o) => o.status === "pending").length,
    totalRevenue: orders.reduce((sum, order) => sum + order.total, 0),
    avgOrderValue: orders.reduce((sum, order) => sum + order.total, 0) / orders.length,
  }

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    console.log(`Updating order ${orderId} to ${newStatus}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">👑</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Panel Imperial
                </h1>
                <p className="text-xs text-gray-500">Administración del Reino</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <span className="text-sm font-medium text-purple-700">Bienvenida, Reina del Postre</span>
                <p className="text-xs text-gray-500">Administradora Imperial</p>
              </div>
              <Button variant="outline" size="sm" className="border-purple-200 hover:bg-purple-50 bg-transparent">
                Cerrar Sesión
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-purple-100 to-pink-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-purple-700">Pedidos del Reino</CardTitle>
              <Package className="h-5 w-5 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-700">{stats.totalOrders}</div>
              <p className="text-xs text-purple-600 mt-1">Hoy en el imperio</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-yellow-100 to-orange-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-orange-700">Pedidos Pendientes</CardTitle>
              <Clock className="h-5 w-5 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-700">{stats.pendingOrders}</div>
              <p className="text-xs text-orange-600 mt-1">Requieren atención real</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-100 to-blue-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-700">Tesoro del Día</CardTitle>
              <DollarSign className="h-5 w-5 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-700">${stats.totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-green-600 mt-1">+12% vs ayer ✨</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-pink-100 to-purple-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-pink-700">Ticket Promedio</CardTitle>
              <TrendingUp className="h-5 w-5 text-pink-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-pink-700">
                ${Math.round(stats.avgOrderValue).toLocaleString()}
              </div>
              <p className="text-xs text-pink-600 mt-1">Por pedido imperial</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="orders" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-white/60 backdrop-blur-sm border border-purple-100">
            <TabsTrigger
              value="orders"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Gestión de Pedidos
            </TabsTrigger>
            <TabsTrigger
              value="products"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
            >
              <Crown className="h-4 w-4 mr-2" />
              Productos Imperiales
            </TabsTrigger>
            <TabsTrigger
              value="customers"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
            >
              <Users className="h-4 w-4 mr-2" />
              Súbditos del Reino
            </TabsTrigger>
          </TabsList>

          <TabsContent value="orders" className="mt-6">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-purple-100 to-pink-100">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="flex items-center space-x-2 text-purple-700">
                      <Crown className="h-6 w-6" />
                      <span>Pedidos del Reino</span>
                    </CardTitle>
                    <CardDescription className="text-purple-600">
                      Gestiona todos los pedidos de tu imperio dulce
                    </CardDescription>
                  </div>
                  <Select value={orderFilter} onValueChange={setOrderFilter}>
                    <SelectTrigger className="w-48 border-purple-200">
                      <SelectValue placeholder="Filtrar por estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos los pedidos</SelectItem>
                      <SelectItem value="pending">Pendientes</SelectItem>
                      <SelectItem value="preparing">Preparando</SelectItem>
                      <SelectItem value="ready">Listos</SelectItem>
                      <SelectItem value="delivered">Entregados</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <Table>
                  <TableHeader>
                    <TableRow className="border-purple-100">
                      <TableHead className="text-purple-700 font-semibold">Pedido</TableHead>
                      <TableHead className="text-purple-700 font-semibold">Súbdito</TableHead>
                      <TableHead className="text-purple-700 font-semibold">Productos</TableHead>
                      <TableHead className="text-purple-700 font-semibold">Total</TableHead>
                      <TableHead className="text-purple-700 font-semibold">Estado</TableHead>
                      <TableHead className="text-purple-700 font-semibold">Fecha</TableHead>
                      <TableHead className="text-purple-700 font-semibold">Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredOrders.map((order) => (
                      <TableRow key={order.id} className="border-purple-50 hover:bg-purple-50/50">
                        <TableCell className="font-medium text-purple-700">{order.id}</TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium text-gray-800">{order.customer}</div>
                            <div className="text-sm text-gray-500">{order.phone}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            {order.items.map((item, idx) => (
                              <div key={idx} className="mb-1">
                                <span className="font-medium">
                                  {item.quantity}x {item.name}
                                </span>
                                {item.flavors && (
                                  <div className="flex flex-wrap gap-1 mt-1">
                                    {item.flavors.map((flavor, flavorIdx) => (
                                      <Badge
                                        key={flavorIdx}
                                        variant="secondary"
                                        className="text-xs bg-purple-100 text-purple-700"
                                      >
                                        {flavor}
                                      </Badge>
                                    ))}
                                  </div>
                                )}
                                {item.size && <span className="text-xs text-gray-500"> ({item.size})</span>}
                              </div>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell className="font-bold text-green-600">${order.total.toLocaleString()}</TableCell>
                        <TableCell>
                          <Badge className={`${statusColors[order.status as keyof typeof statusColors]} border`}>
                            {statusLabels[order.status as keyof typeof statusLabels]}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-gray-500">{order.date}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-purple-200 hover:bg-purple-50 bg-transparent"
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Select onValueChange={(value) => updateOrderStatus(order.id, value)}>
                              <SelectTrigger className="w-32 border-purple-200">
                                <SelectValue placeholder="Estado" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pending">Pendiente</SelectItem>
                                <SelectItem value="preparing">Preparando</SelectItem>
                                <SelectItem value="ready">Listo</SelectItem>
                                <SelectItem value="delivered">Entregado</SelectItem>
                                <SelectItem value="cancelled">Cancelado</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="mt-6">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-yellow-100 to-orange-100">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="flex items-center space-x-2 text-orange-700">
                      <Crown className="h-6 w-6" />
                      <span>Productos Imperiales</span>
                    </CardTitle>
                    <CardDescription className="text-orange-600">
                      Administra tu catálogo de delicias reales
                    </CardDescription>
                  </div>
                  <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600">
                    Agregar Producto
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="bg-gradient-to-r from-purple-100 to-pink-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg text-purple-700">Copa de Postres Mágica</CardTitle>
                      <CardDescription>Personalizable hasta 5 sabores celestiales</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>8oz:</span>
                          <span className="font-medium text-purple-600">$8.000</span>
                        </div>
                        <div className="flex justify-between">
                          <span>12oz:</span>
                          <span className="font-medium text-purple-600">$12.000</span>
                        </div>
                        <div className="flex justify-between">
                          <span>16oz:</span>
                          <span className="font-medium text-purple-600">$16.000</span>
                        </div>
                      </div>
                      <div className="flex space-x-2 mt-4">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-purple-200 hover:bg-purple-50 bg-transparent"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-red-200 hover:bg-red-50 text-red-600 bg-transparent"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-r from-yellow-100 to-orange-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg text-orange-700">Quesillo Imperial</CardTitle>
                      <CardDescription>Tradicional casero del más alto linaje</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Entero:</span>
                          <span className="font-medium text-orange-600">$25.000</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Mitad:</span>
                          <span className="font-medium text-orange-600">$12.000</span>
                        </div>
                      </div>
                      <div className="flex space-x-2 mt-4">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-orange-200 hover:bg-orange-50 bg-transparent"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-red-200 hover:bg-red-50 text-red-600 bg-transparent"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-r from-green-100 to-blue-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg text-green-700">Postre Quesillo Real</CardTitle>
                      <CardDescription>Mitad quesillo, mitad paraíso de sabores</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>8oz:</span>
                          <span className="font-medium text-green-600">$10.000</span>
                        </div>
                        <div className="flex justify-between">
                          <span>12oz:</span>
                          <span className="font-medium text-green-600">$14.000</span>
                        </div>
                        <div className="flex justify-between">
                          <span>16oz:</span>
                          <span className="font-medium text-green-600">$18.000</span>
                        </div>
                      </div>
                      <div className="flex space-x-2 mt-4">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-green-200 hover:bg-green-50 bg-transparent"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-red-200 hover:bg-red-50 text-red-600 bg-transparent"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="customers" className="mt-6">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-100 to-purple-100">
                <CardTitle className="flex items-center space-x-2 text-blue-700">
                  <Users className="h-6 w-6" />
                  <span>Súbditos del Reino</span>
                </CardTitle>
                <CardDescription className="text-blue-600">Información de tus clientes más leales</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <Table>
                  <TableHeader>
                    <TableRow className="border-blue-100">
                      <TableHead className="text-blue-700 font-semibold">Súbdito</TableHead>
                      <TableHead className="text-blue-700 font-semibold">Teléfono</TableHead>
                      <TableHead className="text-blue-700 font-semibold">Dirección</TableHead>
                      <TableHead className="text-blue-700 font-semibold">Pedidos</TableHead>
                      <TableHead className="text-blue-700 font-semibold">Total Gastado</TableHead>
                      <TableHead className="text-blue-700 font-semibold">Último Pedido</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-blue-50 hover:bg-blue-50/50">
                      <TableCell className="font-medium text-gray-800">María González</TableCell>
                      <TableCell>+57 300 123 4567</TableCell>
                      <TableCell>Calle 123 #45-67</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-700 border-green-200">5 pedidos</Badge>
                      </TableCell>
                      <TableCell className="font-bold text-green-600">$120.000</TableCell>
                      <TableCell>15/01/2024</TableCell>
                    </TableRow>
                    <TableRow className="border-blue-50 hover:bg-blue-50/50">
                      <TableCell className="font-medium text-gray-800">Carlos Rodríguez</TableCell>
                      <TableCell>+57 301 234 5678</TableCell>
                      <TableCell>Carrera 45 #12-34</TableCell>
                      <TableCell>
                        <Badge className="bg-blue-100 text-blue-700 border-blue-200">3 pedidos</Badge>
                      </TableCell>
                      <TableCell className="font-bold text-green-600">$85.000</TableCell>
                      <TableCell>15/01/2024</TableCell>
                    </TableRow>
                    <TableRow className="border-blue-50 hover:bg-blue-50/50">
                      <TableCell className="font-medium text-gray-800">Ana Martínez</TableCell>
                      <TableCell>+57 302 345 6789</TableCell>
                      <TableCell>Avenida 67 #89-12</TableCell>
                      <TableCell>
                        <Badge className="bg-purple-100 text-purple-700 border-purple-200">2 pedidos</Badge>
                      </TableCell>
                      <TableCell className="font-bold text-green-600">$36.000</TableCell>
                      <TableCell>15/01/2024</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
