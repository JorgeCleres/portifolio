<template>
  <div class="system fundo-color xl:px-60 sm:px-0">
    <img src="../static/sol.png" alt="" />
    <h5 class="m-0 p-0">Portfolio</h5>
    <h2 class="m-0 pb-6">Systems</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
      sollicitudin metus metus, at viverra nisl vehicula non.
    </p>
    <div class="flex grid-rows-2 grid-flow-col">
      <div class="w-2/5">
        <div class="box mt-0">
          <h4 class="gradient-text">Lorem ipsum dolor sit amet,</h4>
          <p>Oi! Eu sou o Goku Jorge Willian tenho</p>
        </div>
        <div class="box mt-3">
          <h4 class="gradient-text">Lorem ipsum dolor sit amet,</h4>
          <p>Oi! Eu sou o Goku Jorge Willian tenho</p>
        </div>
        <div class="box mt-3">
          <h4 class="gradient-text">Lorem ipsum dolor sit amet,</h4>
          <p>Oi! Eu sou o Goku Jorge Willian tenho</p>
        </div>
        <div class="box mt-3">
          <h4 class="gradient-text">Lorem ipsum dolor sit amet,</h4>
          <p>Oi! Eu sou o Goku Jorge Willian tenho</p>
        </div>
      </div>
      <div class="w-3/5 mx-10">
        <div class="box mt-0">
          
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
};
</script>
      
  <style scoped>
.system {
  height: 40vw;
}
img {
  top: 207rem;
  position: absolute;
  width: 55rem;
  opacity: 0.4;
  animation: spin-ffabc5ac 228s infinite linear;
}

p {
  width: 37%;
  color: #cfcfcf;
  font-size: 20px;
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

.box {
  background: rgb(0 0 0 / 36%);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.3px);
  -webkit-backdrop-filter: blur(8.3px);
  border: 1px solid rgba(0, 0, 0, 0.3);
}
</style>