import { Link } from "react-router-dom";
import { Wrench, Sparkles, Droplets, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import heroImage from "@/assets/hero-professional.jpg";
import kitchenBefore from "@/assets/kitchen-before-professional.jpg";
import kitchenAfter from "@/assets/kitchen-after-professional.jpg";
import bathroomBefore from "@/assets/bathroom-before-professional.jpg";
import bathroomAfter from "@/assets/bathroom-after-professional.jpg";

const Home = () => {
  const { toast } = useToast();

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
            Reparación y Limpieza: Soluciones Integrales para Tu Hogar y Negocio
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Transformamos espacios con un servicio profesional y de confianza. Nos dedicamos a ti.
          </p>
          <Link to="/contact">
            <Button variant="cta" size="lg" className="text-lg px-8 py-4">
              Solicita tu presupuesto
            </Button>
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Una década de experiencia y confianza a tu servicio
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              En Repair and Clean, nuestra misión es simplificar tu vida. Con más de 10 años de experiencia, 
              hemos construido un equipo de expertos dedicados a ofrecer servicios de la más alta calidad en 
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
                  <Sparkles className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Limpieza profesional
                </h3>
                <p className="text-muted-foreground">
                  Mantenemos tus espacios impecables. Ofrecemos limpieza profunda para hogares, oficinas y 
                  comunidades. Nuestro equipo usa productos de calidad y las mejores técnicas para un resultado brillante.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  <Wrench className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Mantenimiento de edificios
                </h3>
                <p className="text-muted-foreground">
                  Cuidamos tu propiedad para que no tengas que preocuparte. Nos encargamos de tareas de 
                  mantenimiento preventivo y correctivo, asegurando que tu edificio o local se mantenga en perfectas condiciones.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  <Hammer className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Reparaciones y reformas
                </h3>
                <p className="text-muted-foreground">
                  De un simple arreglo a una reforma completa. Nuestro equipo de técnicos calificados puede 
                  solucionar problemas de fontanería, pintura, electricidad, y más. Devolvemos la vida a tus espacios.
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

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            ¿Listo para un espacio impecable?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contáctanos hoy mismo para obtener un presupuesto gratuito y sin compromiso. 
            Estamos disponibles 24/7 para atenderte.
          </p>
          <Link to="/contact">
            <Button variant="cta" size="lg" className="text-lg px-8 py-4">
              Pide tu presupuesto
            </Button>
          </Link>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Contáctanos
              </h2>
              <div className="space-y-2 text-muted-foreground mb-6">
                <p><strong>Teléfono:</strong> 93 380 53 21</p>
                <p><strong>WhatsApp:</strong> 644 630 831</p>
                <p><strong>Email:</strong> info@repair-and-clean.com</p>
                <p><strong>Dirección:</strong> Carrer de la Manigua, 18, Sant Andreu, 08027 Barcelona</p>
              </div>
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
                  <Button type="submit" variant="cta" size="lg" className="w-full">
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