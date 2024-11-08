import React from 'react';
import { ShoppingBag } from 'lucide-react';

export default function CartButton() {
  return (
    <button className="fixed bottom-6 right-6 bg-[#7C3AED] text-white p-4 rounded-full shadow-lg hover:bg-[#6D28D9] transition-colors z-50">
      <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
        0
      </div>
      <ShoppingBag className="h-6 w-6" />
    </button>
  );
}