import React, { useState, useEffect } from 'react';
import { useCart } from '../components/CartContext'; // Ajusta la ruta según tu estructura

interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

const ProductCard: React.FC<ProductProps> = ({ id, name, price, image, description, category }) => {
  const { cartItems, addToCart } = useCart();
  const [showNotification, setShowNotification] = useState(false);
  const [isProductInCart, setIsProductInCart] = useState(false);
  const [quantity, setQuantity] = useState(0);

  // Verificar si el producto está en el carrito y obtener su cantidad
  useEffect(() => {
    const cartItem = cartItems.find(item => item.id === id);
    setIsProductInCart(!!cartItem);
    setQuantity(cartItem ? cartItem.quantity : 0);
  }, [cartItems, id]);

  const handleAddToCart = () => {
    addToCart({ id, name, price, image, description, category });
    
    // Mostrar la notificación
    setShowNotification(true);
    
    // La actualización del estado se manejará en el useEffect cuando cartItems cambie
    
    // Ocultar la notificación después de 2 segundos
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  return (
    <div className={`border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative ${isProductInCart ? 'border-green-500 border-2' : ''}`}>
      {showNotification && (
        <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full shadow-md animate-bounce">
          ¡Agregado al carrito!
        </div>
      )}
      
      {isProductInCart && (
        <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full shadow-md">
          {quantity > 1 ? `${quantity}x` : '✓'}
        </div>
      )}
      
      <div className="relative">
        <img src={image} alt={name} className="w-full h-64 object-cover" />
        {isProductInCart && (
          <div className="absolute inset-0 bg-green-500 bg-opacity-20 flex items-center justify-center">
            <div className="bg-white bg-opacity-90 px-4 py-2 rounded-lg shadow-lg">
              <span className="text-green-600 font-bold">En tu carrito</span>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-500 mb-2">{category}</p>
        <p className="text-sm mb-4">{description.substring(0, 100)}...</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">${price.toFixed(2)}</span>
          <button 
            onClick={handleAddToCart}
            className={`${isProductInCart 
              ? 'bg-green-600 hover:bg-green-700' 
              : 'bg-purple-600 hover:bg-purple-700'} 
              text-white px-4 py-2 rounded transition`}
          >
            {isProductInCart ? 'Agregar más' : 'Agregar al Carrito'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;