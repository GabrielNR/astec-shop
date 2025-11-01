import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm'; 
import rehypeSlug from 'rehype-slug';
// Define o esquema do seu Post
export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'posts/**/*.mdx', 
  contentType: 'mdx', // Informa ao Contentlayer que o conteúdo é MDX
  
  fields: {
    // Campos do seu Frontmatter
    title: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    excerpt: { type: 'string', required: true },
    date: { type: 'string', required: true },
    category: { type: 'string', required: true },
    
    // Campos de Vendas/Imagens
    imageUrl: { type: 'string', required: true },
    shopeeLink: { type: 'string', required: true },
    videoLink: { type: 'string', required: false },
  },
  
  computedFields: {
    // Adiciona o link da página para facilitar a navegação (post.url)
    url: { 
      type: 'string', 
      resolve: (doc) => `/post/${doc.slug}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'content', // Nome da pasta que contém a subpasta 'posts'
  documentTypes: [Post],

  mdx: {
    remarkPlugins: [
      remarkGfm 
    ],
    rehypePlugins: [
      rehypeSlug, 
    ],
  },
});