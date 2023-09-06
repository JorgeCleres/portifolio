<template>
  <div id="footer" class="footer fundo-color xl:px-60 sm:px-0">
    <h2 class="text-center mb-20 p-0">Contact me</h2>
    <div class="flex justify-between">
      <a href="https://www.instagram.com/jorge.cleres/">
        <img class="floating" src="@/static/logos/instagram.png" alt="instagram">
      </a>
      <a href="https://www.linkedin.com/in/jorge-cleres-b792aba6/">
        <img class="floating-variant" src="@/static/logos/linkedin.png" alt="linkedin" />
      </a>
      <a href="https://github.com/JorgeCleres">
        <img class="floating" src="@/static/logos/github.png" alt="github" />
      </a>
      <a href="https://wa.me/5541997535965">
        <img class="floating" src="@/static/logos/whatsapp.png" alt="whatsapp" />
      </a>
      <a href="https://t.me/jorgecleres">
        <img class="floating" src="@/static/logos/telegram.png" alt="telegram" />
      </a>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "Footer",
};
</script>
  
  <style scoped>
.footer {
  background-image: url(/_nuxt/static/sun-7.gif);
  height: 23vw;
  z-index: 1000;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
}

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
  width: 70px;
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
  0% {
    transform: translate(0, 0px);
  }
  50% {
    transform: translate(0, 5px);
  }
  100% {
    transform: translate(0, -0px);
  }
}

.floating-variant {
  animation-name: floating;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}
</style>