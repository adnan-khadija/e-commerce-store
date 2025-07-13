'use client';

import { useParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { useProductFilter } from '@/lib/hooks/useProductFilter';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function ProduitCategoriePage() {
  const { slug } = useParams();
  const {
    filteredProducts,
    priceMin,
    setPriceMin,
    priceMax,
    setPriceMax,
  } = useProductFilter(slug, 'type'); // Filtrer par 'type' au lieu de 'category'
  const handleRangeChange = (values: number[]) => {
    const [min, max] = values;
    setPriceMin(min);
    setPriceMax(max);
  };

  return (
    <div className="max-w-7xl mx-auto py-10 grid grid-cols-1 md:grid-cols-5 gap-6">
      {/* Sidebar de filtres */}
      <aside className="col-span-1 space-y-6">
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
      <main className="col-span-1 md:col-span-4">
        <h1 className="text-2xl font-bold mb-6 capitalize">{slug}</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={{ ...product, id: product.id.toString() }}
              />
            ))
          ) : (
            <p>Aucun produit trouvé.</p>
          )}
        </div>
      </main>
    </div>
  );
}