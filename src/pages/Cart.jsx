import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export default function Cart() {
  const { items, total } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <ShoppingBag className="h-16 w-16 mx-auto text-gray-400 mb-4" />
        <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
        <p className="text-gray-600 mb-4">Add some delicious items from our menu</p>
        <button
          onClick={() => navigate('/menu')}
          className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600"
        >
          Browse Menu
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="divide-y">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="mt-6 pt-6 border-t">
          <div className="flex justify-between text-lg font-semibold mb-6">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            onClick={() => navigate('/checkout')}
            className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}