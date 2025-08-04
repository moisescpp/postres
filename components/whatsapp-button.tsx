"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)
  const whatsappNumber = "+573142185621"
  const message = "¡Hola! Me interesa conocer más sobre los deliciosos postres del Imperio del Postre 👑🍰"

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Tooltip */}
        {isHovered && (
          <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-3 min-w-[200px] animate-fade-in">
            <div className="text-sm font-medium text-gray-800 mb-1">¡Chatea con nosotros! 💬</div>
            <div className="text-xs text-gray-600">Te ayudamos a elegir tu postre perfecto</div>
            <div className="absolute bottom-[-6px] right-4 w-3 h-3 bg-white transform rotate-45 border-r border-b border-gray-200"></div>
          </div>
        )}

        {/* WhatsApp Button */}
        <Button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-bounce"
          size="icon"
        >
          <MessageCircle className="h-7 w-7 text-white" />
        </Button>

        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
      </div>
    </div>
  )
}
