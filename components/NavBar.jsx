'use client';
import { useState } from 'react';
import Link from 'next/link';
import { categories } from '../lib/products';



export default function NavBar() {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <nav className="bg-white text-black shadow">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex justify-center space-x-6 py-4 text-sm font-medium">
          {categories.map((cat, idx) => (
            <li
              key={idx}
              className="relative"
              onMouseEnter={() => setHoveredCategory(cat.name)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <button className="hover:text-blue-500 transition">
                {cat.name}
              </button>

              {/* Menu déroulant toujours dans le même bloc */}
              {hoveredCategory === cat.name && (
                <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white text-black shadow-lg rounded-md z-50">
                  {cat.subcategories.map((subcat, i) => (
                    <li key={i}>
                      <Link
                        href={`/products/${subcat.slug}`}
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition"
                      >
                        {subcat.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
