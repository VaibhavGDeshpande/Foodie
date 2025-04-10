import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Filter } from 'lucide-react';
import MenuCard from '../components/MenuCard';
import MenuCarousel from '../components/MenuCarousel';
import { menuItems } from '../data/menuItems';
import { useAuth } from '../context/AuthContext'

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }
  
  const filteredItems = selectedCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <MenuCarousel />
      
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Our Menu</h1>
        <div className="flex items-center gap-4">
          <Filter className="h-5 w-5 text-gray-500" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="all">All Items</option>
            <option value="starters">Starters</option>
            <option value="mains">Mains</option>
            <option value="desserts">Desserts</option>
            <option value="drinks">Drinks</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
