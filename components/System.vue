<template>
  <div class="system fundo-color xl:px-60 sm:px-0">
    <!-- <img id="fundo" src="../static/sol.png" alt="" /> -->
    <img id="fundo" src="../static/buraconegro.gif" alt="" />
    <h5 class="m-0 p-0">Portfolio</h5>
    <h2 class="m-0 pb-6">Systems</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
      sollicitudin metus metus, at viverra nisl vehi.
    </p>
    <div class="flex text grid-rows-2 grid-flow-col">
      <div class="w-2/5">
        <div class="box mt-0 p-2" @click="setSystem('maisdoc.jpg')">
          <h4 class="gradient-text">MaisDoc</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin metus metus, at viverra nisl vehicula non.</p>
        </div>
        <div class="box mt-3 p-2" @click="setSystem('cardapio.jpg')">
          <h4 class="gradient-text">Cardapio</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin metus metus, at viverra nisl vehicula non.</p>
        </div>
        <div class="box mt-3 p-2" @click="setSystem('whatsapi.jpg')">
          <h4 class="gradient-text">Criador API</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin metus metus, at viverra nisl vehicula non.</p>
        </div>
      </div>
      <div class="w-3/5 mx-10">
        <div class="image-system mt-0">
          <img :src="require(`@/static/${image}`)" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
      
  <script>
import LineVertical from "@/components/elements/LineVertical.vue";

export default {
  name: "System",
  components: { LineVertical },
  data() {
    return {
      image: 'maisdoc.jpg'
    }
  },
  methods: {
    setSystem(img) {
      this.image = img
    }
  }
};
</script>
      
  <style scoped>
.system {
  height: 46vw;
}

.image-system {
  height: 21vw;
  position: absolute;
}

.image-system img {
  width: 100%;
  height: inherit;
  border-radius: 10px;
  opacity: 0.7;
  transition: 0.4s;
}
.image-system img:hover {
  opacity: 1;
}
#fundo {
  top: 187rem;
  position: absolute;
  width: 107rem;
  opacity: 0.6;
  right: 25vw;
  transform: rotate(-9deg);
}

p {
  width: 37%;
  color: #cfcfcf;
  font-size: 20px;
  position: relative;
}
.box p {
  width: 100%;
}

@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(-360deg);
  }
}
@keyframes spin {
  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}
.text h4 {
  color: rgb(243, 243, 243);
}

.text p {
  font-size: 18px;
  color: rgb(243, 243, 243);
}
h2 {
  color: rgb(243, 243, 243);
  font-size: 4rem;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell,
    Noto Sans, sans-serif;
  font-weight: 500;
  position: relative;
}

h5 {
  color: rgb(243, 243, 243);
  font-size: 1.4rem;
  font-weight: 300;
  position: relative;
}

.box {
  background: rgb(0 0 0 / 66%);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.3px);
  -webkit-backdrop-filter: blur(8.3px);
  border: 1px solid rgb(237 237 237 / 30%);
  transition: 0.8s;
  cursor: pointer;
}
.box:hover {
  background: rgb(0 0 0 / 90%);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.8);
  border: 1px solid rgb(237 237 237 / 30%);
}

.gradient-text {
    color: #a5a5a5 !important;
}

</style>