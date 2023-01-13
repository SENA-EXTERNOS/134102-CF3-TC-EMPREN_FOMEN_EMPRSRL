<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Planeación estratégica

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5.fnd-in.fnd-f2-
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-1-.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p La planeación es el proceso de diseño, articulación de acciones y verificación de recursos, necesarios para la operación de planes y programas de trabajo que conducen a la obtención de resultados en un periodo determinado.
            br
            br
            p Entonces, se puede deducir que la planeación estratégica sirve para determinar: <b>quién es</b> (misión), <b>a donde</b> se quiere llegar (visión) y <b>qué se debe hacer</b> para lograrlo (estrategias), con la finalidad de impulsar el crecimiento de la organización a corto, mediano y largo plazo.

    p.mb-5 La planeación estratégica está conformada por cuatro principales componentes:  

    SlyderF.mb-5.row(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-acento-botones.p-4.fnd-51.tarjeta-avatar1.t2
        .row.justify-content-center.mb-3
          .col-8
            img.img-150.img-t(src='@/assets/curso/temas/tema2/img-2.svg' alt='AvatarTop')
        h3.text-center Misión
        p.text-center.px-2 Es la razón de ser de la organización, donde se fundamenta el propósito de porqué existe y qué hace para lograr su visión.
      .tarjeta.color-acento-botones.p-4.fnd-51.tarjeta-avatar1.t2
        .row.justify-content-center.mb-3
          .col-8
            img.img-150.img-t(src='@/assets/curso/temas/tema2/img-3.svg' alt='AvatarTop')
        h3.text-center Visión
        p.text-center.px-2 Delinea lo que la organización quiere ser a futuro.
      .tarjeta.color-acento-botones.p-4.fnd-51.tarjeta-avatar1.t2
        .row.justify-content-center.mb-3
          .col-8
            img.img-150.img-t(src='@/assets/curso/temas/tema2/img-4.svg' alt='AvatarTop')
        h3.text-center Valores
        p.text-center.px-2 Es donde se define la cultura y creencias que son compartidas por todos los miembros de la organización; define cultura y prioridades, estableciendo las bases para la toma de decisiones. 
      .tarjeta.color-acento-botones.p-4.fnd-51.tarjeta-avatar1.t2
        .row.justify-content-center.mb-3
          .col-8
            img.img-150.img-t(src='@/assets/curso/temas/tema2/img-5.svg' alt='AvatarTop')
        h3.text-center Estrategias
        p.text-center.px-2 Mezcla de objetivos y medios que delimitan una serie de acciones encaminadas al logro de la visión.
    br 
    p El método universal que se utiliza es el análisis DOFA (Debilidades, Oportunidades, Fortalezas y Amenazas), que permite estructurar un diagnóstico interno y externo, de la organización en su entorno.
    p A continuación, se hará una breve presentación del significado de los términos contemplados en la DOFA:    

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10


    .row.justify-content-center
      .col-lg-10
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-6
            .crd_02.mb-5
              .crd_02__icon.dan
                img(src="@/assets/curso/temas/tema2/img-6.svg", alt="alt")          
              .crd_02__txt
                h3 Debilidades
                p Son las limitaciones o carencias de conocimientos, habilidades, tecnología, información y recursos que tiene una organización, y que impide el aprovechamiento de las oportunidades que ofrece el entorno y que no le permite defenderse de las amenazas.
          .col-lg-6
            .crd_02.mb-5
              .crd_02__icon.dan
                img(src="@/assets/curso/temas/tema2/img-7.svg", alt="alt")          
              .crd_02__txt
                h3 Fortalezas 
                p Son las capacidades humanas, técnicas y materiales con las que cuenta la empresa, para aprovechar las oportunidades que le ofrece el entorno y enfrentar las posibles amenazas.
          .col-lg-6
            .crd_02.mb-5
              .crd_02__icon.dan
                img(src="@/assets/curso/temas/tema2/img-8.svg", alt="alt")          
              .crd_02__txt
                h3 Oportunidades
                p Son factores socioeconómicos, políticos o culturales, que están fuera del control de la organización pero que, en un momento, se pueden aprovechar si se cumplen determinadas condiciones en el entorno de la organización.
          .col-lg-6
            .crd_02.mb-5
              .crd_02__icon.dan
                img(src="@/assets/curso/temas/tema2/img-9.svg", alt="alt")          
              .crd_02__txt
                h3 Amenazas
                p Son factores externos, que están fuera del control de la organización y que pueden llegar a perjudicar o limitar el desarrollo de la misma.                


    p.mb-3 Ahora, se detallan las herramientas principales de la planeación estratégica:
    ul.lista-ul--color.mb-5
      li.mb-0 
        i.fas.fa-check
        p.mb-0 Filosofía de la gestión empresarial: tiene que ver con aspectos que caracterizan a la empresa y la diferencia de los temas. Está compuesta por cuatro elementos que son: misión, visión, valores y objetivos.
      li.mb-0 
        i.fas.fa-check
        p.mb-0 Análisis FODA: Fortalezas, Oportunidades, Debilidades y Amenazas. Esta herramienta es muy útil porque interviene en la toma de decisiones y en el diseño de un plan estratégico.
      li.mb-0 
        i.fas.fa-check
        p.mb-0 Análisis de los actores: esta herramienta se utiliza para tener en cuenta a los diferentes actores, tanto internos como externos, que ayudan a tomar decisiones en la organización. 

    p.mb-5 El análisis de los actores está compuesto por cuatro partes:

    SlyderF.custom.mb-5(columnas="col-lg-4")(data-aos="fade-left")
      .tarjeta-avatar
        img.img-a1.img-t1.img-w1(src='@/assets/curso/temas/tema2/img-10.svg' alt='AvatarTop')
        div.text-center.bg2.p-3.pt-5.h-100
          p.pt-5 Se elabora una propuesta inicial de los diferentes actores, mediante una lluvia de ideas que puede llegar a tener una influencia positiva o negativa, sobre los diferentes procesos de la organización.

      .tarjeta-avatar
        img.img-a1.img-t1.img-w1(src='@/assets/curso/temas/tema2/img-11.svg' alt='AvatarTop')
        div.text-center.bg2.p-3.pt-5.h-100
          p.pt-5 Se clasifican los actores teniendo en cuenta los siguientes criterios: roles, posición, relaciones predominantes, medios y recursos, intereses y poder.

      .tarjeta-avatar
        img.img-a1.img-t1.img-w1(src='@/assets/curso/temas/tema2/img-12.svg' alt='AvatarTop')
        div.text-center.bg2.p-3.pt-5.h-100
          p.pt-5 Se analizan los actores y se evalúan las situaciones, identificando cuáles son los más dominantes en conflicto o en posiciones de rechazo, buscando mejorar las relaciones de estos, mediante incentivos o mediaciones para mejorar las relaciones.        

      .tarjeta-avatar
        img.img-a1.img-t1.img-w1(src='@/assets/curso/temas/tema2/img-13.svg' alt='AvatarTop')
        div.text-center.bg2.p-3.pt-5.h-100
          p.pt-5 Se debe realizar una gráfica en la cual se analiza, mediante un cuadrante, la relación entre las variables “poder” e “interés”. 
    br
    p.mb-5 Avanzando con las herramientas, se pueden crear estrategias uniendo los componentes del análisis FODA de la siguiente forma:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .cajon.color-acento-contenido.p-4.mb-4.fnd-6.mb-5.blz
          p <b>Estrategia FO (Fortalezas - Oportunidades): </b>se utilizan las fortalezas para aprovechar las oportunidades del entorno de la organización. 
      .col-lg-6
        .cajon.color-secundario.p-4.mb-4.fnd-7.mb-5
          p <b>Estrategia DO (Debilidades - Oportunidades): </b>las acciones son orientadas con el propósito de mitigar las debilidades, aprovechando las oportunidades.
      .col-lg-6
        .cajon.color-secundario.p-4.mb-4.fnd-7.mb-5
          p <b>Estrategia FA (Fortalezas - Amenazas):</b> se encamina a optimizar las fortalezas para evadir las amenazas del entorno externo.
      .col-lg-6
        .cajon.color-acento-contenido.p-4.mb-4.fnd-6.mb-5.blz
          p <b>Estrategia DA: (Debilidades - Amenazas):</b> se enfoca en minimizar las debilidades y evitar amenazas. 
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
