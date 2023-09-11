<template>
  <div class="system fundo-color 2xl:px-60 xl:px-20 lg-10 sm:px-0">
    <img id="fundo" src="@/static/buraconegro.gif" alt="" />
    <h5 class="m-0 px-10">Portfolio</h5>
    <h2 class="m-0 pb-6 px-10">Systems</h2>
    <p class="px-10">Here are some of the systems I've worked on or created for my own use.</p>
    <div class="xl:flex text grid-rows-2 grid-flow-col sm:grid px-10">
      <div class="box-of-boxes">
        <div class="box mt-0 p-2" @click="setSystem('maisdoc.jpg')">
          <h4 class="gradient-text">MaisDoc</h4>
          <p>This is a project in which I provide programming services. The main idea of the project is to handle high-complexity operations, offering extensive, specific, and detailed document support for certificates issued by various agencies throughout the national territory.</p>
        </div>
        <div class="box mt-3 p-2" @click="setSystem('cardapio.jpg')">
          <h4 class="gradient-text">Menu</h4>
          <p>I created this menu to assist my wife with the sale of vegan products. It's essentially a menu that showcases all the products and provides the option to make a purchase.</p>
          <span>Vue</span>
          <span>Node</span>
          <span>MongoBd</span>
          <span>Figma</span>
        </div>
        <div class="box mt-3 p-2" @click="setSystem('whatsapi.jpg')">
          <h4 class="gradient-text">API creator</h4>
          <p>I developed this API builder to make API styling easy and dynamic.</p>
          <span>Vue</span>
          <span>Figma</span>
        </div>
      </div>
      <div class="box-image">
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
  min-height: 37vw;
}

.image-system {
  min-height: 21vw;
}

.image-system img {
    width: 100%;
    min-height: 21.5vw;
    border-radius: 10px;
    opacity: 0.9;
    transition: 0.4s;
    margin: 0px 20px 0;
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
  margin-bottom: 10px;
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

.box-of-boxes {
  width: 100%;
}

.text p {
  font-size: 17px;
  color: rgb(243, 243, 243);
}

span {
    background: white;
    border-radius: 10px;
    padding: 3px 10px;
    margin: 0 5px;
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

    @media(max-width:1280px){
      .image-system img {
          margin: 0;
      }
      .box-image {
        margin: -6vw 0;
      }
    }

    @media(max-width:1200px) {
      p {
          width: 100%;
      }
      .box-image {
        margin: 1rem 0;
      }
    }

    @media(max-width: 768px) {
      #fundo {
        top: 225rem;
        width: 46rem;
        right: 12vw;
        transform: rotate(-9deg);
      }
      .image-system img {
        width: 100%;
      }
    }

    @media(max-width:480px) {
      h2 {
        font-size: 2.5rem;
      }
      p {
        width: 100%;
        font-size: 19px;
      }
      .px-10 {
        padding-left: 1rem;
        padding-right: 1rem;
      }
      .text p {
        font-size: 16px;
      }
      .text h4 {
        color: rgb(243, 243, 243);
        font-size: 19px;
      }
    }



</style>