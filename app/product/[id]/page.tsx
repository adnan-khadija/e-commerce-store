'use client';

import { useParams } from 'next/navigation';
import { products } from '@/lib/products'; // mets le bon chemin vers ton fichier produit
import { useState } from 'react';
import Link from 'next/link';
import AddToCartButton from '@/components/AddToCartButton';
import { useFavoritesStore } from '@/lib/hooks/useFavorisStrore';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find(p => p.id.toString() === id);

  const [cartMessage, setCartMessage] = useState('');
  const { toggleFavorite, isFavorite } = useFavoritesStore();
  const favoriteStatus = isFavorite(product?.id || 0);

  if (!product) {
    return (
      <div className="p-10 text-center text-xl font-semibold">
        Produit introuvable.
        <br />
        <Link href="/" className="text-blue-600 hover:underline">Retour à l'accueil</Link>
      </div>
    );
  }
  

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(product.price);

  const handleAddToCart = () => {
    setCartMessage('Produit ajouté au panier 🛒');
    setTimeout(() => setCartMessage(''), 3000);
  };

 
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Image */}
      <div className="w-full h-[500px] bg-white rounded-lg overflow-hidden shadow-md">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Infos produit */}
      <div className="flex flex-col justify-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
        <p className="text-xl text-green-700">{formattedPrice}</p>

        {product.description && (
          <p className="text-gray-700">{product.description}</p>
        )}

        {/* Actions */}
        <div className="flex gap-4">
          <AddToCartButton product={product} />
          {/* <button
            onClick={handleAddToCart}
            className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition"
          >
            Ajouter au panier
          </button> */}
          <button
            onClick={()=>toggleFavorite(product)}
            className={`px-6 py-2 rounded-md border ${
              favoriteStatus
                ? 'bg-red-100 text-red-600 border-red-300'
                : 'bg-gray-100 text-gray-700 border-gray-300'
            } hover:bg-red-200 transition`}
          >
            {favoriteStatus ? 'Retirer des favoris ❤️' : 'Ajouter aux favoris 🤍'}
          </button>
        </div>

        {cartMessage && <p className="text-green-600">{cartMessage}</p>}
      </div>
    </div>
  );
}
