import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import * as remarkGfm from 'remark-gfm'; 
import * as rehypeSlug from 'rehype-slug';
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
  contentDirPath: 'content', 
  documentTypes: [Post],

  mdx: {
    remarkPlugins: [
      // 🛑 USO CORRIGIDO 🛑
      remarkGfm.default 
    ],
    rehypePlugins: [
      // 🛑 USO CORRIGIDO 🛑
      rehypeSlug.default, 
    ],
  },
});