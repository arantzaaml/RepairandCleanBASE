import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

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
  address: z.string().min(10, {
    message: "La dirección debe incluir el código postal.",
  }),
  description: z.string().min(10, {
    message: "Por favor, describe tu proyecto con más detalle (mínimo 10 caracteres).",
  }),
});

const Contact = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
      description: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // Simulate sending email to info@repair-and-clean.com
      console.log("Enviando formulario a info@repair-and-clean.com:", values);
      
      toast({
        title: "¡Solicitud enviada correctamente!",
        description: "Hemos recibido tu solicitud de presupuesto. Te contactaremos en las próximas 24 horas.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error al enviar",
        description: "Ha ocurrido un error. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header Section */}
      <section className="py-16 bg-hero-gradient">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Contacta con Nosotros
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? Cuéntanos tus ideas y te haremos un presupuesto sin compromiso
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
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
                            <Input 
                              placeholder="Tu nombre completo" 
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
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Dirección con Código Postal *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Calle, número, ciudad, código postal" 
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
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" variant="cta" size="lg" className="w-full" disabled={form.formState.isSubmitting}>
                      {form.formState.isSubmitting ? "Enviando..." : "Enviar solicitud de presupuesto"}
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
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.8424849507744!2d2.1800446!3d41.4350442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a34c3a5f5555%3A0x5555555555555555!2sCarrer%20de%20la%20Manigua%2C%2018%2C%2008027%20Barcelona%2C%20Spain!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
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
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              ¿Por qué elegirnos?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Experiencia comprobada",
                description: "Más de 10 años transformando hogares en Barcelona"
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
    </div>
  );
};

export default Contact;