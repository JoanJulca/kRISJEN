import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../components/CartContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getItemCount } = useCart();
  const itemCount = getItemCount();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-purple-600">
          kRISJEN
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600 transition">Inicio</Link>
            <Link to="/" className="text-gray-700 hover:text-purple-600 transition">Colecciones</Link>
            <Link to="/" className="text-gray-700 hover:text-purple-600 transition">Sobre Nosotros</Link>
            <Link to="/" className="text-gray-700 hover:text-purple-600 transition">Contacto</Link>
            
            {/* Botón de Agregar Producto */}
            <Link 
              to="/agregar-producto" 
              className="bg-purple-600 text-white px-3 py-2 rounded hover:bg-purple-700 transition flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Agregar Producto
            </Link>
            
            <Link to="/cart" className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 hover:text-purple-600 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <Link to="/" className="block py-2 text-gray-700 hover:text-purple-600 transition">Inicio</Link>
            <Link to="/" className="block py-2 text-gray-700 hover:text-purple-600 transition">Colecciones</Link>
            <Link to="/" className="block py-2 text-gray-700 hover:text-purple-600 transition">Sobre Nosotros</Link>
            <Link to="/" className="block py-2 text-gray-700 hover:text-purple-600 transition">Contacto</Link>
            {/* Botón de Agregar Producto para móvil */}
            <Link to="/agregar-producto" className="block py-2 text-gray-700 hover:text-purple-600 transition">
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Agregar Producto
              </span>
            </Link>
            <Link to="/cart" className="block py-2 text-gray-700 hover:text-purple-600 transition">
              Carrito ({itemCount})
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;