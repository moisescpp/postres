import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Cliente para el servidor (con service role key)
export const supabaseAdmin = createClient(supabaseUrl, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})

// Tipos de la base de datos
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          name: string
          email: string
          phone: string
          address: string
          role: "customer" | "admin"
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          name: string
          email: string
          phone: string
          address: string
          role?: "customer" | "admin"
        }
        Update: {
          name?: string
          email?: string
          phone?: string
          address?: string
          role?: "customer" | "admin"
        }
      }
      categories: {
        Row: {
          id: string
          name: string
          description: string | null
          created_at: string
        }
      }
      flavors: {
        Row: {
          id: string
          name: string
          color_code: string | null
          description: string | null
          is_active: boolean
          created_at: string
        }
      }
      products: {
        Row: {
          id: string
          category_id: string | null
          name: string
          description: string | null
          base_price: number
          is_active: boolean
          max_flavors: number
          image_url: string | null
          created_at: string
          updated_at: string
        }
      }
      product_sizes: {
        Row: {
          id: string
          product_id: string
          size_name: string
          size_oz: number | null
          price: number
          is_active: boolean
        }
      }
      orders: {
        Row: {
          id: string
          user_id: string | null
          order_number: string
          customer_name: string
          customer_phone: string
          delivery_address: string
          delivery_time_preference: string | null
          special_notes: string | null
          subtotal: number
          delivery_fee: number
          total: number
          status: "pending" | "preparing" | "ready" | "delivered" | "cancelled"
          created_at: string
          updated_at: string
        }
        Insert: {
          user_id?: string | null
          order_number: string
          customer_name: string
          customer_phone: string
          delivery_address: string
          delivery_time_preference?: string | null
          special_notes?: string | null
          subtotal: number
          delivery_fee?: number
          total: number
          status?: "pending" | "preparing" | "ready" | "delivered" | "cancelled"
        }
      }
      order_items: {
        Row: {
          id: string
          order_id: string
          product_id: string | null
          product_name: string
          size_name: string | null
          quantity: number
          unit_price: number
          total_price: number
          special_notes: string | null
        }
        Insert: {
          order_id: string
          product_id?: string | null
          product_name: string
          size_name?: string | null
          quantity: number
          unit_price: number
          total_price: number
          special_notes?: string | null
        }
      }
      order_item_flavors: {
        Row: {
          id: string
          order_item_id: string
          flavor_id: string | null
          flavor_name: string
        }
        Insert: {
          order_item_id: string
          flavor_id?: string | null
          flavor_name: string
        }
      }
      system_config: {
        Row: {
          id: string
          config_key: string
          config_value: string
          description: string | null
          created_at: string
          updated_at: string
        }
      }
      testimonials: {
        Row: {
          id: string
          customer_name: string
          customer_email: string | null
          rating: number
          comment: string
          is_featured: boolean
          is_approved: boolean
          created_at: string
        }
      }
    }
  }
}
