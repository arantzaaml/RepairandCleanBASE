import { Wrench, Sparkles, Droplets, Hammer, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Wrench className="h-12 w-12" />,
      title: "Reparación",
      description: "Solucionamos cualquier avería o desperfecto en tu hogar con profesionalidad y garantía completa.",
      features: [
        "Reparación de electrodomésticos",
        "Arreglo de muebles y carpintería",
        "Sistemas eléctricos",
        "Reparación de ventanas y puertas",
        "Mantenimiento general"
      ],
      price: "Desde 45€"
    },
    {
      icon: <Sparkles className="h-12 w-12" />,
      title: "Limpieza",
      description: "Servicio de limpieza profunda y mantenimiento para mantener tu hogar impecable y saludable.",
      features: [
        "Limpieza profunda de hogar",
        "Limpieza post-obras",
        "Limpieza de cristales",
        "Desinfección y sanitización",
        "Limpieza de tapicerías"
      ],
      price: "Desde 25€/hora"
    },
    {
      icon: <Droplets className="h-12 w-12" />,
      title: "Fontanería",
      description: "Instalación, reparación y mantenimiento completo de sistemas de fontanería y plomería.",
      features: [
        "Reparación de fugas",
        "Instalación de grifos y sanitarios",
        "Desatasco de tuberías",
        "Calentadores y calderas",
        "Revisión preventiva"
      ],
      price: "Desde 60€"
    },
    {
      icon: <Hammer className="h-12 w-12" />,
      title: "Reformas",
      description: "Transformamos espacios completos adaptándolos a tus necesidades, gustos y estilo de vida.",
      features: [
        "Reforma integral de cocinas",
        "Renovación de baños",
        "Reforma de salones",
        "Pintura y decoración",
        "Cambio de suelos"
      ],
      price: "Presupuesto personalizado"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header Section */}
      <section className="py-16 bg-hero-gradient">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Ofrecemos soluciones profesionales y completas para todas las necesidades de tu hogar
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1">
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
                    <h4 className="font-semibold text-foreground mb-3">¿Qué incluye?</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t pt-4 flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">
                      {service.price}
                    </span>
                    <Link to="/contact">
                      <Button>Solicitar presupuesto</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Necesitas un servicio personalizado?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contacta con nosotros y te ofreceremos una solución adaptada a tus necesidades específicas
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <Link to="/contact">
              <Button size="lg">Contactar ahora</Button>
            </Link>
            <Link to="/gallery">
              <Button variant="outline" size="lg">Ver trabajos realizados</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;