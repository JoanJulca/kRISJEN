import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Configura el cliente de Supabase con los valores exactos de tu cuenta
const supabaseUrl = 'https://bzjwx1vzlkjjqcofhoqr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6and4aXZ6bGtqanFjb2Zob3FyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0OTE0NDcsImV4cCI6MjA1NjA2NzQ0N30.eV03BvT5Ca1rkqDSI5aAxK-KuooqpnMN8X7Vf-RJFdA'; // Deberías usar la clave completa que te mostró Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

interface FormData {
  name: string;
  price: number;
  description: string;
  category: string;
}

const AddProduct: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    price: 0,
    description: '',
    category: 'anillos',
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'price' ? parseFloat(value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!formData.name || !formData.price || !formData.description || !formData.category) {
      setMessage({ text: 'Por favor, completa todos los campos', type: 'error' });
      return;
    }
  
    setIsSubmitting(true);
    setMessage(null);
  
    try {
      console.log('Intentando guardar en Supabase...');
  
      // Datos del producto
      const productData = {
        name: formData.name,
        price: formData.price,
        description: formData.description,
        category: formData.category,
        created_at: new Date().toISOString(),
      };
  
      console.log('Datos del producto:', productData);
  
      // Guardar el producto en la tabla "productos" de Supabase
      const { data, error } = await supabase
        .from('productos')
        .insert(productData);
  
      if (error) throw error;
  
      console.log('Producto guardado exitosamente:', data);
  
      // Resetear el formulario
      setFormData({
        name: '',
        price: 0,
        description: '',
        category: 'anillos',
      });
  
      setMessage({ text: 'Producto agregado exitosamente', type: 'success' });
    } catch (error) {
      console.error('Error al agregar producto:', error);
      setMessage({ text: 'Error al agregar producto. Inténtalo de nuevo.', type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Agregar Nuevo Producto</h1>

      {message && (
        <div className={`p-4 mb-6 rounded ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2 font-medium">Nombre del producto</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        <div>
          <label htmlFor="price" className="block mb-2 font-medium">Precio ($)</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            min="0"
            step="0.01"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        <div>
          <label htmlFor="category" className="block mb-2 font-medium">Categoría</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          >
            <option value="anillos">Anillos</option>
            <option value="collares">Collares</option>
            <option value="aretes">Aretes</option>
            <option value="pulseras">Pulseras</option>
          </select>
        </div>

        <div>
          <label htmlFor="description" className="block mb-2 font-medium">Descripción</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 rounded font-medium text-white ${isSubmitting ? 'bg-purple-400' : 'bg-purple-600 hover:bg-purple-700'}`}
        >
          {isSubmitting ? 'Agregando...' : 'Agregar Producto'}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;