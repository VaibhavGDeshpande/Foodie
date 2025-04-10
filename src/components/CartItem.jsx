// Description: This component represents a single item in the shopping cart.
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import PropTypes from 'prop-types';

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-4 py-4 border-b">
      <img 
        src={item.image} 
        alt={item.name}
        className="w-20 h-20 object-cover rounded-md"
      />
      <div className="flex-1">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-gray-600 text-sm">${item.price}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          title="Decrease Quantity"
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="p-1 rounded-md hover:bg-gray-100"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-8 text-center">{item.quantity}</span>
        <button
          title="Increase Quantity"
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="p-1 rounded-md hover:bg-gray-100"
        >
          <Plus className="h-4 w-4" />
        </button>
        <button
          title="Remove Item"
          onClick={() => removeFromCart(item.id)}
          className="p-1 text-red-500 hover:bg-red-50 rounded-md ml-2"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  }).isRequired
};
