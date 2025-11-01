import Link from "next/link";

interface PostCardProps {
  post: {
    title: string;
    slug: string;
    excerpt: string;
    date: string;
    category: string;
  };
}

export function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6 hover:shadow-xl transition duration-300">
      <div className="flex justify-between items-start mb-3">
        <h2 className="text-2xl font-bold text-primary hover:text-secondary transition duration-150">
          <Link href={`/post/${post.slug}`}>
            {post.title}
          </Link>
        </h2>
        <span className="text-sm font-semibold px-4 py-1 bg-secondary text-white rounded-full ml-4 whitespace-nowrap">
          {post.category}
        </span>
      </div>
      
      <p className="text-gray-700 mb-4 leading-relaxed">{post.excerpt}</p>
      
      <div className="flex justify-between items-center text-sm text-gray-500 pt-3 border-t border-gray-100">
        <p>Publicado em: <span className="font-medium text-gray-600">{post.date}</span></p>
        <Link href={`/post/${post.slug}`} className="font-semibold text-primary hover:text-secondary transition duration-150 flex items-center">
          Ler Artigo Completo 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}