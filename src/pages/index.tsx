import { GetStaticProps } from 'next';

import { Post, allPosts } from 'contentlayer/generated';

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ProductCard } from "../components/ProductCard"; 


// 🛑 Novo: Defina a interface para as props da página
interface HomeProps {
  posts: Post[];
}

// 🛑 Use a interface HomeProps no componente
export default function Home({ posts }: HomeProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="max-w-6xl mx-auto p-4 md:p-8 flex-grow">
        <h2 className="text-4xl font-extrabold text-center text-primary mb-10">
          Vitrine de Ofertas e Reviews
        </h2>
        
        {/* Layout em Grid para a Vitrine */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 🛑 Mapeie o array 'posts' vindo das props */}
          {posts.map(post => (
            <ProductCard key={post.slug} post={post} />
          ))}
        </div>
        
        {/* Tratamento simples se não houver posts */}
        {posts.length === 0 && (
          <p className="text-center text-gray-500">Nenhum review ou oferta encontrado.</p>
        )}
        
      </main>
      <Footer />
    </div>
  );
}

// 🛑 FUNÇÃO PARA CARREGAR DADOS ESTÁTICOS 🛑
export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  // 1. O Contentlayer disponibiliza o array de todos os posts (allPosts)
  // Como padrão, vamos ordenar por data (os mais recentes primeiro)
  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // 2. Passa os dados como props para o componente Home
  return {
    props: {
      posts: sortedPosts,
    },
    // Opcional: Revalida a página a cada 60 segundos após o deploy
    revalidate: 60, 
  };
};