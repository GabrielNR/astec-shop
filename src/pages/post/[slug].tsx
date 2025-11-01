import Head from 'next/head';
import Image from 'next/image'; 
import { useRouter } from 'next/router';
// import { GetStaticProps, GetStaticPaths } from 'next';

import { Post, allPosts } from "contentlayer/generated"

// Componentes Essenciais
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { ShopeeCtaButton } from '../../components/ShopeeCtaButton';

import { useMDXComponent } from 'next-contentlayer/hooks';

const components = {};

// interface PostPageProps {
//   post: Post | null;
// }

export default function PostPage() {
  const router = useRouter();
  const post = allPosts.find((p) => p.slug === (router.query.slug as string));
  const MDXContent = useMDXComponent(post ? post.body.code : '');


  // 2. Loading State (para fallback true)
  if (router.isFallback) {
    return (
      <div className="flex justify-center items-center min-h-screen text-xl font-semibold text-primary">
        Carregando...
      </div>
    );
  }

  // 3. 404 Not Found State
  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Post Não Encontrado</h1>
        <p className="text-gray-700">O review que você procura pode ter sido removido ou o link está incorreto.</p>
        <button 
          onClick={() => router.push('/')} 
          className="mt-6 bg-primary hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
        >
          Voltar para a Vitrine
        </button>
      </div>
    );
  }

  // 4. Renderização do Post
  return (
    <>
      <Head>
        {/* Usamos o título do Frontmatter */}
        <title>{post.title} | Astec Shop</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        {/* INÍCIO DO LAYOUT DE DUAS COLUNAS */}
        <main className="max-w-6xl mx-auto p-4 md:p-8 flex-grow grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Colunas 1 e 2: CONTEÚDO PRINCIPAL (2/3 da largura no desktop) */}
            <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow p-6 md:p-10">
                    {/* Cabeçalho e Metadados */}
                    <span className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2 block">
                        {post.category}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary leading-tight">
                        {post.title}
                    </h1>
                    <p className="text-sm text-gray-500 mb-6">
                        Publicado em: {post.date}
                    </p>

                    {/* Imagem de Capa - CORRIGIDO para Next/Image */}
                    {post.imageUrl && (
                        <div className="relative w-full h-80 mb-8 rounded-lg overflow-hidden">
                            <Image 
                                src={post.imageUrl} 
                                alt={post.title} 
                                fill // Propriedade 'fill' para preencher o container pai
                                className="object-cover" 
                                sizes="(max-width: 1024px) 100vw, 66vw"
                            />
                        </div>
                    )}

                    {/* VÍDEO EMBED RESPONSIVO (Melhor Posição: Após a Imagem) */}
                    {post.videoLink && (
                      <div 
                        className="relative w-full h-0 mb-8 rounded-lg overflow-hidden" 
                        style={{ paddingTop: '56.25%' }} // Relação 16:9
                      >
                        <iframe
                          src={post.videoLink}
                          title={`Vídeo do Produto: ${post.title}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute top-0 left-0 w-full h-full border-0"
                        >
                        </iframe>
                      </div>
                    )}

                    {/* Conteúdo Principal do Artigo: Renderizando o MDX */}
                    <article 
                    className="prose max-w-none text-gray-800 space-y-4"
                    >
                        {/* 🛑 Renderiza o conteúdo processado pelo Contentlayer */}
                        <MDXContent components={components} />
                    </article>
                    
                    {/* Botão CTA Final - CORRIGIDO para red-600 */}
                    {post.shopeeLink && (
                        <div className="mt-8 text-center">
                            <a 
                                href={post.shopeeLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-md"
                            >
                                Ver Produto e Comprar na Shopee!
                            </a>
                        </div>
                    )}
                    
                </div>
            </div>

            <div className="lg:col-span-1">
                {/* <Sidebar />  */}
            </div>
            
        </main>
        <Footer />
        
        {post.shopeeLink && (
            <ShopeeCtaButton 
                shopeeLink={post.shopeeLink} 
                title={post.title} 
            />
        )}
      </div>
    </>
  );
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = allPosts.map((post) => ({
//     params: { slug: post.slug },
//   }));

//   return {
//     paths,
//     fallback: true,
//   };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const slug = params?.slug as string;
//   const post = allPosts.find((p) => p.slug === slug);

//   if (!post) {
//     return { notFound: true };
//   }

//   return {
//     props: {
//       post,
//     },
//     revalidate: 60,
//   };
// };