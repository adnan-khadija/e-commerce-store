'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useFavoritesStore } from '@/lib/hooks/useFavorisStrore';
import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';

// Animation variants for framer-motion
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function FavoritesPage() {
  const { favorites, toggleFavorite } = useFavoritesStore();

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
        <div className="text-center space-y-6 max-w-md">
          <FiHeart className="mx-auto text-red-500 text-6xl animate-pulse" />
          <p className="text-xl font-medium text-gray-700">
            Vos favoris sont vides pour le moment.
          </p>
          <p className="text-gray-500">
            Explorez notre collection et ajoutez vos produits préférés !
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            aria-label="Découvrir nos produits"
          >
            Découvrir nos produits
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">
        Vos Favoris ({favorites.length})
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {favorites.map((product) => (
          <motion.div
            key={product.id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-56 w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-xl text-gray-800 line-clamp-2">
                {product.name}
              </h3>
              <p className="text-lg text-gray-600 mt-1">
                {product.price.toFixed(2)} €
              </p>
              <div className="mt-4 flex justify-between items-center">
                <Link
                  href={`/product/${product.id}`}
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  aria-label={`Voir le produit ${product.name}`}
                >
                  Voir le produit
                </Link>
                <button
                  onClick={() => toggleFavorite(product)}
                  className="text-red-600 hover:text-red-800 font-medium transition-colors"
                  aria-label={`Retirer ${product.name} des favoris`}
                >
                  Retirer
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}