-- Actualizar base de datos para Imperio del Postre
USE dulces_delicias;

-- Actualizar nombre de la aplicación en configuraciones
UPDATE categories SET 
    name = CASE 
        WHEN name = 'Copas de Postres' THEN 'Copas Mágicas'
        WHEN name = 'Quesillos' THEN 'Quesillos Imperiales'
        WHEN name = 'Postres Mixtos' THEN 'Postres Reales'
        ELSE name
    END,
    description = CASE 
        WHEN name = 'Copas Mágicas' THEN 'Postres mágicos servidos en copa con múltiples sabores celestiales'
        WHEN name = 'Quesillos Imperiales' THEN 'Quesillos tradicionales caseros de la más alta calidad imperial'
        WHEN name = 'Postres Reales' THEN 'Combinación real de quesillo y postres de hasta 5 sabores'
        ELSE description
    END;

-- Actualizar nombres de sabores
UPDATE flavors SET 
    name = CASE 
        WHEN name = 'Mora' THEN 'Mora Encantada'
        WHEN name = 'Natas' THEN 'Natas Celestiales'
        WHEN name = 'Arequipe' THEN 'Arequipe Imperial'
        WHEN name = 'Piña' THEN 'Piña Tropical'
        WHEN name = 'Bocadillo' THEN 'Bocadillo Real'
        ELSE name
    END;

-- Actualizar nombres de productos
UPDATE products SET 
    name = CASE 
        WHEN name = 'Copa de Postres' THEN 'Copa de Postres Mágica'
        WHEN name = 'Quesillo Tradicional' THEN 'Quesillo Imperial'
        WHEN name = 'Mitad de Quesillo' THEN 'Mitad de Quesillo Real'
        WHEN name = 'Postre Quesillo' THEN 'Postre Quesillo Real'
        ELSE name
    END,
    description = CASE 
        WHEN name = 'Copa de Postres Mágica' THEN 'Copa personalizable con hasta 5 sabores celestiales del reino'
        WHEN name = 'Quesillo Imperial' THEN 'Quesillo casero con receta secreta imperial'
        WHEN name = 'Mitad de Quesillo Real' THEN 'Porción individual de nuestro quesillo imperial'
        WHEN name = 'Postre Quesillo Real' THEN 'Mitad quesillo imperial y mitad postres de hasta 5 sabores'
        ELSE description
    END,
    max_flavors = CASE 
        WHEN name = 'Postre Quesillo Real' THEN 5
        ELSE max_flavors
    END;

-- Agregar tabla de configuración del sistema
CREATE TABLE IF NOT EXISTS system_config (
    id INT PRIMARY KEY AUTO_INCREMENT,
    config_key VARCHAR(100) UNIQUE NOT NULL,
    config_value TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insertar configuraciones del Imperio del Postre
INSERT INTO system_config (config_key, config_value, description) VALUES
('app_name', 'Imperio del Postre', 'Nombre de la aplicación'),
('app_tagline', 'Donde los sueños se vuelven dulces', 'Eslogan de la aplicación'),
('whatsapp_number', '+573142185621', 'Número de WhatsApp para contacto'),
('delivery_free_minimum', '30000', 'Monto mínimo para domicilio gratis'),
('delivery_fee', '3000', 'Costo del domicilio'),
('business_hours', 'Lun-Vie: 8:00-20:00, Sáb: 9:00-21:00, Dom: 10:00-18:00', 'Horarios de atención'),
('admin_email', 'admin@imperiodelpostre.com', 'Email del administrador'),
('max_flavors_copa', '5', 'Máximo de sabores para copa de postres'),
('max_flavors_mixto', '5', 'Máximo de sabores para postre quesillo')
ON DUPLICATE KEY UPDATE 
    config_value = VALUES(config_value),
    updated_at = CURRENT_TIMESTAMP;

-- Actualizar pedidos existentes con nuevos nombres
UPDATE order_items SET 
    product_name = CASE 
        WHEN product_name = 'Copa de Postres' THEN 'Copa de Postres Mágica'
        WHEN product_name = 'Quesillo Tradicional' THEN 'Quesillo Imperial'
        WHEN product_name = 'Mitad de Quesillo' THEN 'Mitad de Quesillo Real'
        WHEN product_name = 'Postre Quesillo' THEN 'Postre Quesillo Real'
        ELSE product_name
    END;

-- Actualizar sabores en pedidos existentes
UPDATE order_item_flavors SET 
    flavor_name = CASE 
        WHEN flavor_name = 'Mora' THEN 'Mora Encantada'
        WHEN flavor_name = 'Natas' THEN 'Natas Celestiales'
        WHEN flavor_name = 'Arequipe' THEN 'Arequipe Imperial'
        WHEN flavor_name = 'Piña' THEN 'Piña Tropical'
        WHEN flavor_name = 'Bocadillo' THEN 'Bocadillo Real'
        ELSE flavor_name
    END;

-- Crear tabla para testimonios de clientes
CREATE TABLE IF NOT EXISTS testimonials (
    id INT PRIMARY KEY AUTO_INCREMENT,
    customer_name VARCHAR(100) NOT NULL,
    customer_email VARCHAR(100),
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment TEXT NOT NULL,
    is_featured BOOLEAN DEFAULT FALSE,
    is_approved BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar algunos testimonios de ejemplo
INSERT INTO testimonials (customer_name, rating, comment, is_featured, is_approved) VALUES
('María González', 5, '¡Los postres del Imperio son absolutamente mágicos! La Copa de Postres Mágica con Mora Encantada y Arequipe Imperial es mi favorita. ¡Recomendado 100%!', TRUE, TRUE),
('Carlos Rodríguez', 5, 'El Quesillo Imperial es el mejor que he probado en mi vida. La textura es perfecta y el sabor es increíble. ¡Definitivamente volveré por más!', TRUE, TRUE),
('Ana Martínez', 5, 'El Postre Quesillo Real es una genialidad. Poder combinar quesillo con 5 sabores diferentes es lo máximo. ¡Una experiencia única!', TRUE, TRUE);

-- Crear índices para mejorar rendimiento
CREATE INDEX idx_system_config_key ON system_config(config_key);
CREATE INDEX idx_testimonials_featured ON testimonials(is_featured, is_approved);
CREATE INDEX idx_testimonials_rating ON testimonials(rating);
