import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
  <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
    <div>
      <h3 className="text-lg font-semibold mb-2">Company</h3>
      <ul>
        <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
        <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
        <li><a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
      </ul>
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
      <div className="flex space-x-4">
        <a href="facebook-link" className="text-gray-400 hover:text-white">Facebook</a>
        <a href="twitter-link" className="text-gray-400 hover:text-white">Twitter</a>
        <a href="instagram-link" className="text-gray-400 hover:text-white">Instagram</a>
      </div>
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
      <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
      <div className="flex">
        <input type="email" placeholder="Enter your email" className="flex-grow p-2 rounded-l-lg focus:outline-none" />
        <button className="bg-orange-500 text-white p-2 rounded-r-lg">Subscribe</button>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer