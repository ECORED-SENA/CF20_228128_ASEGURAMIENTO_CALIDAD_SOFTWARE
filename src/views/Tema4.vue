<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Protocolos de comunicación segura
    
    p.mb-5(data-aos="fade") Cuando navegamos en internet a través de nuestro navegador preferido, se produce un intercambio de información con las distintas páginas web que visitamos. En muchas ocasiones, se comparte información que el usuario no percibe, mientras que otras veces se trata de información que se comparte de manera consciente, como cuando un usuario se registra o se suscribe.

    .row.mb-5.seccion-tarjetas-2.justify-content-center(data-aos="flip-up")
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-5.p-4.px-3.h-100
          .seccion-tarjetas__cont-figura-1.mb-4.mx-auto
            figure
              img(src='@/assets/curso/temas/84.png')

          p.fw-bold.mb-4 Internet
          p.mb-4 Es una red pública a la que accede todo el mundo, y la información compartida puede ser vista por otros usuarios sin que nos demos cuenta. 
          p.mb-4 Por esta razón, es crucial proteger nuestra información mediante protocolos de seguridad.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-6.p-4.px-3.h-100
          .seccion-tarjetas__cont-figura-1.mb-4.mx-auto
            figure
              img(src='@/assets/curso/temas/85.png')

          p.fw-bold.mb-4 Los protocolos de comunicación y seguridad en la red
          p.mb-4 Aseguran que la información se transmita de manera segura en internet.
          p.mb-4 Están diseñados para impedir que los intrusos accedan a esta información, utilizando para ello diferentes dispositivos, aplicaciones maliciosas o servicios.

    p.mb-5(data-aos="fade") Existen diversos tipos de protocolos diseñados para esta protección, los cuales se mencionan a continuación:
    
    .fondo-personalizado-4
      .fondo-personalizado-4__contenido
        .row.justify-content-center(data-aos="zoom-in-up")
          .col-lg-8
            ImagenInfografica.imagen-infografica-personalizada-1.color-acento-botones.mb-5.mt-5
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/temas/86.png')

              .tarjeta.borde-9.p-3(x="8%" y="22%" numero="+")
                .h5.mb-4.d-inline-block.p-2(style="background-color: #BAE9D9;") Protocolo TCP/IP
                p.mb-5 Es un protocolo que permite que los ordenadores se comuniquen entre sí de una forma sencilla, intercambiando información en la red, se compone de dos protocolos el TCP y el IP.
              .tarjeta.borde-9.p-3(x="55%" y="6%" numero="+")
                .h5.mb-4.d-inline-block.p-2(style="background-color: #BAE9D9;") Protocolo HTTP
                p.mb-5 Protocolo de transferencia de hipertexto que consiste en intercambiar información en la internet, es decir se transfiere información por medio de la URL en donde el usuario envía la información y el servidor le responde al usuario mostrando la página que un usuario solicita.

              .tarjeta.borde-9.p-3(x="91%" y="28%" numero="+")
                .h5.mb-4.d-inline-block.p-2(style="background-color: #BAE9D9;") Protocolo FTP
                p.mb-5 El protocolo FTP funciona similarmente al HTTP, solo que este transfiere archivos por la red, funciona con arquitectura cliente servidor, permite autenticarse al momento de transferir archivos entre el cliente y un servidor de forma remota.

              .tarjeta.borde-9.p-3(x="13%" y="61%" numero="+")
                .h5.mb-4.d-inline-block.p-2(style="background-color: #BAE9D9;") Protocolo DNS
                p.mb-5 Protocolo de Sistema de Nombres de Dominio, toma un directorio de dominios y los traduce a direcciones IP, por ejemplo si se escribe la dirección #[em www.sofiaplus], el servidor no lee el nombre #[em sofiaplus.com] si no que rastrea la dirección ip correspondiente (192.168.0.1).

              .tarjeta.borde-9.p-3(x="66%" y="78%" numero="+")
                .h5.mb-4.d-inline-block.p-2(style="background-color: #BAE9D9;") Protocolo SSH
                p.mb-5 Protocolo #[em Secure Socket Shell], es un protocolo que permite acceder a la red de forma segura por medio de un terminal remoto, permite autenticarse y encriptar la información entre dos dispositivos que se conectan al internet, es más utilizado para administrar sistemas por acceso remoto.

        .pt-5




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
