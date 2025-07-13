'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaSearch } from 'react-icons/fa';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3 w-full max-w-3xl mx-auto px-4">
      {/* Champ de recherche */}
      <div className="relative flex-grow">
        <label htmlFor="search-input" className="sr-only">
          Rechercher un produit
        </label>
        <input
          id="search-input"
          type="text"
          placeholder="Rechercher un produit..."
          className="
            w-full
            rounded-xl
            px-6
            py-3
            pr-14
            text-black
            placeholder-black
            shadow-sm
            focus:outline-none
            focus:ring-4
            focus:ring-yellow-400
            focus:border-yellow-400
            transition
            duration-300
            ease-in-out
            bg-white
           
          "
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Barre de recherche"
        />
      </div>

      {/* Bouton avec icône */}
      <button
        type="submit"
        className="
          flex
          items-center
          justify-center
          rounded-full
          bg-yellow-400
          hover:bg-yellow-500
          focus-visible:ring-4
          focus-visible:ring-yellow-300
          focus:outline-none
          shadow-md
          w-12
          h-12
          transition
          duration-300
          ease-in-out
         
        "
        aria-label="Lancer la recherche"
      >
        <FaSearch className="text-white text-xl" />
      </button>
    </form>
  );
}
