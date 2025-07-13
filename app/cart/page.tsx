'use client';
import { useCartStore } from '@/lib/hooks/useCartStore';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiShoppingCart } from 'react-icons/fi';
import Link from 'next/link';

// Animation variants for framer-motion
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const total = items.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);
  const itemCount = items.reduce((acc, item) => acc + (item.quantity || 1), 0);

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
        <div className="text-center space-y-6 max-w-md">
          <FiShoppingCart className="mx-auto text-blue-600 text-6xl animate-pulse" />
          <p className="text-xl font-medium text-gray-800">
            Votre panier est vide.
          </p>
          <p className="text-gray-600">
            Découvrez nos produits et commencez vos achats !
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            aria-label="Retour à la boutique"
          >
            Retour à la boutique
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-6xl mx-auto bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Votre Panier</h1>
      
      <div className="space-y-6">
        {items.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
           >
            <div className="w-full sm:w-32 h-32 relative">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 640px) 100vw, 128px"
                onError={(e) => (e.target.src = '/placeholder.jpg')} // Fallback image
              />
            </div>
            
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-xl text-gray-800 line-clamp-2">{item.name}</h3>
                <p className="text-gray-600 mt-1">{item.price.toFixed(2)} $</p>
              </div>
              
              <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => updateQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))}
                    disabled={(item.quantity || 1) <= 1}
                    className="px-3 py-1 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    aria-label={`Réduire la quantité de ${item.name}`}
                  >
                    -
                  </button>
                  <span className="px-4 py-1 bg-gray-50">{item.quantity || 1}</span>
                  <button
                    onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                    className="px-3 py-1 text-gray-700 hover:bg-gray-100 transition-colors"
                    aria-label={`Augmenter la quantité de ${item.name}`}
                  >
                    +
                  </button>
                </div>
                
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-600 hover:text-red-800 text-sm font-medium transition-colors"
                  aria-label={`Supprimer ${item.name} du panier`}
                >
                  Supprimer
                </button>
              </div>
            </div>
            
            <div className="font-medium text-lg text-gray-900">
              {(item.price * (item.quantity || 1)).toFixed(2)} $
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 border-t pt-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-right sm:text-left">
            <p className="text-gray-600">Total ({itemCount} articles)</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{total.toFixed(2)} $</p>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-colors"
            aria-label="Procéder au paiement"
          >
            Procéder au paiement
          </motion.button>
        </div>
      </div>
    </div>
  );
}