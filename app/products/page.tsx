import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

export default function ProductsPage() {
  return (
    <main className="bg-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Nos produits
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id.toString()} product={{ ...product, id: product.id.toString() }} />
          ))}
        </div>
      </div>
    </main>
  );
}
