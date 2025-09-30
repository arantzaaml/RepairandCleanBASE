import { useState } from "react";
import ImageLightbox from "@/components/ImageLightbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

// ====================================================================
// IMPORTACIONES DE IMÁGENES
// ====================================================================

import electricidadCuadroElectricoAntes from "@/assets/electricidad-cuadro-electrico-antes.jpeg";
import electricidadCuadroElectricoDespues from "@/assets/electricidad-cuadro-electrico-despues.jpeg";

import fontaneriaBombaAntes from "@/assets/fontaneria-bomba-antes.jpeg";
import fontaneriaBombaDespues from "@/assets/fontaneria-bomba-despues.jpeg";
import fontaneriaWcAntes from "@/assets/fontaneria-wc-antes.jpeg";
import fontaneriaWcDespues from "@/assets/fontaneria-wc-despues.jpeg";

import mantenimientoParquetAntes from "@/assets/mantenimiento-parquet-antes.jpeg";
import mantenimientoParquetDespues from "@/assets/mantenimiento-parquet-despues.jpeg";
import mantenimientoPinturaParedAntes from "@/assets/mantenimiento-pintura-pared-antes.jpeg";
import mantenimientoPinturaParedDespues from "@/assets/mantenimiento-pintura-pared-despues.jpeg";
import mantenimientoPinturaPuertaAntes from "@/assets/mantenimiento-pintura-puerta-antes.jpeg";
import mantenimientoPinturaPuertaDespues from "@/assets/mantenimiento-pintura-puerta-despues.jpeg";

import reformaEntradaPaso1 from "@/assets/reforma-entrada-paso1.jpeg";
import reformaEntradaPaso2 from "@/assets/reforma-entrada-paso2.jpeg";
import reformaEntradaPaso3 from "@/assets/reforma-entrada-paso3.jpeg";
import reformaInstalacionCocinaAntes from "@/assets/reforma-instalacion-cocina-antes.jpeg";
import reformaInstalacionCocinaDespues from "@/assets/reforma-instalacion-cocina-despues.jpeg";

import reparacionCeramicaCocinaAntes from "@/assets/reparacion-ceramica-cocina-antes.jpeg";
import reparacionCeramicaCocinaDespues from "@/assets/reparacion-ceramica-cocina-despues.jpeg";
import reparacionEscalonPaso1 from "@/assets/reparacion-escalon-paso1.jpeg";
import reparacionEscalonPaso2 from "@/assets/reparacion-escalon-paso2.jpeg";
import reparacionEscalonPaso3 from "@/assets/reparacion-escalon-paso3.jpeg";
import reparacionEscalonPaso4 from "@/assets/reparacion-escalon-paso4.jpeg";
import reparacionGrietaParedAntes from "@/assets/reparacion-grieta-pared-antes.jpeg";
import reparacionGrietaParedDespues from "@/assets/reparacion-grieta-pared-despues.jpeg";

import seguridadAcceso1 from "@/assets/seguridad-preventiva-acceso1.jpeg";
import seguridadAcceso2 from "@/assets/seguridad-preventiva-acceso2.jpeg";
import seguridadAcceso3 from "@/assets/seguridad-preventiva-acceso3.jpeg";

// ====================================================================


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const scrollToForm = () => {
    localStorage.setItem('scrollToForm', 'true');
    navigate("/");
  };

  const sections = [
    {
      title: "Seguridad y Reparaciones Urgentes",
      description: "Trabajos de seguridad preventiva, accesos y atención inmediata a problemas de infraestructura.",
      projects: [
        {
          alt: "Seguridad Preventiva: Accesos y Barreras",
          images: [
            { src: seguridadAcceso1, alt: "Seguridad - Imagen 1" },
            { src: seguridadAcceso2, alt: "Seguridad - Imagen 2" },
            { src: seguridadAcceso3, alt: "Seguridad - Imagen 3" }
          ]
        },
      ]
    },
    {
      title: "Trabajos de Electricidad",
      description: "Realizamos instalaciones eléctricas, reparaciones y mejoras en sistemas de iluminación, siempre con la máxima seguridad.",
      projects: [
        {
          alt: "Instalación de cuadro eléctrico",
          images: [
            { src: electricidadCuadroElectricoAntes, alt: "Antes" },
            { src: electricidadCuadroElectricoDespues, alt: "Después" }
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

  return (
    <div className="min-h-screen bg-background pt-20">
      <header className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-5xl font-extrabold text-foreground mb-4">
          Nuestra Galería de Proyectos
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Descubre el poder de la transformación. Aquí mostramos nuestros trabajos más recientes.
        </p>
        <Button onClick={scrollToForm} variant="cta" size="lg" className="mt-6">
          Solicita tu presupuesto
        </Button>
      </header>

      <main className="container mx-auto px-6 py-12">
        {sections.map((section, sectionIndex) => (
          <section key={sectionIndex} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 border-b pb-2 border-primary/20">
              {section.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">{section.description}</p>

            {section.projects.map((project, projectIndex) => (
              <Card key={projectIndex} className="mb-8 shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{project.alt}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {project.images.map((image, imageIndex) => (
                      <ImageLightbox
                        key={imageIndex}
                        src={image.src}
                        alt={image.alt}
                        className="overflow-hidden rounded-lg shadow-sm cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
                      >
                        <figure className="relative group">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-48 object-cover object-center transition-opacity duration-300"
                            onClick={() => openModal(image.src)}
                          />
                          <figcaption className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-sm font-medium p-2 text-center">
                            {image.alt}
                          </figcaption>
                        </figure>
                      </ImageLightbox>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </section>
        ))}
      </main>

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
