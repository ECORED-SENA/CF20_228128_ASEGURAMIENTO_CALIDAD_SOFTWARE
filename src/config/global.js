export default {
  global: {
    componenteFormativo: 'Vulnerabilidades de seguridad',
    descripcionCurso:
      'Un aspecto importante en el desarrollo de <em>software</em> es garantizar la seguridad en cada una de las etapas del proceso, incluyendo los despliegues en los distintos ambientes: desarrollo, pruebas y producción. Esto contribuye a la calidad y confiabilidad de las aplicaciones desarrolladas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Marco de referencia en gestión de la seguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Seguridad en el análisis de requerimientos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Seguridad en el proceso de diseño',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Seguridad en el proceso de codificación',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Seguridad en el proceso de pruebas',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Seguridad en el proceso de despliegue y mantenimiento',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Matriz de control de acceso',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Seguridad perimetral',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Protocolos de comunicación segura',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Pruebas de vulnerabilidad',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228128_CF20_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '3.Seguridad perimetral',
      referencia: 'ComputerHoy.com. (2015). ¿Qué es un firewall o Cortafuegos?',
      tipo: 'Video de YouTube',
      link: 'https://www.youtube.com/embed/3q2ENiVBAy8',
    },
    {
      tema: '3.Seguridad perimetral',
      referencia:
        'VpnMentor. (2021, Enero 12). VPN Guide for Newbies. Blogpost.',
      tipo: 'Blog',
      link:
        'https://es.vpnmentor.com/blog/que-es-una-vpn-guia-sobre-vpns-para-principiantes/',
    },
    {
      tema: '3.Seguridad perimetral',
      referencia:
        'López, A.(2021). ¿Qué es un Honeypot en ciberseguridad? ¿para qué sirve? Tipos de Honeypots.',
      tipo: 'Video de YouTube',
      link: 'https://www.youtube.com/embed/SgH9rWB9ivQ',
    },
    {
      tema: '4.Protocolos de comunicación segura',
      referencia:
        'Azuax.C.(2017). Conceptos Fundamentales del protocolo HTTP y HTTPS.',
      tipo: 'Video de YouTube',
      link: 'https://www.youtube.com/embed/ARmQMSeU9fU',
    },
    {
      tema: '5.Pruebas de vulnerabilidad',
      referencia:
        'Roel.A(2021). Como descargar e instalar Java JDK16 en Windows 10-2021.',
      tipo: 'Video de YouTube',
      link: 'https://www.youtube.com/watch?v=hCBEavs08as',
    },
  ],
  glosario: [
    {
      termino: 'Autenticación',
      significado:
        'es el proceso que debe seguir un usuario para tener acceso a los recursos de un sistema o de una red de computadores. Este proceso implica identificación (decirle al sistema quién es) y <b>autenticación</b> (demostrar que el usuario es quien dice ser).',
    },
    {
      termino: 'Sitio Web',
      significado:
        'es un conjunto de páginas <b>web</b> accesibles a través de <b>internet</b>, convenientemente enlazadas y con una finalidad concreta.',
    },
    {
      termino: 'Sintaxis',
      significado:
        'según su <b>definición la sintaxis</b> es la “Parte de la gramática que estudia el modo en que se combinan las palabras y los grupos que estas forman para expresar significados, así como las relaciones que se establecen entre todas esas unidades”',
    },
    {
      termino: 'Delegar',
      significado:
        'dar [una persona o un organismo] un poder, una función o una responsabilidad a alguien para que los ejerza en su lugar o para obrar en representación suya.',
    },
    {
      termino: 'Web',
      significado:
        'conjunto de información que se encuentra en una dirección determinada de internet.',
    },
    {
      termino: 'Interfaz',
      significado:
        'como <b>interfaz</b> designamos, en informática, la conexión física y funcional que se establece entre dos aparatos, dispositivos o sistemas que funcionan independientemente uno del otro. En este sentido, la comunicación entre un ser humano y una computadora se realiza por medio de una <b>interfaz</b>.',
    },
    {
      termino: 'API',
      significado:
        'una <b>API</b> es un conjunto de definiciones y protocolos que se utiliza para desarrollar e integrar el <em>software</em> de las aplicaciones. <b>API</b> significa interfaz de programación de aplicaciones. Las <b>API</b> permiten que sus productos y servicios se comuniquen con otros, sin necesidad de saber cómo están implementados.',
    },
    {
      termino: 'Aplicación',
      significado:
        'es un programa <b>informático</b> diseñado como una herramienta para realizar operaciones o funciones específicas. Generalmente, son diseñadas para facilitar ciertas tareas complejas y hacer más sencilla la experiencia <b>informática</b> de las personas.',
    },
    {
      termino: '<em>Browser</em>',
      significado:
        'es el término inglés que se utiliza para identificar a un navegador web o navegador de Internet. Consiste en un <em>software</em>, programa o incluso aplicación, que ofrece al usuario el acceso a la Red.',
    },
    {
      termino: 'Servidor',
      significado:
        'es un conjunto de computadoras capaz de atender las peticiones de un cliente y devolverle una respuesta en concordancia.',
    },
  ],
  referencias: [
    {
      referencia: 'Atico34  (2021). Seguridad Perimetral informática.',
      link:
        'https://protecciondatos-lopd.com/empresas/seguridad-perimetral-informatica/#Definicion_de_seguridad_perimetral',
    },
    {
      referencia:
        'Calder, A. (2018). NIST Cybersecurity Framework: Una guía de bolsillo . IT Governance Publishing Ltd.',
      link: '',
    },
    {
      referencia:
        'Cano, J. (2011). Ciberseguridad y ciberdefensa: dos tendencias emergentes en un contexto global. SISTEMAS (ASOCIACION COLOMBIANA DE INGENIEROS DE SISTEMAS), 119, 4-7.',
      link: '',
    },
    {
      referencia:
        'Firma-e. (2021). ¿Qué es un SGSI – Sistema de Gestión de Seguridad de la Información?.',
      link:
        'https://www.firma-e.com/blog/que-es-un-sgsi-sistema-de-gestion-de-seguridad-de-la-informacion',
    },
    {
      referencia:
        'Hackmetrix (2021). Matriz de control de accesos: Qué es y cómo hacerla paso a paso.',
      link: 'https://blog.hackmetrix.com/matriz-de-accesos/',
    },
    {
      referencia:
        'ISO/IEC. (2020). Tecnologías de la información. Técnicas de seguridad. directrices para ciberseguridad (Num. 27032)',
      link:
        'https://tienda.icontec.org/gp-tecnologias-de-la-informacion-tecnicas-de-seguridad-directrices-para-ciberseguridad-gtc-iso-iec27032-2020.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Peter Emerson Pinchao Solís',
          cargo: 'Experto temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'David Eduardo Lozada Cerón',
          cargo: 'Experto temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldán',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edwin Sneider Velandia Suárez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y Productor Multimedia',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animador y Productor Multimedia',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
