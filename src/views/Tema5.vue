<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Manuales: concepto y tipos

    p.mb-5 Para concluir, se hace necesario informarnos sobre los diferentes tipos de manuales que existen en la empresa.

    p.mb-5 Antes de continuar, es importante definir el manual como el documento que sirve de guía para instruir a la persona y manejar, de manera eficiente, el funcionamiento de algo y solucionar problemas cuando se presenten.

    p.mb-5 En la empresa existen varios tipos de manuales; para el caso del talento humano, se mencionan algunos:





    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5.fnd-in
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img-1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            ul.lista-ul--color.mb-3
              li.mb-0 
                i.fas.fa-check
                p.mb-0  Manual de contratación.
              li.mb-0 
                i.fas.fa-check
                p.mb-0  Manual de la organización.
              li.mb-0 
                i.fas.fa-check
                p.mb-0  Manual de normas y procedimientos.
              li.mb-0 
                i.fas.fa-check
                p.mb-0  Manual de funciones.
              li.mb-0 
                i.fas.fa-check
                p.mb-0  Manual de reclutamiento y selección de personal.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4.mb-4.fnd-6.mb-5.blz
          p El manual de funciones es un documento que la empresa elabora formalmente con el fin de establecer una guía para el desarrollo de las actividades de todo el personal. Este manual contiene la estructura organizacional, la descripción de las funciones y responsabilidades, el perfil y las habilidades que cada puesto requiere. En este manual también se incluyen las normas legales, reglamentarias y administrativas, que han sido establecidas en el transcurso del tiempo y que tienen relación con las funciones y procedimientos de la organización.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5.fnd-8
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema5/img-2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Guía para establecer o modificar el Manual de Funciones y de Competencias Laborales
                  p.text-small Para ampliar la información, lo invitamos a leer la<em> Guía para establecer o modificar el Manual de Funciones y de Competencias Laborales,</em> la cual se encuentra en el material complementario.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://www.funcionpublica.gov.co/eva/admon/files/empresas/ZW1wcmVzYV83Ng==/imgproductos/1450054176_fd5a8e656d4625258b5ad43233c798bb.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download          


    p.mb-5 A continuación, conozca algunas de las normas relacionadas con el manual de funciones:



    .row.justify-content-center
      .col-lg-12
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-6
            .crd_02.mb-5.fnd-11
              .crd_02__icon.dan
                img(src="@/assets/curso/temas/tema5/img-3.svg", alt="alt")          
              .crd_02__txt
                h3 Decreto 1083 de 2015
                p Señala unas funciones generales que sirven como marco de referencia para que cada entidad ajuste su manual específico, de acuerdo con dichas funciones generales, por nivel de empleo.
          .col-lg-6
            .crd_02.mb-5.fnd-11
              .crd_02__icon.dan
                img(src="@/assets/curso/temas/tema5/img-3.svg", alt="alt")          
              .crd_02__txt
                h3 Decreto 785 de 2005, art. 13
                p Requisitos mínimos y máximos por nivel jerárquico.
          .col-lg-6
            .crd_02.mb-5.fnd-11
              .crd_02__icon.dan
                img(src="@/assets/curso/temas/tema5/img-3.svg", alt="alt")          
              .crd_02__txt
                h3 Leyes 617 de 2000 y 1551 de 2012, - Decreto Ley 785 de 2005, art. 13
                p Señala unas funciones generales que sirven como marco de referencia para que cada entidad ajuste su manual específico, de acuerdo con dichas funciones generales, por nivel de empleo.
          .col-lg-6
            .crd_02.mb-5.fnd-11
              .crd_02__icon.dan
                img(src="@/assets/curso/temas/tema5/img-3.svg", alt="alt")          
              .crd_02__txt
                h3 Decreto Ley 785 de 2005, art. 4
                p Naturaleza general de las funciones.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4.fnd-7.mb-5
          .row.justify-content-center.align-items-center
            .col-lg-2
              figure
                img.img-105(src='@/assets/curso/temas/tema5/img-4.svg')
            .col-lg-10.pp-l
              p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal donde encontrará la síntesis, el material complementario, entre otros. Adicional, lo invitamos a desarrollar la actividad didáctica para reforzar los conceptos estudiados.







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
