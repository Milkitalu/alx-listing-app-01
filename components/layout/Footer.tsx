import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
        <nav>
          <ul className="flex justify-center space-x-4">
            <li><a href="#" className="text-gray-400">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400">Terms of Service</a></li>
            <li><a href="#" className="text-gray-400">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
