<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Matriz de control de acceso
    
    p.mb-4 La matriz de control es un documento diseñado para organizar los roles y permisos analizados desde la etapa de desarrollo, específicamente en la fase de requerimientos. Constituye una manera estructurada de definir quién va a realizar qué acciones dentro de la aplicación. Esta herramienta es particularmente útil para empresas grandes que gestionan diversas aplicaciones para llevar a cabo sus operaciones diarias.

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'max-width: 316px,background-image': `url(${require('@/assets/curso/temas/80.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Uno de los inconvenientes al desarrollar #[em software] es realizar pruebas sin considerar adecuadamente el acceso o permisos que cada usuario debe tener, dejando la organización de estos aspectos para la etapa final. Este enfoque puede resultar en reprocesos y en una evaluación insuficiente de la seguridad de la aplicación con respecto al usuario interno. Es crucial reconocer que el usuario interno de la organización representa el primer punto de vulnerabilidad; por tanto, la seguridad interna debe ser considerada un elemento importante dentro del análisis y diseño de las aplicaciones.

    .bloque-texto-g.p-3.p-sm-4.p-md-5.mb-4(style="background-color: #A3BFE4;")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/80.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Uno de los inconvenientes al desarrollar #[em software] es realizar pruebas sin considerar adecuadamente el acceso o permisos que cada usuario debe tener, dejando la organización de estos aspectos para la etapa final. Este enfoque puede resultar en reprocesos y en una evaluación insuficiente de la seguridad de la aplicación con respecto al usuario interno. Es crucial reconocer que el usuario interno de la organización representa el primer punto de vulnerabilidad; por tanto, la seguridad interna debe ser considerada un elemento importante dentro del análisis y diseño de las aplicaciones.

    p.mb-4 A continuación, se muestra un ejemplo de una matriz reducida para ilustrar el enfoque que se debe adoptar y los aspectos que se deben considerar en su implementación:

    .titulo-sexto.color-acento-contenido
      p.mb-0 #[b Tabla 2.] #[em Matriz de control de acceso]

    .tabla-a.color-acento-contenido.mb-5.bg-white.mb-5(data-aos="zoom-in-up")
      table
        caption.fw-normal #[em Nota]. Gestión de la ciberseguridad según el ISO/IEC 27032:2012. ,2021)
        thead
          tr
            th Rol 
            th Gestión de usuarios
            th Crear cuenta
            th Actualizar cuenta
            th Eliminar cuenta
            th Crear registro
            th Consultar estado de cuenta
        tbody
          tr
            td Administrador
            td ISO/IEC JTC1/SC27
            td 27032
            td Ciberseguridad
            td ISO
            td Sí
            td Solo los activos destinados a internet
          tr
            td Auxiliar contable
            td ISO/IEC JTC1/SC27
            td 27000
            td Seguridad de la información
            td ISO
            td Sí
            td Cualquier Origen de Riesgo en el Espacio cibernético
          tr
            td Operador
            td UIT-T
            td X.1205
            td Ciberseguridad
            td UIT
            td NO
            td Cualquier Origen de Riesgo en el Espacio cibernético

</template>

<script>
export default {
  name: 'Tema2',
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
