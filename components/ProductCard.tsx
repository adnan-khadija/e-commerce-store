import Link from 'next/link';

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(product.price);

  return (
   <div className='product-card  rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300'>
     <Link
      href={`/product/${product.id}`}
      aria-label={`Voir le produit ${product.name}`}
      className="block group rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
    >
      {/* Image du produit */}
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          width={250}
          height={250}
          style={{ objectFit: 'cover' }}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Contenu */}
      <div className="p-4 bg-white">
        <h2 className="text-lg font-bold text-gray-900 group-hover:text-yellow-500 transition-colors">
          {product.name}
        </h2>
        <p className="mt-1 text-sm text-gray-700">{formattedPrice}</p>
      </div>
    </Link>
   </div>
  );
}
