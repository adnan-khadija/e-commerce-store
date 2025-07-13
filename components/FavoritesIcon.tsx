'use client';
import { useFavoritesStore } from '@/lib/hooks/useFavorisStrore';
import Link from 'next/link';
import { FaHeart } from 'react-icons/fa';

export function FavoritesIcon() {
  const count = useFavoritesStore((state) => state.count);

  return (
    <Link href="/favoris" className="relative text-white hover:text-yellow-400 flex items-center">
      <FaHeart className="mr-1" />
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {count}
        </span>
      )}
      <span className="ml-1">Favoris</span>
    </Link>
  );
}