<template>
  <div class="fundo-color">
    <Capa />
    <About />
    <Experiencia />
    <Portifolio />
    <Carrousel speed="5000" 
      :images="[
        'vadela.jpg',
        'skill.jpg',
        'ludmila.jpg',
        'bellebiscoitos.jpg',
        'whatsboot.jpg',
        'esatto.jpg',
        'agrievo.jpg',
        'sina.jpg',
        'lppinho.jpg',
        'ternosivan.jpg',
        'amoscabranca.jpg',
        'agendax.jpg',
        'inossolution.jpg',
        'advogacia.jpg'
      ]"
    />
    <Carrousel speed="5500" 
      :images="[
        'jorgegi.jpg',
        'pablo.jpg',
        'rcleres.jpg',
        'parletre.jpg',
        'zamirgabi.jpg',
        'lp.jpg',
        'bcprim.jpg',
        'artistic.jpg',
        'plusom.jpg',
        'krkids.jpg',
        'jbr.jpg',
        'odontopinho.jpg',
        'union.jpg',
        'empiric.jpg',
      ]"
    />
    <Logos />
    <System />
    <Footer />
  </div>
  
</template>

<script>
import Capa from '@/components/Capa.vue';
import About from '@/components/About.vue';
import Experiencia from '@/components/Experiencia.vue';
import Portifolio from '../components/Portifolio.vue';
import Carrousel from '../components/elements/Carrousel.vue';
import Logos from '../components/Logos.vue';
import System from '../components/System.vue';
import Footer from '../components/Footer.vue';

export default {
    name: 'IndexPage',
    components: { Capa, About, Experiencia, Portifolio, Carrousel, Logos, System, Footer }
}
</script>

<style>
  html {
    scroll-behavior: smooth;
  }

  body,
  .fundo-color {
    background: #000000;
  }

  .modal-footer {
    display: none;
  }

</style>
