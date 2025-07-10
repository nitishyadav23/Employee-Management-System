import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-4 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} TaskTrackr Inc. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#about" className="hover:underline text-sm">About</a>
          <a href="#privacy" className="hover:underline text-sm">Privacy Policy</a>
          <a href="#contact" className="hover:underline text-sm">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
