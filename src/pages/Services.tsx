import { Wrench, Sparkles, Droplets, Hammer, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  const services = [
    {
      icon: <Wrench className="h-12 w-12" />,
      title: t("service_mantenimiento_title"),
      description: t("service_mantenimiento_desc"),
      features: [
        t("feature_mantenimiento_1"),
        t("feature_mantenimiento_2"),
        t("feature_mantenimiento_3"),
        t("feature_mantenimiento_4")
      ],
      price: `${t("price_from")} 45€`
    },
    {
      icon: <Sparkles className="h-12 w-12" />,
      title: t("service_limpieza_title"),
      description: t("service_limpieza_desc"),
      features: [
        t("feature_limpieza_1"),
        t("feature_limpieza_2"),
        t("feature_limpieza_3"),
        t("feature_limpieza_4")
      ],
      price: `${t("price_from")} 25€${t("price_hour")}`
    },
    {
      icon: <Droplets className="h-12 w-12" />,
      title: t("service_fontaneria_title"),
      description: t("service_fontaneria_desc"),
      features: [
        t("feature_fontaneria_1"),
        t("feature_fontaneria_2"),
        t("feature_fontaneria_3"),
        t("feature_fontaneria_4")
      ],
      price: `${t("price_from")} 60€`
    },
    {
      icon: <Hammer className="h-12 w-12" />,
      title: t("service_reformas_title"),
      description: t("service_reformas_desc"),
      features: [
        t("feature_reformas_1"),
        t("feature_reformas_2"),
        t("feature_reformas_3"),
        t("feature_reformas_4")
      ],
      price: t("price_custom")
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{t("seo_title_services")}</title>
        <meta name="description" content={t("seo_desc_services")} />
      </Helmet>
      
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-hero-gradient" aria-labelledby="services-header-title">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 id="services-header-title" className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t("services_header_title")}
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto px-2">
            {t("services_header_subtitle")}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16" aria-labelledby="services-grid-title">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 id="services-grid-title" className="sr-only">{t("services_grid_title")}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">
                    {service.title}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">{t("included_title")}</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t pt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <span className="text-2xl font-bold text-primary">
                      {service.price}
                    </span>
                    <Button 
                      className="hover:-translate-y-1 transition-transform w-full sm:w-auto h-auto py-3 px-4 text-sm" 
                      onClick={() => {
                        localStorage.setItem('scrollToForm', 'true');
                        navigate('/');
                      }}>
                      <span className="whitespace-normal text-center">{t("request_budget")}</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/50" aria-labelledby="cta-title">
        <div className="container mx-auto px-6 text-center">
          <h2 id="cta-title" className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t("gallery_cta_title")}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t("gallery_cta_subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button 
              size="lg" 
              className="hover:-translate-y-1 transition-transform w-full sm:w-auto h-auto py-4 sm:py-2"
              onClick={() => {
                localStorage.setItem('scrollToForm', 'true');
                navigate('/');
              }}>
              <span className="whitespace-normal text-center">{t("request_budget")}</span>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-auto py-4 sm:py-2">
              <Link to="/gallery" className="whitespace-normal text-center">
                {t("see_works")}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;