import { Link } from "react-router-dom";
import { Wrench, Sparkles, Droplets, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import heroImage from "@/assets/hero-image.jpg";
import kitchenBefore from "@/assets/kitchen-before.jpg";
import kitchenAfter from "@/assets/kitchen-after.jpg";
import bathroomBefore from "@/assets/bathroom-before.jpg";
import bathroomAfter from "@/assets/bathroom-after.jpg";

const Home = () => {
  const { toast } = useToast();

  const services = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Reparación",
      description: "Solucionamos cualquier avería o desperfecto en tu hogar con profesionalidad y garantía."
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Limpieza",
      description: "Servicio de limpieza profunda para mantener tu hogar impecable y saludable."
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Fontanería",
      description: "Instalación, reparación y mantenimiento de sistemas de fontanería y plomería."
    },
    {
      icon: <Hammer className="h-8 w-8" />,
      title: "Reformas",
      description: "Transformamos espacios completos adaptándolos a tus necesidades y gustos."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Te contactaremos pronto para ofrecerte un presupuesto personalizado.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-hero-gradient opacity-80"></div>
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Transforma tu hogar con nosotros
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Servicios profesionales de reparación, limpieza, fontanería y reformas para hacer de tu casa el hogar perfecto.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 shadow-elegant">
              Solicita tu presupuesto
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos soluciones integrales para todas las necesidades de tu hogar
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
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
              Nuestros Proyectos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubre las increíbles transformaciones que hemos realizado
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Cocina Moderna</h3>
              <BeforeAfterSlider 
                beforeImage={kitchenBefore}
                afterImage={kitchenAfter}
                alt="Reforma de cocina"
                className="h-64 md:h-96"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Baño de Lujo</h3>
              <BeforeAfterSlider 
                beforeImage={bathroomBefore}
                afterImage={bathroomAfter}
                alt="Renovación de baño"
                className="h-64 md:h-96"
              />
            </div>
          </div>
          
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
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Contacta con Nosotros
              </h2>
              <p className="text-xl text-muted-foreground">
                Cuéntanos tu proyecto y te daremos un presupuesto sin compromiso
              </p>
            </div>
            
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input 
                      placeholder="Tu nombre" 
                      required 
                      className="focus:ring-2 focus:ring-primary"
                    />
                    <Input 
                      type="email" 
                      placeholder="Tu email" 
                      required 
                      className="focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <Textarea 
                    placeholder="Describe tu proyecto..." 
                    className="min-h-32 focus:ring-2 focus:ring-primary"
                    required
                  />
                  <Button type="submit" size="lg" className="w-full">
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;