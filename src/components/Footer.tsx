// Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">kRISJEN</h3>
            <p className="text-gray-300 mb-4">
              Trayendo diseños de joyería exquisitos desde 2010. Cada pieza cuenta una historia de artesanía y elegancia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Tienda</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition">Anillos</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition">Collares</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition">Aretes</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition">Pulseras</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition">Colección de Bodas</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Información</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition">Sobre Nosotros</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition">Contáctanos</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition">Política de Envío</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition">Devoluciones y Cambios</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition">Preguntas Frecuentes</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Boletín</h3>
            <p className="text-gray-300 mb-4">Suscríbete para recibir actualizaciones, ofertas exclusivas y más.</p>
            <form className="flex">
              <input type="email" placeholder="Ingresa tu correo" className="px-4 py-2 w-full rounded-l focus:outline-none" />
              <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded-r hover:bg-purple-700 transition">Suscribirse</button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Joya Elegante. Todos los derechos reservados. Comas, Perú.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
