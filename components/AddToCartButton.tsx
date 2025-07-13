import { useCartStore } from '../lib/hooks/useCartStore';
import { Product } from '../lib/type';

interface AddToCartButtonProps {
    product: Product; }



export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const addToCart = useCartStore((state) => state.addToCart);
  
  const handleClick = () => {
    console.log('Adding product:', product);
    addToCart(product);
    console.log('Current cart:', useCartStore.getState().items);
  };

  return (
    <button 
      className='bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition' 
      onClick={handleClick}
    >
      Ajouter au panier
    </button>
  );
}
