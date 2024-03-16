<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Matriz de control de acceso
    
    p.mb-4(data-aos="fade") La matriz de control es un documento diseñado para organizar los roles y permisos analizados desde la etapa de desarrollo, específicamente en la fase de requerimientos. Constituye una manera estructurada de definir quién va a realizar qué acciones dentro de la aplicación. Esta herramienta es particularmente útil para empresas grandes que gestionan diversas aplicaciones para llevar a cabo sus operaciones diarias.

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/80.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Uno de los inconvenientes al desarrollar #[em software] es realizar pruebas sin considerar adecuadamente el acceso o permisos que cada usuario debe tener, dejando la organización de estos aspectos para la etapa final. Este enfoque puede resultar en reprocesos y en una evaluación insuficiente de la seguridad de la aplicación con respecto al usuario interno. Es crucial reconocer que el usuario interno de la organización representa el primer punto de vulnerabilidad; por tanto, la seguridad interna debe ser considerada un elemento importante dentro del análisis y diseño de las aplicaciones.

    

    p.mb-5(data-aos="fade") A continuación, se muestra un ejemplo de una matriz reducida para ilustrar el enfoque que se debe adoptar y los aspectos que se deben considerar en su implementación:

    .titulo-sexto.color-acento-contenido
      p.mb-0 #[b Tabla 2.] Matriz de control de acceso

    .tabla-a.color-acento-contenido.mb-5.bg-white.mb-5(data-aos="zoom-in-up")
      table
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
            td
            td
            td
            td
            td
            td
          tr
            td Auxiliar contable
            td
            td
            td
            td
            td
            td
          tr
            td Operador
            td
            td
            td
            td
            td
            td

    .row.align-items-center.mb-4(data-aos="zoom-in-up")
      .col-lg-10
        p.mb-0 Esta matriz pertenece a una aplicación contable sencilla y muestra los roles de forma vertical en el lado izquierdo, mientras que las funcionalidades se disponen horizontalmente en la parte superior. Ahora procederemos a gestionarla, especificando quién podrá realizar qué acción o quién tendrá acceso a cada una de las funcionalidades. De esta manera, podemos ejercer control sobre la gestión de roles y permisos, determinando el nivel de acceso que cada usuario tiene en la aplicación.
      .col-lg-2.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/81.png",style="max-width: 188px;")

    .titulo-sexto.color-acento-contenido 
      p.mb-0 #[b Tabla 3.] Gestión de Matriz de control de acceso

    .tabla-a.color-acento-contenido.mb-5.bg-white.mb-5(data-aos="zoom-in-up")
      table
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
            td.text-center x
            td.text-center x
            td.text-center x
            td.text-center x
            td.text-center x
            td.text-center x
          tr
            td Auxiliar contable
            td
            td
            td
            td.text-center x
            td.text-center x
            td.text-center x
          tr
            td Operador
            td
            td
            td
            td
            td
            td.text-center x

    .row 
      .col-lg-5(data-aos="fade-right")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/82.png",style="max-width: 505px;")
      .col-lg-7(data-aos="fade-left")
        .bloque-texto-b.btxt-personalizado-2.color-primario
          p.bloque-texto-b__texto.mb-0.pb-4 En la gestión de la matriz, se observa que el administrador podrá realizar todas las funciones, mientras que el auxiliar contable solo podrá ejecutar tareas como crear registros y consultar el estado de las cuentas. Por otro lado, el operador solo tendrá la capacidad de registrar pagos. Es recomendable revisar los accesos mediante la matriz de acceso de forma periódica para garantizar la seguridad y la correcta asignación de permisos.


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
