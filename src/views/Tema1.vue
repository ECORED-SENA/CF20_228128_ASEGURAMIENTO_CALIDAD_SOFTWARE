<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Marco de Referencia en Gestión de la seguridad

    .row.mb-5.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 1.] Ciclo de vida de desarrollo de #[em software]
        figure
          img.mx-auto(src="@/assets/curso/temas/2.png",style="max-width: 820px;",alt="La imagen muestra un diagrama del ciclo de vida del desarrollo seguro de software, compuesto por fases secuenciales: requerimientos, diseño, desarrollo, pruebas, despliegue y operaciones. este ciclo es iterativo, indicando que las operaciones pueden llevar a nuevos requerimientos.")

    .row.justify-content-center.mb-5
      .col-lg-2.col-4.pe-0
        .fondo-color-secundario.p-md-4.h-100.d-flex.justify-content-center.flex-column(style="border-top-left-radius: 20px;border-bottom-left-radius: 20px;")
          h4.text-white.text-center Según Norma técnica ISO /IEC 27034-1:2011
          figure
            img.mx-auto(src="@/assets/curso/temas/2.svg",style="max-width: 64px;")
      .col-lg-6.col-8.ps-0
        .fondo-color-sistema-i.p-3.h-100.d-flex.align-items-center(style="border-top-right-radius: 20px;border-bottom-right-radius: 20px;")
          .bg-white.p-1.p-md-3(style="border-top-right-radius: 18px;border-bottom-right-radius: 18px;")
            p.mb-0 El estándar ISO/IEC 27034 proporciona un estándar reconocido internacionalmente para la seguridad de las aplicaciones.
            p.mb-0(style="color:#0F6BD2;") “Tecnología de la información- Técnicas de seguridad-Directrices para la preparación de la tecnología de la información y las comunicaciones para la continuidad del negocio”.

    .row.mb-5.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 2.] #[em Requerimientos de Aseguramiento de calidad]
        figure
          img.mx-auto(src="@/assets/curso/temas/3.png",style="max-width: 715px;",alt="La figura muestra un diagrama que destaca los elementos cruciales para un buen Requerimiento de Aseguramiento en seguridad informática: Roles, Riesgos, Privilegios y Autenticación, organizados en un ciclo que sugiere que cada aspecto se conecta y alimenta al siguiente en un proceso continuo.")

    

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
