<template>
  <div id="home" class="capa fundo-color x2xl:px-60 xl:px-20 lg-10 sm:px-0 sm:px-0">
    <div class="orbita">
        <Satelite 
            size = '4rem'
            top = '0px'
            right = '1rem'
        />
        <Satelite
            size = '5rem'
            top = '0px'
            right = '35rem'
        />
        <Astronauta 
            size = '8rem'
            right = '2rem'
            top = '32rem'
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
      <a class="fundo-color" href="#footer">Get in touch</a>
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
        -webkit-animation: spin-ffabc5ac 118s infinite linear;
                animation: spin-ffabc5ac 118s infinite linear;
        right: 11rem;
        width: 740px;
        overflow: hidden;
        top: 12vw;
    }

    #terra {
        margin: 0 auto;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        width: 99vw;
        opacity: 0.8;
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
        background-image: -o-linear-gradient(355deg, #008add, #00b9f9, #bb0467, #cd0090);
        background-image: linear-gradient(95deg, #008add, #00b9f9, #bb0467, #cd0090);
        background-size: 100%;
        background-repeat: repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
    }

    .border-gradient {
        -webkit-transition: 0.4s;
        -o-transition: 0.4s;
        transition: 0.4s;
        max-width: 250px;
        padding: 1rem;
        position: relative;
        background: -webkit-gradient(linear, left top, right top, from(#0fabee), to(#cdcdcd));
        background: -o-linear-gradient(left, #0fabee, #cdcdcd);
        background: linear-gradient(to right, #0fabee, #cdcdcd);
        padding: 2.5px;
    }
    .border-gradient:hover {
        max-width: 250px;
        padding: 1rem;
        position: relative;
        background: -webkit-gradient(linear, left top, right top, from(#0fabee), to(#cdcdcd));
        background: -o-linear-gradient(left, #0fabee, #cdcdcd);
        background: linear-gradient(to right, #0fabee, #cdcdcd);
        padding: 2.5px;
    }
    .border-gradient:hover a{ 
        background: transparent !important;
        color: black
    }
    .border-gradient a {
        -webkit-transition: 0.4s;
        -o-transition: 0.4s;
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
        -webkit-transform: translate(-1px,7px);
            -ms-transform: translate(-1px,7px);
                transform: translate(-1px,7px);
        z-index: -1;
        -webkit-filter: blur(10px);
                filter: blur(10px);
        background: conic-gradient(from 90deg at 40% -57%, #097bb1, #3c60a7, #a32b94, #cb188e);
    }

    .floating { 
        -webkit-animation-name: floating; 
                animation-name: floating;
        -webkit-animation-duration: 3s;
                animation-duration: 3s;
        -webkit-animation-iteration-count: infinite;
                animation-iteration-count: infinite;
        -webkit-animation-timing-function: ease-in-out;
                animation-timing-function: ease-in-out;
        margin-left: 30px;
        margin-top: 5px;
    }
    
    @-webkit-keyframes floating {
        0% { -webkit-transform: translate(0,  0px); transform: translate(0,  0px); }
        50%  { -webkit-transform: translate(0, 5px); transform: translate(0, 5px); }
        100%   { -webkit-transform: translate(0, -0px); transform: translate(0, -0px); }   
    }
    
    @keyframes floating {
        0% { -webkit-transform: translate(0,  0px); transform: translate(0,  0px); }
        50%  { -webkit-transform: translate(0, 5px); transform: translate(0, 5px); }
        100%   { -webkit-transform: translate(0, -0px); transform: translate(0, -0px); }   
    }

    .floating-font { 
        -webkit-animation-name: floating; 
                animation-name: floating;
        -webkit-animation-duration: 6s;
                animation-duration: 6s;
        -webkit-animation-iteration-count: infinite;
                animation-iteration-count: infinite;
        -webkit-animation-timing-function: ease-in-out;
                animation-timing-function: ease-in-out;
    }
    .floating-font-variant { 
        -webkit-animation-name: floating; 
                animation-name: floating;
        -webkit-animation-duration: 4s;
                animation-duration: 4s;
        -webkit-animation-iteration-count: infinite;
                animation-iteration-count: infinite;
        -webkit-animation-timing-function: ease-in-out;
                animation-timing-function: ease-in-out;
    }

    @media(max-width:769px) {
        #terra {
            width: 65vw;
        }

        .orbita {
            right: 6rem;
            top: 23vw;
        }
        .capa h1 {
            font-size: 5.3rem;
        }
    }

    @media(max-width: 590px) {
        .capa h1 {
            font-size: 4.3rem;
        }
    }

    @media(max-width:480px) {
        #terra {
            width: 100vw;
        }

        .orbita {
            right: 6rem;
            top: 93vw;
            width: 390px;
        }

        .capa h1 {
            font-size: 3.3rem;
        }
        .capa {
            height: 39rem;
        }
    }
</style>