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
import facadeBefore from "@/assets/facade-before.jpg";
import facadeAfter from "@/assets/facade-after.jpg";

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
                  <BeforeAfterSlider 
                    beforeImage={facadeBefore}
                    afterImage={facadeAfter}
                    alt="Restauración de fachada en Eixample - Antes: Desprendimientos y graffiti. Después: Fachada restaurada y protegida, respetando el patrimonio."
                    className="h-64 md:h-96 lg:h-full"
                  />
                  <div className="mt-4 text-center">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Antes:</span> Desprendimientos y graffiti en la fachada de Eixample.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Después:</span> Fachada restaurada y protegida, respetando el patrimonio.
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
                <div className="text-center">
                  <p className="text-muted-foreground mb-6">
                    ¿Quieres un presupuesto personalizado? Completa nuestro formulario detallado.
                  </p>
                  <Link to="/contact">
                    <Button variant="cta" size="lg" className="w-full">
                      Ir al formulario de presupuesto
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;