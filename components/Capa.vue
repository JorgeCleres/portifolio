<template>
  <div class="capa fundo-color xl:px-60 sm:px-0">
    <div class="orbita">
        <Satelite 
            size = '4rem'
            top = '0px'
            right = '1rem'
        />
        <Satelite
            size = '7rem'
            top = '0px'
            right = '35rem'
        />
        <!-- <Satelite
            size = '3rem'
            top = '43rem'
            right = '2rem'
        /> -->
        <Astronauta 
            size = '8rem'
            right = '2rem'
            top = '23rem'
        />
        <img id="terra" src="../static/terra2.png" alt="" />
    </div>
    <h1 class="text-center floating-font pt-20">Hello</h1>
    <h1 class="text-center floating-font-variant">I am Jorge</h1>
    <h1 class="text-center floating-font">Developer</h1>
    <h1 class="text-center floating-font gradient-text">Full Stack</h1>
    <p class="text-center floating">This is my portfolio, see some of my work</p>
    <button
      class="rounded-lg border-gradient floating flex m-auto px-10 py-15"
    >
      <a class="fundo-color" href="">Get in touch</a>
    </button>

    <LineVertical 
        size = '8rem'
    />

  </div>
</template>

<script>
import LineVertical from '@/components/elements/LineVertical.vue'
import Satelite from './elements/Satelite.vue';
import Start from './elements/Start.vue';
import Astronauta from './elements/Astronauta.vue';

export default {
  name: "Capa",
  components: { LineVertical, Satelite, Start, Astronauta }
};
</script>

<style scoped>
    .capa {
        height: 53rem;
    }
    .capa h1 {
        color: rgb(243, 243, 243);
        font-size: 6.3rem;
        position: relative;
        font-family: system-ui;
        margin: 0 0 -10px;
        font-weight: 700;
    }
    p {
        color: white;
        font-size: 26px;
        font-family: system-ui;
        margin: 10px auto 20px;
    }
    .orbita {
        position: absolute;
        opacity: 0.9;
        overflow: auto;
        animation: spin-ffabc5ac 118s infinite linear;
        right: 9rem;
        width: 740px;
        overflow: hidden;
        top: 12vw;
    }

    #terra {
        margin: 0 auto;
        display: flex;
        width: 31vw;
        opacity: 0.8;
    }

    @-moz-keyframes spin {
        100% {
            -moz-transform: rotate(360deg);
        }
    }
    @-webkit-keyframes spin {
        100% {
            -webkit-transform: rotate(360deg);
        }
    }
    @keyframes spin {
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @-moz-keyframes teste {
        100% {
            -moz-transform: rotate3d(360deg);
        }
    }
    @-webkit-keyframes teste {
        100% {
            -webkit-transform: rotate3d(360deg);
        }
    }
    @keyframes teste {
        100% {
            -webkit-transform: rotate3d(360deg);
            transform: rotate3d(360deg);
        }
    }

    .gradient-text {
        background-image: linear-gradient(95deg, #008add, #00b9f9, #bb0467, #cd0090);
        background-size: 100%;
        background-repeat: repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
    }

    .border-gradient {
        transition: 0.4s;
        max-width: 250px;
        padding: 1rem;
        position: relative;
        background: linear-gradient(to right, #0fabee, #cdcdcd);
        padding: 2.5px;
    }
    .border-gradient:hover {
        max-width: 250px;
        padding: 1rem;
        position: relative;
        background: linear-gradient(to right, #0fabee, #cdcdcd);
        padding: 2.5px;
    }
    .border-gradient:hover a{ 
        background: transparent !important;
        color: black
    }
    .border-gradient a {
        transition: 0.4s;
        color: white;
        padding: 0.5rem 3rem;
        text-decoration: none;
        font-weight: 500;
        font-size: 16px;
    }

    .shadow:before {
        content: "";
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        transform: translate(-1px,7px);
        z-index: -1;
        filter: blur(10px);
        background: conic-gradient(from 90deg at 40% -57%, #097bb1, #3c60a7, #a32b94, #cb188e);
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

    .floating-font { 
        animation-name: floating;
        animation-duration: 6s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
    }
    .floating-font-variant { 
        animation-name: floating;
        animation-duration: 4s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
    }

</style>