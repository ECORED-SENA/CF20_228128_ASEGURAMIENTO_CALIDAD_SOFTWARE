<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Marco de Referencia en Gestión de la seguridad

    .row.mb-5.align-items-center
      .col-lg-10(data-aos="fade-right")
        p.mb-0 El #[em software] y la forma en que se accede a las aplicaciones exigen que arquitectos, diseñadores y programadores se centren en la seguridad de estas. Por lo tanto, es importante tener en cuenta que la seguridad no solo implica la configuración de acceso, las redes o los usuarios, sino que debe considerarse durante todo el proceso de desarrollo de las aplicaciones. Esto incluye seguir estándares de programación y adoptar buenas prácticas de desarrollo, como la norma ISO/IEC 27034:2011, COBIT y OWASP.
      .col-lg-2(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/27.png",style="max-width: 190px;")

    .titulo-sexto.color-acento-contenido
      p.mb-0 #[b Figura 1.] Ciclo de vida de desarrollo de #[em software]
    .fondo-color-sistema-j.p-4.p-lg-5.borde-19.mb-4
      figure
        img.mx-auto(src="@/assets/curso/temas/2.png",style="max-width: 874px;",alt="La imagen muestra un diagrama del ciclo de vida del desarrollo seguro de software, compuesto por fases secuenciales: requerimientos, diseño, desarrollo, pruebas, despliegue y operaciones. este ciclo es iterativo, indicando que las operaciones pueden llevar a nuevos requerimientos.")

    .row.justify-content-center.mb-4
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

    p.mb-5 Dentro de este marco de referencia se quiere enfocar en algunos aspectos relevantes del aseguramiento desde el desarrollo del #[em software].

    Separador

    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Seguridad en el análisis de requerimientos

    .fondo-personalizado-1.pos-1
      .fondo-personalizado-1__contenido
        .row.mb-5
          .col-lg-8
            .bloque-texto-b.btxt-personalizado-1.color-primario
              p.bloque-texto-b__texto.pb-4 Con respecto a la seguridad en esta etapa del desarrollo, es crucial tener en cuenta las normas y políticas. De esta manera, los desarrolladores sabrán desde el principio qué funcionarios o roles tienen permitido realizar ciertas acciones y cuáles no. Esto facilitará la comprensión de la gestión de usuarios con sus roles y autenticación en las aplicaciones. Se deben evaluar posibles riesgos tales como la comunicación de datos con terceros, políticas de confidencialidad, seguridad de los datos de usuarios que acceden y se registran en la aplicación, y los respaldos de seguridad de la información, entre otros. Además, será posible analizar la estructura para auditar cambios en la información, identificando quién y cuándo se agregaron o modificaron datos. Los requisitos generales a considerar incluyen: autenticación, asignación de roles, aprobación de privilegios y evaluación de riesgos.
          .col-lg-4
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/28.png",style="max-width: 400px;")


        .row.mb-5.justify-content-center.mb-5
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 2.] #[em Requerimientos de Aseguramiento de calidad]
            figure
              img.mx-auto(src="@/assets/curso/temas/3.png",style="max-width: 806px;",alt="La figura muestra un diagrama que destaca los elementos cruciales para un buen Requerimiento de Aseguramiento en seguridad informática: Roles, Riesgos, Privilegios y Autenticación, organizados en un ciclo que sugiere que cada aspecto se conecta y alimenta al siguiente en un proceso continuo.")

        Separador

        #t_1_2.titulo-segundo.color-acento-contenido
          h2 1.2 Seguridad en el proceso de diseño

        .row.mb-5
          .col-lg-8
            p.mb-4 En la etapa de diseño, es fundamental considerar los procesos y las definiciones de los requisitos de seguridad previamente identificados durante el proceso. Esto incluye, por ejemplo, establecer la periodicidad de las copias de seguridad, el tipo de contraseñas a utilizar (ya sean largas o cortas) y todas sus características, las cuales deberán actualizarse en periodos de tiempo más cortos, además de establecer el cifrado de las comunicaciones y de los datos.

            .fondo-color-secundario.p-3.borde-8
              .row.align-items-center 
                .col-md-2
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/29.png",style="max-width: 82px;")
                .col-md-10
                  p.text-white.mb-0 Durante esta etapa, también se deben tener en cuenta las posibles vulnerabilidades que pueden surgir dependiendo de la arquitectura y el diseño de la aplicación. Por ejemplo:
          
          .col-lg-4.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/30.png",style="max-width: 400px;")

    .row.mb-5.seccion-tarjetas-2(data-aos="flip-up")
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-1.p-4.px-3.h-100
          .seccion-tarjetas__cont-figura-1.mb-4.mx-auto
            figure
              img(src='@/assets/curso/temas/31.png')

          p Evaluar en el diseño los posibles riesgos que tiene una aplicación web.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-2.p-4.px-3.h-100
          .seccion-tarjetas__cont-figura-1.mb-4.mx-auto
            figure
              img(src='@/assets/curso/temas/32.png')

          p Contemplar los riesgos de una aplicación que se ejecutará internamente en una empresa.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-3.p-4.px-3.h-100
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

    p.mb-4 Por lo tanto, es esencial diseñar un modelo de seguridad o de amenazas. Este modelo tiene como objetivo organizar, capturar y analizar los riesgos y vulnerabilidades identificados para tomar decisiones de manera rápida y ejercer un control adecuado implementando contramedidas de forma efectiva en el proceso.

    p.mb-5 Para elaborar un modelo de amenazas, es importante tener en cuenta los siguientes pasos:

    .fondo-personalizado-2
      .fondo-personalizado-2__contenido

        .d-flex.flex-wrap.justify-content-center.mb-5
          .figura-paso-1-contenedor.mb-4.color-1
            .figura-paso-1
            .figura-paso-1-contenido
              span.figura-paso-1-contenido__numero 01
              p.figura-paso-1-contenido__texto Recopilar información esencial sobre las posibles amenazas para construir el modelo.
          .figura-paso-1-contenedor.mb-4.color-2
            .figura-paso-1
            .figura-paso-1-contenido
              span.figura-paso-1-contenido__numero 02
              p.figura-paso-1-contenido__texto Analizar y elaborar el modelo de amenazas utilizando la información recopilada.
          .figura-paso-1-contenedor.mb-4.color-3
            .figura-paso-1
            .figura-paso-1-contenido
              span.figura-paso-1-contenido__numero 03
              p.figura-paso-1-contenido__texto Identificar técnicas y tecnologías para mitigar las amenazas.
          .figura-paso-1-contenedor.mb-4.color-4
            .figura-paso-1
            .figura-paso-1-contenido
              span.figura-paso-1-contenido__numero 04
              p.figura-paso-1-contenido__texto Documentar el modelo de amenazas con claridad, incluyendo la identificación de riesgos, supuestos, y limitaciones.
          .figura-paso-1-contenedor.mb-4.color-5
            .figura-paso-1
            .figura-paso-1-contenido
              span.figura-paso-1-contenido__numero 05
              p.figura-paso-1-contenido__texto Implementar y probar las mitigaciones, y sincronizar el modelo con el diseño, considerando los controles de cambios.

        .row.justify-content-center.mb-5
          .col-lg-2.col-4.pe-0
            .fondo-color-secundario.p-md-4.h-100.d-flex.justify-content-center.flex-column(style="border-top-left-radius: 20px;border-bottom-left-radius: 20px;")
              figure
                img.mx-auto(src="@/assets/curso/temas/2.svg",style="max-width: 116px;")
          .col-lg-6.col-8.ps-0
            .fondo-color-sistema-i.p-3.h-100.d-flex.align-items-center(style="border-top-right-radius: 20px;border-bottom-right-radius: 20px;")
              .bg-white.p-2.p-md-3(style="border-top-right-radius: 18px;border-bottom-right-radius: 18px;")
                p.mb-0(style="color:#0F6BD2;") En resumen, en el proceso de diseño, un modelo de seguridad es capaz de identificar las siguientes vulnerabilidades y posibles amenazas, como se muestra a continuación:
        
        figure.mb-5(data-aos="zoom-in-up")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/mHAdqq_7FXg?si=sliTNfMnau_O4N8Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Análisis, valoración de riesgos y controles de ciberseguridad: Vulnerabilidades y amenazas

    Separador

    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Seguridad en el proceso de codificación

    p(style="color: red;") falta parrfo imgen parro aqui!!!!!!!!!!!!!

    .fondo-personalizado-2.pos-2
      .fondo-personalizado-2__contenido
        .row.mb-4
          .col-lg-8.mb-4.mb-lg-0
            .fondo-color-sistema-i.borde-24.p-4
              .row.align-items-center
                .col-md-3.col-lg-2
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src="@/assets/curso/temas/38.png",style="max-width: 125px;")
                .col-md-9.col-lg-10
                  p.mb-0 En esta etapa, el objetivo es facilitar el trabajo en equipo, evitando reprocesos y pérdida de trabajo. Por ello, es crucial utilizar herramientas que permitan sincronizar el trabajo y guardar la información de forma colaborativa. Además, se recomienda emplear buenas prácticas estandarizadas por organizaciones como OWASP o CERT, las cuales se detallarán más adelante. No obstante, es importante considerar las buenas prácticas para una adecuada codificación, tales como:
          .col-lg-4
            figure
              img.mx-auto(src="@/assets/curso/temas/37.png",style="max-width: 400px;")


        
        SlyderF.estilo-slyder.mb-5(columnas="col-lg-6",data-aos="flip-down")
          .tarjeta.color-secundario.p-3.borde-10.d-flex.align-items-center
            .row.align-items-center
              .col-lg-6
                .fondo-color-sistema-i.p-2.borde-14.mb-3.mb-lg-0
                  figure
                    img.mx-auto(src="@/assets/curso/temas/8.svg",style="max-width: 250px;",alt="La figura describe el concepto de una excepción en programación: un objeto que representa un error e interrumpe el flujo normal de ejecución de un método, siendo luego manejado por el sistema en tiempo de ejecución.")
              .col-lg-6
                p.mb-0.text-center.fw-bold Manejo de excepciones.
          .tarjeta.color-secundario.p-3.borde-10.d-flex.align-items-center
            .row.align-items-center.justify-content-center
              .col-lg-12
                figure.mb-3
                  img.mx-auto(src="@/assets/curso/temas/14.png",style="max-width: 310px;",alt="La figura muestra la configuración que explica cómo se sobrescriben los valores predeterminados en un entorno de desarrollo.")
              .col-lg-12
                p.mb-0.text-center.fw-bold Documentación de líneas o funciones.
          .tarjeta.color-secundario.p-3.borde-10.d-flex.align-items-center
            .row.align-items-center.justify-content-center
              .col-lg-12
                figure.mb-3
                  img.mx-auto(src="@/assets/curso/temas/15.png",style="max-width: 323px;",alt="La imagen presenta un fragmento de código CSS para ajustar la posición de los iconos de control en un carrusel de interfaz de usuario, es parte de una depuración para eliminar o corregir código inservible.")
              .col-lg-12
                p.mb-0.text-center.fw-bold Depuración de código inservible.
          .tarjeta.color-secundario.p-3.borde-10.d-flex.align-items-center
            .row.align-items-center.justify-content-center
              .col-lg-12
                figure.mb-3
                  img.mx-auto(src="@/assets/curso/temas/16.png",style="max-width: 323px;",alt="El fragmento de código muestra una función 'getDataSlider' que segmenta un arreglo de datos en grupos para un carrusel, utilizando variables nombradas 'carousel' y 'array' para este proceso.")
              .col-lg-12
                p.mb-0.text-center.fw-bold Métodos de nombramiento para las funciones y variables.
          .tarjeta.color-secundario.p-3.borde-10.d-flex.align-items-center
            .row.align-items-center.justify-content-center
              .col-lg-12
                figure.mb-3
                  img.mx-auto(src="@/assets/curso/temas/17.png",style="max-width: 323px;",alt="El fragmento de código CSS muestra estilos para contenedores con un diseño flexible y elementos individuales que indican interactividad, contribuyendo a la claridad y facilidad de mantenimiento del diseño de la interfaz.")
              .col-lg-12
                p.mb-0.text-center.fw-bold Código legible para mejorar el mantenimiento de las aplicaciones.

        Separador

        #t_1_4.titulo-segundo.color-acento-contenido
          h2 1.4 Seguridad en el proceso de pruebas

        .bloque-texto-g.p-3.p-sm-4.p-md-5.mb-5(style="background-color: #A3BFE4;")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/39.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En la etapa de pruebas, se pueden analizar las vulnerabilidades siguiendo el modelo de amenazas diseñado en la etapa anterior. Las pruebas se centrarán en cada uno de los aspectos del modelo, considerando la configuración de los entornos, la codificación realizada por los desarrolladores y la arquitectura de la aplicación. De esta manera, será posible identificar y corregir vulnerabilidades a tiempo. Una de las técnicas utilizadas para estas pruebas es el #[em Fuzzing], que consiste en enviar datos secuenciales o aleatorios a un #[em software] o aplicación con el objetivo de detectar vulnerabilidades no previstas. Además, es fundamental considerar el aseguramiento de la calidad, por lo cual se identifican los siguientes requerimientos:
    



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

    #t_1_5.titulo-segundo.color-acento-contenido
      h2 1.5 Seguridad en el proceso de despliegue y mantenimiento

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/40.png')})`}"
      )
      .bloque-texto-g__texto.p-4.fondo-color-sistema-i
        p.mb-0 Una buena práctica consiste en asegurar que los servidores destinados a los despliegues de mantenimiento, desarrollo y producción mantengan configuraciones casi idénticas. La razón por la cual se dice "casi idénticas" es que existen ciertas configuraciones que pueden variar ligeramente debido al acceso a las aplicaciones, pero, en cuanto a características generales, deberían ser iguales. Esto permite que, al realizar pruebas, las aplicaciones se comporten de manera similar en diferentes entornos.

    
    .fondo-personalizado-1
      .fondo-personalizado-1__contenido
        .row.mb-5.seccion-tarjetas-2.justify-content-center(data-aos="flip-up")
          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            .tarjeta--boton.color-3.p-4.h-100
              .seccion-tarjetas__cont-figura-1.mb-4.mx-auto
                figure
                  img(src='@/assets/curso/temas/41.png')

              p.text-center Los requisitos cruciales a considerar en esta fase incluyen:
          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            .tarjeta--boton.color-4.p-4.h-100
              .seccion-tarjetas__cont-figura-1.mb-4.mx-auto
                figure
                  img(src='@/assets/curso/temas/42.png')

              p.text-center Aseguramiento basado en riesgos y pruebas de seguridad, incluyendo pruebas de caja blanca y caja negra.
        
        .row.align-items-center.mb-5
          .col-lg-7
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/43.png",style="max-width: 715px;")
          .col-lg-5
            .fondo-color-sistema-i.borde-16.p-3.py-4
              p.mb-0 Además, es necesario configurar la red y gestionar el acceso de manera que solo las personas autorizadas puedan acceder a ella. Es importante tener en cuenta la arquitectura diseñada en etapas anteriores para entender bien los tipos de configuración. Configurar los accesos y la red para despliegues directos en la nube o en un servidor local implica consideraciones diferentes. OWASP también ofrece guías sobre cómo probar estos tipos de aseguramientos.

        .cont-titulo-decorativo.p-2.mt-5.mb-4
          .row
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/temas/imagen-tit-dec.svg")
            .col.align-self-end
              h3.mt-3.mb-0.me-2 Entidades de estandarización

        p.mb-4 Existen entidades responsables de elaborar normativas de nivel técnico, que, con el apoyo de equipos técnicos compuestos por expertos, definen estándares. Estos estándares son técnicas establecidas en documentos publicados que facilitan la creación de un marco de trabajo para abordar problemas comunes en las organizaciones.

        p.mb-4 A continuación, se listan las principales entidades: 


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
