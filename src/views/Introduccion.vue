<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-4(data-aos="fade") Bienvenidos al componente formativo: vulnerabilidades de seguridad.
    
    .row.align-items-center.mb-4
      .col-lg-9(data-aos="fade-right")
        .fondo-color-sistema-i.borde-20.p-4
          p.mb-0 Cuando se habla de desarrollo de #[em software], se deben tener en cuenta varios aspectos para no solo desarrollar pensando en solucionar una necesidad de un cliente, sino también en hacerlo contemplando características que otorgan calidad a los productos desarrollados. La evolución de la tecnología, los medios de comunicación y el acceso a la información han hecho que la seguridad de las aplicaciones se convierta en un aspecto de gran importancia, otorgando confiabilidad a usuarios y clientes al resguardar la información. Por lo tanto, este componente se enfocará en cómo evaluar y diagnosticar este importante aspecto en el desarrollo de #[em software].
      .col-lg-3.order-first.order-lg-last(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/1.png",style="max-width: 346px;")

    .row.mb-5.seccion-tarjetas(data-aos="flip-up")
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.p-4.h-100
          .seccion-tarjetas__cont-figura-dinamica.mb-4
            figure
              img.mx-auto(src='@/assets/curso/temas/23.svg')

          p La gestión de la seguridad en el desarrollo de #[em software] comprende una serie de etapas que van desde el análisis de requerimientos hasta el despliegue y mantenimiento.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.p-4.h-100
          .seccion-tarjetas__cont-figura-dinamica.mb-4
            figure
              img.mx-auto(src='@/assets/curso/temas/24.svg')

          p Herramientas como la matriz de control de acceso, estrategias de seguridad perimetral, y el uso de protocolos de comunicación segura son esenciales para fortalecer la defensa contra amenazas externas.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.p-4.h-100
          .seccion-tarjetas__cont-figura-dinamica.mb-4
            figure
              img.mx-auto(src='@/assets/curso/temas/25.svg')

          p Las pruebas de vulnerabilidad son cruciales para identificar y mitigar riesgos, asegurando que las aplicaciones sean funcionales, seguras y protejan la integridad y confidencialidad de la información.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.p-4.h-100
          .seccion-tarjetas__cont-figura-dinamica.mb-4
            figure
              img.mx-auto(src='@/assets/curso/temas/26.svg')

          p Este enfoque integral hacia la seguridad es fundamental para desarrollar #[em software] que sea robusto, confiable y seguro para los usuarios finales.
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
