import { GetStaticPaths, GetStaticProps } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';

import { Post, allPosts } from 'contentlayer/generated';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { ShopeeCtaButton } from '../../components/ShopeeCtaButton';

interface PostPageProps {
  post: Post;
}

const components = {};

export default function PostPage({ post }: PostPageProps) {
  const router = useRouter();
  const MDXContent = useMDXComponent(post.body.code);

  if (router.isFallback) {
    return <div className="flex justify-center items-center min-h-screen text-xl font-semibold text-primary">Carregando...</div>;
  }

  return (
    <>
      <Head>
        <title>{post.title} | Astec Shop</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="max-w-6xl mx-auto p-4 md:p-8 flex-grow grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow p-6 md:p-10">
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2 block">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary leading-tight">
                {post.title}
              </h1>
              <p className="text-sm text-gray-500 mb-6">Publicado em: {post.date}</p>
              {post.imageUrl && (
                <div className="relative w-full h-80 mb-8 rounded-lg overflow-hidden">
                  <Image src={post.imageUrl} alt={post.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" />
                </div>
              )}
              {post.videoLink && (
                <div className="relative w-full h-0 mb-8 rounded-lg overflow-hidden" style={{ paddingTop: '56.25%' }}>
                  <iframe
                    src={post.videoLink}
                    title={`Vídeo do Produto: ${post.title}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full border-0"
                  />
                </div>
              )}
              <article className="prose max-w-none text-gray-800 space-y-4">
                <MDXContent components={components} />
              </article>
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
          <div className="lg:col-span-1">{/* Sidebar opcional */}</div>
        </main>
        <Footer />
        {post.shopeeLink && <ShopeeCtaButton shopeeLink={post.shopeeLink} title={post.title} />}
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false, // true se quiser gerar pages dinamicamente
  };
};

export const getStaticProps: GetStaticProps<PostPageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) return { notFound: true };

  return {
    props: { post },
    revalidate: 60,
  };
};
