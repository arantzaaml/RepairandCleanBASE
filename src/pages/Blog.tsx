import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { blogPosts } from "@/data/blogPosts";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <Helmet>
        <title>{t("seo_title_blog")}</title>
        <meta name="description" content={t("seo_desc_blog")} />
      </Helmet>

      {/* Header Section */}
      <section className="container mx-auto px-6 mb-16 text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          {t("blog_header_title")}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t("blog_header_subtitle")}
        </p>
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className="group overflow-hidden shadow-elegant hover:shadow-xl transition-all duration-300 hover:-translate-y-2 opacity-0 flex flex-col"
              style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title[language]} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center shadow-md">
                  <Tag className="w-3 h-3 mr-1" />
                  {post.category[language]}
                </div>
              </div>
              
              <CardHeader className="p-6 pb-2">
                <div className="flex items-center text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{new Date(post.date).toLocaleDateString(language === 'en' ? 'en-US' : language === 'ca' ? 'ca-ES' : 'es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.title[language]}
                </h2>
              </CardHeader>
              
              <CardContent className="p-6 pt-2 flex-grow">
                <p className="text-muted-foreground line-clamp-3">
                  {post.excerpt[language]}
                </p>
              </CardContent>
              
              <CardFooter className="p-6 pt-0 mt-auto">
                <Button asChild variant="ghost" className="p-0 hover:bg-transparent text-primary hover:text-primary group-hover:underline">
                  <Link to={`/blog/${post.slug}`} className="flex items-center">
                    {t("read_more")} <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Blog;
