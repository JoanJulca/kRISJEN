import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../components/Product';

// Importamos los datos de cada categoría
import anillosData from '../Data/anillos';
import collaresData from '../Data/collares';
import aretesData from '../Data/aretes';
import pulserasData from '../Data/pulseras';
import relojesData from '../Data/relojes';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filter, setFilter] = useState<string>('todos');

  useEffect(() => {
    // Combinamos todos los datos de las diferentes categorías
    const allProducts = [
      ...anillosData,
      ...collaresData,
      ...aretesData,
      ...pulserasData,
      ...relojesData
    ];
    
    setProducts(allProducts);
    setLoading(false);
  }, []);

  const filteredProducts = filter === 'todos' 
    ? products 
    : products.filter(product => product.category === filter);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-8">Colección de Joyería de Lujo</h1>
        
        <div className="flex justify-center gap-4 mb-8">
          <button 
            onClick={() => setFilter('todos')}
            className={`px-4 py-2 rounded ${filter === 'todos' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
          >
            Todos
          </button>
          <button 
            onClick={() => setFilter('anillos')}
            className={`px-4 py-2 rounded ${filter === 'anillos' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
          >
            Anillos
          </button>
          <button 
            onClick={() => setFilter('collares')}
            className={`px-4 py-2 rounded ${filter === 'collares' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
          >
            Collares
          </button>
          <button 
            onClick={() => setFilter('aretes')}
            className={`px-4 py-2 rounded ${filter === 'aretes' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
          >
            Aretes
          </button>
          <button 
            onClick={() => setFilter('pulseras')}
            className={`px-4 py-2 rounded ${filter === 'pulseras' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
          >
            Pulseras
          </button>
          <button 
            onClick={() => setFilter('relojes')}
            className={`px-4 py-2 rounded ${filter === 'relojes' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
          >
            Relojes
          </button>
        </div>
      </div>
      
      {loading ? (
        <p className="text-center">Cargando productos...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;