import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* À propos */}
        <div>
          <h3 className="text-yellow-400 font-bold text-lg mb-4">À propos</h3>
          <p className="text-sm">
            Notre boutique en ligne vous propose une sélection exclusive de produits de qualité,
            livrés rapidement et en toute sécurité.
          </p>
        </div>

        {/* Services clients */}
        <div>
          <h3 className="text-yellow-400 font-bold text-lg mb-4">Service Client</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/faq" className="hover:text-yellow-400">FAQ</Link></li>
            <li><Link href="/livraison" className="hover:text-yellow-400">Livraison</Link></li>
            <li><Link href="/retours" className="hover:text-yellow-400">Retours & remboursements</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-400">Contactez-nous</Link></li>
          </ul>
        </div>

        {/* Catégories */}
        <div>
          <h3 className="text-yellow-400 font-bold text-lg mb-4">Catégories</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/produits/vetements" className="hover:text-yellow-400">Vêtements</Link></li>
            <li><Link href="/produits/accesoires" className="hover:text-yellow-400">Accesoires</Link></li>
            <li><Link href="/produits/chaussures" className="hover:text-yellow-400">Chaussures</Link></li>
            <li><Link href="/produits/beaute" className="hover:text-yellow-400">Beauté</Link></li>
          </ul>
        </div>

        {/* Contact & réseaux sociaux */}
        <div>
          <h3 className="text-yellow-400 font-bold text-lg mb-4">Contact</h3>
          <p className="text-sm mb-4">
            Email: <Link href="mailto:support@monsite.com" className="hover:text-yellow-400">support@monsite.com</Link><br />
            Téléphone: <Link href="tel:+212600000000" className="hover:text-yellow-400">+212 600 000 000</Link><br />
            Adresse: 123 Rue Exemple, Casablanca, Maroc
          </p>
          <div className="flex space-x-4 text-yellow-400 text-xl">
            <Link href="#" aria-label="Facebook" className="hover:text-yellow-300">📘</Link>
            <Link href="#" aria-label="Instagram" className="hover:text-yellow-300">📸</Link>
            <Link href="#" aria-label="Twitter" className="hover:text-yellow-300">🐦</Link>
            <Link href="#" aria-label="LinkedIn" className="hover:text-yellow-300">🔗</Link>
          </div>
        </div>
      </div>

      {/* Bas de page */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} NOVAMARKET. Tous droits réservés.
      </div>
    </footer>
  );
}
