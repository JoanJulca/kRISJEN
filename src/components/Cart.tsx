import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

// Declaración para extender el tipo jsPDF con autoTable
declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: any) => jsPDF;
    lastAutoTable: {
      finalY: number;
    };
  }
}

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, getCartTotal } = useCart();
  const total = getCartTotal();
  const [pdfGenerated, setPdfGenerated] = useState(false);

  // Función para generar y descargar PDF
  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    // Crear nueva instancia de PDF
    const doc = new jsPDF();
    
    // Añadir título al PDF
    doc.setFontSize(20);
    doc.text('Orden de Compra', 14, 22);
    doc.setFontSize(12);
    doc.text(`Fecha: ${new Date().toLocaleDateString()}`, 14, 32);
    
    // Preparar datos para la tabla
    const tableColumn = ["Producto", "Precio", "Cantidad", "Subtotal"];
    const tableRows = cartItems.map(item => [
      item.name,
      `$${item.price.toFixed(2)}`,
      item.quantity,
      `$${(item.price * item.quantity).toFixed(2)}`
    ]);
    
    // Añadir tabla al PDF
    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 40,
      theme: 'striped',
      styles: { fontSize: 10 }
    });
    
    // Añadir total
    const finalY = doc.lastAutoTable.finalY + 10;
    doc.text(`Total: $${total.toFixed(2)}`, 14, finalY);
    
    // Generar nombre de archivo con fecha y hora
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `orden-compra-${timestamp}.pdf`;
    
    // Descargar el PDF
    doc.save(filename);
    
    // Actualizar estado para mostrar instrucciones
    setPdfGenerated(true);
  };

  // Función para abrir WhatsApp con mensaje
  const openWhatsApp = () => {
    // Generar texto para WhatsApp
    const whatsappText = `¡Hola! Me gustaría realizar la siguiente compra:\n\n${cartItems.map(
      item => `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
    ).join('\n')}\n\nTotal: $${total.toFixed(2)}\n\n*Te adjunto el PDF con los detalles de mi pedido.*`;
    
    // Crear URL para WhatsApp con el texto
    const whatsappUrl = `https://wa.me/906601526?text=${encodeURIComponent(whatsappText)}`;
    
    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-xl mb-4">Your cart is empty</p>
          <Link to="/" className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 transition">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center border-b last:border-b-0 p-4">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
                <div className="ml-4 flex-grow">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center mr-4">
                  <button 
                    className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-l"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <span className="w-12 h-8 flex items-center justify-center bg-gray-100">
                    {item.quantity}
                  </span>
                  <button 
                    className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-r"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
                <div className="text-right">
                  <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                  <button 
                    className="text-red-500 text-sm mt-1"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-lg shadow overflow-hidden mb-8 p-6">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          
          {pdfGenerated ? (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h3 className="font-bold text-blue-700 mb-2">PDF generado correctamente</h3>
              <p className="mb-3">El PDF con tu orden ha sido descargado. Ahora puedes:</p>
              <ol className="list-decimal pl-5 mb-4">
                <li className="mb-1">Hacer clic en "Enviar por WhatsApp" abajo</li>
                <li className="mb-1">Cuando se abra WhatsApp, escribe tu mensaje</li>
                <li className="mb-1">Usa el botón de adjuntar (clip) en WhatsApp</li>
                <li>Selecciona el PDF que acabas de descargar</li>
              </ol>
              <button 
                onClick={openWhatsApp}
                className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition flex items-center justify-center"
              >
                <span>Enviar por WhatsApp</span>
              </button>
            </div>
          ) : null}
          
          <div className="flex justify-between">
            <Link to="/" className="bg-gray-200 text-gray-800 px-6 py-3 rounded hover:bg-gray-300 transition">
              Continue Shopping
            </Link>
            <button 
              className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 transition"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;