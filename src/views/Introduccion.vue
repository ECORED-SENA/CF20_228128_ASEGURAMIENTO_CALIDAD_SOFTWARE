<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.align-items-center.mb-4
      .col-lg-7
        .fondo-color-sistema-i.borde-20.p-4
          p.mb-0 Cuando se habla de desarrollo de #[em software], se deben tener en cuenta varios aspectos para no solo desarrollar pensando en solucionar una necesidad de un cliente, sino también en hacerlo contemplando características que otorgan calidad a los productos desarrollados. La evolución de la tecnología, los medios de comunicación y el acceso a la información han hecho que la seguridad de las aplicaciones se convierta en un aspecto de gran importancia, otorgando confiabilidad a usuarios y clientes al resguardar la información. Por lo tanto, este componente se enfocará en cómo evaluar y diagnosticar este importante aspecto en el desarrollo de #[em software].
      .col-lg-5.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/1.png",style="max-width: 346px;")

    .fondo-color-secundario.p-4.text-white.borde-15
      p.mb-0 La gestión efectiva de la seguridad en el desarrollo de #[em software] comprende una serie de etapas que van desde el análisis de requerimientos hasta el despliegue y mantenimiento, asegurando la integración de prácticas de seguridad a lo largo de todo el proceso. Además, herramientas como la matriz de control de acceso, estrategias de seguridad perimetral, y el uso de protocolos de comunicación segura son esenciales para fortalecer la defensa contra amenazas externas. Las pruebas de vulnerabilidad desempeñan un papel clave en la identificación y mitigación de posibles riesgos, garantizando así que las aplicaciones no solo cumplan con las expectativas funcionales, sino que también mantengan la integridad y confidencialidad de la información frente a potenciales vulnerabilidades. Este enfoque integral hacia la seguridad es fundamental para desarrollar #[em software] que sea robusto, confiable y seguro para los usuarios finales.
    
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
