<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Diagnóstico: tipos y elementos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5.fnd-in.fnd-f2-
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p De manera puntual, se puede decir que:<b> por diagnóstico </b>se entiende el estudio que se realiza antes de planificar un proyecto, y consiste en la recolección, tabulación e interpretación de información de manera organizada, lo que permite la obtención de conclusiones e hipótesis para la toma de decisiones.
              br
              br
              | Toda organización debe realizar un diagnóstico antes de llevar a cabo cualquier idea, porque es necesario conocer qué requiere el mercado y si se cuenta con la capacidad para satisfacerlo. 


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4.mb-4.fnd-6.mb-5.blz
          p <b>El diagnóstico administrativo</b> es vital, porque la empresa debe conocer cómo está funcionando en sus diferentes áreas y descubrir causas y efectos de situaciones que se estén presentando, para dar una posible solución y mejorar la productividad.

    p.mb-5 De acuerdo con el aprendizaje sobre qué es el diagnóstico, se evidencian entonces cuáles son los pasos, a seguir, para su correcta ejecución:



    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul fnd-10")
      .row.px-5(titulo="Identificación del problema")
        .col-md-6.mb-4.mb-md-0
        
          p Se examina a partir de una situación irregular, el motivo por el cual es necesario identificar su origen, cuál fue la causa y analizar qué efectos puede generar. Para esto se debe:
          ul.lista-ul--color.mb-5
            li.mb-0 
              i.fas.fa-check
              p.mb-0 Seleccionar un problema, se efectúa una lista de cuáles son las dificultades y se selecciona, de la lista, la de mayor complejidad, para analizarla y plantear una solución.
            li.mb-0 
              i.fas.fa-check
              p.mb-0 Luego de evidenciar el problema, se indaga cuáles son los hechos palpables, su contexto y la opinión de los involucrados.
            li.mb-0 
              i.fas.fa-check
              p.mb-0 Definir un marco de análisis y formular después una lista de preguntas. Se puede utilizar el árbol de problema en el cual se describen aspectos como las causas, los problemas y las consecuencias.              
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema3/img-2.png', alt='Texto que describa la imagen')
      .row.px-5(titulo="Elaborar el plan diagnóstico")
        .col-md-6.mb-4.mb-md-0
          p En este paso, se identifican las actividades que se van a realizar y se debe establecer qué recursos, tanto técnicos como humanos, son necesarios para investigar el problema y, a partir de este punto, realizar un cronograma para la entrega de los resultados.          
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema3/img-3.png', alt='Texto que describa la imagen')
      .row.px-5(titulo="Recolección de la información")
        .col-md-6.mb-4.mb-md-0
          p Esta es la fase más importante del diagnóstico, porque se debe tener en cuenta la información primaria y la secundaria, para consolidarlas y, de esta manera, obtener un resultado objetivo de la información recolectada.       
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema3/img-4.png', alt='Texto que describa la imagen')
      .row.px-5(titulo="Consolidación de la información")
        .col-md-6.mb-4.mb-md-0
          p Una vez recolectada la información, esta debe ser consolidada para presentar el informe y de acuerdo con su documentación, identificar el problema y plantear una solución.     
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema3/img-5.png', alt='Texto que describa la imagen')
    br
    p.mb-5 El diagnóstico empresarial es importante a nivel interno, porque con él se obtiene un panorama de cómo está funcionando la empresa y se pueden identificar posibles problemas que la están afectando y que, por ende, afectan la productividad y rentabilidad de la misma. Se habla entonces de dos tipos de diagnósticos:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4.fnd-7.mb-5
          p <b>Diagnóstico integral.</b> En este se puede visualizar un panorama amplio a nivel interno de la empresa, en cuanto a qué es lo que la puede afectar o beneficiar como, por ejemplo, analizar la competencia, el mercado y el entorno.
            br
            | Este diagnóstico es importante, porque permite el continuo monitoreo de la gestión, evitando que se presenten problemas a futuro.

      .col-lg-10
        .cajon.color-acento-contenido.p-4.mb-4.fnd-6.mb-5.blz
          p <b>Diagnóstico específico.</b> Como su nombre lo dice, este modelo se lleva a cabo en determinadas áreas de la empresa y no es tan amplio como el anterior. Por ejemplo: se le puede realizar un diagnóstico al área financiera, que es el espacio donde se manejan los recursos económicos, para conocer cómo se están apropiando los dineros y las ganancias que dejan las inversiones.
            br
            | Habiendo entendido cuáles son los tipos de diagnóstico, a continuación, lo invitamos a conocer sobre sus matrices.

    p.mb-3 La matriz es una herramienta que permite identificar las variables internas y externas de una organización. Una correcta ejecución de una matriz, puede arrojar excelentes resultados de factores que sean críticos, o de éxito.
    p.mb-5 Dentro de las principales matrices se encuentran las siguientes:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/img-6-.svg', alt='Texto que describa la imagen')

          .tarjeta.color-secundario.p-3(x="11%" y="47%" numero="1")
            h3 Matriz DOFA
            p Esta matriz permite hacer un estudio de la situación de la empresa o proyecto, donde se pueden analizar características internas (debilidades y fortalezas), o externas (amenazas y oportunidades).
          .tarjeta.color-secundario.p-3(x="23.5%" y="20.7%" numero="2")
            h3 Matriz PCI
            p Con esta matriz se pretende definir cuáles son las fortalezas y debilidades, al igual que el impacto que generan en la organización. Se agrupan por:
            ul.lista-ul--color.mb-5
              li.mb-0 
                i.fas.fa-check.amr
                p.mb-0 Capacidad directiva.
              li.mb-0 
                i.fas.fa-check.amr
                p.mb-0 Capacidad financiera.
              li.mb-0 
                i.fas.fa-check.amr
                p.mb-0 Capacidad tecnológica.
              li.mb-0 
                i.fas.fa-check.amr
                p.mb-0 Capacidad de talento humano.
              li.mb-0 
                i.fas.fa-check.amr
                p.mb-0 Capacidad competitiva.
           
          .tarjeta.color-secundario.p-3(x="39.8%" y="6%" numero="3")
            h3 Matriz POAM (Perfil de Oportunidades y Amenazas en el Medio) 
            p con esta matriz se identifican cuáles son las oportunidades y amenazas del ambiente en la empresa, dejando un nivel de calificación bajo, medio o alto.
          .tarjeta.color-secundario.p-3(x="60.4%" y="6%" numero="4")
            h3 Matriz PEST (también conocida como PESTLE) 
            p Esta matriz permite realizar una investigación minuciosa del entorno de la empresa, analizando factores políticos, económicos, sociales, tecnológicos, ecológicos y legales.
          .tarjeta.color-secundario.p-3(x="76.5%" y="20.8%" numero="5")
            h3 Matriz BCG o Matriz de crecimiento
            p Esta matriz se encarga de hacer un análisis del portafolio de la empresa, con base en dos factores importantes que son: la tasa de crecimiento del mercado y la participación en el mismo.
          .tarjeta.color-secundario.p-3(x="89%" y="47.6%" numero="6")
            h3 Matriz PEYEA (Posición Estratégica y Evaluación de la Acción)
            p Matriz que tiene como objetivo definir cuáles son las estrategias más adecuadas para la organización, una vez que se haya llevado a cabo el análisis interno y el externo.            

    p.mb-5 Una vez expuestas las matrices diagnósticas, es necesario conocer las herramientas que se utilizan en el desarrollo del diagnóstico empresarial y con las cuales se puede definir claramente un panorama amplio sobre el nivel de competitividad, la lista de oportunidades del entorno y el plan de mejoramiento y, al mismo tiempo, compararse con otras empresas.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-a.color-primario.p-4.p-md-5.mb-5.fnd-14.fnd-3.fnd-f2
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure
                img.img-196(src='@/assets/curso/temas/tema3/img-7.svg')  

            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Entre estas herramientas, se destaca el árbol de problemas, el cual se utiliza para identificar una situación negativa que se intenta solucionar, analizando la relación causa y efecto; una vez identificada, se procede a realizar una lluvia de ideas. A partir de este punto, se trabaja con el árbol de objetivos, donde se plantean posibles soluciones a esa situación, negativa, dentro la empresa.


      .col-lg-10
        .bloque-texto-a.color-primario.p-4.p-md-5.mb-5.fnd-14.fnd-3.fnd-f.fnd-3.bz.fnd-f2
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8.mb-4.mb-lg-0
              .bloque-texto-a__texto.p-4
                p Por otra parte, está el diagrama causa–efecto, que es un gráfico que permite determinar las causas y efectos de un problema; también es conocido como espina de pescado y, por último, tenemos la matriz EFE, que es el resumen evaluativo de la información donde se analizan factores sociales, económicos, culturales, demográficos, ambientales, tecnológicos y políticos, de la organización.          
            .col-lg-4
              figure
                img.img-196(src='@/assets/curso/temas/tema3/img-8.svg')  


    p.mb-5 Lo invitamos a ver el siguiente video, donde se nos amplía la temática sobre el diagnóstico.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video










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
