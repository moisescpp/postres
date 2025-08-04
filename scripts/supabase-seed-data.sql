-- Datos iniciales para Imperio del Postre en Supabase

-- Insertar categorías
INSERT INTO public.categories (name, description) VALUES
('Copas Mágicas', 'Postres mágicos servidos en copa con múltiples sabores celestiales'),
('Quesillos Imperiales', 'Quesillos tradicionales caseros de la más alta calidad imperial'),
('Postres Reales', 'Combinación real de quesillo y postres de hasta 5 sabores');

-- Insertar sabores disponibles
INSERT INTO public.flavors (name, color_code, description) VALUES
('Mora Encantada', '#8B5CF6', 'Dulce y mágica'),
('Natas Celestiales', '#FEF3C7', 'Cremosas y suaves'),
('Arequipe Imperial', '#D97706', 'Tradicional y rico'),
('Piña Tropical', '#FDE047', 'Fresca y exótica'),
('Bocadillo Real', '#F97316', 'Auténtico sabor');

-- Insertar productos
WITH category_ids AS (
    SELECT id, name FROM public.categories
)
INSERT INTO public.products (category_id, name, description, base_price, max_flavors, image_url) 
SELECT 
    c.id,
    CASE 
        WHEN c.name = 'Copas Mágicas' THEN 'Copa de Postres Mágica'
        WHEN c.name = 'Quesillos Imperiales' THEN 'Quesillo Imperial'
        WHEN c.name = 'Postres Reales' THEN 'Postre Quesillo Real'
    END,
    CASE 
        WHEN c.name = 'Copas Mágicas' THEN 'Copa personalizable con hasta 5 sabores celestiales del reino'
        WHEN c.name = 'Quesillos Imperiales' THEN 'Quesillo casero con receta secreta imperial'
        WHEN c.name = 'Postres Reales' THEN 'Mitad quesillo imperial y mitad postres de hasta 5 sabores'
    END,
    CASE 
        WHEN c.name = 'Copas Mágicas' THEN 8000.00
        WHEN c.name = 'Quesillos Imperiales' THEN 25000.00
        WHEN c.name = 'Postres Reales' THEN 10000.00
    END,
    CASE 
        WHEN c.name = 'Copas Mágicas' THEN 5
        WHEN c.name = 'Quesillos Imperiales' THEN 0
        WHEN c.name = 'Postres Reales' THEN 5
    END,
    '/placeholder.svg?height=300&width=300&text=' || REPLACE(c.name, ' ', '+')
FROM category_ids c;

-- Insertar producto adicional para quesillo mitad
INSERT INTO public.products (category_id, name, description, base_price, max_flavors, image_url)
SELECT 
    id,
    'Mitad de Quesillo Real',
    'Porción individual de nuestro quesillo imperial',
    12000.00,
    0,
    '/placeholder.svg?height=300&width=300&text=Mitad+Quesillo'
FROM public.categories WHERE name = 'Quesillos Imperiales';

-- Insertar tamaños para productos
WITH product_data AS (
    SELECT id, name FROM public.products
)
INSERT INTO public.product_sizes (product_id, size_name, size_oz, price)
SELECT 
    p.id,
    sizes.size_name,
    sizes.size_oz,
    sizes.price
FROM product_data p
CROSS JOIN (
    SELECT '8oz' as size_name, 8 as size_oz, 8000.00 as price
    UNION ALL SELECT '12oz', 12, 12000.00
    UNION ALL SELECT '16oz', 16, 16000.00
) sizes
WHERE p.name = 'Copa de Postres Mágica'

UNION ALL

SELECT 
    p.id,
    sizes.size_name,
    sizes.size_oz,
    sizes.price
FROM product_data p
CROSS JOIN (
    SELECT '8oz' as size_name, 8 as size_oz, 10000.00 as price
    UNION ALL SELECT '12oz', 12, 14000.00
    UNION ALL SELECT '16oz', 16, 18000.00
) sizes
WHERE p.name = 'Postre Quesillo Real'

UNION ALL

SELECT 
    p.id,
    'Entero' as size_name,
    0 as size_oz,
    25000.00 as price
FROM product_data p
WHERE p.name = 'Quesillo Imperial'

UNION ALL

SELECT 
    p.id,
    'Mitad' as size_name,
    0 as size_oz,
    12000.00 as price
FROM product_data p
WHERE p.name = 'Mitad de Quesillo Real';

-- Insertar configuraciones del sistema
INSERT INTO public.system_config (config_key, config_value, description) VALUES
('app_name', 'Imperio del Postre', 'Nombre de la aplicación'),
('app_tagline', 'Donde los sueños se vuelven dulces', 'Eslogan de la aplicación'),
('whatsapp_number', '+573142185621', 'Número de WhatsApp para contacto'),
('delivery_free_minimum', '30000', 'Monto mínimo para domicilio gratis'),
('delivery_fee', '3000', 'Costo del domicilio'),
('business_hours', 'Lun-Vie: 8:00-20:00, Sáb: 9:00-21:00, Dom: 10:00-18:00', 'Horarios de atención'),
('admin_email', 'admin@imperiodelpostre.com', 'Email del administrador'),
('max_flavors_copa', '5', 'Máximo de sabores para copa de postres'),
('max_flavors_mixto', '5', 'Máximo de sabores para postre quesillo');

-- Insertar testimonios de ejemplo
INSERT INTO public.testimonials (customer_name, rating, comment, is_featured, is_approved) VALUES
('María González', 5, '¡Los postres del Imperio son absolutamente mágicos! La Copa de Postres Mágica con Mora Encantada y Arequipe Imperial es mi favorita. ¡Recomendado 100%!', TRUE, TRUE),
('Carlos Rodríguez', 5, 'El Quesillo Imperial es el mejor que he probado en mi vida. La textura es perfecta y el sabor es increíble. ¡Definitivamente volveré por más!', TRUE, TRUE),
('Ana Martínez', 5, 'El Postre Quesillo Real es una genialidad. Poder combinar quesillo con 5 sabores diferentes es lo máximo. ¡Una experiencia única!', TRUE, TRUE);
