<template>
  <div id="portfolio" class="about fundo-color xl:px-20 lg-10 sm:px-10">
    <h5 class="m-0 px-10">Portfolio</h5>
    <h2 class="m-0 px-10 pb-6">Sites</h2>
  </div>
</template>
    
<script>
import LineVertical from "@/components/elements/LineVertical.vue";

export default {
  name: "Portifolio",
  components: { LineVertical},
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
  }

  h5 {
    color: rgb(243, 243, 243);
    font-size: 1.4rem;
    font-weight: 300;
  }

  @media(max-width:480px) {
    h2, h5 {
      padding-left: 10px !important;
    }
    h2 {
        font-size: 3rem;
    }
  }
</style>