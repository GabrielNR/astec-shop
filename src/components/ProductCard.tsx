import Link from "next/link";
import Image from "next/image";
import { Post } from 'contentlayer/generated';

interface ProductCardProps {
  post: Post;
}

export function ProductCard({ post }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden group">
      {/* Atenção: Estamos separando o link do blog (clicando no card) 
        do link de compra direta.
      */}
      
      {/* Área Clicável para o Review (Blog) */}
      <Link href={`/post/${post.slug}`} className="block"> 
        {/* Seção da Imagem */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill={true}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition duration-500"
          />
          <span className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
            {post.category}
          </span>
        </div>

        <div className="p-4">
          {/* Título do Produto/Post */}
          <h2 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition duration-300">
            {post.title}
          </h2>
          {/* Prévia (Excerpt) */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {post.excerpt}
          </p>
        </div>
      </Link>

      {/* Botão de Compra Direta para Shopee (Sempre Visível) */}
      <div className="p-4 border-t border-gray-100">
        <a 
          href={post.shopeeLink} 
          target="_blank" 
          rel="noopener noreferrer"
          // O PROBLEMA DA COR PODE ESTAR AQUI SE O TAILWIND NÃO ESTIVER USANDO O HEX
          // Se estiver branco, use bg-orange-500 para testar
          className="w-full inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition duration-300"
        >
          <span className="mr-2">🛍️</span> Ver na Shopee
        </a>
      </div>
    </div>
  );
}