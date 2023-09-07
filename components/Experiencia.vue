<template>
  <div class="experiencia fundo-color xl:px-60 sm:px-0">
    <div class="grid xl:grid-cols-2 sm:grid-cols-1">
        <div class="px-10 py-20">
            <h1 class="mb-2">
                Experiência ipsum dolor sit
            </h1>
            <div class="box px-4 py-4">
            <p>
                Oi! Eu sou o Goku Jorge Willian tenho 28 anos por enquanto, recém
                casado agora nem tão recém assim, natural da belíssima cidade de
                Pinhais, mas atualmente morando em Curitiba Pinhais > Curitiba. Um
                grande apreciador de churras, cerveja e metido a Gamer nas horas
                vagas o que raramente acontece.
            </p>
            </div>
        </div>

        <div class="skills px-10 grid grid-cols-3">

            <div class="floating skill-box flex justify-evenly flex-row px-2 py-4 mx-1 my-2">
                <div class="w-1/2">
                    <img src="@/static/vue.png" alt="">
                </div>
                <div class="w-1/2 text-center">
                    <span class="text-center inline-block align-middle">Vue</span>
                </div>
            </div>

            <div class="floating skill-box flex justify-evenly flex-row px-2 py-4 mx-1 my-2">
                <div class="w-1/2">
                    <img src="@/static/js.png" alt="">
                </div>
                <div class="w-1/2 text-center">
                    <span class="text-center inline-block align-middle">JS</span>
                </div>
            </div>

            <div class="floating-variant skill-box flex justify-evenly flex-row px-2 py-4 mx-1 my-2">
                <div class="w-1/2">
                    <img src="@/static/mongodb.png" alt="">
                </div>
                <div class="w-1/2 text-center">
                    <span class="text-center inline-block align-middle">MongoDB</span>
                </div>
            </div>

            <div class="floating-variant skill-box flex justify-evenly flex-row px-2 py-4 mx-1 my-2">
                <div class="w-1/2">
                    <img src="@/static/mysql.png" alt="">
                </div>
                <div class="w-1/2 text-center">
                    <span class="text-center inline-block align-middle">Mysql</span>
                </div>
            </div>

            <div class="floating-variant skill-box flex justify-evenly flex-row px-2 py-4 mx-1 my-2">
                <div class="w-1/2">
                    <img src="@/static/ts.png" alt="">
                </div>
                <div class="w-1/2 text-center">
                    <span class="text-center inline-block align-middle">TS</span>
                </div>
            </div>

            <div class="floating skill-box flex justify-evenly flex-row px-2 py-4 mx-1 my-2">
                <div class="w-1/2">
                    <img src="@/static/node.png" alt="">
                </div>
                <div class="w-1/2 text-center">
                    <span class="text-center inline-block align-middle">Node</span>
                </div>
            </div>

            <div class="floating skill-box flex justify-evenly flex-row px-2 py-4 mx-1 my-2">
                <div class="w-1/2">
                    <img src="@/static/figma.png" alt="">
                </div>
                <div class="w-1/2 text-center">
                    <span class="text-center inline-block align-middle">Figma</span>
                </div>
            </div>

            <div class="floating skill-box flex justify-evenly flex-row px-2 py-4 mx-1 my-2">
                <div class="w-1/2">
                    <img src="@/static/wp.png" alt="">
                </div>
                <div class="w-1/2 text-center">
                    <span class="text-center inline-block align-middle">Wordpress</span>
                </div>
            </div>

            <div class="floating-variant skill-box flex justify-evenly flex-row px-2 py-4 mx-1 my-2">
                <div class="w-1/2">
                    <img src="@/static/php.png" alt="">
                </div>
                <div class="w-1/2 text-center">
                    <span class="text-center inline-block align-middle">PHP</span>
                </div>
            </div>


        </div>
    </div>
    <LineVertical size="11rem" />
  </div>
</template>
  
  <script>
import LineVertical from "@/components/elements/LineVertical.vue";

export default {
  name: "Experiencia",
  components: { LineVertical },
};
</script>
  
<style scoped>

    h1 {
        color: rgb(243, 243, 243);
        font-size: 3rem;
        position: relative;
        font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
        font-weight: 500;
    }
    .box {
        position: relative;
        background: rgba(0, 0, 0, 0.36);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(8.3px);
        -webkit-backdrop-filter: blur(8.3px);
        border: 1px solid rgba(0, 0, 0, 0.3);
    }

    .box p {
        color: #f3f3f3;
        font-size: 19px;
        font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
    }

    .skills span {
        transform: translate(0, 80%);
        font-size: 20px;
        color: #bfbfbf;
    }

    .skill-box img {
        width: 80px;
        margin: 0 auto;
    }

    .skills .skill-box {
        position: relative;
        border-radius: 10px;
        transition: 0.9s ease-out;
    }

    .skill-box:hover {
        border: 1px solid grey;
        border-radius: 10px
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

    @media(max-width:769px) {
        .box {
            background: rgba(0, 0, 0, 0.3);
            width: 100%;
            border: 1px solid #333333;
        }
    }
</style>