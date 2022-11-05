<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Talento humano

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5.fnd-in
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img-1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Luego de conocer el diagnóstico empresarial, se hace necesario hablar del <b>talento humano</b>, al que podemos definir como: el proceso que determina las capacidades, habilidades y destrezas que debe tener una persona para ejecutar, de manera eficiente, las actividades en un determinado puesto de trabajo.

    ul.lista-ul--color.mb-3
      li 
        i.fas.fa-square
        | 
        h3.text-black Análisis de cargo y perfiles

    p En el análisis de cargo se estudian y determinan los requisitos, responsabilidades y competencias que el cargo exige para desempeñarse de manera eficiente.

    p.mb-5 El concepto de puesto (cargo) se basa en las nociones de:

    TabsA.color-acento-contenido.mb-5
      .tarjeta.tarjeta--azul2.p-4(titulo="Tarea")
        .row.justify-content-center.align-items-center
          .col-lg-6
            p Es toda actividad individualizada y realizada por la persona que ocupa un puesto. Por lo general, es la labor que se atribuye a los puestos simples y de carácter repetitivo (por hora o de empleados), como montar una pieza, hacer la rosca de un tornillo, tallar un componente, inyectar una pieza, etc. 
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema4/img-2.png')             
      .tarjeta.tarjeta--azul2.p-4(titulo="Obligación")
        .row.justify-content-center.align-items-center
          .col-lg-6
            p Suele ser la actividad atribuida a puestos más diferenciados (asalariados o empleados), como llenar un cheque, emitir una requisición de material, elaborar una orden de servicio, etc. Una obligación es una tarea un poco más compleja, más mental y menos física.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema4/img-3.png')       
      .tarjeta.tarjeta--azul2.p-4(titulo="Función")
        .row.justify-content-center.align-items-center
          .col-lg-6
            p Es un conjunto de tareas (puestos por hora) o de obligaciones (puestos de asalariados) ejercidas de manera sistemática o reiterada por la persona que ocupa un puesto. Pueden realizarse por una persona que, sin ocupar el puesto, desempeñe provisional o definitivamente, una función. Para que un conjunto de obligaciones constituya una función, es necesario que haya reiteración en su desempeño.

          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema4/img-4.png')       
      .tarjeta.tarjeta--azul2.p-4(titulo="Puesto")
        .row.justify-content-center.align-items-center
          .col-lg-6
            p Es un conjunto de funciones (tareas u obligaciones) con una posición definida en la estructura organizacional, es decir, en el organigrama. La posición define las relaciones entre un puesto y los demás. En el fondo, son relaciones entre dos o más personas.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema4/img-4-.png')     
    p.mb-5 En otros términos, en los perfiles del cargo es donde se definen las características, tareas y responsabilidades de lo que debe tener el candidato para el puesto que va a ocupar, así como las actitudes, las cualidades y las capacidades, según el puesto de trabajo. El perfil del cargo determina: 


    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5.fnd-in
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img-5.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            ul.lista-ul--color.mb-3
              li.mb-0 
                i.fas.fa-check
                p.mb-0  La misión del cargo.
              li.mb-0 
                i.fas.fa-check
                p.mb-0  Nombre del cargo.
              li.mb-0 
                i.fas.fa-check
                p.mb-0  Departamento.
              li.mb-0 
                i.fas.fa-check
                p.mb-0  Cargo del jefe inmediato.

    p.mb-5 También se deben tener en cuenta los <b>métodos</b> de descripción y análisis del cargo, entre los cuales se encuentran:

    SlyderA.fnd-7-.p-5.mb-5
      .row.p-5
        .col-md-6.mb-4.mb-md-0
          h3 Observación directa
          p Con este método, se permite conocer más claramente los tiempos y movimientos que un trabajador invierte en su puesto de trabajo, para realizar una actividad. El análisis del puesto se debe llevar a cabo, observando directa y dinámicamente al ocupante en pleno ejercicio de sus funciones, donde el analista registra los puntos claves de lo que haya observado.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/img-6.png')
      .row.p-5
        .col-md-6.mb-4.mb-md-0
          h3 Cuestionario
          p Este método se realiza mediante un cuestionario que se le da al ocupante del cargo, donde se realizan preguntas del puesto, las cuales son analizadas por el supervisor.
        .col-md-6.p-5
          figure
            img(src='@/assets/curso/temas/tema4/img-7.png')
      .row.p-5
        .col-md-6.mb-4.mb-md-0
          h3 Entrevista directa
          p Este método es mucho más flexible, porque el analista le realiza una entrevista al ocupante del puesto y obtiene información sobre todos los aspectos, como las tareas, porque y cuando las realiza, así como también se pueden conocer las habilidades que se requieren para ocupar el puesto.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/img-8.png')
      .row.p-5
        .col-md-6.mb-4.mb-md-0
          h3 Métodos mixtos
          p Aquí se permite hacer la combinación entre los métodos anteriores y puede ser: cuestionario y entrevista, cuestionario con el ocupante y entrevista con el supervisor, cuestionario y entrevista, observación directa con el ocupante, o entrevista con el supervisor.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/img-9.png')

    ul.lista-ul--color.mb-3
      li 
        i.fas.fa-square
        | 
        h3.text-black Estructura salarial

    p.mb-5 En la legislación colombiana, el salario es un concepto amplio y genérico; después de abordar la temática del talento humano, es de gran importancia hacer énfasis en la remuneración del trabajador, que puede ser fija u ordinaria y que implica la retribución de los servicios, cualquiera que sea la forma de denominación que se adopte, tales como primas, sobresueldos, bonificaciones, etc.            
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-e.p-4
          .bloque-texto-e__texto
            i.fas.fa-quote-left
            h2.text-regular La remuneración se refiere a la recompensa que recibe el individuo a cambio de realizar las tareas organizacionales. Se trata, básicamente, de una relación de intercambio entre las personas y la organización.
            i.fas.fa-quote-right
          .row.align-items-end
            .col
              .bloque-texto-e__autor 
                .h5.mb-0 Chiavenato, 2007
    p.mb-5 El salario de un trabajador está compuesto por la remuneración económica, directa o indirecta.



    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .row.mb-5
          .col-xl-6.mb-4.mb-xl-0
            .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img
                  .row.justify-content-center.mb-3.mt-4
                    .col-8
                      img.img-150.mb-3(src='@/assets/curso/temas/tema4/img-10.svg' alt='AvatarTop')
                  h3.text-center Remuneración económica directa
                  p.text-center.px-4 Es el pago que recibe cada empleado en forma de salarios, bonos, premios y comisiones.
                .tarjeta-flip__contenido.p-4.p-xl-5.fnd-77
                  .row.justify-content-center.mb-3.mt-4
                    .col-8
                      img.img-150.mb-3(src='@/assets/curso/temas/tema4/img-10.svg' alt='AvatarTop')
                  h3.text-center.text-white Remuneración económica directa
                  p.text-center.px-4.text-white Es el pago que recibe cada empleado en forma de salarios, bonos, premios y comisiones.

          .col-xl-6.mb-4.mb-xl-0
            .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img
                  .row.justify-content-center.mb-3.mt-4
                    .col-8
                      img.img-150.mb-3(src='@/assets/curso/temas/tema4/img-11.svg' alt='AvatarTop')
                  h3.text-center Remuneración económica indirecta
                  p.text-center.px-4 Es el salario indirecto que se desprende de las cláusulas del contrato colectivo de trabajo y del plan de prestaciones y servicios sociales que ofrece una organización. El salario indirecto incluye vacaciones, gratificaciones, bonos, extras (riesgos, insalubridad, turno nocturno, años de servicio, etc.), participación de utilidades, horas extras, así como el dinero correspondiente a los servicios y prestaciones sociales que ofrece la organización (como subsidios para alimentación y transporte, seguro de vida grupal, etc.).


                .tarjeta-flip__contenido.p-4.p-xl-5.fnd-77
                  .row.justify-content-center.mb-3
                    .col-8
                      img.img-150.mb-3(src='@/assets/curso/temas/tema4/img-11.svg' alt='AvatarTop')
                  h3.text-center.text-white Remuneración económica indirecta
                  p.text-center.text-white Es el salario indirecto que se desprende de las cláusulas del contrato colectivo de trabajo y del plan de prestaciones y servicios sociales que ofrece una organización. El salario indirecto incluye vacaciones, gratificaciones, bonos, extras (riesgos, insalubridad, turno nocturno, años de servicio, etc.), participación de utilidades, horas extras, así como el dinero correspondiente a los servicios y prestaciones sociales que ofrece la organización (como subsidios para alimentación y transporte, seguro de vida grupal, etc.).

    p.mb-5 Para elaborar una estructura salarial se debe tener en cuenta lo siguiente:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4.fnd-7.mb-5
          .row.justify-content-center.align-items-center
            .col-md-2
              figure.mb-3
                img.img-105(src='@/assets/curso/temas/tema4/img-12.svg')
            .col-md-10.pp-l
              ul.lista-ul--color.mb-3
                li.mb-0 
                  i.fas.fa-check
                  p.mb-0  Valoración de los cargos.
                li.mb-0 
                  i.fas.fa-check
                  p.mb-0  Realizar la estructura salarial de acuerdo con los niveles salariales registrados en la nómina.
                li.mb-0 
                  i.fas.fa-check
                  p.mb-0  Realizar el análisis de dispersión.
                li.mb-0 
                  i.fas.fa-check
                  p.mb-0  Construir la tabla de los datos, a través de ajustes cuantitativos, lineales y exponenciales.























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
