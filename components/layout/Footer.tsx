import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 text-center py-4 mt-8">
      <div className="text-gray-500">&copy; {new Date().getFullYear()} Property Listing. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
