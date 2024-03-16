<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Seguridad perimetral

    p.mb-4(data-aos="fade") En el ámbito de la seguridad informática, los sistemas de seguridad perimetral buscan prevenir el acceso no autorizado a la red, así como a los sistemas e información que contiene.

    .row.justify-content-center.mb-4(data-aos="zoom-in-up")
      .col-lg-2.col-4.pe-0
        .fondo-color-secundario.p-md-4.h-100.d-flex.justify-content-center.flex-column(style="border-top-left-radius: 20px;border-bottom-left-radius: 20px;")
          figure
            img.mx-auto(src="@/assets/curso/temas/83.png",style="max-width: 117px;")
      .col-lg-6.col-8.ps-0
        .fondo-color-sistema-i.p-3.h-100.d-flex.align-items-center(style="border-top-right-radius: 20px;border-bottom-right-radius: 20px;")
          .bg-white.p-2.p-md-3.h-100.d-flex.align-items-center.flex-column(style="border-top-right-radius: 18px;border-bottom-right-radius: 18px;")
            p.mb-0(style="color:#0F6BD2;") La seguridad perimetral se centra en establecer barreras de protección para prevenir ataques externos, al mismo tiempo que permite identificar actividades legítimas dentro de la propia red. Su objetivo es filtrar, proteger y aislar cualquier actividad desconocida o potencialmente fraudulenta.

    p.mb-5(data-aos="fade") Para profundizar en el tema, se invita  a revisar el siguiente video:

    figure.mb-4.mb-lg-0(data-aos="fade-left")
      img.mx-auto(src="@/assets/curso/temas/imagen-video.png",style="max-width: 1240px;")

</template>

<script>
export default {
  name: 'Tema3',
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
