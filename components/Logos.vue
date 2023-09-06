<template>
  <div class="logos fundo-color xl:px-60 sm:px-0 pb-40">
    <h5 class="m-0 pt-20">Portfolio</h5>
    <h2 class="m-0 p-0">Logos</h2>
    <div class="flex justify-between">
      <img class="floating" src="@/static/logos/ludmila.png" alt="ludmila">
      <img class="floating-variant" src="@/static/logos/plusom.png" alt="plusom">
      <img class="floating" src="@/static/logos/ternos.png" alt="ternos ivan zamir">
      <img class="floating-variant" src="@/static/logos/sina.png" alt="sina">
      <img class="floating" src="@/static/logos/pablo.png" alt="pablo inisio">
    </div>
  </div>
</template>
    
<script>
import LineVertical from "@/components/elements/LineVertical.vue";

export default {
  name: "Logos",
  components: { LineVertical },
};
</script>
    
<style scoped>
  h2 {
    color: white;
    color: rgb(243, 243, 243);
    font-size: 4rem;
    font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell,
      Noto Sans, sans-serif;
    font-weight: 500;
    z-index: 100;
  }

  h5 {
    color: rgb(243, 243, 243);
    font-size: 1.4rem;
    font-weight: 300;
  }

  img {
    transition: 0.4s;
    width: 20%;
    filter: grayscale(1);
    z-index: 100;
  }

  img:hover {
    filter: grayscale(0);
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