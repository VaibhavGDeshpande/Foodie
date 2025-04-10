import React from 'react';
import { Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import PropTypes from 'prop-types';

export default function MenuCard({ item }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={item.image} 
        alt={item.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <span className="text-orange-500 font-bold">${item.price}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{item.description}</p>
        <button
          onClick={() => addToCart(item)}
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 flex items-center justify-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}


MenuCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
};
