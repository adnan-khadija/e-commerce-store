'use client';

import { useEffect, useState } from 'react';
import { Product } from '@/lib/type';
import { products } from '@/lib/products';

export function useProductFilter(slug: string | string[] | undefined, filterBy: 'category' | 'product') {
  const [subcategory, setSubcategory] = useState('');
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(Infinity);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (!slug) return;

    // Filtrer par catégorie ou produit selon le paramètre filterBy
    let result = products.filter(p =>
      filterBy === 'category' ? p.category === slug : p.type === slug
    );

    // Appliquer filtre sous-catégorie si précisé
    if (subcategory) {
      result = result.filter(p => p.type === subcategory);
    }

    // Appliquer filtre de prix
    result = result.filter(p => p.price >= priceMin && p.price <= priceMax);

    setFilteredProducts(result);
  }, [slug, subcategory, priceMin, priceMax, filterBy]);

  // Obtenir les sous-catégories disponibles
  const subcategories = [
    ...new Set(
      products
        .filter(p => (filterBy === 'category' ? p.category === slug : p.type === slug))
        .map(p => p.type)
    ),
  ];

  return {
    filteredProducts,
    subcategories,
    subcategory,
    setSubcategory,
    priceMin,
    setPriceMin,
    priceMax,
    setPriceMax,
  };
}