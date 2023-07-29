export default {
  global: {
    componenteFormativo: 'Estructura organizacional y plan estratégico',
    descripcionCurso:
      'Este componente formativo desarrolla temas que permiten a los emprendedores apropiarse de conocimientos claros y concisos para realizar una buena gestión administrativa y de talento humano en las unidades productivas formalizadas: administración, proceso administrativo, organigrama, planeación estratégica, herramientas, diagnóstico, matrices, talento humano, análisis de cargo y perfiles, estructura salarial, herramientas, manuales y funciones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal-.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1-.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2-.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'La administración',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'El proceso administrativo y sus etapas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Organigramas',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Procesos: componentes y metodología',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Planeación estratégica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Diagnóstico: tipos y elementos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Talento humano',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Manuales: concepto y tipos',
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
      tema: 'Organigramas',
      referencia:
        'Universidad Tecnológica de Chile - Inacap. (2018). <i>Guía de aprendizaje -  Áreas funcionales de la empresa.</i> ',
      tipo: 'PDF',
      link:
        'http://www.inacap.cl/web/material-apoyo-cedem/alumno/Administracion/Administracion/ADSP01_U2_GA.pdf',
    },
    {
      tema: 'Procesos: componentes y metodología',
      referencia:
        'Valdés Hernández, L. A. (s.f.). <i>Manual para la Diagramación de procesos</i>. ',
      tipo: 'PDF',
      link: 'http://docencia.fca.unam.mx/~lvaldes/cal_pdf/cal18.pdf',
    },
    {
      tema: 'Manuales: concepto y tipos',
      referencia:
        'MARLAN – El centro de educación en Internet. (2017). <i>Manual de Funciones</i> ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=uiyLYSIHd2w&ab_channel=MARLAN%7CElcentrodeeducaci%C3%B3nenInternet',
    },
    {
      tema: 'Manuales: concepto y tipos',
      referencia:
        'Departamento Administrativo de la Función Pública. (2015). <i>Guía para establecer o modificar el Manual de Funciones y de Competencias Laborales.</i> ',
      tipo: 'PDF',
      link:
        'https://www.funcionpublica.gov.co/documents/418548/34150781/Gu%C3%ADa+para+establecer+o+modificar+el+manual+de+funciones+y+de+competencias+laborales+-+Versi%C3%B3n+2+-+Abril+2018.pdf/caa81178-376a-e0f2-2dfa-e859a8824538?t=1531756428307',
    },
  ],
  glosario: [
    {
      termino: 'Capital humano',
      significado:
        'es el capital de gente, talento, competencias y habilidades que posee una organización.',
    },
    {
      termino: 'Estructura salaria',
      significado:
        'hace referencia a cómo está compuesto el salario o retribución que percibe un trabajador por la prestación de un servicio.',
    },
    {
      termino: 'Organización',
      significado:
        'es un sistema de actividades conscientemente coordinadas de dos o más personas.',
    },
    {
      termino: 'Planeación estratégica',
      significado:
        'es la que permite determinar la misión, visión y estrategias, para impulsar el crecimiento de la organización a corto, mediano y largo plazo.',
    },
    {
      termino: 'Planeación',
      significado:
        'es el proceso de diseño, articulación de acciones y recursos necesarios, para la operación de programas de trabajo que conducen a la obtención de resultados, en un periodo determinado.',
    },
    {
      termino: 'Puesto',
      significado:
        'se define como una unidad de la organización que consiste en un grupo de obligaciones y responsabilidades, que lo separan y distinguen de los demás puestos.',
    },
    {
      termino: 'Recurso humano',
      significado: 'personal empleado en una empresa u organización.',
    },
    {
      termino: 'Salario',
      significado:
        'hace referencia no solo la remuneración fija y ordinaria, sino a todo aquello que implique retribución de servicios al trabajador, cualquiera que sea la forma de denominación que se adopte, tales como primas, sobresueldos, bonificaciones, etc.',
    },
    {
      termino: 'Talento humano',
      significado:
        'es el proceso que determina la capacidad, habilidades y destrezas, que debe tener una persona para ejecutar de manera eficiente, las actividades en el puesto de trabajo.',
    },
    {
      termino: 'Tarea',
      significado:
        'es toda actividad individualizada y realizada por el ocupante de un puesto. Por lo general, es la labor que se atribuye a los puestos simples y repetitivos (por hora o de empleados), como montar una pieza, hacer la rosca de un tornillo, tallar un componente, inyectar una pieza, etcétera. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Decreto Ley 785 de 2005. (Departamento Administrativo de Función Pública). Por el cual se establece el sistema de nomenclatura y clasificación y de funciones y requisitos generales de los empleados de las entidades territoriales que se regulan por las disposiciones de la Ley 909 de 2004.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=16127',
    },
    {
      referencia:
        'Chiavenato, I. (2007). <i>Introducción a la teoría general de la administración</i>. McGraw-Hill.',
      link:
        'https://frrq.cvg.utn.edu.ar/pluginfile.php/15525/mod_resource/content/0/Chiavenato%20Idalverto.%20Introducci%C3%B3n%20a%20la%20teor%C3%ADa%20general%20de%20la%20Administraci%C3%B3n.pdf',
    },
    {
      referencia:
        'Chiavenato, I. (2011). <i>Administración de recursos humanos. El capital humano de las organizaciones</i>. McGraw-Hill.',
      link:
        'https://www.sijufor.org/uploads/1/2/0/5/120589378/administracion_de_recursos_humanos_-_chiavenato.pdf ',
    },
    {
      referencia:
        'De Zuani, E. (2019). <i>Introducción a la administración de organizaciones</i>. Hanne.',
      link:
        'https://www.academia.edu/43994894/DE_ZUANI_INTR_A_LA_ADMIN_DE_ORGANIZACIONES',
    },
    {
      referencia:
        'Franklin, E. (2009). <i>Organización de Empresas</i>. McGraw-Hill.',
      link:
        'https://naghelsy.files.wordpress.com/2016/01/enrique-franklin-organizacion-de-empresas.pdf',
    },
    {
      referencia:
        'Manjarrés, Colina, L. A. (2016).<i> Manual de funciones y estructuración del organigrama del área financiera de la E.S.E Hospital San Cristóbal de Ciénaga</i> (Tesis de grado, Universidad Cooperativa de Colombia, Santa Marta). Repositorio UCC.',
      link:
        'https://repository.ucc.edu.co/bitstream/20.500.12494/12412/1/2016_manual_funciones_estructuraci%C3%B3n.pdf',
    },
    {
      referencia:
        'Münch Galindo, L., & García Martínez, J. (1990). <i>Fundamentos de administración</i>. Editorial Trillas.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
