<template>
  <div class="logos fundo-color xl:px-60 sm:px-10 pb-40">
    <h5 class="m-0 pt-20 sm:px-10">Portfolio</h5>
    <h2 class="m-0 sm:px-10">Logos</h2>
    <div class="flex justify-between flex-wrap">
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
    position: relative;
    z-index: 100;
  }

  h5 {
    color: rgb(243, 243, 243);
    font-size: 1.4rem;
    font-weight: 300;
  }

  img {
    transition: 0.4s;
    width: 18%;
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

    @media(max-width:769px) {
      .logos {
        margin: 80px 0 0 !important;
      }
      img {
        width: 40%;
      }
      h2, h5 {
        padding: 0 20px !important;
      }
    }
    @media(max-width:480px) {
      h2 {
        font-size: 3rem;
      }
    }
    @media (max-width: 480px) {
      h2, h5 {
        padding: 0 10px !important;
      }
      img {
        margin: 0 auto;
      }
    }
</style>