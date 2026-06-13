const WHATSAPP_NUMBER = "TU_NUMERO_AQUI";
const INSTAGRAM_URL = "https://www.instagram.com/rose_candles";

const categorias = ["Todas", "Aromáticas", "Decorativas", "Regalo", "Personalizadas", "Temporada"];

const productos = [
  {
    id: 1,
    nombre: "Vela Aurora Rosa",
    categoria: "Aromáticas",
    aroma: "Rosa y vainilla",
    tamaño: "Mediana",
    precio: "$180 MXN",
    descripcion: "Vela suave en vaso claro con aroma floral dulce para espacios tranquilos.",
    imagen: "img/vela-1.jpg",
    destacado: true
  },
  {
    id: 2,
    nombre: "Vela Jardín de Lavanda",
    categoria: "Aromáticas",
    aroma: "Lavanda",
    tamaño: "Grande",
    precio: "$240 MXN",
    descripcion: "Ideal para relajarse al final del día con una fragancia limpia y delicada.",
    imagen: "img/vela-2.jpg",
    destacado: true
  },
  {
    id: 3,
    nombre: "Vela Flor Secas",
    categoria: "Decorativas",
    aroma: "Algodón fresco",
    tamaño: "Mediana",
    precio: "$210 MXN",
    descripcion: "Decorada con flores secas y acabado artesanal para mesas y repisas.",
    imagen: "img/vela-3.jpg",
    destacado: false
  },
  {
    id: 4,
    nombre: "Set Detalle Dorado",
    categoria: "Regalo",
    aroma: "Ámbar suave",
    tamaño: "Set de 2",
    precio: "$320 MXN",
    descripcion: "Un set elegante para cumpleaños, agradecimientos o detalles especiales.",
    imagen: "img/vela-4.jpg",
    destacado: true
  },
  {
    id: 5,
    nombre: "Vela Inicial Personalizada",
    categoria: "Personalizadas",
    aroma: "Vainilla cálida",
    tamaño: "Chica",
    precio: "$160 MXN",
    descripcion: "Diseño con inicial, color y aroma sujetos a disponibilidad.",
    imagen: "img/vela-5.jpg",
    destacado: false
  },
  {
    id: 6,
    nombre: "Vela Brisa de Coco",
    categoria: "Aromáticas",
    aroma: "Coco y almendra",
    tamaño: "Mediana",
    precio: "$190 MXN",
    descripcion: "Fragancia cremosa y luminosa para dar sensación de hogar limpio.",
    imagen: "img/vela-6.jpg",
    destacado: false
  },
  {
    id: 7,
    nombre: "Vela Centro de Mesa",
    categoria: "Decorativas",
    aroma: "Sin aroma",
    tamaño: "Grande",
    precio: "$260 MXN",
    descripcion: "Pieza decorativa de líneas suaves para eventos, cenas y rincones especiales.",
    imagen: "img/vela-7.jpg",
    destacado: true
  },
  {
    id: 8,
    nombre: "Mini Velas Gracias",
    categoria: "Regalo",
    aroma: "Miel y flores",
    tamaño: "Set de 4",
    precio: "$280 MXN",
    descripcion: "Mini velas listas para entregar como recuerdo o detalle de agradecimiento.",
    imagen: "img/vela-8.jpg",
    destacado: false
  },
  {
    id: 9,
    nombre: "Vela Cereza Blanca",
    categoria: "Aromáticas",
    aroma: "Cereza y almizcle",
    tamaño: "Mediana",
    precio: "$195 MXN",
    descripcion: "Aroma dulce, elegante y equilibrado para habitaciones y tocadores.",
    imagen: "img/vela-1.jpg",
    destacado: false
  },
  {
    id: 10,
    nombre: "Vela Nombre Especial",
    categoria: "Personalizadas",
    aroma: "Rosa palo",
    tamaño: "Mediana",
    precio: "$230 MXN",
    descripcion: "Vela con etiqueta personalizada para regalos, bodas o pedidos especiales.",
    imagen: "img/vela-2.jpg",
    destacado: false
  },
  {
    id: 11,
    nombre: "Vela Otoño Suave",
    categoria: "Temporada",
    aroma: "Canela y naranja",
    tamaño: "Grande",
    precio: "$250 MXN",
    descripcion: "Una mezcla cálida para temporadas frescas y ambientes acogedores.",
    imagen: "img/vela-3.jpg",
    destacado: false
  },
  {
    id: 12,
    nombre: "Vela Noche Serena",
    categoria: "Aromáticas",
    aroma: "Sándalo",
    tamaño: "Grande",
    precio: "$255 MXN",
    descripcion: "Aroma envolvente con carácter suave para salas, estudios o recámaras.",
    imagen: "img/vela-4.jpg",
    destacado: false
  },
  {
    id: 13,
    nombre: "Vela Perla Decorativa",
    categoria: "Decorativas",
    aroma: "Peonía",
    tamaño: "Chica",
    precio: "$170 MXN",
    descripcion: "Diseño delicado con textura perlada para decorar pequeños espacios.",
    imagen: "img/vela-5.jpg",
    destacado: false
  },
  {
    id: 14,
    nombre: "Caja Regalo Rose",
    categoria: "Regalo",
    aroma: "Vainilla y jazmín",
    tamaño: "Caja especial",
    precio: "$390 MXN",
    descripcion: "Presentación lista para regalar con vela, etiqueta y detalle decorativo.",
    imagen: "img/vela-6.jpg",
    destacado: false
  },
  {
    id: 15,
    nombre: "Vela Evento Botánica",
    categoria: "Personalizadas",
    aroma: "Té blanco",
    tamaño: "Pedido especial",
    precio: "Desde $140 MXN",
    descripcion: "Opción para eventos con colores, etiquetas y aromas personalizados.",
    imagen: "img/vela-7.jpg",
    destacado: false
  },
  {
    id: 16,
    nombre: "Vela Invierno Rosado",
    categoria: "Temporada",
    aroma: "Pino suave y frutos rojos",
    tamaño: "Mediana",
    precio: "$220 MXN",
    descripcion: "Edición de temporada con aroma fresco, dulce y presentación cálida.",
    imagen: "img/vela-8.jpg",
    destacado: false
  }
];

const catalogProducts = document.querySelector("#catalogProducts");
const featuredProducts = document.querySelector("#featuredProducts");
const categoryFilters = document.querySelector("#categoryFilters");
const searchInput = document.querySelector("#searchInput");
const catalogCount = document.querySelector("#catalogCount");
const emptyState = document.querySelector("#emptyState");
const menuToggle = document.querySelector("#menuToggle");
const primaryMenu = document.querySelector("#primaryMenu");
const backToTop = document.querySelector("#backToTop");

let activeCategory = "Todas";

function createWhatsappLink(productName = "") {
  const message = productName
    ? `Hola, me interesa el producto ${productName} de Rose Candles.`
    : "Hola, me interesa conocer más sobre Rose Candles.";

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function normalizeText(text) {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function productTemplate(product) {
  return `
    <article class="product-card">
      <div class="product-image">
        <img src="${product.imagen}" alt="${product.nombre}">
      </div>
      <div class="product-body">
        <h3>${product.nombre}</h3>
        <div class="product-meta">
          <span class="tag">${product.categoria}</span>
          <span class="tag">${product.aroma}</span>
          <span class="tag">${product.tamaño}</span>
        </div>
        <p class="product-description">${product.descripcion}</p>
        <p class="price">${product.precio}</p>
        <a class="btn btn-secondary" href="${createWhatsappLink(product.nombre)}" target="_blank" rel="noopener">
          Consultar por WhatsApp
        </a>
      </div>
    </article>
  `;
}

function renderFeaturedProducts() {
  const featured = productos.filter((product) => product.destacado).slice(0, 4);
  featuredProducts.innerHTML = featured.map(productTemplate).join("");
}

function getFilteredProducts() {
  const searchTerm = normalizeText(searchInput.value.trim());

  return productos.filter((product) => {
    const matchesCategory = activeCategory === "Todas" || product.categoria === activeCategory;
    const searchableText = normalizeText(`${product.nombre} ${product.aroma} ${product.descripcion}`);
    const matchesSearch = searchableText.includes(searchTerm);

    return matchesCategory && matchesSearch;
  });
}

function renderCatalogProducts() {
  const filteredProducts = getFilteredProducts();

  catalogProducts.innerHTML = filteredProducts.map(productTemplate).join("");
  catalogCount.textContent = `${filteredProducts.length} producto${filteredProducts.length === 1 ? "" : "s"} disponible${filteredProducts.length === 1 ? "" : "s"}`;
  emptyState.hidden = filteredProducts.length > 0;
}

function renderCategoryFilters() {
  categoryFilters.innerHTML = categorias
    .map((category) => `
      <button class="filter-button${category === activeCategory ? " is-active" : ""}" type="button" data-category="${category}">
        ${category}
      </button>
    `)
    .join("");
}

function closeMobileMenu() {
  menuToggle.classList.remove("is-open");
  primaryMenu.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

categoryFilters.addEventListener("click", (event) => {
  const button = event.target.closest(".filter-button");
  if (!button) return;

  activeCategory = button.dataset.category;
  renderCategoryFilters();
  renderCatalogProducts();
});

searchInput.addEventListener("input", renderCatalogProducts);

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.classList.toggle("is-open");
  primaryMenu.classList.toggle("is-open", isOpen);
  menuToggle.setAttribute("aria-expanded", isOpen.toString());
  document.body.classList.toggle("menu-open", isOpen);
});

primaryMenu.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    closeMobileMenu();
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("is-visible", window.scrollY > 500);
});

document.querySelector("#currentYear").textContent = new Date().getFullYear();
document.querySelector("#heroWhatsapp").href = createWhatsappLink();
document.querySelector("#contactWhatsapp").href = createWhatsappLink();
document.querySelector("#footerWhatsapp").href = createWhatsappLink();
document.querySelector("#instagramLink").href = INSTAGRAM_URL;
document.querySelector("#footerInstagram").href = INSTAGRAM_URL;

renderCategoryFilters();
renderFeaturedProducts();
renderCatalogProducts();
