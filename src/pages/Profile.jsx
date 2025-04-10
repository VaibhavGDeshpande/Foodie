import { useNavigate, useLocation } from 'react-router-dom';
import { Package, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import ProfileCard from '../components/ProfileCard';

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const orderPlaced = location.state?.orderPlaced;

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {orderPlaced && (
        <div className="mb-8 bg-green-50 text-green-700 p-4 rounded-md">
          Order placed successfully! Thank you for your purchase.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <ProfileCard
            username={user.username}
            memberSince="March 2024"
          />
        </div>

        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Package className="h-5 w-5 text-orange-500" />
              Recent Orders
            </h2>
            {orderPlaced ? (
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-md p-4">
                  <p className="font-medium">Order #2024001</p>
                  <p className="text-sm text-gray-600">Just now • Processing</p>
                  <div className="mt-2 text-sm text-gray-600">
                    Estimated delivery: 30-45 minutes
                  </div>
                </div>
                <div className="bg-gray-50 rounded-md p-4">
                  <p className="font-medium">Order #2024000</p>
                  <p className="text-sm text-gray-600">Yesterday • Delivered</p>
                  <div className="mt-2 text-sm text-gray-600">
                    Total: $45.97
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-gray-600">No recent orders</p>
            )}
          </div>

          <button
            onClick={handleLogout}
            className="mt-8 w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 flex items-center justify-center gap-2"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
