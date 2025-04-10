import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, MapPin, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export default function Checkout() {
  const { items, total, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    clearCart();
    navigate('/profile', { state: { orderPlaced: true } });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-orange-500" />
                Delivery Address
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Street Address"
                  required
                  className="w-full border rounded-md px-4 py-2"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    required
                    className="border rounded-md px-4 py-2"
                  />
                  <input
                    type="text"
                    placeholder="ZIP Code"
                    required
                    className="border rounded-md px-4 py-2"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-orange-500" />
                Payment Details
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Card Number"
                  required
                  className="w-full border rounded-md px-4 py-2"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    required
                    className="border rounded-md px-4 py-2"
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    required
                    className="border rounded-md px-4 py-2"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 disabled:bg-orange-300"
            >
              {isProcessing ? 'Processing...' : `Pay $${total.toFixed(2)}`}
            </button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="divide-y">
            {items.map((item) => (
              <div key={item.id} className="py-3 flex justify-between">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="border-t mt-4 pt-4">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Delivery Fee</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between font-semibold text-lg mt-4 pt-4 border-t">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm text-gray-600">
            <Truck className="h-4 w-4" />
            <span>Free delivery for orders over $30</span>
          </div>
        </div>
      </div>
    </div>
  );
}
