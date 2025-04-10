import { User, MapPin, Phone, Mail, Calendar } from 'lucide-react';

export default function ProfileCard({
  username,
  email = 'demo@example.com',
  phone = '+91 23456 78900',
  address = 'Pune Maharashtra, India',
  memberSince
}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-orange-100 p-4 rounded-full">
          <User className="h-8 w-8 text-orange-500" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{username}</h1>
          <p className="text-gray-600 flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            Member since {memberSince}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3 text-gray-600">
          <Mail className="h-5 w-5 text-orange-500" />
          <span>{email}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-600">
          <Phone className="h-5 w-5 text-orange-500" />
          <span>{phone}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-600">
          <MapPin className="h-5 w-5 text-orange-500" />
          <span>{address}</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4 border-t pt-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-500">12</div>
          <div className="text-sm text-gray-600">Orders</div>
        </div>
        <div className="text-center border-l border-r">
          <div className="text-2xl font-bold text-orange-500">4.8</div>
          <div className="text-sm text-gray-600">Rating</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-500">3</div>
          <div className="text-sm text-gray-600">Reviews</div>
        </div>
      </div>
    </div>
  );
}
