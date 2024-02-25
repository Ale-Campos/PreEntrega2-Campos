export default class Producto {
  constructor() {
  }

  static listarProductos() {
    return [
        { id: 1, category:"computadoras", title: "Laptop ASUS ZenBook", description: "Una potente laptop con procesador Intel Core i7, 16 GB de RAM y SSD de 512 GB.", details: "Pantalla: 14 pulgadas FHD, Procesador: Intel Core i7, RAM: 16 GB, Almacenamiento: SSD 512 GB", price: 1000, stock: 10, pictureUrl: "https://via.placeholder.com/200" },
        { id: 2, category:"celulares", title: "Smartphone Samsung Galaxy S21", description: "El último modelo de Samsung con pantalla AMOLED de 6.2 pulgadas, cámara triple y 128 GB de almacenamiento.", details: "Pantalla: 6.2 pulgadas AMOLED, Cámara: Triple 12MP+12MP+64MP, Almacenamiento: 128 GB", price: 2000, stock: 10, pictureUrl: "https://via.placeholder.com/200" },
        { id: 3, category:"celulares", title: "Tableta Apple iPad Pro", description: "Una tableta potente con pantalla Retina de 12.9 pulgadas, chip M1 y capacidad de 256 GB.", details: "Pantalla: 12.9 pulgadas Retina, Procesador: Chip M1, Almacenamiento: 256 GB", price: 3000, stock: 10, pictureUrl: "https://via.placeholder.com/200" },
        { id: 4, category:"computdora", title: "Monitor Gaming Acer Predator", description: "Un monitor de alta frecuencia de actualización, resolución 4K y tecnología G-Sync para una experiencia de juego inmersiva.", details: "Resolución: 4K, Frecuencia de actualización: 144Hz, Tecnología: G-Sync", price: 4000, stock: 10, pictureUrl: "https://via.placeholder.com/200" },
        { id: 5, category:"otros", title: "Cámara Sony Alpha A7III", description: "Una cámara mirrorless con sensor full-frame de 24.2 megapíxeles, grabación de video 4K y estabilización de imagen.", details: "Sensor: Full-frame 24.2 MP, Grabación de video: 4K, Estabilización de imagen: Sí", price: 5000, stock: 10, pictureUrl: "https://via.placeholder.com/200" },
        { id: 6, category:"accesorios", title: "Auriculares Inalámbricos Bose QuietComfort 35 II", description: "Auriculares con cancelación de ruido, conexión Bluetooth y hasta 20 horas de autonomía.", details: "Cancelación de ruido: Sí, Conexión: Bluetooth, Autonomía de batería: Hasta 20 horas", price: 6000, stock: 10, pictureUrl: "https://via.placeholder.com/200" },
        { id: 7, category:"accesorios", title: "Teclado mecánico Corsair K95 RGB Platinum XT", description: "Un teclado mecánico premium con retroiluminación RGB, interruptores Cherry MX y teclas programables.", details: "Tipo de interruptor: Cherry MX, Retroiluminación: RGB, Teclas programables: Sí", price: 7000, stock: 10, pictureUrl: "https://via.placeholder.com/200" },
        { id: 8, category:"otros", title: "Impresora 3D Creality Ender 3", description: "Impresora 3D de nivel de entrada con volumen de construcción grande y fácil montaje.", details: "Volumen de construcción: Grande, Nivel de entrada: Sí, Montaje: Fácil", price: 8000, stock: 10, pictureUrl: "https://via.placeholder.com/200" },
        { id: 9, category:"accesorios", title: "Altavoces Sonos Play:5", description: "Altavoces inalámbricos de alta fidelidad con tecnología Trueplay para un sonido excepcional.", details: "Tecnología: Trueplay, Sonido: Alta fidelidad, Conexión: Inalámbrica", price: 9000, stock: 10, pictureUrl: "https://via.placeholder.com/200" },
        { id: 10, category:"otros", title: "Router Mesh TP-Link Deco X60", description: "Un sistema de red mesh para toda la casa con tecnología WiFi 6 para una conexión rápida y estable.", details: "Tecnología: WiFi 6, Cobertura: Toda la casa, Conexión: Rápida y estable", price: 10000, stock: 10, pictureUrl: "https://via.placeholder.com/200" },
        { id: 11, category:"accesorios", title: "Mouse Logitech MX Master 3", description: "Un mouse inalámbrico avanzado con seguimiento de alta precisión y batería de larga duración.", details: "Seguimiento: Alta precisión, Conexión: Inalámbrica, Batería: Larga duración", price: 11000, stock: 10, pictureUrl: "https://via.placeholder.com/200" },
        { id: 12, category:"tvs", title: "Smart TV LG OLED CX", description: "Televisor OLED 4K con Dolby Vision, sonido Dolby Atmos y capacidad de control por voz.", details: "Resolución: 4K OLED, Dolby Vision: Sí, Sonido: Dolby Atmos", price: 12000, stock: 10, pictureUrl: "https://via.placeholder.com/200" },
        { id: 13, category:"otros", title: "Robot Aspirador iRobot Roomba i7+", description: "Un robot aspirador inteligente con navegación vSLAM, limpieza personalizada y capacidad de vaciado automático.", details: "Navegación: vSLAM, Limpieza: Personalizada, Vaciado automático: Sí", price: 13000, stock: 10, pictureUrl: "https://via.placeholder.com/200" },
        { id: 14, category:"otros", title: "Reproductor de Streaming Roku Ultra", description: "Un reproductor de streaming 4K con soporte HDR, control remoto con botones de acceso directo y búsqueda por voz.", details: "Resolución: 4K, HDR: Sí, Control remoto: Botones de acceso directo, Búsqueda por voz: Sí", price: 14000, stock: 10, pictureUrl: "https://via.placeholder.com/200" },
        { id: 15, category:"otros", title: "Batería Externa Anker PowerCore+", description: "Una batería externa de alta capacidad con carga rápida, compatible con dispositivos USB-C y USB-A.", details: "Capacidad: Alta, Carga rápida: Sí, Compatibilidad: USB-C y USB-A", price: 15000, stock: 10, pictureUrl: "https://via.placeholder.com/200" }
    ]
  }
}