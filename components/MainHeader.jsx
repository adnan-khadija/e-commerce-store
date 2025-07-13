'use client';
import Link from "next/link";
import { FaHeart, FaShoppingCart, FaUser, FaUserPlus, FaSearch } from "react-icons/fa";
import SearchBar from "./SearchBar";
import { useCartStore } from "@/lib/hooks/useCartStore";
import { FavoritesIcon } from "./FavoritesIcon";


export default function MainHeader() {
  const items = useCartStore((state) => state.items);
  
  // Calculer le nombre total d'articles (en tenant compte des quantités)
  const itemCount = items.reduce((total, item) => total + (item.quantity || 1), 0);
  return (
    <div className="w-full bg-black shadow py-4 px-4 mt-[38px]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Barre de recherche */}
        <div className="flex items-center relative">
          <SearchBar />
        </div>
        {/* Logo ou nom */}
        <div className="text-4xl font-mono text-white mx-6">
          <Link href={"/"} className="hover:text-yellow-400">
          NOVAMARKET
          </Link>
          </div>


        {/* Actions utilisateur */}
        <div className="flex items-center space-x-6">
          {/* Favoris */}
         <FavoritesIcon />
          {/* Panier */}
          <Link href="/cart" className="relative text-white hover:text-yellow-400 flex items-center">
            <FaShoppingCart className="mr-1" />
            {itemCount >= 0 && (
                    <span className="absolute -top-2 -right-2 bg-green-500 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}            <span className="ml-1">45,00 $</span>
          </Link>
          {/* Connexion / Inscription */}
          <Link href="/login" className="text-white hover:text-yellow-400 flex items-center">
            <FaUser className="mr-1" />Login
          </Link>
          <Link href="/register" className="text-white hover:text-yellow-400 flex items-center">
            <FaUserPlus className="mr-1" />Enregistrer
          </Link>
        </div>
      </div>
    </div>
  );
}
