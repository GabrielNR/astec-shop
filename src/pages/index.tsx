import { GetStaticProps } from 'next';
import { Post, allPosts } from 'contentlayer/generated';
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ProductCard } from "../components/ProductCard";

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="max-w-6xl mx-auto p-4 md:p-8 flex-grow">
        <h2 className="text-4xl font-extrabold text-center text-primary mb-10">
          Vitrine de Ofertas e Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <ProductCard key={post.slug} post={post} />
          ))}
        </div>
        {posts.length === 0 && (
          <p className="text-center text-gray-500">Nenhum review ou oferta encontrado.</p>
        )}
      </main>
      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return {
    props: {
      posts: sortedPosts,
    },
    revalidate: 60,
  };
};
