import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

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
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      postalCode: "",
      description: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("https://formspree.io/f/mzzajqdp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast({
          title: "Formulario enviado",
          description: "Nos pondremos en contacto contigo lo antes posible.",
          duration: 5000,
        });
        form.reset();
      } else {
        toast({
          title: "Error al enviar el formulario",
          description: "Hubo un problema. Por favor, inténtalo de nuevo más tarde.",
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch (error) {
      toast({
        title: "Error de red",
        description: "No se pudo conectar al servidor. Revisa tu conexión a internet.",
        variant: "destructive",
        duration: 5000,
      });
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-hero-gradient text-center text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Transforma tu Hogar con Expertos en Reparaciones
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Desde reformas integrales hasta limpiezas especializadas, ofrecemos soluciones de alta calidad para cada rincón de tu casa.
          </p>
          <Button variant="cta" size="lg" className="hover:scale-105 transition-transform">
            <a href="#solicitar-presupuesto">Solicita tu presupuesto</a>
          </Button>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 bg-muted/20" id="servicios-principales">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Nuestros Servicios Principales</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Descubre cómo podemos ayudarte a mantener y mejorar tu hogar con nuestros servicios más populares.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <Card className="text-center p-6 shadow-soft">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <img src="/reforms.jpg" alt="Reformas" className="h-20 w-auto" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">Reformas y Rehabilitaciones</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Transformamos tus espacios con proyectos a medida, desde cocinas hasta baños y rehabilitaciones completas.
                </p>
              </CardContent>
            </Card>

            {/* Service Card 2 */}
            <Card className="text-center p-6 shadow-soft">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <img src="/repairs.jpg" alt="Reparaciones" className="h-20 w-auto" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">Reparaciones del Hogar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Soluciones rápidas y eficientes para fontanería, electricidad y cualquier avería que necesites.
                </p>
              </CardContent>
            </Card>

            {/* Service Card 3 */}
            <Card className="text-center p-6 shadow-soft">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <img src="/cleaning.jpg" alt="Limpieza" className="h-20 w-auto" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">Limpieza Integral</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Servicios de limpieza profunda y especializada para que tu casa brille en cada rincón.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" size="lg">
              <a href="/servicios">Ver todos los servicios</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Más de 10 años de experiencia y clientes satisfechos en Barcelona.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial Card 1 */}
            <Card className="p-6 shadow-soft">
              <p className="text-foreground italic mb-4">
                "Contraté a Repair & Clean para la reforma de mi baño y el resultado superó mis expectativas. Profesionales, rápidos y con una atención al detalle impecable. ¡Totalmente recomendados!"
              </p>
              <p className="font-semibold text-right text-primary">- María G.</p>
            </Card>

            {/* Testimonial Card 2 */}
            <Card className="p-6 shadow-soft">
              <p className="text-foreground italic mb-4">
                "Necesitaba una reparación urgente en mi sistema de fontanería y vinieron en menos de 2 horas. El técnico fue muy amable y resolvió el problema en un instante. Un servicio de 10."
              </p>
              <p className="font-semibold text-right text-primary">- Javier R.</p>
            </Card>

            {/* Testimonial Card 3 */}
            <Card className="p-6 shadow-soft">
              <p className="text-foreground italic mb-4">
                "La limpieza de mi piso después de la obra fue perfecta. No quedó ni rastro de polvo o escombros. El equipo fue muy profesional y eficiente. Sin duda, volveré a llamarlos."
              </p>
              <p className="font-semibold text-right text-primary">- Laura S.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            ¿Listo para tu proyecto?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Hacemos realidad tus ideas. Pide tu presupuesto ahora y transforma tu hogar.
          </p>
          <Button variant="cta" size="lg" className="hover:scale-105 transition-transform">
            <a href="#solicitar-presupuesto">Solicita tu presupuesto</a>
          </Button>
        </div>
      </section>

      {/* Contact Section - Integrated into Home Page */}
      <section className="py-16" id="solicitar-presupuesto">
        <div className="container mx-auto px-6">
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
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre y Apellido *</FormLabel>
                          <FormControl>
                            <Input placeholder="Tu nombre completo" {...field} />
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
                              <Input type="tel" placeholder="123456789" {...field} />
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
                              <Input type="email" placeholder="ejemplo@dominio.com" {...field} />
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
                            <Input placeholder="Ej: 08027" {...field} />
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
                              className="min-h-32"
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
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.5168050965317!2d2.1884405763945535!3d41.40118679361816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2fe5781a985%3A0x6e2671e21b033e07!2sCarrer%20de%20la%20Manigua%2C%2018%2C%2008027%20Barcelona!5e0!3m2!1sen!2ses!4v1693655383321!5m2!1sen!2ses8"
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
    </div>
  );
};

export default Home;
