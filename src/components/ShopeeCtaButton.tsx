
interface ShopeeCtaButtonProps {
  shopeeLink: string;
  title: string;
}

export function ShopeeCtaButton({ shopeeLink, title }: ShopeeCtaButtonProps) {
  return (
    <div className="fixed bottom-6 right-6 z-50 ">
      <a 
        href={shopeeLink} 
        target="_blank" 
        rel="noopener noreferrer"
        title={`Comprar ${title} na Shopee`}
        className="
          flex items-center space-x-2 
          bg-orange-500 hover:bg-orange-600 
          text-white 
          font-extrabold text-lg 
          py-3 px-6 
          rounded-full 
          shadow-xl hover:shadow-2xl 
          transform hover:scale-105 
          transition duration-300
        "
      >
        <span>🛒</span>
        <span>Comprar na Shopee!</span>
      </a>
    </div>
  );
}