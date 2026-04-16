import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { Wrench, Droplets, Hammer, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Helmet } from "react-helmet-async";
import ImageLightbox from "@/components/ImageLightbox"; 
import { useLanguage } from "@/contexts/LanguageContext";

// ====================================================================
// IMPORTACIONES DE IMÁGENES
import heroImage from "@/assets/hero-professional.jpg";
import imageAcceso1 from "@/assets/seguridad-preventiva-acceso1.jpeg";
import electricidadCuadroElectricoDespues from "@/assets/electricidad-cuadro-electrico-despues.jpeg";
import fontaneriaBombaDespues from "@/assets/fontaneria-bomba-despues.jpeg";
import reparacionGrietaParedDespues from "@/assets/reparacion-grieta-pared-despues.jpeg";

const facadeBefore = "/lovable-uploads/65f44365-8ec1-4dc4-8bfd-1c035df281bf.png";
const facadeAfter = "/lovable-uploads/dc849163-c2ed-47a0-b559-af5a30526cbd.png";
// ====================================================================

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre es obligatorio.",
  }),
  phone: z.string().regex(/^\d{9}$/, {
    message: "El teléfono debe tener 9 dígitos.",
  }),
  email: z.string().email({
    message: "Email inválido.",
  }),
  postalCode: z.string().regex(/^\d{5}$/, {
    message: "CP de 5 dígitos.",
  }),
  description: z.string().min(10, {
    message: "Describe tu proyecto.",
  }),
});

const Home = () => {
  const { t } = useLanguage();
  const formRef = useRef(null);
  const { toast } = useToast();

  useEffect(() => {
    const shouldScroll = localStorage.getItem('scrollToForm');
    if (shouldScroll === 'true' && formRef.current) {
      localStorage.removeItem('scrollToForm');
      setTimeout(() => {
        formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, []);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      postalCode: "",
      description: "",
    },
  });

  const featuredProjects = [
    {
      title: t("gallery_section_electricidad"),
      description: t("gallery_desc_electricidad"),
      image: electricidadCuadroElectricoDespues, 
      category: t("gallery_section_electricidad"),
    },
    {
      title: t("gallery_section_fontaneria"),
      description: t("gallery_desc_fontaneria"),
      image: fontaneriaBombaDespues, 
      category: t("gallery_section_fontaneria"),
    },
    {
      title: t("gallery_section_reparaciones"),
      description: t("gallery_desc_reparaciones"),
      image: reparacionGrietaParedDespues, 
      category: t("gallery_section_reparaciones"),
    },
    {
      title: t("gallery_section_seguridad"),
      description: t("gallery_desc_seguridad"),
      image: imageAcceso1, 
      category: t("gallery_section_seguridad"),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{t("seo_title_home")}</title>
        <meta name="description" content={t("seo_desc_home")} />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden md:pt-48" aria-labelledby="hero-title">
        <div className="absolute inset-0">
          <ImageLightbox src={heroImage} alt="Reformas y reparaciones integrales a nivel local - Repair & Clean" className="w-full h-full">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${heroImage})` }}
            />
            <div className="absolute inset-0 bg-hero-gradient opacity-80"></div>
          </ImageLightbox>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 text-center">
          <h1 id="hero-title" className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {t("hero_title")}
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto px-2">
            {t("hero_subtitle")}
          </p>
          <Button
            variant="cta"
            size="lg"
            className="text-lg px-6 sm:px-8 py-3 sm:py-4 hover:-translate-y-1 transition-transform w-full sm:w-auto"
            onClick={() => {
              if (formRef.current) {
                formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}>
            {t("hero_cta")}
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-secondary/50" aria-labelledby="about-title">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="about-title" className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t("history_title")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("history_text")}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16" aria-labelledby="services-title">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t("solutions_custom_title")}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  <Droplets className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{t("service_fontaneria_title")}</h3>
                <p className="text-muted-foreground">{t("service_fontaneria_desc")}</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  <Wrench className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{t("service_mantenimiento_title")}</h3>
                <p className="text-muted-foreground">{t("service_mantenimiento_desc")}</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  <Hammer className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{t("service_reformas_title")}</h3>
                <p className="text-muted-foreground">{t("service_reformas_desc")}</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 sm:space-x-4">
            <Button asChild variant="outline" size="lg" className="hover:-translate-y-1 transition-transform w-full sm:w-auto">
              <Link to="/services">{t("see_all_services")}</Link>
            </Button>
            <Button asChild variant="default" size="lg" className="hover:-translate-y-1 transition-transform w-full sm:w-auto">
              <Link to="/gallery">{t("see_full_gallery")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-secondary/50" aria-labelledby="gallery-preview-title">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 id="gallery-preview-title" className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t("featured_solutions_title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("featured_solutions_desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden shadow-elegant group">
                <CardContent className="p-0">
                  <ImageLightbox src={project.image} alt={`${project.title} a nivel local`} className="w-full h-48 block cursor-pointer">
                    <img
                      src={project.image}
                      alt={`${project.title} a nivel local - Trabajo realizado por Repair & Clean`}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </ImageLightbox>
                </CardContent>
                <CardHeader className="p-4">
                  <p className="text-sm font-medium text-primary mb-1">{project.category}</p>
                  <CardTitle className="text-lg font-semibold text-foreground">{project.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Large Renovation */}
          <div className="text-center mb-12 border-t pt-8 border-primary/20">
             <h3 className="text-3xl font-bold text-foreground mb-4">{t("major_renovations_title")}</h3>
          </div>
          
          <Card className="max-w-4xl mx-auto overflow-hidden shadow-elegant mb-12">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 bg-secondary/30 text-left">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{t("facade_case_title")}</h3>
                  <p className="text-muted-foreground mb-6 font-medium">{t("facade_case_subtitle")}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-1">{t("facade_case_challenge_title")}</h4>
                      <p className="text-sm text-muted-foreground">{t("facade_case_challenge_text")}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-1">{t("facade_case_solution_title")}</h4>
                      <p className="text-sm text-muted-foreground">{t("facade_case_solution_text")}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <ImageLightbox src={facadeBefore} alt={`${t("facade_case_title")} – ${t("gallery_before")}`} className="flex-1">
                      <img src={facadeBefore} alt={`${t("facade_case_title")} – ${t("gallery_before")}`} className="w-full h-auto cursor-pointer" />
                    </ImageLightbox>
                    <ImageLightbox src={facadeAfter} alt={`${t("facade_case_title")} – ${t("gallery_after")}`} className="flex-1">
                      <img src={facadeAfter} alt={`${t("facade_case_title")} – ${t("gallery_after")}`} className="w-full h-auto cursor-pointer" />
                    </ImageLightbox>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section id="formulario-presupuesto" className="py-16" ref={formRef} aria-labelledby="contact-title">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 id="contact-title" className="text-3xl md:text-4xl font-bold text-foreground mb-6">{t("contact_form_title")}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("contact_form_subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">{t("request_budget")}</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form className="space-y-6" method="POST" action="https://formspree.io/f/mzzajqdp">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("contact_form_name")} *</FormLabel>
                          <FormControl><Input {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("contact_form_phone")} *</FormLabel>
                            <FormControl><Input type="tel" {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("contact_form_email")} *</FormLabel>
                            <FormControl><Input type="email" {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="postalCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("contact_form_postal")} *</FormLabel>
                          <FormControl><Input {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("contact_form_message")} *</FormLabel>
                          <FormControl><Textarea placeholder={t("contact_form_desc_placeholder")} {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" variant="cta" size="lg" className="w-full">{t("contact_form_send")}</Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">{t("contact_info_title")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-foreground">{t("contact_address_label")}</h3>
                      <p className="text-muted-foreground">Carrer de la Manigua, 18<br />Sant Andreu, 08027 Barcelona</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-foreground">{t("contact_phone_label")}</h3>
                      <p className="text-muted-foreground">933 805 321</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-foreground">{t("contact_email_label")}</h3>
                      <p className="text-muted-foreground">info@repair-and-clean.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-foreground">{t("contact_hours_label")}</h3>
                      <p className="text-muted-foreground">Mon-Fri: 8:00 - 18:00<br />Sat: 9:00 - 14:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary/30" aria-labelledby="why-title">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 id="why-title" className="text-3xl font-bold text-foreground mb-4">{t("why_choose_us_title")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: t("benefit_1_title"), desc: t("benefit_1_desc") },
              { title: t("benefit_2_title"), desc: t("benefit_2_desc") },
              { title: t("benefit_3_title"), desc: t("benefit_3_desc") }
            ].map((benefit, i) => (
              <Card key={i} className="text-center shadow-soft hover:-translate-y-1 transition-transform">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
