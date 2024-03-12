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

    
    .row.justify-content-center.mb-5
      .col-lg-10
        PasosA.color-acento-contenido.mb-5.pasos-a-personalizado-1(tipo="n")
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              p.mb-0.text-start Evaluar en el diseño los posibles riesgos que tiene una aplicación web.
            .col-md-6
              figure
                img.mx-auto(src='@/assets/curso/temas/4.png',style="max-width: 190px;")
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              figure
                img.mx-auto(src='@/assets/curso/temas/5.png',style="max-width: 190px;")
            .col-md-6
              p.mb-0.text-start Contemplar los riesgos de una aplicación que se ejecutará internamente en una empresa.
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              p.mb-0.text-start Elegir el diseño y la arquitectura de #[em software] que se va a implementar.
            .col-md-6
              figure
                img.mx-auto(src='@/assets/curso/temas/6.png',style="max-width: 190px;")
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              figure
                img.mx-auto(src='@/assets/curso/temas/7.png',style="max-width: 190px;")
            .col-md-6
              p.mb-0.text-start Establecer políticas de seguridad para las aplicaciones.


    .row.justify-content-center
      .col-lg-10
        .slyder-e-personalizado-1.px-3.pb-3.pt-4.ps-4.mb-5(data-aos="flip-up")
          .slyder-e-personalizado-1__fondo
            figure.fig-flotante(style="right: -45px;top: -140px;max-width:118px;")
              img(src="@/assets/curso/temas/55.svg",style="max-width:118px;")
            figure.fig-flotante(style="left: 40%;bottom: -175px;max-width:227px;")
              img(src="@/assets/curso/temas/58.svg",style="max-width:227px;")
            figure.fig-flotante(style="top: 25px;right: 20px;max-width:97px;")
              img(src="@/assets/curso/temas/13.svg",style="max-width:97px;")


          SlyderE(indicadores="derecha")
            .row.align-items-center    
              .col-md-6
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/8.png",style="max-width: 413px;",alt="La figura describe el concepto de una excepción en programación: un objeto que representa un error e interrumpe el flujo normal de ejecución de un método, siendo luego manejado por el sistema en tiempo de ejecución.")
              .col-md-6
                p.ps-lg-4.titulo-item-slyder Manejo de excepciones.
            .row.align-items-center    
              .col-md-6
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/14.png",style="max-width: 413px;",alt="La figura muestra la configuración que explica cómo se sobrescriben los valores predeterminados en un entorno de desarrollo.")
              .col-md-6
                p.ps-lg-4.titulo-item-slyder Documentación de líneas o funciones.
            .row.align-items-center    
              .col-md-6
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/15.png",style="max-width: 413px;",alt="La imagen presenta un fragmento de código CSS para ajustar la posición de los iconos de control en un carrusel de interfaz de usuario, es parte de una depuración para eliminar o corregir código inservible.")
              .col-md-6
                p.ps-lg-4.titulo-item-slyder Depuración de código inservible.
            .row.align-items-center    
              .col-md-6
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/16.png",style="max-width: 413px;",alt="El fragmento de código muestra una función 'getDataSlider' que segmenta un arreglo de datos en grupos para un carrusel, utilizando variables nombradas 'carousel' y 'array' para este proceso.")
              .col-md-6
                p.ps-lg-4.titulo-item-slyder Métodos de nombramiento para las funciones y variables.
            .row.align-items-center    
              .col-md-6
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/17.png",style="max-width: 293px;",alt="El fragmento de código CSS muestra estilos para contenedores con un diseño flexible y elementos individuales que indican interactividad, contribuyendo a la claridad y facilidad de mantenimiento del diseño de la interfaz.")
              .col-md-6
                p.ps-lg-4.titulo-item-slyder Código legible para mejorar el mantenimiento de las aplicaciones.


    .slyder-a-personalizado-1.px-3.pb-3.pt-5.mb-5(data-aos="flip-up")
      .slyder-a-personalizado-1__fondo
        figure.fig-flotante(style="left: 0;top: -140px;max-width:118px;")
          img(src="@/assets/curso/temas/55.svg",style="max-width:118px;")
        figure.fig-flotante(style="z-index: 1;right: 10px;top: 10px;max-width:88px;")
          img(src="@/assets/curso/temas/56.svg",style="max-width:87px;")
        figure.fig-flotante(style="right: -70px;top: -115px;max-width:173px;")
          img(src="@/assets/curso/temas/57.svg",style="max-width:173px;")
        figure.fig-flotante(style="left: 35%;bottom: -160px;max-width:227px;")
          img(src="@/assets/curso/temas/58.svg",style="max-width:227px;")

      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-lg-5
            .pt-lg-5
              h4.mb-4.titulo-item-slyder Calidad en control de seguridad
              p.mb-0 Es importante que las empresas definan un proceso para el aseguramiento de la calidad del #[em software]. Estos modelos suelen estar basados en el ciclo de desarrollo, puesto que para evitar huecos de seguridad se debe conocer a fondo el proyecto.

          .col-lg-5.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/9.png",style="max-width: 415px;")
        .row.justify-content-center.align-items-center
          .col-lg-5
            .pt-lg-5
              h4.mb-4.titulo-item-slyder Inspección de código
              p.mb-0 Aplicando la técnica revisión de código se pueden encontrar vulnerabilidades que no son fáciles de identificar haciendo pruebas de caja negra.

          .col-lg-5.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/10.png",style="max-width: 415px;")
        .row.justify-content-center.align-items-center
          .col-lg-5
            .pt-lg-5
              h4.mb-4.titulo-item-slyder Gestión de configuraciones
              p.mb-0 El conocimiento de la arquitectura de la aplicación web puede revelar información valiosa para un atacante, como los protocolos utilizados, las funcionalidades administrativas, los métodos de cifrado utilizados o el servidor.

          .col-lg-5.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/11.png",style="max-width: 610px;")
        .row.justify-content-center.align-items-center
          .col-lg-5
            .pt-lg-5
              h4.mb-4.titulo-item-slyder Caja Negra OWASP
              p.mb-0 Presenta una serie de buenas prácticas para realizar pruebas de seguridad en las aplicaciones web e identificar vulnerabilidades que pueden aparecer desde las primeras fases del ciclo de desarrollo.


          .col-lg-5.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/12.png",style="max-width: 610px;")


    .row.mb-5.seccion-tarjetas
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
        .tarjeta--boton.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/18.png')

          h4.text-center ISO
          p #[b Organización Internacional de Normalización.] La principal actividad es la elaboración de normas técnicas internacionales.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
        .tarjeta--boton.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/19.png')

          h4.text-center ISACA SACA
          p Es una organización global sin ánimo de lucro dedicada a fomentar las mejores prácticas y conocimientos en la industria de la tecnología de la información, con reconocimiento y aplicación a nivel mundial.

      .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-up")
        .tarjeta--boton.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/20.png')

          h4.text-center CCITT
          p Es el Comité Consultivo Internacional Telegráfico y Telefónico, que se convirtió en ITU-T en 1993, y se dedica a desarrollar recomendaciones para estándares internacionales en comunicaciones telefónicas y telegráficas.

      .col-sm-6.col-lg-3(data-aos="fade-down")
        .tarjeta--boton.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/21.png')

          h4.text-center NIST
          p Es una agencia del Departamento de Comercio de EE. UU. que ofrece un Marco de Ciberseguridad para ayudar a las empresas a comprender, gestionar y mitigar sus riesgos cibernéticos y proteger sus redes y datos.

    .titulo-sexto.color-acento-contenido
      p.mb-0 #[b Tabla 1.] #[em Normas relacionadas con la ciberseguridad]

    .tabla-a.color-acento-contenido.mb-5.bg-white.mb-5(data-aos="zoom-in-up")
      table
        thead
          tr
            th N° 
            th Origen
            th Documento
            th Término
            th Organización
            th CDI
            th Intensión
            th Motivación
            th Amenazas
        tbody
          tr
            td 01
            td ISO/IEC JTC1/SC27
            td 27032
            td Ciberseguridad
            td ISO
            td Sí
            td Solo los activos destinados a internet
            td No diferenciación Entre actividades maliciosas o no
            td Sólo los activos virtuales conectados a internet, sin activos físicos
          tr
            td 02
            td ISO/IEC JTC1/SC27
            td 27000
            td Seguridad de la información
            td ISO
            td Sí
            td Cualquier Origen de Riesgo en el Espacio cibernético
            td No diferenciación entre malicioso o no intencional
            td Cualquier Activo
          tr
            td 03
            td UIT-T
            td X.1205
            td Ciberseguridad
            td UIT
            td NO
            td Cualquier Origen de Riesgo en el Espacio cibernético
            td No diferenciación entre actividades maliciosas o no
            td Cualquier Activo
          tr
            td 04
            td NIST
            td SP 800-39
            td Ciberseguridad
            td NIST
            td Sí
            td Riesgo Originado exclusivamente en el espacio cibernético
            td Sólo cubre orígenes maliciosos (ataques cibernéticos)
            td Sólo los activos virtuales conectados a internet, sin activos físicos
          tr
            td 05
            td ISACA
            td Cybersecurity fundamentals
            td Ciberseguridad
            td ISACA
            td Sí
            td Certificación  CSX
            td Origen Malicioso
            td Activos en el Ciberespacio

    .row.justify-content-center.mb-5
      .col-lg-10

        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 3.] #[em Estructura de la norma ISO/IEC 27032:2020]

        figure
          img.mx-auto(src="@/assets/curso/temas/22.svg",style="max-width: 1030px;",alt="La figura Estructura de la norma ISO/IEC 27032:2020 descompone la norma en secciones que incluyen su alcance, aplicabilidad, términos clave, y referencias normativas. Se detalla en aspectos como generalidades, roles de los interesados, amenazas de seguridad, y controles en el ciberespacio, culminando en un marco para el intercambio y coordinación de información de seguridad cibernética.")
          
    
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


    .titulo-sexto.color-acento-contenido
      p.mb-0 #[b Tabla 3.] Gestión de Matriz de control de acceso

    .tabla-a.color-acento-contenido.mb-5.bg-white.mb-5
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
            th Registro de pagos
        tbody
          tr
            td Administrador
            td x
            td x
            td x
            td x
            td x
            td x
            td x
          tr
            td Auxiliar contable
            td
            td
            td
            td
            td x
            td x
            td x
          tr
            td Operador
            td
            td
            td
            td
            td
            td
            td x

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        imagen: require('@/assets/template/img-placeholder.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        imagen: require('@/assets/template/img-placeholder.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
