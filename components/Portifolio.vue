<template>
  <div class="about fundo-color xl:px-60 sm:px-0">
    <h5 class="m-0 p-0">Portfolio</h5>
    <h2 class="m-0 pb-6">Sites</h2>
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
</style>