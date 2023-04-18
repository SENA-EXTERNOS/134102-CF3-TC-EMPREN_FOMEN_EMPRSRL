<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    
        .titulo-principal.color-acento-contenido
          .titulo-principal__numero
            span 
              i.fas.fa-info
          h1 Introducción
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5.fnd-in.fnd-f2-
              .bloque-texto-g__img(
                :style="{'background-image': `url(${require('@/assets/curso/temas/img-intro.png')})`}"
              )
              .bloque-texto-g__texto.p-4
                p Estimado aprendiz, le damos la bienvenida a este componente formativo donde se abordarán temas que le serán de gran ayuda al momento de abordar este proceso de aprendizaje. Entre los temas que se estudian, se enfatiza en los siguientes: administración, el proceso administrativo y sus etapas, los organigramas, clases y características, áreas funcionales, herramientas, roles y funciones, la planeación estratégica, teniendo en cuenta las herramientas, componentes y metodologías, los tipos de diagnóstico, sus elementos y matrices y el talento humano con su respectivo análisis de cargos y perfiles, estructura salarial y herramientas.

        p.mb-5 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
    
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/Aovcwkh084s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

  
  </template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
