'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FiShoppingBag, FiTruck, FiShield, FiStar } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Images pour le carrousel (located in /public/images/)
const heroImages = [
  '/images/home.png',
  '/images/home2.png',
  '/images/home3.png',
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Changement automatique d'image
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change toutes les 5 secondes

    return () => clearInterval(interval);
  }, []);

  // Log pour débogage
  useEffect(() => {
    console.log('Current carousel image:', heroImages[currentImageIndex]);
  }, [currentImageIndex]);

  const features = [
    {
      icon: <FiTruck className="w-6 h-6" />,
      title: 'Livraison rapide',
      description: 'Expédition sous 24h et livraison en 2-3 jours',
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: 'Paiement sécurisé',
      description: 'Transactions cryptées et protégées',
    },
    {
      icon: <FiStar className="w-6 h-6" />,
      title: 'Produits premium',
      description: 'Sélection rigoureuse de produits de qualité',
    },
  ];

  const categories = [
    { name: 'Homme', href: '/category/homme', image: '/images/cat-homme.png' },
    { name: 'Femme', href: '/category/femme', image: '/images/cat-femme.png' },
    { name: 'Enfants', href: '/category/enfants', image: '/images/cat-enfants.png' },
    { name: 'Chaussures', href: '/category/chaussures', image: '/images/cat-chaussures.png' },
    { name: 'Beauté', href: '/category/beaute', image: '/images/cat-beaute.png' },
    { name: 'Sacs', href: '/category/sacs', image: '/images/cat-sacs.png' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section avec carrousel */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Carrousel d'arrière-plan */}
        <div className="absolute inset-0">
          <AnimatePresence initial={false}>
            <motion.div
              key={heroImages[currentImageIndex]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <Image
                src={heroImages[currentImageIndex] || '/images/fallback-image.jpg'}
                alt={`Hero image ${currentImageIndex + 1}`}
                fill
                className="object-cover"
                sizes="100vw"
                priority={currentImageIndex === 0}
                onError={(e) => {
                  console.error(`Failed to load image: ${heroImages[currentImageIndex]}`);
                  e.target.src = '/images/fallback-image.jpg';
                }}
              />
              <div className="absolute inset-0 bg-black opacity-30" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Contenu */}
        <div className="relative z-20 max-w-7xl w-full text-center space-y-8 py-20">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg"
          >
            Bienvenue sur <span className="text-yellow-400">NOVAMARKET</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed"
          >
            Découvrez notre collection exclusive de produits soigneusement sélectionnés
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 shadow-lg transition-all transform hover:-translate-y-1"
            >
              <FiShoppingBag className="mr-2" />
              Explorer la boutique
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-500 transition-colors"
            >
              Découvrir notre histoire
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-yellow-600 font-semibold tracking-wide uppercase">
              Pourquoi nous choisir
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Une expérience d'achat exceptionnelle
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-100 text-yellow-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Catégories */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold mb-8 text-gray-900">Explorer par catégorie</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href={cat.href} className="group block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
                <div className="relative h-32 w-full">
                  <Image
                    src={cat.image || '/images/fallback-image.jpg'}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                    onError={(e) => {
                      console.error(`Failed to load category image: ${cat.image}`);
                      e.target.src = '/images/fallback-image.jpg';
                    }}
                  />
                </div>
                <h3 className="mt-2 text-center text-lg font-semibold text-gray-900">{cat.name}</h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call-to-action */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20 text-center">
          <h2 className="text-3xl font-extrabold mb-6">Prêt à faire du shopping ?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Rejoignez nos milliers de clients satisfaits et découvrez la différence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-500 shadow-lg transition-all transform hover:scale-105"
            >
              Commencer mes achats
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-yellow-400 text-yellow-400 rounded-md hover:bg-yellow-500 hover:text-black transition"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}