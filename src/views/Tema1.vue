<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Marco de referencia en gestión de la seguridad

    .row.mb-5.align-items-center(data-aos="fade")
      .col-lg-10(data-aos="fade-right")
        p.mb-0 El #[em software] y la forma en que se accede a las aplicaciones exigen que arquitectos, diseñadores y programadores se centren en la seguridad de estas. Por lo tanto, es importante tener en cuenta que la seguridad no solo implica la configuración de acceso, las redes o los usuarios, sino que debe considerarse durante todo el proceso de desarrollo de las aplicaciones. Esto incluye seguir estándares de programación y adoptar buenas prácticas de desarrollo, como la norma ISO/IEC 27034:2011, COBIT y OWASP.
      .col-lg-2(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/27.png",style="max-width: 190px;")

    .titulo-sexto.color-acento-contenido(data-aos="fade")
      p.mb-0 #[b Figura 1.] Ciclo de vida de desarrollo de #[em software]
    .fondo-color-sistema-j.p-4.p-lg-5.borde-19.mb-4(data-aos="zoom-in-up")
      figure
        img.mx-auto(src="@/assets/curso/temas/2.png",style="max-width: 874px;",alt="La imagen muestra un diagrama del ciclo de vida del desarrollo seguro de software, compuesto por fases secuenciales: requerimientos, diseño, desarrollo, pruebas, despliegue y operaciones. este ciclo es iterativo, indicando que las operaciones pueden llevar a nuevos requerimientos.")

    .row.justify-content-center.mb-4(data-aos="flip-up")
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

    p.mb-5(data-aos="fade") Dentro de este marco de referencia se quiere enfocar en algunos aspectos relevantes del aseguramiento desde el desarrollo del #[em software].

    Separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.1 Seguridad en el análisis de requerimientos

    .fondo-personalizado-1.pos-1
      .fondo-personalizado-1__contenido
        .row.mb-5(data-aos="fade-right")
          .col-lg-8
            .bloque-texto-b.btxt-personalizado-1.color-primario
              p.bloque-texto-b__texto.pb-4 Con respecto a la seguridad en esta etapa del desarrollo, es crucial tener en cuenta las normas y políticas. De esta manera, los desarrolladores sabrán desde el principio qué funcionarios o roles tienen permitido realizar ciertas acciones y cuáles no. Esto facilitará la comprensión de la gestión de usuarios con sus roles y autenticación en las aplicaciones. Se deben evaluar posibles riesgos tales como la comunicación de datos con terceros, políticas de confidencialidad, seguridad de los datos de usuarios que acceden y se registran en la aplicación, y los respaldos de seguridad de la información, entre otros. Además, será posible analizar la estructura para auditar cambios en la información, identificando quién y cuándo se agregaron o modificaron datos. Los requisitos generales a considerar incluyen: autenticación, asignación de roles, aprobación de privilegios y evaluación de riesgos.
          .col-lg-4
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/28.png",style="max-width: 400px;")


        .row.mb-5.justify-content-center.mb-5(data-aos="fade-left")
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 2.] Requerimientos de Aseguramiento de calidad
            figure
              img.mx-auto(src="@/assets/curso/temas/3.png",style="max-width: 806px;",alt="La figura muestra un diagrama que destaca los elementos cruciales para un buen Requerimiento de Aseguramiento en seguridad informática: Roles, Riesgos, Privilegios y Autenticación, organizados en un ciclo que sugiere que cada aspecto se conecta y alimenta al siguiente en un proceso continuo.")

        Separador

        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-up")
          h2 1.2 Seguridad en el proceso de diseño

        .row.mb-5
          .col-lg-8(data-aos="fade-down")
            p.mb-4 En la etapa de diseño, es fundamental considerar los procesos y las definiciones de los requisitos de seguridad previamente identificados durante el proceso. Esto incluye, por ejemplo, establecer la periodicidad de las copias de seguridad, el tipo de contraseñas a utilizar (ya sean largas o cortas) y todas sus características, las cuales deberán actualizarse en periodos de tiempo más cortos, además de establecer el cifrado de las comunicaciones y de los datos.

            .fondo-color-secundario.p-3.borde-8
              .row.align-items-center 
                .col-md-2
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/29.png",style="max-width: 82px;")
                .col-md-10
                  p.text-white.mb-0 Durante esta etapa, también se deben tener en cuenta las posibles vulnerabilidades que pueden surgir dependiendo de la arquitectura y el diseño de la aplicación. Por ejemplo:
          
          .col-lg-4.order-first.order-lg-last(data-aos="fade-up")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/30.png",style="max-width: 400px;")

    .row.mb-5.seccion-tarjetas-2(data-aos="flip-up")
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-4.p-4.px-3.h-100
          .seccion-tarjetas__cont-figura-1.mb-4.mx-auto
            figure
              img(src='@/assets/curso/temas/31.png')

          p Evaluar en el diseño los posibles riesgos que tiene una aplicación web.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-4.p-4.px-3.h-100
          .seccion-tarjetas__cont-figura-1.mb-4.mx-auto
            figure
              img(src='@/assets/curso/temas/32.png')

          p Contemplar los riesgos de una aplicación que se ejecutará internamente en una empresa.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-4.p-4.px-3.h-100
          .seccion-tarjetas__cont-figura-1.mb-4.mx-auto
            figure
              img(src='@/assets/curso/temas/33.png')

          p Elegir el diseño y la arquitectura de #[em software] que se va a implementar.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-4.p-4.px-3.h-100
          .seccion-tarjetas__cont-figura-1.mb-4.mx-auto
            figure
              img(src='@/assets/curso/temas/34.png')

          p Establecer políticas de seguridad para las aplicaciones.

    p.mb-4(data-aos="fade") Por lo tanto, es esencial diseñar un modelo de seguridad o de amenazas. Este modelo tiene como objetivo organizar, capturar y analizar los riesgos y vulnerabilidades identificados para tomar decisiones de manera rápida y ejercer un control adecuado implementando contramedidas de forma efectiva en el proceso.

    p.mb-5(data-aos="fade-up") Para elaborar un modelo de amenazas, es importante tener en cuenta los siguientes pasos:

    SlyderF.mb-4(columnas="col-lg-6 col-xl-4" data-aos="flip-down")
      .tarjeta.fondo-color-sistema-k.p-4
        .row.justify-content-center.mb-4
          .col-8
            img.mx-auto(src='@/assets/curso/temas/59.png',style="max-width: 124px;")
        p Recopilar información esencial sobre las posibles amenazas para construir el modelo.
      .tarjeta.fondo-color-sistema-k.p-4
        .row.justify-content-center.mb-4
          .col-8
            img.mx-auto(src='@/assets/curso/temas/60.png',style="max-width: 124px;")
        p Analizar y elaborar el modelo de amenazas utilizando la información recopilada.
      .tarjeta.fondo-color-sistema-k.p-4
        .row.justify-content-center.mb-4
          .col-8
            img.mx-auto(src='@/assets/curso/temas/61.png',style="max-width: 124px;")
        p Identificar técnicas y tecnologías para mitigar las amenazas.
      .tarjeta.fondo-color-sistema-k.p-4
        .row.justify-content-center.mb-4
          .col-8
            img.mx-auto(src='@/assets/curso/temas/62.png',style="max-width: 124px;")
        p Documentar el modelo de amenazas con claridad, incluyendo la identificación de riesgos, supuestos, y limitaciones.
      .tarjeta.fondo-color-sistema-k.p-4
        .row.justify-content-center.mb-4
          .col-8
            img.mx-auto(src='@/assets/curso/temas/63.png',style="max-width: 124px;")
        p Implementar y probar las mitigaciones, y sincronizar el modelo con el diseño, considerando los controles de cambios.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-2.col-4.pe-0
        .fondo-color-secundario.p-md-4.h-100.d-flex.justify-content-center.flex-column(style="border-top-left-radius: 20px;border-bottom-left-radius: 20px;")
          figure
            img.mx-auto(src="@/assets/curso/temas/2.svg",style="max-width: 116px;")
      .col-lg-6.col-8.ps-0
        .fondo-color-sistema-i.p-3.h-100.d-flex.align-items-center(style="border-top-right-radius: 20px;border-bottom-right-radius: 20px;")
          .bg-white.p-2.p-md-3.h-100.d-flex.align-items-center(style="border-top-right-radius: 18px;border-bottom-right-radius: 18px;")
            p.mb-0(style="color:#0F6BD2;") En resumen, en el proceso de diseño, un modelo de seguridad es capaz de identificar las siguientes vulnerabilidades y posibles amenazas, como se muestra a continuación:
        
    figure.mb-4(data-aos="zoom-in-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/--vUtlPV94c?si=yrlw1c-6iRBtgLrR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption Video. Análisis, valoración de riesgos y controles de ciberseguridad: Vulnerabilidades y amenazas

    p.mb-5(data-aos="fade") En esta etapa, también se identifican requisitos similares a los de la primera fase, que incluyen: acceso a los componentes, administración del sistema, auditoría, gestión de sesiones, registros históricos, manejo de errores y excepciones, y separación de funciones.

    Separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.3 Seguridad en el proceso de codificación

    p.mb-4(data-aos="fade") En el proceso de desarrollo de #[em software], es crucial considerar cómo los desarrolladores modifican y construyen los distintos componentes de las aplicaciones. Por lo tanto, resulta fundamental estandarizar las prácticas de codificación, documentación e identificación de ciertos requisitos, que incluyen:

    .row.justify-content-center.contenedor-1
      .col-lg-8.px-0
        .fondo-color-sistema-i.p-4.px-lg-5.pe-lg-0.borde-24
          .row
            .col-lg-7(data-aos="fade-right")
            
              ul.lista-ul.lista-tipo-1.size-igual.fa-ul.mb-0.ms-0
                li
                  span.d-inline-flex.align-items-center.justify-content-center.p-1.text-white.fondo-color-primario.fas.fa-sun
                  span Aseguramiento de los ambientes de desarrollo.
                li
                  span.d-inline-flex.align-items-center.justify-content-center.p-1.text-white.fondo-color-primario.fas.fa-file-import
                  span Documentación técnica.
                li
                  span.d-inline-flex.align-items-center.justify-content-center.p-1.text-white.fondo-color-primario.fas.fa-laptop-code
                  span Codificación segura.
                li
                  span.d-inline-flex.align-items-center.justify-content-center.p-1.text-white.fondo-color-primario.fas.fa-envelope
                  span Seguridad en las comunicaciones.
                li
                  span.d-inline-flex.align-items-center.justify-content-center.p-1.text-white.fondo-color-primario.fas.fa-solid.fa-shield-halved
                    svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512")
                      path(fill="#ffffff" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z")
                  span Seguridad en ambiente de producción.

            .col-lg-5.order-first.order-lg-last.contenedor-figura-posicionada-1(data-aos="fade-left")
              figure.mb-4.mb-lg-0.figura-posicionada-1
                img.mx-auto(src="@/assets/curso/temas/36.png",style="max-width: 295px;")

    .row.align-items-center.mt-4.mt-lg-0.mb-4
      .col-md-3.col-lg-2(data-aos="fade-up")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/38.png",style="max-width: 125px;")
      .col-md-9.col-lg-10(data-aos="fade-down")
        p.mb-0 En esta etapa, el objetivo es facilitar el trabajo en equipo, evitando reprocesos y pérdida de trabajo. Por ello, es crucial utilizar herramientas que permitan sincronizar el trabajo y guardar la información de forma colaborativa. Además, se recomienda emplear buenas prácticas estandarizadas por organizaciones como OWASP o CERT, las cuales se detallarán más adelante. No obstante, es importante considerar las buenas prácticas para una adecuada codificación, tales como:

    .fondo-personalizado-2.pos-2(data-aos="flip-up")
      .fondo-personalizado-2__contenido
        
        SlyderF.estilo-slyder.mb-5(columnas="col-lg-6",data-aos="flip-down")
          .tarjeta.d-flex.flex-column.color-secundario.borde-14(style="overflow:hidden;background-color: #E3EAF2;")
            .h-100.d-flex.align-items-center.px-2
              figure
                img(src="@/assets/curso/temas/65.png",alt="La figura describe el concepto de una excepción en programación: un objeto que representa un error e interrumpe el flujo normal de ejecución de un método, siendo luego manejado por el sistema en tiempo de ejecución.")
            .fondo-color-secundario.d-flex.justify-content-center.align-items-center.px-4(style="height: 123px;")
              p.mb-0.text-center Manejo de excepciones.
          .tarjeta.d-flex.flex-column.color-secundario.borde-14(style="overflow:hidden;background-color: #1E1E1E;")
            .h-100
              figure
                img(src="@/assets/curso/temas/14.png",alt="La figura muestra la configuración que explica cómo se sobrescriben los valores predeterminados en un entorno de desarrollo.")
            .fondo-color-secundario.d-flex.justify-content-center.align-items-center.px-4(style="height: 123px;")
              p.mb-0.text-center Documentación de líneas o funciones.
          .tarjeta.d-flex.flex-column.color-secundario.borde-14(style="overflow:hidden;background-color: #1E1E1E;")
            .h-100
              figure
                img(src="@/assets/curso/temas/15.png",alt="La imagen presenta un fragmento de código CSS para ajustar la posición de los iconos de control en un carrusel de interfaz de usuario, es parte de una depuración para eliminar o corregir código inservible.")
            .fondo-color-secundario.d-flex.justify-content-center.align-items-center.px-4(style="height: 123px;")
              p.mb-0.text-center Depuración de código inservible.
          .tarjeta.d-flex.flex-column.color-secundario.borde-14(style="overflow:hidden;background-color: #1E1E1E;")
            .h-100
              figure
                img(src="@/assets/curso/temas/16.png",alt="El fragmento de código muestra una función 'getDataSlider' que segmenta un arreglo de datos en grupos para un carrusel, utilizando variables nombradas 'carousel' y 'array' para este proceso.")
            .fondo-color-secundario.d-flex.justify-content-center.align-items-center.px-4(style="height: 123px;")
              p.mb-0.text-center Métodos de nombramiento para las funciones y variables.
          .tarjeta.d-flex.flex-column.color-secundario.borde-14(style="overflow:hidden;background-color: #1E1E1E;")
            .h-100
              figure
                img(src="@/assets/curso/temas/64.png",alt="El fragmento de código CSS muestra estilos para contenedores con un diseño flexible y elementos individuales que indican interactividad, contribuyendo a la claridad y facilidad de mantenimiento del diseño de la interfaz.")
            .fondo-color-secundario.d-flex.justify-content-center.align-items-center.px-4(style="height: 123px;")
              p.mb-0.text-center Código legible para mejorar el mantenimiento de las aplicaciones.

        Separador

        #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
          h2 1.4 Seguridad en el proceso de pruebas

        .bloque-texto-g.p-3.p-sm-4.p-md-5.mb-5(style="background-color: #A3BFE4;" data-aos="zoom-in-up")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/39.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En la etapa de pruebas, se pueden analizar las vulnerabilidades siguiendo el modelo de amenazas diseñado en la etapa anterior. Las pruebas se centrarán en cada uno de los aspectos del modelo, considerando la configuración de los entornos, la codificación realizada por los desarrolladores y la arquitectura de la aplicación. De esta manera, será posible identificar y corregir vulnerabilidades a tiempo. Una de las técnicas utilizadas para estas pruebas es el #[em Fuzzing], que consiste en enviar datos secuenciales o aleatorios a un #[em software] o aplicación con el objetivo de detectar vulnerabilidades no previstas. Además, es fundamental considerar el aseguramiento de la calidad, por lo cual se identifican los siguientes requerimientos:
    



        .slyder-a-personalizado-1.px-3.pb-3.pt-5.mb-5(data-aos="zoom-in-up")
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
                  img.mx-auto(src="@/assets/curso/temas/11.png",style="max-width: 610px;",alt="La imagen describe un esquema de Gestión de la configuración organizado en cuatro fases: identificación de la configuración, control de cambios, control del estado de la configuración y auditoría de la configuración. estos componentes secuenciales detallan el proceso completo para gestionar y preservar las configuraciones en un proyecto o sistema.")
            .row.justify-content-center.align-items-center
              .col-lg-5
                .pt-lg-5
                  h4.mb-4.titulo-item-slyder Caja Negra OWASP
                  p.mb-0 Presenta una serie de buenas prácticas para realizar pruebas de seguridad en las aplicaciones web e identificar vulnerabilidades que pueden aparecer desde las primeras fases del ciclo de desarrollo.


              .col-lg-5.order-first.order-lg-last
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/12.png",style="max-width: 610px;",alt="La figura organiza elementos tecnológicos en aplicaciones, dispositivos, infraestructura y sistemas industriales, con subdivisiones que incluyen tipos de aplicaciones y hardware específico. Además, clasifica métodos de evaluación de seguridad en cajas negra, gris y blanca, junto a configuraciones internas y externas, aludiendo a estándares de seguridad como los de OWASP.")

    Separador

    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Seguridad en el proceso de despliegue y mantenimiento

    .row.mb-4
      .col-lg-8
        p.mb-4 Una buena práctica consiste en asegurar que los servidores destinados a los despliegues de mantenimiento, desarrollo y producción mantengan configuraciones casi idénticas. La razón por la cual se dice "casi idénticas" es que existen ciertas configuraciones que pueden variar ligeramente debido al acceso a las aplicaciones, pero, en cuanto a características generales, deberían ser iguales. Esto permite que, al realizar pruebas, las aplicaciones se comporten de manera similar en diferentes entornos.

        .fondo-color-secundario.p-3.borde-8
          .row.align-items-center
            .col-md-3(data-aos="fade-up")
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/66.png",style="max-width: 98px;")
            .col-md-9(data-aos="fade-down")
              p.mb-0.text-white Los requisitos cruciales a considerar en esta fase incluyen:
              p.mb-0.text-white Aseguramiento basado en riesgos y pruebas de seguridad, incluyendo pruebas de caja blanca y caja negra.

      .col-lg-4.order-first.order-lg-last(data-aos="fade")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/67.png",style="max-width: 400px;")

    
    .row.align-items-center.mb-5
      .col-lg-7(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/43.png",style="max-width: 715px;")
      .col-lg-5(data-aos="fade-right")
        .fondo-color-sistema-i.borde-16.p-3.py-4
          p.mb-0 Además, es necesario configurar la red y gestionar el acceso de manera que solo las personas autorizadas puedan acceder a ella. Es importante tener en cuenta la arquitectura diseñada en etapas anteriores para entender bien los tipos de configuración. Configurar los accesos y la red para despliegues directos en la nube o en un servidor local implica consideraciones diferentes. OWASP también ofrece guías sobre cómo probar estos tipos de aseguramientos.
    
    .fondo-personalizado-1.pos-2
      .fondo-personalizado-1__contenido
        .cont-titulo-decorativo.p-2.mt-5.mb-4(data-aos="flip-up")
          .row
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/temas/imagen-tit-dec.svg")
            .col.align-self-end
              h3.mt-3.mb-0.me-2 Entidades de estandarización

        p.mb-4(data-aos="fade") Existen entidades responsables de elaborar normativas de nivel técnico, que, con el apoyo de equipos técnicos compuestos por expertos, definen estándares. Estos estándares son técnicas establecidas en documentos publicados que facilitan la creación de un marco de trabajo para abordar problemas comunes en las organizaciones.

        p.mb-4(data-aos="fade-up") A continuación, se listan las principales entidades: 


        .row.mb-5.seccion-tarjetas-3
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.p-4.h-100
              .seccion-tarjetas-3__cont-figura-dinamica.mb-4
                figure
                  img.mx-auto(src='@/assets/curso/temas/18.png')

              h4.text-center ISO
              p #[b Organización Internacional de Normalización.] La principal actividad es la elaboración de normas técnicas internacionales.
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.p-4.h-100
              .seccion-tarjetas-3__cont-figura-dinamica.mb-4
                figure
                  img.mx-auto(src='@/assets/curso/temas/19.png')

              h4.text-center ISACA SACA
              p Es una organización global sin ánimo de lucro dedicada a fomentar las mejores prácticas y conocimientos en la industria de la tecnología de la información, con reconocimiento y aplicación a nivel mundial.
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.p-4.h-100
              .seccion-tarjetas-3__cont-figura-dinamica.mb-4
                figure
                  img.mx-auto(src='@/assets/curso/temas/20.png')

              h4.text-center CCITT
              p Es el Comité Consultivo Internacional Telegráfico y Telefónico, que se convirtió en ITU-T en 1993, y se dedica a desarrollar recomendaciones para estándares internacionales en comunicaciones telefónicas y telegráficas.
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.p-4.h-100
              .seccion-tarjetas-3__cont-figura-dinamica.mb-4
                figure
                  img.mx-auto(src='@/assets/curso/temas/21.png')

              h4.text-center NIST
              p Es una agencia del Departamento de Comercio de EE. UU. que ofrece un Marco de Ciberseguridad para ayudar a las empresas a comprender, gestionar y mitigar sus riesgos cibernéticos y proteger sus redes y datos.

        p.mb-5(data-aos="fade") En la siguiente tabla, se proporciona una perspectiva global de algunas normas que abordan la definición de ciberseguridad.

        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 1.] Normas relacionadas con la ciberseguridad

        .tabla-a.color-acento-contenido.mb-5.bg-white.mb-5(data-aos="zoom-in-up")
          table(style="width: auto;")
            caption.fw-normal #[em Nota]. Gestión de la ciberseguridad según el ISO/IEC 27032:2012. ,2021)
            thead
              tr
                th N° 
                th(style="min-width: 180px;") Origen
                th(style="min-width: 230px;") Documento
                th(style="min-width: 170px;") Término
                th Organización
                th CDI
                th(style="min-width: 210px;") Intensión
                th(style="min-width: 210px;") Motivación
                th(style="min-width: 210px;") Amenazas
            tbody
              tr
                td #[b 01]
                td ISO/IEC JTC1/SC27
                td 27032
                td Ciberseguridad
                td ISO
                td Sí
                td Solo los activos destinados a internet.
                td No diferenciación Entre actividades maliciosas o no.
                td Sólo los activos virtuales conectados a internet, sin activos físicos.
              tr
                td #[b 02]
                td ISO/IEC JTC1/SC27
                td 27000
                td Seguridad de la información
                td ISO
                td Sí
                td Cualquier Origen de Riesgo en el Espacio cibernético.
                td No diferenciación entre malicioso o no intencional.
                td Cualquier Activo.
              tr
                td #[b 03]
                td UIT-T
                td X.1205
                td Ciberseguridad
                td UIT
                td No
                td Cualquier Origen de Riesgo en el Espacio cibernético.
                td No diferenciación entre actividades maliciosas o no.
                td Cualquier Activo.
              tr
                td #[b 04]
                td NIST
                td SP 800-39
                td Ciberseguridad
                td NIST
                td Sí
                td Riesgo Originado exclusivamente en el espacio cibernético.
                td Sólo cubre orígenes maliciosos (ataques cibernéticos).
                td Sólo los activos virtuales conectados a internet, sin activos físicos.
              tr
                td #[b 05]
                td ISACA
                td Cybersecurity fundamentals
                td Ciberseguridad
                td ISACA
                td Sí
                td Certificación  CSX.
                td Origen Malicioso.
                td Activos en el Ciberespacio.

    .fondo-personalizado-4.pos-1
      .fondo-personalizado-4__contenido
        .row.align-items-center.justify-content-center.mb-5
          .col-lg-5.d-none.d-lg-block
            figure.mb-4.mb-lg-0(data-aos="fade-right")
              img.mx-auto(src="@/assets/curso/temas/68.png",style="max-width: 505px;")
          .col-lg-5
            .fondo-color-sistema-m.bmd-none.borde-20.px-3.py-4.mb-4.p-lg-0.bg-lg-none(data-aos="fade-down")
              p.mb-0 La norma ISO/IEC 27032:2020 "Tecnología de la información - Técnicas de seguridad - Directrices para la ciberseguridad" establece un marco de trabajo diseñado para mejorar el estado de la ciberseguridad. Propone varios puntos estratégicos y técnicos necesarios para esta actividad, así como sus interdependencias con otros dominios de seguridad, incluyendo:
            figure.mb-4.mb-lg-0.d-lg-none(data-aos="fade")
              img.mx-auto(src="@/assets/curso/temas/68.png",style="max-width: 505px;")
            .borde-18.mb-4.p-2.p-lg-0.mx-5.mx-lg-0(style="background-color: #A18A29;")
              .row.align-items-center
                .col-lg-3
                  figure.d-none.d-lg-block
                    img.mx-auto(src="@/assets/curso/temas/69.png",style="max-width: 57px;")
                .col-lg-9
                  p.mb-0.text-white.text-center.text-lg-start.fw-bold Seguridad de la información.
            .borde-18.mb-4.p-2.p-lg-0.mx-5.mx-lg-0(style="background-color: #892758;")
              .row.align-items-center
                .col-lg-3
                  figure.d-none.d-lg-block
                    img.mx-auto(src="@/assets/curso/temas/70.png",style="max-width: 57px;")
                .col-lg-9
                  p.mb-0.text-white.text-center.text-lg-start.fw-bold Seguridad en internet.
            .borde-18.mb-4.p-2.p-lg-0.mx-5.mx-lg-0(style="background-color: #5F2789;")
              .row.align-items-center
                .col-lg-3
                  figure.d-none.d-lg-block
                    img.mx-auto(src="@/assets/curso/temas/71.png",style="max-width: 57px;")
                .col-lg-9
                  p.mb-0.text-white.text-center.text-lg-start.fw-bold Seguridad en redes.
            .borde-18.mb-4.p-2.p-lg-0.mx-5.mx-lg-0(style="background-color: #007AA8;")
              .row.align-items-center
                .col-lg-3
                  figure.d-none.d-lg-block
                    img.mx-auto(src="@/assets/curso/temas/72.png",style="max-width: 57px;")
                .col-lg-9
                  p.mb-0.text-white.text-center.text-lg-start.fw-bold La protección de infraestructuras críticas de información.
    


        .row.justify-content-center.mb-5
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 3.] Estructura de la norma ISO/IEC 27032:2020

            figure(data-aos="zoom-in-up")
              img.mx-auto(src="@/assets/curso/temas/22.svg",style="max-width: 1030px;",alt="La figura Estructura de la norma ISO/IEC 27032:2020 descompone la norma en secciones que incluyen su alcance, aplicabilidad, términos clave, y referencias normativas. Se detalla en aspectos como generalidades, roles de los interesados, amenazas de seguridad, y controles en el ciberespacio, culminando en un marco para el intercambio y coordinación de información de seguridad cibernética.")

        p.mb-4(data-aos="fade-right") La norma se enfoca en la seguridad del ciberespacio o cuestiones de ciberseguridad, con un énfasis particular en establecer conexiones entre diferentes brechas de la web. Este documento ofrece una guía técnica para abordar los riesgos comunes de ciberseguridad.

        p.mb-4(data-aos="fade-left") Dado el aumento en la frecuencia y la sofisticación de los ciberataques, se reconoce claramente la necesidad de proteger los recursos y activos. Surge entonces la importante pregunta:


        .row.justify-content-center.mb-5(data-aos="flip-up")
          .col-lg-2.col-4.pe-0
            .fondo-color-secundario.p-md-4.h-100.d-flex.justify-content-center.flex-column(style="border-top-left-radius: 20px;border-bottom-left-radius: 20px;")
              figure
                img.mx-auto(src="@/assets/curso/temas/73.svg",style="max-width: 125px;")
          .col-lg-6.col-8.ps-0
            .fondo-color-sistema-i.p-3.h-100.d-flex.align-items-center(style="border-top-right-radius: 20px;border-bottom-right-radius: 20px;")
              .bg-white.p-2.p-md-3.h-100.d-flex.align-items-center.flex-column(style="border-top-right-radius: 18px;border-bottom-right-radius: 18px;")
                p.mb-4.fw-bold.align-self-start ¿Cómo empezar?
                p.mb-0(style="color:#0F6BD2;") Aquí es donde los marcos de referencia, que se han venido desarrollando y adoptando, juegan un papel crucial, ya que proveen información valiosa y útil para el diseño de procesos de control y mitigación de riesgos de ciberseguridad.

    .row.align-items-center.mb-4
      .col-lg-8.mb-4.mb-lg-0
        .fondo-color-sistema-i.borde-8.p-3.mb-4(data-aos="fade-up")
          p.mb-0 Aunque es esencial elegir un marco de referencia y trabajar con él, es importante recordar que son solo una guía y no ofrecen soluciones definitivas. El enfoque en el análisis de riesgos es también crucial; cada marco propone una serie de controles entre los cuales se debe elegir los más aplicables al entorno específico y, si es necesario, realizar adopciones o ajustes de otros marcos de referencia.
        .fondo-color-secundario.borde-8.p-3(data-aos="fade-down")
          p.mb-0.text-white Los marcos de referencia más utilizados y desarrollados incluyen propósitos particulares para su adopción y una breve descripción, aunque no se han detallado específicamente aquí.
      .col-lg-4(data-aos="fade-left")
        figure
          img.mx-auto(src="@/assets/curso/temas/74.png",style="max-width: 400px;")

    p.mb-4(data-aos="fade") Los marcos de referencia más utilizados son:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta no-border-radius fondo-color-sistema-i" data-aos="fade")
      .row.contenedor-cuerpo-acordion-a.align-items-center(titulo="NIST CSF")
        .col-md-6.mb-4.mb-md-0
          p.mb-4 #[b NIST CSF] #[em (National Institute of Standards and Technology - Cybersecurity Framework)] - Marco de Ciberseguridad del Instituto Nacional de Estándares y Tecnología.

          p.mb-0 Este marco de trabajo se diseñó para asistir a organizaciones de cualquier tamaño en la identificación, comprensión, gestión y mitigación de riesgos cibernéticos, mejorando la seguridad de sus redes y datos. Ofrece un lenguaje unificado y buenas prácticas basadas en normas de autoridades como ISO, ITU, CIS, y NIST. Clasifica estas prácticas por afinidad y sus recomendaciones enfatizan en la gestión de riesgos cibernéticos como un aspecto crucial en la seguridad organizacional. También busca mejorar la comunicación sobre gestión de riesgos y ciberseguridad entre responsables de seguridad y partes externas.
      
        .col-md-6
          figure
            img.mx-auto(src="@/assets/curso/temas/75.png",style="max-width: 605px;",alt="La imagen Fases del NISTCSF detalla un marco de ciberseguridad con cinco fases secuenciales: Identificar para conocer el entorno y riesgos; Proteger aplicando controles para mitigar riesgos; Detectar mediante monitoreo continuo; Responder para disminuir el impacto de incidentes; y Recuperar enfocado en la resiliencia y restauración tras un incidente. Cada fase contribuye a la gestión integral de la seguridad de la información en una organización")
      .row.contenedor-cuerpo-acordion-a.align-items-center(titulo="ISO / IEC 27001: 2013")
        .col-md-6.mb-4.mb-md-0
          p.mb-4 #[b ISO / IEC 27001: 2013]
          p.mb-0 Creado por la Organización Internacional de Normalización (ISO), este marco de trabajo ha demostrado ser eficaz para empresas de todo tipo y tamaño alrededor del mundo, convirtiéndose en el marco más conocido e implementado internacionalmente. Su enfoque principal reside en la norma ISO 27001, centrada en la protección de la integridad, disponibilidad y confidencialidad de la información. La esencia de esta propuesta se basa en la gestión de riesgos: identificar dónde se encuentran los riesgos y cómo abordarlos de manera metodológica.

      
        .col-md-6
          figure
            img.mx-auto(src="@/assets/curso/temas/76.svg",style="max-width: 605px;",alt="La imagen ISO/IEC 27001: 2013 ilustra un marco para la gestión de seguridad de la información centrado en un ciclo de mejora continua con las fases de planificar, hacer, verificar y actuar. Alrededor de este ciclo se organizan ocho dominios del estándar que incluyen políticas de seguridad, seguridad organizacional, gestión de activos y otros aspectos cruciales para proteger la información en una organización.")
      .row.contenedor-cuerpo-acordion-a.align-items-center(titulo="COBIT")
        .col-md-6.mb-4.mb-md-0
          p.mb-4 #[b COBIT (Objetivos de Control para Información y Tecnologías Relacionadas. En inglés: #[em Control Objectives for Information and related Technology])]
          p.mb-0 El marco de trabajo COBIT, creado por ISACA, se enfoca en el gobierno de TI con un énfasis en los procesos empresariales, similar a los marcos de NIST e ISO. Utilizado especialmente en el sector público y para el cumplimiento de normativas legales en la gestión de TI, COBIT ofrece un conjunto de mejores prácticas, herramientas de control, supervisión, mapas de auditoría, y técnicas para la implementación y gestión eficaz de las tecnologías de la información.
      
        .col-md-6
          figure
            img.mx-auto(src="@/assets/curso/temas/77.svg",style="max-width: 605px;",alt="La  imagen COBIT Core representa un modelo de referencia para la gobernanza y gestión de TI que se basa en los estándares y contribuciones de COBIT . Incorpora factores de diseño como estrategias empresariales y requerimientos de TI, y se enfoca en aplicar la gobernanza a áreas específicas como seguridad y riesgos, entre otras, para adaptarla a las necesidades tecnológicas de la empresa.")
      .row.contenedor-cuerpo-acordion-a.align-items-center(titulo="HITRUST CSF")
        .col-md-6.mb-4.mb-md-0
          p.mb-4 #[b HITRUST CSF (Health Information Trust Alliance - #[em Cybersecurity Framework])]
          p.mb-0 Este marco fue desarrollado por la Health Information Trust Alliance (HITRUST), siendo ampliamente utilizado en la industria de la salud de Estados Unidos. HITRUST creó el CSF (#[em Cybersecurity Framework] - Marco de Ciberseguridad) para identificar elementos clave y posibles riesgos en entidades de salud, abarcando el conjunto de controles más extenso que podría aplicarse a cualquier organización. Es, posiblemente, el marco de trabajo que recibe actualizaciones con mayor frecuencia.
      
        .col-md-6
          figure
            img.mx-auto(src="@/assets/curso/temas/78.svg",style="max-width: 605px;",alt="La imagen  HITRUST CSF Controls muestra la relación entre las Funciones Principales del Framework NIST Cybersecurity y los Criterios CSF de HITRUST, los cuales guían la confección de un documento a través de un Proceso de confección. Este proceso utiliza Controles de objetivos de HITRUST CSF y una Evaluación de HITRUST CSF para establecer controles de seguridad efectivos.")
      .row.contenedor-cuerpo-acordion-a.align-items-center(titulo="CSA")
        .col-md-6.mb-4.mb-md-0
          p.mb-4 #[b CSA. #[em Cloud Controls Matrix]]
          p.mb-0 Este marco fue desarrollado por la Cloud Security Alliance (CSA), diseñado específicamente para los proveedores de servicios en la nube. Dado que la estructura del almacenamiento de datos en servicios de nube se enfrenta a riesgos únicos de este entorno, se requieren controles de seguridad especializados para la industria. Este marco proporciona una guía al respecto. La matriz de controles para servicios en la nube se actualiza con frecuencia, haciéndola atractiva para proveedores de servicios IT en la nube de cualquier tamaño. Además, busca estandarizar las expectativas de seguridad, así como la taxonomía y terminología relacionadas con los servicios en la nube.

        .col-md-6
          figure
            img.mx-auto(src="@/assets/curso/temas/79.png",style="max-width: 605px;")
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
