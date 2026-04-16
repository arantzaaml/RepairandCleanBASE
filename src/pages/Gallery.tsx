import { useState } from "react";
import ImageLightbox from "@/components/ImageLightbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";

// --- Tus fotos importadas con la extensión .jpeg ---
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

const Gallery = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const sections = [
    {
      title: t("gallery_section_seguridad"),
      description: t("gallery_desc_seguridad"),
      projects: [
        {
          alt: t("gallery_project_seguridad"),
          images: [
            { src: seguridadAcceso1, alt: `${t("gallery_view")} 1` },
            { src: seguridadAcceso2, alt: `${t("gallery_view")} 2` },
            { src: seguridadAcceso3, alt: `${t("gallery_view")} 3` }
          ]
        },
      ]
    },
    {
      title: t("gallery_section_electricidad"),
      description: t("gallery_desc_electricidad"),
      projects: [
        {
          alt: t("gallery_project_cuadro"),
          images: [
            { src: electricidadCuadroElectricoAntes, alt: t("gallery_before") },
            { src: electricidadCuadroElectricoDespues, alt: t("gallery_after") }
          ]
        },
      ]
    },
    {
      title: t("gallery_section_fontaneria"),
      description: t("gallery_desc_fontaneria"),
      projects: [
        {
          alt: t("gallery_project_bomba"),
          images: [
            { src: fontaneriaBombaAntes, alt: t("gallery_before") },
            { src: fontaneriaBombaDespues, alt: t("gallery_after") }
          ]
        },
        {
          alt: t("gallery_project_wc"),
          images: [
            { src: fontaneriaWcAntes, alt: t("gallery_before") },
            { src: fontaneriaWcDespues, alt: t("gallery_after") }
          ]
        },
      ]
    },
    {
      title: t("gallery_section_mantenimiento"),
      description: t("gallery_desc_mantenimiento"),
      projects: [
        {
          alt: t("gallery_project_parquet"),
          images: [
            { src: mantenimientoParquetAntes, alt: t("gallery_before") },
            { src: mantenimientoParquetDespues, alt: t("gallery_after") }
          ]
        },
        {
          alt: t("gallery_project_pintura_pared"),
          images: [
            { src: mantenimientoPinturaParedAntes, alt: t("gallery_before") },
            { src: mantenimientoPinturaParedDespues, alt: t("gallery_after") }
          ]
        },
        {
          alt: t("gallery_project_pintura_puerta"),
          images: [
            { src: mantenimientoPinturaPuertaAntes, alt: t("gallery_before") },
            { src: mantenimientoPinturaPuertaDespues, alt: t("gallery_after") }
          ]
        },
      ]
    },
    {
      title: t("gallery_section_reformas"),
      description: t("gallery_desc_reformas"),
      projects: [
        {
          alt: t("gallery_project_reforma_entrada"),
          images: [
            { src: reformaEntradaPaso1, alt: `${t("gallery_step")} 1` },
            { src: reformaEntradaPaso2, alt: `${t("gallery_step")} 2` },
            { src: reformaEntradaPaso3, alt: `${t("gallery_step")} 3` }
          ]
        },
        {
          alt: t("gallery_project_cocina"),
          images: [
            { src: reformaInstalacionCocinaAntes, alt: t("gallery_before") },
            { src: reformaInstalacionCocinaDespues, alt: t("gallery_after") }
          ]
        },
      ]
    },
    {
      title: t("gallery_section_reparaciones"),
      description: t("gallery_desc_reparaciones"),
      projects: [
        {
          alt: t("gallery_project_ceramica"),
          images: [
            { src: reparacionCeramicaCocinaAntes, alt: t("gallery_before") },
            { src: reparacionCeramicaCocinaDespues, alt: t("gallery_after") }
          ]
        },
        {
          alt: t("gallery_project_escalon"),
          images: [
            { src: reparacionEscalonPaso1, alt: `${t("gallery_step")} 1` },
            { src: reparacionEscalonPaso2, alt: `${t("gallery_step")} 2` },
            { src: reparacionEscalonPaso3, alt: `${t("gallery_step")} 3` },
            { src: reparacionEscalonPaso4, alt: `${t("gallery_step")} 4` }
          ]
        },
        {
          alt: t("gallery_project_grieta"),
          images: [
            { src: reparacionGrietaParedAntes, alt: t("gallery_before") },
            { src: reparacionGrietaParedDespues, alt: t("gallery_after") }
          ]
        },
      ]
    },
  ];

  const processSteps = [
    { step: "1", title: t("step_1_title"), description: t("step_1_desc") },
    { step: "2", title: t("step_2_title"), description: t("step_2_desc") },
    { step: "3", title: t("step_3_title"), description: t("step_3_desc") },
    { step: "4", title: t("step_4_title"), description: t("step_4_desc") }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{t("seo_title_gallery")}</title>
        <meta name="description" content={t("seo_desc_gallery")} />
      </Helmet>
      
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-hero-gradient" aria-labelledby="gallery-header-title">
        <div className="container mx-auto px-6 text-center">
          <h1 id="gallery-header-title" className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t("gallery_header_title")}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            {t("gallery_header_subtitle")}
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16" aria-labelledby="gallery-grid-title">
        <div className="container mx-auto px-6">
          <h2 id="gallery-grid-title" className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            {t("gallery_grid_title")}
          </h2>

          <div className="space-y-16">
            {sections.map((section, index) => (
              <Card key={index} className="overflow-hidden shadow-elegant hover:shadow-2xl transition-all duration-500">
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
                  <div className="grid grid-cols-1 gap-8">
                    {section.projects.map((project, projectIndex) => (
                      <div key={projectIndex} className="bg-secondary/30 rounded-lg p-4 border border-border/50">
                        <h4 className="text-lg font-semibold text-center mb-4 text-primary">{project.alt}</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                          {project.images.map((image, imageIndex) => (
                            <div key={imageIndex} className="flex flex-col items-center">
                              <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">{image.alt}</span>
                              <ImageLightbox
                                src={image.src}
                                alt={`${project.alt} - ${image.alt}`}
                                className="w-full h-auto cursor-pointer"
                              >
                                <img
                                  src={image.src}
                                  alt={`${project.alt} – ${image.alt}`}
                                  className="w-full h-auto cursor-pointer object-cover aspect-video rounded-md hover:brightness-110 transition-all duration-300"
                                />
                              </ImageLightbox>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center bg-secondary/30 rounded-lg p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t("gallery_cta_title")}
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t("gallery_cta_subtitle")}
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <Button
                size="lg"
                className="hover:-translate-y-1 transition-transform"
                onClick={() => {
                  localStorage.setItem('scrollToForm', 'true');
                  navigate('/');
                }}>
                {t("request_budget")}
              </Button>
              <Button asChild variant="outline" size="lg" className="hover:-translate-y-1 transition-transform">
                <Link to="/services">
                  {t("see_all_services")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-secondary/50" aria-labelledby="gallery-process-title">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 id="gallery-process-title" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("process_title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("process_subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
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
