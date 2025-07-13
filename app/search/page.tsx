'use client';
import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products'; // Assurez-vous que le chemin est correct

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';

const filtered = products.filter(p =>
  (p.name || '').toLowerCase().includes(query) ||
  (p.type || '').toLowerCase().includes(query) ||
  (p.category || '').toLowerCase().includes(query) ||
  p.price.toString().includes(query) ||
  (p.description || '').toLowerCase().includes(query)
);

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">
        Résultats de recherche pour : "<span className="text-blue-600">{query}</span>"
      </h1>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filtered.map(product => (
            <ProductCard
              key={product.id}
              product={{ ...product, id: product.id.toString() }}
            />
          ))}
        </div>
      ) : (
        <p>Aucun résultat trouvé.</p>
      )}
    </div>
  );
}
