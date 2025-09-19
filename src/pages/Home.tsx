import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { Wrench, Droplets, Hammer, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ImageLightbox from "@/components/ImageLightbox";
import heroImage from "@/assets/hero-professional.jpg";
import kitchenBefore from "@/assets/kitchen-before-professional.jpg";
import kitchenAfter from "@/assets/kitchen-after-professional.jpg";
const facadeBefore = "/lovable-uploads/65f44365-8ec1-4dc4-8bfd-1c035df281bf.png";
const facadeAfter = "/lovable-uploads/dc849163-c2ed-47a0-b559-af5a30526cbd.png";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre y apellido son obligatorios (mínimo 2 caracteres).",
  }),
  phone: z.string().regex(/^\d{9}$/, {
    message: "El teléfono debe tener exactamente 9 dígitos.",
  }),
  email: z.string().email({
    message: "Por favor, introduce un correo electrónico válido.",
  }),
  postalCode: z.string().regex(/^\d{5}$/, {
    message: "El código postal debe tener exactamente 5 dígitos.",
  }),
  description: z.string().min(10, {
    message: "Por favor, describe tu proyecto con más detalle (mínimo 10 caracteres).",
  }),
});

const Home = () => {
  const formRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const { toast } = useToast();

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // ESTE ES EL CÓDIGO CLAVE: Se encarga de desplazarse al formulario.
  useEffect(() => {
    const shouldScroll = localStorage.getItem('scrollToForm');
    
    if (shouldScroll === 'true' && formRef.current) {
      localStorage.removeItem('scrollToForm');
      
      setTimeout(() => {
        formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100); // Pequeño retraso para asegurar que el elemento esté visible
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

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center cursor-pointer"
          style={{ backgroundImage: `url(${heroImage})` }}
          onClick={() => openModal(heroImage)}
        >
          <div className="absolute inset-0 bg-hero-gradient opacity-80"></div>
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Reparación y Limpieza: Soluciones Integrales para Tu Hogar y Negocio
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Transformamos espacios con un servicio profesional y de confianza. Nos dedicamos a ti.
          </p>
          <Button
            variant="cta"
            size="lg"
            className="text-lg px-8 py-4"
            onClick={() => {
              // Ahora usa la referencia para el scroll, más confiable
              if (formRef.current) {
                formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}>
            Solicita tu presupuesto
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              3 años de dedicación y excelencia
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              En Repair and Clean, nuestra misión es simplificar tu vida. Desde hace 3 años,
              nos hemos dedicado a construir un equipo de expertos que ofrecen servicios de la más alta calidad en
              limpieza, mantenimiento y reparaciones. Nos enorgullece nuestro trabajo, y tu satisfacción es
              nuestro compromiso más importante.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Soluciones a tu medida
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  <Droplets className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Fontanería Profesional
                </h3>
                <p className="text-muted-foreground">
                  Expertos en desatascos, reparación de fugas, instalaciones de grifería y sanitarios, y sistemas de agua completos para tu hogar o negocio.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  <Wrench className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Electricidad Certificada
                </h3>
                <p className="text-muted-foreground">
                  Instalaciones eléctricas seguras, reparación de averías, boletines de luz, y modernización de cuadros eléctricos para garantizar tu tranquilidad.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  <Hammer className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Reparaciones Urgentes y del Hogar
                </h3>
                <p className="text-muted-foreground">
                  De averías inesperadas a pequeños arreglos, nuestro equipo resuelve problemas de humedades, persianas, cerraduras y más, de forma rápida y eficiente.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg">
                Ver todos los servicios
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Antes y Después
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubre las increíbles transformaciones que hemos realizado
            </p>
          </div>
          
          <Card className="max-w-4xl mx-auto overflow-hidden shadow-elegant mb-12">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 bg-secondary/30">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Restauración completa de fachada en Eixample
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Rescate completo de la seguridad y estética de un edificio histórico del Plan Cerdà.
                  </p>
                  
                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">El Desafío: Rescatar la Seguridad y Estética de un Edificio Histórico</h4>
                      <p className="text-muted-foreground">
                        El edificio en Carrer de Llanca, 5, en el corazón del Eixample de Barcelona, nos presentó un doble desafío. Como parte del Plan Cerdà y catalogado como patrimonio, el proyecto requería una intervención delicada para resolver problemas de seguridad urgentes, como desprendimientos en balcones y molduras, sin comprometer su valor histórico.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Nuestra Solución: Precisión y Respeto por el Patrimonio</h4>
                      <p className="text-muted-foreground">
                        En REPAIR AND CLEAN, diseñamos un plan de trabajo detallado para abordar la seguridad y estética de la fachada. Restauramos completamente los balcones y reconstruimos las molduras decorativas sobre los dinteles. Utilizamos materiales de alta calidad y técnicas que garantizan la durabilidad de los acabados.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">El Resultado: Seguridad, Belleza y Confianza</h4>
                      <p className="text-muted-foreground">
                        El resultado es una fachada que no solo cumple con los estándares de seguridad y protección, sino que también resplandece, honrando su rica historia en el Eixample. Este proyecto es un claro ejemplo de nuestra capacidad para ofrecer soluciones a medida.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <ImageLightbox
                      src={facadeBefore}
                      alt="Restauración de fachada en Eixample - Antes"
                      className="flex-1"
                    >
                      <img
                        src={facadeBefore}
                        alt="Restauración de fachada - Estado original."
                        className="w-full h-auto cursor-pointer"
                        onClick={() => openModal(facadeBefore)}
                      />
                    </ImageLightbox>

                    <ImageLightbox
                      src={facadeAfter}
                      alt="Restauración de fachada en Eixample - Después"
                      className="flex-1"
                    >
                      <img
                        src={facadeAfter}
                        alt="Restauración de fachada - Completamente renovada."
                        className="w-full h-auto cursor-pointer"
                        onClick={() => openModal(facadeAfter)}
                      />
                    </ImageLightbox>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Antes:</span> Estado original del edificio en Barcelona.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Después:</span> Fachada completamente renovada y mejorada.
                    </p>
                    <p className="text-xs text-muted-foreground/70 mt-2">
                      Haz clic para ampliar la imagen
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center">
            <Link to="/gallery">
              <Button variant="default" size="lg">
                Ver galería completa
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="formulario-presupuesto" className="py-16 bg-secondary/50" ref={formRef}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Contacta con Nosotros
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ¿Tienes un proyecto en mente? Cuéntanos tus ideas y te haremos un presupuesto sin compromiso
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Solicita tu Presupuesto
                </CardTitle>
                <p className="text-muted-foreground">
                  Rellena el formulario y nos pondremos en contacto contigo en menos de 24 horas
                </p>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    className="space-y-6"
                    name="contact"
                    method="POST"
                    action="https://formspree.io/f/mzzajqdp"
                  >
                    
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre y Apellido *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Tu nombre completo"
                              name="name"
                              {...field}
                              className="focus:ring-2 focus:ring-primary"
                            />
                          </FormControl>
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
                            <FormLabel>Teléfono (España) *</FormLabel>
                            <FormControl>
                               <Input
                                type="tel"
                                placeholder="123456789 (9 dígitos)"
                                name="phone"
                                {...field}
                                className="focus:ring-2 focus:ring-primary"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Correo Electrónico *</FormLabel>
                            <FormControl>
                               <Input
                                type="email"
                                placeholder="ejemplo@dominio.com"
                                name="email"
                                {...field}
                                className="focus:ring-2 focus:ring-primary"
                              />
                            </FormControl>
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
                          <FormLabel>Código Postal *</FormLabel>
                          <FormControl>
                               <Input
                                placeholder="Ej: 08027 (5 dígitos)"
                                name="postalCode"
                                {...field}
                                className="focus:ring-2 focus:ring-primary"
                              />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Descripción del Proyecto *</FormLabel>
                          <FormControl>
                               <Textarea
                                placeholder="Describe tu proyecto en detalle... (¿Qué necesitas? ¿Cuándo te gustaría realizarlo? ¿Presupuesto aproximado?)"
                                className="min-h-32 focus:ring-2 focus:ring-primary"
                                name="description"
                                {...field}
                              />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" variant="cta" size="lg" className="w-full">
                      Enviar solicitud de presupuesto
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Información de Contacto
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Dirección</h3>
                      <p className="text-muted-foreground">
                        Carrer de la Manigua, 18<br />
                        Sant Andreu, 08027 Barcelona
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Teléfono</h3>
                      <p className="text-muted-foreground">
                        <a href="tel:933805321" className="hover:text-primary transition-colors">
                          933 805 321
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:info@repair-and-clean.com" className="hover:text-primary transition-colors">
                          info@repair-and-clean.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Horario</h3>
                      <p className="text-muted-foreground">
                        Lunes a Viernes: 8:00 - 18:00<br />
                        Sábados: 9:00 - 14:00<br />
                        Domingos: Cerrado
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    Nuestra Ubicación
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="relative h-64 bg-muted rounded-b-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.835472719277!2d2.1834226154227893!3d41.40871957926284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a329d47914e9%3A0x6d95b508d745a3c9!2sCarrer%20de%20la%20Manigua%2C%2018%2C%2008027%20Barcelona%2C%20Spain!5e0!3m2!1sen!2ses!4v1628173434057!5m2!1sen!2ses"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              ¿Por qué elegirnos?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "3 años de dedicación y excelencia",
                description: "Expertos en reparaciones y mantenimiento en Barcelona"
              },
              {
                title: "Presupuesto sin compromiso",
                description: "Evaluación gratuita y presupuesto detallado"
              },
              {
                title: "Garantía total",
                description: "Todos nuestros trabajos tienen garantía de satisfacción"
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
          onClick={closeModal}
        >
          <img 
            src={selectedImage} 
            alt="Vista en pantalla completa" 
            style={{ 
              maxWidth: '90%', 
              maxHeight: '90%' 
            }} 
          />
        </div>
      )}
    </div>
  );
};

export default Home;
