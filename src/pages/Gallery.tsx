import { useState } from "react";
import ImageLightbox from "@/components/ImageLightbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

// --- Tus fotos importadas (cambia si subiste más) ---
import electricidadCuadroAntes from "@/assets/electricidad-cuadro-electrico-antes.jpg";
import electricidadCuadroDespues from "@/assets/electricidad-cuadro-electrico-despues.jpg";

import fontaneriaBombaAntes from "@/assets/fontaneria-bomba-antes.jpg";
import fontaneriaBombaDespues from "@/assets/fontaneria-bomba-despues.jpg";
import fontaneriaWcAntes from "@/assets/fontaneria-wc-antes.jpg";
import fontaneriaWcDespues from "@/assets/fontaneria-wc-despues.jpg";

import mantenimientoParquetAntes from "@/assets/mantenimiento-parquet-antes.jpg";
import mantenimientoParquetDespues from "@/assets/mantenimiento-parquet-despues.jpg";
import mantenimientoPinturaParedAntes from "@/assets/mantenimiento-pintura-pared-antes.jpg";
import mantenimientoPinturaParedDespues from "@/assets/mantenimiento-pintura-pared-despues.jpg";
import mantenimientoPinturaPuertaAntes from "@/assets/mantenimiento-pintura-puerta-antes.jpg";
import mantenimientoPinturaPuertaDespues from "@/assets/mantenimiento-pintura-puerta-despues.jpg";

import reformaEntradaPaso1 from "@/assets/reforma-entrada-paso1.jpg";
import reformaEntradaPaso2 from "@/assets/reforma-entrada-paso2.jpg";
import reformaEntradaPaso3 from "@/assets/reforma-entrada-paso3.jpg";
import reformaInstalacionCocinaAntes from "@/assets/reforma-instalacion-cocina-antes.jpg";
import reformaInstalacionCocinaDespues from "@/assets/reforma-instalacion-cocina-despues.jpg";

import reparacionCeramicaCocinaAntes from "@/assets/reparacion-ceramica-cocina-antes.jpg";
import reparacionCeramicaCocinaDespues from "@/assets/reparacion-ceramica-cocina-despues.jpg";
import reparacionEscalonPaso1 from "@/assets/reparacion-escalon-paso1.jpg";
import reparacionEscalonPaso2 from "@/assets/reparacion-escalon-paso2.jpg";
import reparacionEscalonPaso3 from "@/assets/reparacion-escalon-paso3.jpg";
import reparacionEscalonPaso4 from "@/assets/reparacion-escalon-paso4.jpg";
import reparacionGrietaParedAntes from "@/assets/reparacion-grieta-pared-antes.jpg";
import reparacionGrietaParedDespues from "@/assets/reparacion-grieta-pared-despues.jpg";
// -------------------------

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const navigate = useNavigate();

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // --- La nueva estructura de categorías con tus fotos ---
  const sections = [
    {
      title: "Trabajos de Electricidad",
      description: "Realizamos instalaciones eléctricas, reparaciones y mejoras en sistemas de iluminación, siempre con la máxima seguridad.",
      projects: [
        {
          alt: "Instalación de cuadro eléctrico",
          images: [
            { src: electricidadCuadroAntes, alt: "Antes" },
            { src: electricidadCuadroDespues, alt: "Después" }
          ]
        },
      ]
    },
    {
      title: "Proyectos de Fontanería",
      description: "Soluciones completas para instalaciones y reparaciones de fontanería, garantizando un servicio eficiente y duradero.",
      projects: [
        {
          alt: "Cambio de bomba de agua",
          images: [
            { src: fontaneriaBombaAntes, alt: "Antes" },
            { src: fontaneriaBombaDespues, alt: "Después" }
          ]
        },
        {
          alt: "Renovación de WC",
          images: [
            { src: fontaneriaWcAntes, alt: "Antes" },
            { src: fontaneriaWcDespues, alt: "Después" }
          ]
        },
      ]
    },
    {
      title: "Servicios de Mantenimiento",
      description: "Mantenimiento integral para hogares y oficinas. Desde pequeñas reparaciones hasta revisiones periódicas para mantener todo en perfecto estado.",
      projects: [
        {
          alt: "Renovación de parquet",
          images: [
            { src: mantenimientoParquetAntes, alt: "Antes" },
            { src: mantenimientoParquetDespues, alt: "Después" }
          ]
        },
        {
          alt: "Pintura de pared",
          images: [
            { src: mantenimientoPinturaParedAntes, alt: "Antes" },
            { src: mantenimientoPinturaParedDespues, alt: "Después" }
          ]
        },
        {
          alt: "Pintura de puerta",
          images: [
            { src: mantenimientoPinturaPuertaAntes, alt: "Antes" },
            { src: mantenimientoPinturaPuertaDespues, alt: "Después" }
          ]
        },
      ]
    },
    {
      title: "Proyectos de Reforma",
      description: "Transformaciones completas que modernizan y optimizan tu espacio, adaptándolo a tus necesidades y gustos.",
      projects: [
        {
          alt: "Reforma de entrada",
          images: [
            { src: reformaEntradaPaso1, alt: "Paso 1: Demolición" },
            { src: reformaEntradaPaso2, alt: "Paso 2: Instalación de materiales" },
            { src: reformaEntradaPaso3, alt: "Paso 3: Acabado" }
          ]
        },
        {
          alt: "Instalación de cocina",
          images: [
            { src: reformaInstalacionCocinaAntes, alt: "Antes" },
            { src: reformaInstalacionCocinaDespues, alt: "Después" }
          ]
        },
      ]
    },
    {
      title: "Servicios de Reparación",
      description: "Solucionamos problemas graves de infraestructura, devolviendo la seguridad y el buen estado a tu propiedad.",
      projects: [
        {
          alt: "Reparación de cerámica de cocina",
          images: [
            { src: reparacionCeramicaCocinaAntes, alt: "Antes" },
            { src: reparacionCeramicaCocinaDespues, alt: "Después" }
          ]
        },
        {
          alt: "Reparación de escalón",
          images: [
            { src: reparacionEscalonPaso1, alt: "Paso 1: Demolición" },
            { src: reparacionEscalonPaso2, alt: "Paso 2: Relleno" },
            { src: reparacionEscalonPaso3, alt: "Paso 3: Acabado" },
            { src: reparacionEscalonPaso4, alt: "Paso 4: Finalizado" }
          ]
        },
        {
          alt: "Reparación de grieta en pared",
          images: [
            { src: reparacionGrietaParedAntes, alt: "Antes" },
            { src: reparacionGrietaParedDespues, alt: "Después" }
          ]
        },
      ]
    },
  ];
  // ----------------------------------------

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
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-center mb-12">
            Nuestros Trabajos por Especialidad
          </h2>

          <div className="space-y-16">
            {sections.map((section, index) => (
              <Card key={index} className="overflow-hidden shadow-elegant">
                <CardHeader className="bg-secondary/50">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <CardTitle className="text-2xl font-bold text-foreground">
                        {section.title}
                      </CardTitle>
                      <p className="text-muted-foreground mt-2">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  {section.projects.length > 0 ? (
                    <div className="grid grid-cols-1 gap-8">
                      {section.projects.map((project, projectIndex) => (
                        <div key={projectIndex} className="bg-secondary/30 rounded-lg p-4">
                          <h4 className="text-lg font-semibold text-center mb-4">{project.alt}</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {project.images.map((image, imageIndex) => (
                              <div key={imageIndex} className="flex flex-col items-center">
                                <span className="text-sm text-gray-500 mb-2">{image.alt}</span>
                                <ImageLightbox
                                  src={image.src}
                                  alt={`${project.alt} - ${image.alt}`}
                                  className="w-full h-auto cursor-pointer"
                                >
                                  <img
                                    src={image.src}
                                    alt={`${project.alt} - ${image.alt}`}
                                    className="w-full h-auto cursor-pointer object-cover aspect-video"
                                    onClick={() => openModal(image.src)}
                                  />
                                </ImageLightbox>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center text-muted-foreground py-8">
                      <p>Próximamente... ¡Estamos trabajando en agregar las fotos de esta sección!</p>
                    </div>
                  )}
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
              <Button
                size="lg"
                onClick={() => {
                  localStorage.setItem('scrollToForm', 'true');
                  navigate('/');
                }}>
                Solicita tu presupuesto
              </Button>
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

      {/* Fullscreen Modal */}
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

export default Gallery;
