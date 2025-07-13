'use client';

import { useState } from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  name: string;
  type: string;
  category: string;
  price: number;
  image: string;
}

interface Props {
  subcategories: string[];
  minPrice: number;
  maxPrice: number;
  products: Product[];
}

export default function ProductFilters({ subcategories, minPrice, maxPrice, products }: Props) {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice]);

  const filtered = products.filter((p) => {
    const inPriceRange = p.price >= priceRange[0] && p.price <= priceRange[1];
    const inSubcategory = !selectedSubcategory || p.type === selectedSubcategory;
    return inPriceRange && inSubcategory;
  });

  return (
    <>
      {/* Sidebar de filtres */}
      <div className="space-y-6">
        <div>
          <h2 className="font-semibold mb-2">Sous-catégories</h2>
          <ul className="space-y-1">
            <li>
              <button
                className={`text-left w-full ${!selectedSubcategory ? 'font-bold text-blue-600' : ''}`}
                onClick={() => setSelectedSubcategory(null)}
              >
                Toutes
              </button>
            </li>
            {subcategories.map((sub) => (
              <li key={sub}>
                <button
                  className={`text-left w-full ${selectedSubcategory === sub ? 'font-bold text-blue-600' : ''}`}
                  onClick={() => setSelectedSubcategory(sub)}
                >
                  {sub}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-semibold mb-2">Prix</h2>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              min={minPrice}
              max={maxPrice}
              value={priceRange[0]}
              onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
              className="w-20 border px-1"
            />
            <span>—</span>
            <input
              type="number"
              min={minPrice}
              max={maxPrice}
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              className="w-20 border px-1"
            />
          </div>
        </div>
      </div>

      {/* Affichage des produits filtrés */}
       <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-6 py-10 m-auto max-w-7xl">
        {filtered.length > 0 ? (
          filtered.map((p) => <ProductCard key={p.id} product={p} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">Aucun produit trouvé.</p>
        )}
      </div>
      
    </>
  );
}
