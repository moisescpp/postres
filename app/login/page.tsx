"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, EyeOff, Crown, Sparkles } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  })

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login attempt:", loginData)
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Register attempt:", registerData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-60 animate-bounce"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-pink-200 rounded-full opacity-60 animate-bounce delay-300"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-yellow-200 rounded-full opacity-60 animate-bounce delay-700"></div>
      <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-blue-200 rounded-full opacity-60 animate-bounce delay-500"></div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex flex-col items-center space-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-xl animate-pulse">
              <span className="text-white font-bold text-2xl">👑</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Imperio del Postre
              </h1>
              <p className="text-sm text-gray-500">Donde los sueños se vuelven dulces</p>
            </div>
          </Link>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-white/60 backdrop-blur-sm border border-purple-100">
            <TabsTrigger
              value="login"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
            >
              Iniciar Sesión
            </TabsTrigger>
            <TabsTrigger
              value="register"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
            >
              Unirse al Reino
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-t-lg">
                <CardTitle className="flex items-center space-x-2 text-purple-700">
                  <Crown className="h-6 w-6" />
                  <span>Bienvenido de vuelta</span>
                </CardTitle>
                <CardDescription className="text-purple-600">
                  Ingresa tus credenciales para acceder a tu cuenta imperial
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-purple-700 font-medium">
                      Correo Electrónico
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                      className="border-purple-200 focus:border-purple-400"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-purple-700 font-medium">
                      Contraseña
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Tu contraseña secreta"
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        className="border-purple-200 focus:border-purple-400 pr-10"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-purple-500" />
                        ) : (
                          <Eye className="h-4 w-4 text-purple-500" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Link
                      href="/forgot-password"
                      className="text-sm text-purple-600 hover:text-pink-600 hover:underline"
                    >
                      ¿Olvidaste tu contraseña mágica?
                    </Link>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Sparkles className="mr-2 h-4 w-4" />
                    Entrar al Reino
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    ¿Eres la administradora imperial?{" "}
                    <Link
                      href="/admin/login"
                      className="text-purple-600 hover:text-pink-600 hover:underline font-medium"
                    >
                      Acceso de la Reina
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="register">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-green-100 to-blue-100 rounded-t-lg">
                <CardTitle className="flex items-center space-x-2 text-green-700">
                  <Sparkles className="h-6 w-6" />
                  <span>Únete al Reino</span>
                </CardTitle>
                <CardDescription className="text-green-600">
                  Regístrate para comenzar tu aventura dulce en nuestro imperio
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-green-700 font-medium">
                      Nombre Completo
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Tu nombre real"
                      value={registerData.name}
                      onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                      className="border-green-200 focus:border-green-400"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-email" className="text-green-700 font-medium">
                      Correo Electrónico
                    </Label>
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="tu@email.com"
                      value={registerData.email}
                      onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                      className="border-green-200 focus:border-green-400"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-green-700 font-medium">
                      Teléfono
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+57 300 123 4567"
                      value={registerData.phone}
                      onChange={(e) => setRegisterData({ ...registerData, phone: e.target.value })}
                      className="border-green-200 focus:border-green-400"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-green-700 font-medium">
                      Dirección de tu Castillo
                    </Label>
                    <Input
                      id="address"
                      type="text"
                      placeholder="Calle 123 #45-67, Barrio Mágico"
                      value={registerData.address}
                      onChange={(e) => setRegisterData({ ...registerData, address: e.target.value })}
                      className="border-green-200 focus:border-green-400"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-password" className="text-green-700 font-medium">
                      Contraseña Secreta
                    </Label>
                    <div className="relative">
                      <Input
                        id="register-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Mínimo 8 caracteres mágicos"
                        value={registerData.password}
                        onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                        className="border-green-200 focus:border-green-400 pr-10"
                        required
                        minLength={8}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-green-500" />
                        ) : (
                          <Eye className="h-4 w-4 text-green-500" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password" className="text-green-700 font-medium">
                      Confirmar Contraseña
                    </Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="Repite tu contraseña secreta"
                      value={registerData.confirmPassword}
                      onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                      className="border-green-200 focus:border-green-400"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Crown className="mr-2 h-4 w-4" />
                    Convertirse en Súbdito
                  </Button>
                </form>

                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500">
                    Al registrarte, aceptas nuestros{" "}
                    <Link href="/terms" className="text-green-600 hover:text-blue-600 hover:underline">
                      Términos del Reino
                    </Link>{" "}
                    y{" "}
                    <Link href="/privacy" className="text-green-600 hover:text-blue-600 hover:underline">
                      Política de Privacidad Imperial
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-sm text-gray-600 hover:text-purple-600 transition-colors flex items-center justify-center space-x-1"
          >
            <span>←</span>
            <span>Volver al Reino</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
