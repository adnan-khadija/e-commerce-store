export interface  Product{
    id: number ;
    name: string;
    type: string;
    category: string;
    price: number;
    image: string;
}
export const products = [
  // Homme - T-shirts
  { id: 1, name: 'T-shirt blanc classique', type: 't-shirts', category: "homme", price: 29.99, image: '/images/tshirt.png', description: 'Un t-shirt blanc intemporel en coton doux, parfait pour un look décontracté ou formel.', quantity: 50 },
  { id: 2, name: 'T-shirt noir col V', type: 't-shirts', category: "homme", price: 24.99, image: '/images/tshirt.png', description: 'T-shirt noir élégant avec col en V, idéal pour un style moderne et polyvalent.', quantity: 30 },
  { id: 101, name: 'T-shirt bleu classique', type: 't-shirts', category: "homme", price: 29.99, image: '/images/tshirt.png', description: 'T-shirt bleu en coton de haute qualité, confortable pour toutes les occasions.', quantity: 40 },
  { id: 102, name: 'T-shirt noir col V slim', type: 't-shirts', category: "homme", price: 24.99, image: '/images/tshirt.png', description: 'T-shirt slim noir avec col en V, pour une silhouette ajustée et élégante.', quantity: 25 },
  { id: 103, name: 'T-shirt oversize gris clair', type: 't-shirts', category: "homme", price: 27.99, image: '/images/tshirt.png', description: 'T-shirt oversize gris clair, tendance et confortable pour un look streetwear.', quantity: 20 },
  { id: 104, name: 'T-shirt imprimé minimaliste blanc', type: 't-shirts', category: "homme", price: 22.99, image: '/images/tshirt.png', description: 'T-shirt blanc avec un imprimé discret, parfait pour un style épuré.', quantity: 35 },
  { id: 105, name: 'T-shirt rayé bleu marine', type: 't-shirts', category: "homme", price: 34.99, image: '/images/tshirt.png', description: 'T-shirt à rayures bleu marine, idéal pour un look décontracté et sophistiqué.', quantity: 15 },
  { id: 106, name: 'T-shirt manches longues noir', type: 't-shirts', category: "homme", price: 31.99, image: '/images/tshirt.png', description: 'T-shirt à manches longues noir, parfait pour les journées fraîches.', quantity: 10 },
  { id: 107, name: 'T-shirt à texte imprimé gris', type: 't-shirts', category: "homme", price: 25.99, image: '/images/tshirt.png', description: 'T-shirt gris avec texte imprimé audacieux, pour un style affirmé.', quantity: 30 },
  { id: 108, name: 'T-shirt slim cropped blanc', type: 't-shirts', category: "homme", price: 28.99, image: '/images/tshirt.png', description: 'T-shirt blanc cropped ajusté, idéal pour un look moderne et audacieux.', quantity: 20 },
  { id: 109, name: 'T-shirt col V côtelé beige', type: 't-shirts', category: "homme", price: 29.99, image: '/images/tshirt.png', description: 'T-shirt beige côtelé avec col en V, pour une touche d’élégance décontractée.', quantity: 25 },
  { id: 110, name: 'T-shirt sport technique noir', type: 't-shirts', category: "homme", price: 35.99, image: '/images/tshirt.png', description: 'T-shirt technique noir, respirant et idéal pour le sport.', quantity: 15 },
  // Homme - Pantalons
  { id: 3, name: 'Jean slim', type: 'pantalons', category: "homme", price: 49.99, image: '/images/tshirt.png', description: 'Jean slim bleu délavé, confortable et ajusté pour un look moderne.', quantity: 20 },
  { id: 4, name: 'Pantalon chino noir', type: 'pantalons', category: "homme", price: 54.99, image: '/images/pants.png', description: 'Pantalon chino noir polyvalent, parfait pour un style élégant et décontracté.', quantity: 25 },
  // Homme - Vestes
  { id: 5, name: 'Veste en jean', type: 'vestes', category: "homme", price: 89.99, image: '/images/jNn2/jacket.png', description: 'Veste en jean robuste et intemporelle, idéale pour toutes les saisons.', quantity: 10 },
  { id: 6, name: 'Blouson cuir noir', type: 'vestes', category: "homme", price: 129.99, image: '/images/tshirt.png', description: 'Blouson en cuir noir, élégant et durable pour un look audacieux.', quantity: 8 },
  // Homme - Chaussures
  { id: 7, name: 'Chaussures de sport Nike', type: 'chaussures-homme', category: "homme", price: 59.99, image: '/images/shoe.png', description: 'Chaussures de sport Nike, légères et performantes pour le sport ou le quotidien.', quantity: 30 },
  { id: 8, name: 'Bottes en cuir', type: 'bottes', category: "homme", price: 89.99, image: '/images/tshirt.png', description: 'Bottes en cuir robustes, idéales pour un style élégant et résistant.', quantity: 15 },
  { id: 9, name: 'Sandales en cuir', type: 'sandales', category: "homme", price: 39.99, image: '/images/tshirt.png', description: 'Sandales en cuir confortables, parfaites pour l’été.', quantity: 20 },
  // Homme - Accessoires
  { id: 10, name: 'Casquette baseball', type: 'accessoires', category: "homme", price: 19.99, image: '/images/tshirt.png', description: 'Casquette de baseball stylée, parfaite pour un look décontracté.', quantity: 40 },
  { id: 11, name: 'Portefeuille en cuir', type: 'accessoires-homme', category: "homme", price: 34.99, image: '/images/tshirt.png', description: 'Portefeuille en cuir élégant avec plusieurs compartiments.', quantity: 25 },
  { id: 12, name: 'Gants en cuir', type: 'gants-homme', category: "homme", price: 9.99, image: '/images/tshirt.png', description: 'Gants en cuir souple, parfaits pour l’hiver.', quantity: 30 },
  // Femme - Sacs
  { id: 13, name: 'Sac à main en cuir', type: 'sacs-femme', category: "femme", price: 79.99, image: '/images/tshirt.png', description: 'Sac à main en cuir élégant, idéal pour toutes les occasions.', quantity: 15 },
  { id: 14, name: 'Sac à dos élégant', type: 'sacs-femme', category: "femme", price: 69.99, image: '/images/tshirt.png', description: 'Sac à dos chic et pratique, parfait pour le quotidien.', quantity: 20 },
  // Femme - Montres
  { id: 15, name: 'Montre classique', type: 'montres', category: "femme", price: 199.99, image: '/images/watch.png', description: 'Montre classique avec un cadran épuré, pour une élégance intemporelle.', quantity: 10 },
  { id: 16, name: 'Montre élégante femme', type: 'montres-femme', category: "femme", price: 149.99, image: '/images/tshirt.png', description: 'Montre féminine raffinée, parfaite pour un look sophistiqué.', quantity: 12 },
  // Femme - Chaussures
  { id: 39, name: 'Ballerines en cuir', type: 'chaussures-femme', category: "femme", price: 49.99, image: '/images/tshirt.png', description: 'Ballerines en cuir souple, confortables et élégantes pour le quotidien.', quantity: 25 },
  { id: 40, name: 'Escarpins noirs', type: 'chaussures-femme', category: "femme", price: 89.99, image: '/images/tshirt.png', description: 'Escarpins noirs classiques, parfaits pour les occasions spéciales.', quantity: 15 },
  { id: 41, name: 'Sandales à talons', type: 'chaussures-femme', category: "femme", price: 59.99, image: '/images/tshirt.png', description: 'Sandales à talons élégantes, idéales pour l’été.', quantity: 20 },
  { id: 42, name: 'Bottes hautes', type: 'chaussures-femme', category: "femme", price: 129.99, image: '/images/tshirt.png', description: 'Bottes hautes en cuir, parfaites pour un look chic et tendance.', quantity: 10 },
  // Femme - Vêtements
  { id: 17, name: 'Robe d’été fleurie', type: 'robes', category: "femme", price: 49.99, image: '/images/tshirt.png', description: 'Robe d’été légère et fleurie, parfaite pour les journées ensoleillées.', quantity: 30 },
  { id: 18, name: 'Chemisier blanc élégant', type: 'chemises-femme', category: "femme", price: 39.99, image: '/images/tshirt.png', description: 'Chemisier blanc classique, idéal pour un look professionnel.', quantity: 25 },
  { id: 19, name: 'Jupe midi plissée', type: 'jupes-femme', category: "femme", price: 34.99, image: '/images/tshirt.png', description: 'Jupe midi plissée élégante, parfaite pour une tenue de soirée.', quantity: 20 },
  // Beauté
  { id: 20, name: 'Crème hydratante', type: 'soins-visage', category: "beauté", price: 29.99, image: '/images/tshirt.png', description: 'Crème hydratante légère pour un teint éclatant et hydraté.', quantity: 50 },
  { id: 21, name: 'Fond de teint liquide', type: 'maquillage', category: "beauté", price: 39.99, image: '/images/tshirt.png', description: 'Fond de teint liquide couvrant pour un teint parfait.', quantity: 40 },
  { id: 22, name: 'Rouge à lèvres mat', type: 'maquillage', category: "beauté", price: 19.99, image: '/images/tshirt.png', description: 'Rouge à lèvres mat longue tenue pour des lèvres séduisantes.', quantity: 60 },
  // Beauté (suite)
  { id: 17, name: 'Parfum floral', type: 'parfums', category: "beauté", price: 79.99, image: '/images/tshirt.png', description: 'Parfum floral délicat, pour une touche de fraîcheur et d’élégance.', quantity: 20 },
  { id: 18, name: 'Kit de maquillage complet', type: 'cosmetiques', category: "beauté", price: 59.99, image: '/images/tshirt.png', description: 'Kit de maquillage polyvalent avec tout le nécessaire pour un look parfait.', quantity: 15 },
  { id: 19, name: 'Brosse professionnelle cheveux', type: 'soins-cheveux', category: "beauté", price: 29.99, image: '/images/tshirt.png', description: 'Brosse professionnelle pour des cheveux lisses et brillants.', quantity: 30 },
  // Enfants
  { id: 23, name: 'Jouet éducatif', type: 'jouets', category: 'enfants', price: 19.99, image: '/images/tshirt.png', description: 'Jouet éducatif amusant, idéal pour stimuler la créativité des enfants.', quantity: 50 },
  { id: 24, name: 'Body bébé', type: 'vetements-bebe', category: 'enfants', price: 9.99, image: '/images/tshirt.png', description: 'Body bébé en coton doux, confortable pour les tout-petits.', quantity: 60 },
  { id: 25, name: 'Poussette', type: 'puériculture', category: 'enfants', price: 199.99, image: '/images/tshirt.png', description: 'Poussette robuste et légère, parfaite pour les sorties avec bébé.', quantity: 5 },
  // Enfants - Vêtements
  { id: 43, name: 'T-shirt enfant à motifs', type: 'vetements-enfants', category: 'enfants', price: 14.99, image: '/images/tshirt.png', description: 'T-shirt coloré pour enfants avec motifs amusants, parfait pour le jeu.', quantity: 40 },
  { id: 44, name: 'Pantalon enfant en denim', type: 'pantalons-enfants', category: 'enfants', price: 19.99, image: '/images/tshirt.png', description: 'Pantalon en denim confortable pour enfants, idéal pour les activités quotidiennes.', quantity: 30 },
  { id: 45, name: 'Robe fille à fleurs', type: 'robes-enfants', category: 'enfants', price: 24.99, image: '/images/tshirt.png', description: 'Robe à fleurs pour filles, parfaite pour les occasions spéciales.', quantity: 25 },
  // Accessoires divers
  { id: 26, name: 'Étui à lunettes', type: 'accessoires', category: 'femme', price: 14.99, image: '/images/tshirt.png', description: 'Étui à lunettes élégant pour protéger vos lunettes avec style.', quantity: 35 },
  { id: 27, name: 'Trousse de toilette', type: 'accessoires-voyage', category: 'sacs', price: 19.99, image: '/images/tshirt.png', description: 'Trousse de toilette pratique pour organiser vos essentiels en voyage.', quantity: 30 },
  { id: 28, name: 'Porte-clés design', type: 'accessoires-divers', category: 'homme', price: 9.99, image: '/images/tshirt.png', description: 'Porte-clés au design moderne, parfait pour un usage quotidien.', quantity: 50 },
  { id: 29, name: 'T-shirt vert olive', type: 't-shirts', category: 'homme', price: 26.99, image: '/images/tshirt.png', description: 'T-shirt vert olive en coton, pour un look décontracté et tendance.', quantity: 20 },
  { id: 30, name: 'T-shirt imprimé graphique blanc', type: 't-shirts', category: 'homme', price: 32.99, image: '/images/tshirt.png', description: 'T-shirt blanc avec imprimé graphique audacieux, parfait pour un style unique.', quantity: 15 },
  // New Products - T-shirts (Femme)
  { id: 31, name: 'T-shirt cropped rose poudré', type: 't-shirts', category: 'femme', price: 24.99, image: '/images/tshirt.png', description: 'T-shirt cropped rose poudré, idéal pour un look féminin et moderne.', quantity: 25 },
  { id: 32, name: 'T-shirt ample à rayures', type: 't-shirts', category: 'femme', price: 29.99, image: '/images/tshirt.png', description: 'T-shirt ample à rayures colorées, confortable et stylé pour l’été.', quantity: 20 },
  // New Products - Accessoires (Homme/Femme)
  { id: 33, name: 'Ceinture en cuir marron', type: 'accessoires', category: 'homme', price: 39.99, image: '/images/tshirt.png', description: 'Ceinture en cuir marron élégante, parfaite pour toutes les tenues.', quantity: 15 },
  { id: 34, name: 'Écharpe en laine grise', type: 'accessoires', category: 'femme', price: 34.99, image: '/images/tshirt.png', description: 'Écharpe en laine grise douce, idéale pour les journées fraîches.', quantity: 20 },
  // New Products - Enfants
  { id: 35, name: 'Pyjama bébé à motifs étoiles', type: 'vetements-bebe', category: 'enfants', price: 14.99, image: '/images/tshirt.png', description: 'Pyjama bébé en coton avec motifs étoiles, doux et confortable.', quantity: 40 },
  { id: 36, name: 'Peluche ours en peluche', type: 'jouets', category: 'enfants', price: 22.99, image: '/images/tshirt.png', description: 'Peluche ours douce et câline, parfaite pour les enfants.', quantity: 30 },
];
export const categories = [
  {
    name: 'Homme',
    subcategories: [
      { name: 'T-shirts', slug: 't-shirts' },
      { name: 'Pantalons', slug: 'pantalons' },
      { name: 'Vestes', slug: 'vestes' },
      { name: 'Accessoires', slug: 'accessoires' },
      { name: 'Chaussures', slug: 'chaussures-homme' },
      { name: 'Montres', slug: 'montres' },
      { name: 'Sacs', slug: 'sacs-homme' },
      { name: 'Lunettes', slug: 'lunettes-homme' },
      { name: 'Chapeaux', slug: 'chapeaux-homme' },
      { name: 'Gants', slug: 'gants-homme' },
      { name: 'Écharpes', slug: 'echarpes-homme' },
    ],
  },
  {
    name: 'Femme',
    subcategories: [
      { name: 'Robes', slug: 'robes' },
      { name: 'Jupes', slug: 'jupes' },
      { name: 'Accessoires', slug: 'accessoires-femme' },
      { name: 'Chaussures', slug: 'chaussures-femme' },
      { name: 'Montres', slug: 'montres-femme' },
      { name: 'Sacs', slug: 'sacs-femme' },
      { name: 'Lunettes', slug: 'lunettes-femme' },
      {name:'Chemise',slug:'chemise-femme'}
    ],
  },
  {
    name: 'Enfants',
    subcategories: [
      { name: 'Vêtements', slug: 'vetements-enfants' },
      { name: 'Chaussures', slug: 'chaussures-enfants' },
      { name: 'Accessoires', slug: 'accessoires-enfants' },
      { name: 'Jouets', slug: 'jouets-enfants' },
    ],
  },
  {
    name: 'Chaussures',
    subcategories: [
      { name: 'Baskets', slug: 'baskets' },
      { name: 'Bottes', slug: 'bottes' },
      { name: 'Sandales', slug: 'sandales' },
    ],
  },
  {
    name: 'Vêtements',
    subcategories: [
      { name: 'T-shirts', slug: 't-shirts' },
      { name: 'Pantalons', slug: 'pantalons' },
      { name: 'Pulls', slug: 'pulls' },
      { name: 'Shorts', slug: 'shorts' },
    ],
  },
  {
    name: 'Sacs',
    subcategories: [
      { name: 'Sacs à main', slug: 'sacs-main' },
      { name: 'Sacs à dos', slug: 'sacs-dos' },
    ],
  },
  {
    name: 'Beauté',
    subcategories: [
      { name: 'Parfums', slug: 'parfums' },
      { name: 'Cosmétiques', slug: 'cosmetiques' },
      { name: 'Soins', slug: 'soins-cheveux' },
    ],


  },

];
