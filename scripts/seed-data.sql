-- Insertar datos iniciales para el sistema de postres
USE dulces_delicias;

-- Insertar usuario administrador
INSERT INTO users (name, email, phone, address, password_hash, role) VALUES
('Administrador', 'admin@dulcesdelicias.com', '+57 300 000 0000', 'Oficina Principal', '$2b$10$example_hash_for_admin', 'admin');

-- Insertar categorías
INSERT INTO categories (name, description) VALUES
('Copas de Postres', 'Postres servidos en copa con múltiples sabores'),
('Quesillos', 'Quesillos tradicionales caseros'),
('Postres Mixtos', 'Combinación de quesillo y postres');

-- Insertar sabores disponibles
INSERT INTO flavors (name, color_code) VALUES
('Mora', '#8B5CF6'),
('Natas', '#FEF3C7'),
('Arequipe', '#D97706'),
('Piña', '#FDE047'),
('Bocadillo', '#F97316');

-- Insertar productos
INSERT INTO products (category_id, name, description, base_price, max_flavors) VALUES
(1, 'Copa de Postres', 'Copa personalizable con hasta 5 sabores diferentes', 8000.00, 5),
(2, 'Quesillo Tradicional', 'Quesillo casero con receta tradicional', 25000.00, 0),
(2, 'Mitad de Quesillo', 'Porción individual de quesillo', 12000.00, 0),
(3, 'Postre Quesillo', 'Mitad quesillo tradicional y mitad postres', 10000.00, 3);

-- Insertar tamaños para Copa de Postres
INSERT INTO product_sizes (product_id, size_name, size_oz, price) VALUES
(1, '8oz', 8, 8000.00),
(1, '12oz', 12, 12000.00),
(1, '16oz', 16, 16000.00);

-- Insertar tamaños para Quesillo Tradicional
INSERT INTO product_sizes (product_id, size_name, size_oz, price) VALUES
(2, 'Entero', 0, 25000.00);

-- Insertar tamaños para Mitad de Quesillo
INSERT INTO product_sizes (product_id, size_name, size_oz, price) VALUES
(3, 'Mitad', 0, 12000.00);

-- Insertar tamaños para Postre Quesillo
INSERT INTO product_sizes (product_id, size_name, size_oz, price) VALUES
(4, '8oz', 8, 10000.00),
(4, '12oz', 12, 14000.00),
(4, '16oz', 16, 18000.00);

-- Insertar algunos usuarios de ejemplo
INSERT INTO users (name, email, phone, address, password_hash, role) VALUES
('María González', 'maria@email.com', '+57 300 123 4567', 'Calle 123 #45-67, Barrio Centro', '$2b$10$example_hash_1', 'customer'),
('Carlos Rodríguez', 'carlos@email.com', '+57 301 234 5678', 'Carrera 45 #12-34, Barrio Norte', '$2b$10$example_hash_2', 'customer'),
('Ana Martínez', 'ana@email.com', '+57 302 345 6789', 'Avenida 67 #89-12, Barrio Sur', '$2b$10$example_hash_3', 'customer');

-- Insertar algunos pedidos de ejemplo
INSERT INTO orders (user_id, order_number, customer_name, customer_phone, delivery_address, subtotal, delivery_fee, total, status) VALUES
(2, 'ORD-001', 'María González', '+57 300 123 4567', 'Calle 123 #45-67, Barrio Centro', 24000.00, 0.00, 24000.00, 'pending'),
(3, 'ORD-002', 'Carlos Rodríguez', '+57 301 234 5678', 'Carrera 45 #12-34, Barrio Norte', 33000.00, 0.00, 33000.00, 'preparing'),
(4, 'ORD-003', 'Ana Martínez', '+57 302 345 6789', 'Avenida 67 #89-12, Barrio Sur', 18000.00, 0.00, 18000.00, 'ready');

-- Insertar items de pedidos
INSERT INTO order_items (order_id, product_id, product_name, size_name, quantity, unit_price, total_price) VALUES
(1, 1, 'Copa de Postres', '12oz', 2, 12000.00, 24000.00),
(2, 2, 'Quesillo Tradicional', 'Entero', 1, 25000.00, 25000.00),
(2, 1, 'Copa de Postres', '8oz', 1, 8000.00, 8000.00),
(3, 4, 'Postre Quesillo', '16oz', 1, 18000.00, 18000.00);

-- Insertar sabores para los items de pedidos
INSERT INTO order_item_flavors (order_item_id, flavor_id, flavor_name) VALUES
(1, 1, 'Mora'),
(1, 3, 'Arequipe'),
(3, 4, 'Piña'),
(3, 2, 'Natas'),
(4, 5, 'Bocadillo'),
(4, 1, 'Mora');
