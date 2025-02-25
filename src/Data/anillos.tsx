import { Product } from '../components/Product';

// Importa las imágenes directamente
import anillo1 from "../assets/Anillos/anillo.jpg";
import anillo2 from "../assets/Anillos/anillo2.jpg";
import anillo3 from "../assets/Anillos/anillo3.jpg";
import anillo4 from "../assets/Anillos/anillo4.jpg";

const anillosData: Product[] = [
  {
    id: 1,
    name: "Anillo Solitario Diamante",
    price: 19.99,
    image: anillo1, // Usa la variable importada
    description: "Elegante anillo de oro de 14K con un brillante diamante solitario de 1 quilate, perfecto para ocasiones especiales.",
    category: "anillos"
  },
  {
    id: 2,
    name: "Anillo de Compromiso Esmeralda",
    price: 10.99,
    image: anillo2, // Usa la variable importada
    description: "Hermoso anillo de compromiso con esmeralda central de 0.8 quilates rodeada de pequeños diamantes en oro blanco de 18K.",
    category: "anillos"
  },
  {
    id: 3,
    name: "Anillo Infinito con Zafiros",
    price: 10.99,
    image: anillo3, // Usa la variable importada
    description: "Anillo con diseño de infinito decorado con pequeños zafiros azules y diamantes en oro rosa de 14K.",
    category: "anillos"
  },
  {
    id: 4,
    name: "Anillo Vintage de Rubí",
    price: 99.99,
    image: anillo4, // Usa la variable importada
    description: "Anillo de estilo vintage con rubí central de 0.75 quilates y detalles filigrana en oro amarillo de 18K.",
    category: "anillos"
  }
];

export default anillosData;