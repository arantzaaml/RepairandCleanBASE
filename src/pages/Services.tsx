import { Wrench, Sparkles, Droplets, Hammer, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Wrench className="h-12 w-12" />,
      title: "Mantenimiento Integral y Reparaciones",
      description: "Nos ocupamos del mantenimiento para prevenir problemas mayores y conservar el valor de su propiedad. Ofrecemos servicios de mantenimiento preventivo y correctivo para asegurar que todo funcione a la perfección.",
      features: [
        "Mantenimiento general: cambio de bombillas y reparación de elementos menores",
        "Mantenimiento de piscinas",
        "Servicios de climatización",
        "Limpieza y acondicionamiento de patios y huecos de ascensor"
      ],
      price: "Desde 45€"
    },
    {
      icon: <Sparkles className="h-12 w-12" />,
      title: "Limpieza Profesional",
      description: "Crear un ambiente impecable es nuestra prioridad. Nuestro servicio está diseñado para comunidades, empresas y particulares, utilizando productos y maquinaria especializada que garantiza resultados excepcionales.",
      features: [
        "Limpieza de áreas comunes, garajes y trasteros",
        "Limpieza de cristales y puertas de entrada",
        "Limpieza de porteros automáticos, buzones y ascensores",
        "Gestión de residuos y vaciado de papeleras"
      ],
      price: "Desde 25€/hora"
    },
    {
      icon: <Droplets className="h-12 w-12" />,
      title: "Obras y Reparaciones de Fontanería",
      description: "Nos especializamos en proyectos que cumplen las expectativas más exigentes, desde una simple reparación hasta una obra completa.",
      features: [
        "Reparación de fugas y desatascos de tuberías",
        "Instalación de sistemas completos de tuberías y grifos",
        "Revisión de calentadores y calderas",
        "Instalación de bombas y sistemas de agua"
      ],
      price: "Desde 60€"
    },
    {
      icon: <Hammer className="h-12 w-12" />,
      title: "Reformas Integrales",
      description: "Transformamos los espacios para mejorar su funcionalidad, estética y valor. Nos especializamos en proyectos que cumplen las expectativas más exigentes.",
      features: [
        "Reformas de interiores: baños, cocinas y pisos completos",
        "Obras de electricidad: instalación y adaptación de sistemas eléctricos",
        "Reformas de fachadas: solución de humedades, pintura y grietas",
        "Cambio de suelos y pintura en general"
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
            <Link to="/#formulario-presupuesto">
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