'use client';

import { use, useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import { useProductFilter } from '@/lib/hooks/useProductFilter';

export default function CategoryPage() {
  const { slug } = useParams();
  const {
    filteredProducts,
    subcategories,
    subcategory,
    setSubcategory,
    priceMin,
    setPriceMin,
    priceMax,
    setPriceMax
  } = useProductFilter(slug, 'category'); 

  const handleRangeChange = (values: number[]) => {
    const [min, max] = values;
    setPriceMin(min);
    setPriceMax(max);
  };

  return (
    <div className="max-w-7xl mx-auto py-10 grid grid-cols-1 md:grid-cols-5 gap-6">
      {/* Sidebar de filtres */}
      <aside className="col-span-1 space-y-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">Catégories</h2>
          <ul className="space-y-1">
            <li>
              <button
                onClick={() => setSubcategory('')}
                className={`hover:underline ${subcategory === '' ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}
              >
                Toutes
              </button>
            </li>
            {subcategories.map(sc => (
              <li key={sc}>
                <button
                  onClick={() => setSubcategory(prev => (prev === sc ? '' : sc))} 
                  className={`hover:underline ${subcategory === sc ? 'text-yellow-500 font-semibold' : 'text-gray-700'}`}
                >
                  {sc}
                </button>
              </li>
            ))}
          </ul>
        </div>


        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Prix</label>
          <Slider
            range
            min={0}
            max={10000}
            step={10}
            value={[priceMin, priceMax]}
            onChange={handleRangeChange}
            trackStyle={[{ backgroundColor: '#facc15', height: 6 }]}
            handleStyle={[
              { borderColor: '#facc15', height: 20, width: 20, marginTop: -7 },
              { borderColor: '#facc15', height: 20, width: 20, marginTop: -7 },
            ]}
            railStyle={{ backgroundColor: '#e5e7eb', height: 6 }}
          />
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>{priceMin} $</span>
            <span>{priceMax === Infinity ? '∞' : `${priceMax} $`}</span>
          </div>
        </div>
      </aside>

      {/* Grille des produits */}
      <main className="col-span-1 md:col-span-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(p => (
            <ProductCard key={p.id} product={p} />
          ))
        ) : (
          <p>Aucun produit trouvé.</p>
        )}
      </main>
    </div>
  );
}
