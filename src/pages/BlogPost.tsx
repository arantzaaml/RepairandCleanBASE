import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, language } = useLanguage();
  
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-background px-6">
        <h1 className="text-4xl font-bold text-foreground mb-4">{t("blog_post_not_found")}</h1>
        <Button asChild variant="cta">
          <Link to="/blog">{t("back_to_blog")}</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <Helmet>
        <title>{post.title[language]} | Repair & Clean</title>
        <meta name="description" content={post.excerpt[language]} />
      </Helmet>

      <article className="container mx-auto px-6 max-w-4xl animate-fade-in">
        {/* Navigation back */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="pl-0 hover:bg-transparent text-muted-foreground hover:text-primary transition-colors">
            <Link to="/blog" className="flex items-center">
              <ArrowLeft className="mr-2 w-4 h-4" /> {t("back_to_blog")}
            </Link>
          </Button>
        </div>

        {/* Post Header */}
        <header className="mb-12 text-center">
          <div className="flex items-center justify-center gap-4 text-muted-foreground text-sm mb-6 font-medium">
            <span className="flex items-center bg-secondary px-3 py-1 rounded-full">
              <Tag className="w-4 h-4 mr-2 text-primary" />
              {post.category[language]}
            </span>
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(post.date).toLocaleDateString(language === 'en' ? 'en-US' : language === 'ca' ? 'ca-ES' : 'es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
            {post.title[language]}
          </h1>

          <div className="rounded-2xl overflow-hidden shadow-elegant w-full h-[300px] md:h-[500px]">
            <img 
              src={post.image} 
              alt={post.title[language]} 
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        {/* Post Content */}
        <div className="prose prose-lg dark:prose-invert prose-p:text-muted-foreground prose-headings:text-foreground prose-a:text-primary max-w-none">
          {/* Usamos dangerouslySetInnerHTML para renderizar el contenido enriquecido (HTML básico) */}
          <div dangerouslySetInnerHTML={{ __html: post.content[language] }} />
        </div>
      </article>

      <style>{`
        /* Personalización ligera de los estilos generados por el HTML inyectado para asegurar la consistencia del Design System */
        .prose h2 {
          font-size: 1.875rem;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          font-weight: 700;
          color: hsl(var(--foreground));
        }
        .prose h3 {
          font-size: 1.5rem;
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-weight: 600;
          color: hsl(var(--foreground));
        }
        .prose p {
          margin-bottom: 1.5rem;
          line-height: 1.75;
          color: hsl(var(--muted-foreground));
        }
        .prose ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
          color: hsl(var(--muted-foreground));
        }
        .prose li {
          margin-bottom: 0.5rem;
        }
        .prose strong {
          color: hsl(var(--foreground));
          font-weight: 600;
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default BlogPost;
