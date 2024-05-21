<template>
  <div class="fundo-color">
    <Capa />
    <About />
    <Experiencia />
    <Portifolio />
    <Carrousel speed="5000"
      :images="[
        'vadela',
        'skill',
        'ludmila',
        'bellebiscoitos',
        'whatsboot',
        'greentiger',
        'esatto',
        'agrievo',
        'sina',
        'lppinho',
        'ternosivan',
        'amoscabranca',
        'agendax',
        'inossolution',
        'advogacia',
      ]"
    />
    <Carrousel speed="5500"
      :images="[
        'seven',
        'jorgegi',
        'pablo',
        'rcleres',
        'parletre',
        'zamirgabi',
        'lp',
        'bcprim',
        'artistic',
        'plusom',
        'krkids',
        'jbr',
        'odontopinho',
        'union',
        'empiric',
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

  .floating {
        animation-name: floating;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        margin-left: 30px;
        margin-top: 5px;
    }

    @keyframes floating {
        0% { transform: translate(0,  0px); }
        50%  { transform: translate(0, 5px); }
        100%   { transform: translate(0, -0px); }
    }

    .floating-variant {
        animation-name: floating;
        animation-duration: 4s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
    }

</style>
