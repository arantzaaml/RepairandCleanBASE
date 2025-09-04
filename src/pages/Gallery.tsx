import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import kitchenBefore from "@/assets/kitchen-before.jpg";
import kitchenAfter from "@/assets/kitchen-after.jpg";
import bathroomBefore from "@/assets/bathroom-before.jpg";
import bathroomAfter from "@/assets/bathroom-after.jpg";
import livingBefore from "@/assets/living-before.jpg";
import livingAfter from "@/assets/living-after.jpg";

const Gallery = () => {
  const projects = [
    {
      title: "Reforma Integral de Cocina",
      description: "Transformación completa de una cocina antigua en un espacio moderno y funcional con nuevos electrodomésticos y diseño contemporáneo.",
      beforeImage: kitchenBefore,
      afterImage: kitchenAfter,
      category: "Reformas",
      duration: "2 semanas"
    },
    {
      title: "Renovación de Baño Principal",
      description: "Renovación completa del baño principal con materiales de alta calidad, nueva distribución y elementos de lujo.",
      beforeImage: bathroomBefore,
      afterImage: bathroomAfter,
      category: "Reformas",
      duration: "10 días"
    },
    {
      title: "Remodelación de Salón",
      description: "Transformación del salón con nuevo diseño de iluminación, pintura, suelos y distribución del mobiliario.",
      beforeImage: livingBefore,
      afterImage: livingAfter,
      category: "Reformas",
      duration: "1 semana"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header Section */}
      <section className="py-16 bg-hero-gradient">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Galería de Proyectos
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Descubre las increíbles transformaciones que hemos realizado para nuestros clientes
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Antes y Después
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Desliza para ver el increíble cambio en cada proyecto
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden shadow-elegant">
                <CardHeader className="bg-secondary/50">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <CardTitle className="text-2xl font-bold text-foreground">
                        {project.title}
                      </CardTitle>
                      <p className="text-muted-foreground mt-2">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex flex-col text-sm text-muted-foreground">
                      <span className="font-medium">Categoría: {project.category}</span>
                      <span className="font-medium">Duración: {project.duration}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <BeforeAfterSlider 
                    beforeImage={project.beforeImage}
                    afterImage={project.afterImage}
                    alt={project.title}
                    className="h-64 md:h-96 lg:h-[500px] rounded-none"
                  />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center bg-secondary/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿Te gusta lo que ves?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Estos son solo algunos ejemplos de nuestro trabajo. Cada proyecto es único y se adapta completamente a las necesidades y gustos del cliente.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <a href="/#formulario-presupuesto">
                <Button size="lg">Solicita tu presupuesto</Button>
              </a>
              <Link to="/services">
                <Button variant="outline" size="lg">Ver nuestros servicios</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Nuestro Proceso
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Así es como transformamos tu hogar paso a paso
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Consulta inicial", description: "Visitamos tu hogar y evaluamos el proyecto" },
              { step: "2", title: "Presupuesto", description: "Te ofrecemos un presupuesto detallado sin compromiso" },
              { step: "3", title: "Ejecución", description: "Realizamos el trabajo con los mejores materiales" },
              { step: "4", title: "Entrega", description: "Te entregamos tu hogar transformado" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {process.title}
                </h3>
                <p className="text-muted-foreground">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;