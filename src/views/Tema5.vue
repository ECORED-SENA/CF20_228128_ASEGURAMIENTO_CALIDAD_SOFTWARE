<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Pruebas de vulnerabilidad
    
    .row.align-items-center.mb-4
      .col-lg-7(data-aos="fade-down")
        p.mb-4 Se trata de pruebas de #[em software] realizadas para evaluar los riesgos de seguridad en un #[em software], con el objetivo de minimizar las posibles amenazas y prevenir futuros ataques cibernéticos que puedan explotar vulnerabilidades en cada sistema instalado.

        .fondo-color-sistema-i.p-4.borde-13(data-aos="fade-up")
          p A continuación, se presentará una metodología práctica para identificar vulnerabilidades. Aunque no se sepa cómo explotarlas, es importante ser conscientes de que existen individuos que podrían hacerlo, perjudicando así a nosotros, a nuestros clientes y a sus reputaciones. Por razones de seguridad respecto a las empresas evaluadas, se utilizará como ejemplo el sitio web de una entidad estatal, cuyo nombre y dirección web se mantendrán en reserva. La imagen será editada para no comprometer la reputación de la entidad.


      .col-lg-5(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/87.png",style="max-width: 505px;")

    
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-2.col-4.pe-0
        .fondo-color-secundario.p-md-4.h-100.d-flex.justify-content-center.flex-column(style="border-top-left-radius: 20px;border-bottom-left-radius: 20px;")
          figure
            img.mx-auto(src="@/assets/curso/temas/2.svg",style="max-width: 116px;")
      .col-lg-6.col-8.ps-0
        .fondo-color-sistema-i.p-3.h-100.d-flex.align-items-center(style="border-top-right-radius: 20px;border-bottom-right-radius: 20px;")
          .bg-white.p-2.p-md-3.h-100.d-flex.align-items-center.flex-column(style="border-top-right-radius: 18px;border-bottom-right-radius: 18px;")
            p.mb-4.fw-bold.align-self-start(style="color:#0F6BD2;") Instalación OWASP ZAP
            p.mb-0(style="color:#0F6BD2;") Para llevar a cabo este proceso, es necesario instalar la aplicación OWASP ZAP en un sistema operativo Windows 10. Para ello, puede descargar el instructivo que le compartimos para este proceso.

    p.mb-0(data-aos="fade") Esta herramienta está diseñada para realizar pruebas de vulnerabilidad en aplicaciones y requiere tener instalado el JDK de JAVA como prerrequisito. Una vez instalado el JDK puede continuar descargando el instalador para el sistema operativo indicado.
    p.mb-5(data-aos="fade") A continuación, se presenta un ejemplo de prueba. 

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade")
          p.mb-0 #[b Figura 4.] Ejemplo de prueba

        figure.mb-4.mb-lg-0(data-aos="zoom-in-up")
          img.mx-auto(src="@/assets/curso/temas/88.png",style="max-width: 820px;",alt="La imagen muestra la interfaz de la herramienta OWASP ZAP 2.10.0 durante un escaneo automatizado de seguridad de una aplicación web. Se observa una sección para ingresar la URL a examinar, con opciones para diferentes tipos de rastreadores. Una lista de alertas de seguridad y una barra de progreso indican la actividad actual y el progreso del escaneo.")

    .fondo-color-sistema-n.p-4.d-inline-block.mb-4(data-aos="fade-right")
      p.mb-0 A partir de la prueba presentada, se explicará un poco las vulnerabilidades encontradas:

    .fondo-personalizado-6
      .fondo-personalizado-6__contenido
        .row.justify-content-center.mb-4(data-aos="fade-up")
          .col-lg-10
            .fondo-personalizado-5.p-3
              .fondo-personalizado-5__contenido
                .row.align-items-center
                  .col-lg-4
                    figure.mb-4.mb-lg-0
                      img.mx-auto(src="@/assets/curso/temas/89.png",style="max-width: 281px;")
                  .col-lg-8
                    p.mb-0.fw-bold Ausencia de Tokens Anti-CSRF:
                    p.mb-0 De acuerdo con el reporte, la página web cuenta con 208 formularios susceptibles a ataques de CSRF. Para solucionar esto, es fundamental entender en qué consiste esta vulnerabilidad. Se puede consultar una guía sobre esta vulnerabilidad en el material complementario. Si utiliza un marco de trabajo como Laravel, Git, Symphony, etc., busque técnicas específicas de su #[em framework]; probablemente.
        .row.justify-content-center.mb-4(data-aos="fade-down")
          .col-lg-10
            .fondo-personalizado-5.p-3
              .fondo-personalizado-5__contenido
                .row.align-items-center
                  .col-lg-4
                    figure.mb-4.mb-lg-0
                      img.mx-auto(src="@/assets/curso/temas/90.png",style="max-width: 281px;")
                  .col-lg-8
                    p.mb-0.fw-bold Cookie Sin Bandera HttpOnly:
                    p.mb-0 Esta vulnerabilidad permite que otras webs puedan acceder a los datos de presencia de usuario o datos de sesión basados en #[em cookies]. Se puede resolver de varias maneras, siendo quizás la más sencilla agregar una configuración en el servidor.

        .fondo-color-sistema-n.p-4.d-inline-block.mb-5(data-aos="fade-left")
          p.mb-0 Examinemos un caso crítico que también es fácilmente explotable.


        .row.justify-content-center.mb-5(data-aos="fade")
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 5.] #[em OWASP ZAP 2.10.0]
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/91.png",style="max-width: 820px;",alt="La figura OWASP ZAP 2.10.0 es una captura de pantalla de una herramienta para detectar vulnerabilidades web. Muestra una respuesta HTTP que indica una versión vulnerable de jQuery Mobile, y una lista de alertas de seguridad con detalles como el origen y la descripción de la vulnerabilidad.")

        .row.align-items-center(data-aos="fade")
          .col-lg-8.mb-4.mb-lg-0
            .fondo-color-sistema-i.borde-24.p-4
              .row.align-items-center 
                .col-md-3
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/92.png",style="max-width: 125px;")
                .col-md-9
                  p.mb-0 El sitio web está utilizando la librería jQuery Mobile versión 1.4.5, la cual ya ha sido identificada por la comunidad jQuery como vulnerable. Es probable que en los foros de dicha comunidad se discuta cómo se detectó y esto podría indicar cómo vulnerar este sistema. Sin embargo, la solución propuesta en la imagen es simplemente actualizar la librería a una versión más reciente y segura.
          .col-lg-4
            figure
              img.mx-auto(src="@/assets/curso/temas/93.png",style="max-width: 400px;")
    

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
