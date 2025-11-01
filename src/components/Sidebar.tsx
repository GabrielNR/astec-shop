
import Link from 'next/link';
// import { mockPosts } from '../utils/mockPosts';

// interface SidebarProps {}

export function Sidebar() {
  // Exibimos os dois primeiros posts como "Reviews Recentes"
  // const recentPosts = mockPosts.slice(0, 2); 

  return (
    <aside className="space-y-8">
      
      {/* Bloco 1: OFERTAS EM DESTAQUE (Alta Prioridade e Foco) */}
      <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-orange-500">
        <h3 className="text-2xl font-extrabold mb-4 text-primary">💰 Melhores Ofertas da Semana</h3>
        
        <p className="text-gray-700 mb-4 font-semibold text-base">
          Esses produtos estão com preço de Black Friday na Shopee!
        </p>

        {/* Produto 1: Exemplo Capinha */}
        <div className="mb-4 pb-4 border-b border-gray-100">
            <h4 className="text-lg font-bold text-gray-800 hover:text-orange-500">
                <Link href="/post/capinha-magsafe-silicone-iphone-15-pro-max">
                    Capinha MagSafe p/ iPhone 15 Pro Max
                </Link>
            </h4>
            <a 
                href="https://shopee.com.br/link-do-produto-capinha-afiliado" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
            >
                🔥 Ver Preço na Shopee
            </a>
        </div>
        
        {/* Produto 2: Exemplo Headset/Carregador */}
        <div className="mb-4 pb-4 border-b border-gray-100">
            <h4 className="text-lg font-bold text-gray-800 hover:text-orange-500">
                <Link href="/post/headset-gamer-ps5-custo-beneficio">
                    Headset Gamer PS5 (Melhor Custo-Benefício)
                </Link>
            </h4>
            <a 
                href="https://shopee.com.br/link-do-produto-headset-afiliado" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
            >
                🔥 Ver Preço na Shopee
            </a>
        </div>

        {/* Botão de Loja Geral (CTA Final) */}
        <a 
          href="https://shopee.com.br/link-para-oferta-geral-afiliado-xyz" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full inline-block text-center bg-primary hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition duration-300 text-base mt-2"
        >
          Ver Mais Produtos na Shopee
        </a>
      </div>

      {/* Bloco 2: Últimos Reviews (Navegação para mais produtos) */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold mb-4 text-primary">📝 Outros Reviews Recentes</h3>
        <ul className="space-y-3">
          {/* {recentPosts.map((post) => (
            <li key={post.slug} className="border-b border-gray-100 pb-2 last:border-b-0">
              <Link href={`/post/${post.slug}`} className="text-gray-700 hover:text-orange-500 font-medium transition duration-200">
                {post.title}
              </Link>
            </li>
          ))} */}
        </ul>
      </div>

    </aside>
  );
}