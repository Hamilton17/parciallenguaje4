const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "buzo adidas",
      price: 109.999,
      description: "buzo adidas, manga larga estilo americano ",
      category: "ropa hombre",
      image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/247c128b603447f8b606ab5f0113d987_9366/buzo-con-capucha-badge-of-sport-felpa-francesa.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      title: "Camiseta oversize Elemental ",
      price: 98.999,
      description: "La camiseta oversize Elemental está hecha con una burda súper suave y cómoda de algodón recuperado y botellas PET reutilizadas, lo que la hace una prenda 100% reciclada y fabricada en pro del medio ambiente.",
      category: "ropa hombre",
      image: "https://yeticolombia.com/wp-content/uploads/2022/04/DSC04633.jpg",
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
    {
      id: 3,
      title: "Camiseta Oversized Fit en algodón",
      price: 57.999,
      description: "Blank Staples es una colección atemporal de ropa urbana minimalista de alta calidad. Esta camiseta oversize en punto grueso de algodón de 240 g/m2 ofrece un ajuste cómodo y relajado con hombros caídos y cuello redondo con ribete acanalado.",
      category: "ropa hombre",
      image: "https://hmcolombia.vtexassets.com/arquivos/ids/1943678/Camiseta-Oversized-Fit-en-algodon---Off-black---H-M-CO.jpg?v=637965796572770000",
      rating: {
        rate: 4.7,
        count: 500,
      },
    },
    {
      id: 4,
      title: " Bota Lifestyle Blanco-Negro TREME Remir",
      price: 250.999,
      description: "Este modelo está pensado para todo ya que cuenta con un diseño actual que marca tendencia en la moda masculina. Los tenis Remir Treme, cuentan con revestimientos sintéticos colocados estratégicamente para ofrecer estabilidad y seguridad a tu pequeña al momento de caminar, trotar o correr.",
      category: "calzado",
      image: "https://static.dafiti.com.co/p/treme-7077-3250981-2-product.jpg",
      rating: {
        rate: 2.1,
        count: 430,
      },
    },
    {
      id: 5,
      title: "Adidas performance",
      price: 269.999,
      description: "logra tus objetivos con este calzado. estos tenis de running adidas mantienen tus pies comodos sin importar la hora en que elijas correr. perfectos para el uso diario, tienen un exterior de malla transpirable y ligero que brinda frescura a tus pies.",
      category: "calzado",
      image: "https://static.dafiti.com.co/p/adidas-performance-1456-8103302-1-product.jpg",
      rating: {
        rate: 4.6,
        count: 400,
      },
    },
    {
      id: 6,
      title: "Pantalón 6308001 ",
      price: 279.999,
      description: "Pantalón de hombre, tiro medio, bota slim. Bolsillos en diagonal adelante y bolsillos de ribete con botón atrás. Un chino tradicional, que se reinventa con una silueta ligeramente entallada. Combínalo con una camisa con cuello, varsity jacket y tenis, para crear un look business casual perfecto.",
      category: "ropa hombre",
      image: "https://chevignon.vtexassets.com/arquivos/ids/744731-800-auto?v=637590482270000000&width=800&height=auto&aspect=true",
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
    {
      id: 7,
      title: "White GolASTRO Gaming A50 Wireless Gaming Headset with Base Station (Black & Gray, for Windows, Mac, and PS4)d Plated Princess",
      price: 379.999,
      description: "Mejora tus juegos con los auriculares inalámbricos para juegos ASTRO Gaming A50 en negro y gris . Diseñado para usar con computadoras Windows y Mac o las consolas PS4 y PS5, cuenta con controladores de 40 mm sintonizados con ASTRO Audio V2 para brindar un sonido claro y detallado en frecuencias y niveles de volumen.",
      category: "tecnologia",
      image: "https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/astro_gaming_939_001673_a50_wireless_headset_with_1635946551_1527191.jpg",
      rating: {
        rate: 3,
        count: 400,
      },
    },
    {
      id: 8,
      title: "Ratón inalámbrico para juegos Logitech G PRO X SUPERLIGHT (negro)",
      price: 55.999,
      description: "Diseñado para el jugador competitivo, el mouse inalámbrico para juegos G PRO X SUPERLIGHT de Logitech le brinda un movimiento fluido y una precisión avanzada. La tecnología inalámbrica de grado profesional LIGHTSPEED patentada de Logitech proporciona conectividad inalámbrica de 2,5 GHz, lo que le brinda una experiencia mejorada sin ataduras. El sensor óptico HERO 25K de Logitech le brinda un máximo de 25 400 ppp, una tasa de informe de 1000 Hz y un tiempo de respuesta de 1 ms para un control mejorado y una precisión precisa acelerada.",
      category: "tecnologia",
      image: "https://static.bhphoto.com/images/images150x150/1608734136_1609024.jpg",
      rating: {
        rate: 1.9,
        count: 100,
      },
    }
  ],
  cart: [],
  currentItem: null,
};

export default INITIAL_STATE;
