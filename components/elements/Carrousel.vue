<template>
  <div class="fundo-color carousel">
    <h4 @click="next()">V</h4>
    <div class="inner" ref="inner" :style="innerStyles">
      <div class="card" v-for="img in images" :key="img">
        <img :src="require(`@/static/minsites/${img}`)" alt="" @click="modal(img)" v-b-modal.modal-scrollable />
      </div>
    </div>
    <b-modal id="modal-xl" size="xl" v-model="modalShow">
      <img class="imageModal" id="modal-scrollable" scrollable :src="page" :alt="this.page">
      <b-button class="mt-3" block @click="$bvModal.hide('modal-xl')">Fechar</b-button>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: "Carrousel",
  props: ["speed", "images"],
  data() {
    return {
      innerStyles: {},
      step: "",
      transitioning: false,
      modalShow: false,
      page: ''
    };
  },
  methods: {
    modal(img) {
      this.modalShow = !this.modalShow;
      this.page = require(`@/static/sites/${img}`)
    },
    next() {
      this.transitioning = true;
      this.moveLeft();
      this.afterTransition(() => {
        const image = this.images.shift();
        this.images.push(image);
        this.resetTranslate();
      });
    },
    moveLeft() {
      this.innerStyles = {
        transform: `translateX(-${this.step})
                      translateX(-${this.step})`,
      };
    },
    setStep() {
      const innerWidth = this.$refs.inner.scrollWidth;
      const totalCards = 14;
      this.step = `${innerWidth / totalCards}px`;
    },
    resetTranslate() {
      this.innerStyles = {
        transition: "none",
        transform: `translateX(-${this.step})`,
      };
    },
    afterTransition(callback) {
      const listener = () => {
        callback();
        this.$refs.inner.removeEventListener("transitionend", listener);
      };
      this.$refs.inner.addEventListener("transitionend", listener);
    },
  },
  mounted() {
    this.setStep();
    this.resetTranslate();
    setInterval(() => {
      this.next();
    }, this.speed);
  },
};
</script>

<style scoped>
img {
  width: 700px;
  border-radius: 10px;
  opacity: 0.5;
  transition: 0.4s;
}

h4 {
  position: absolute;
  left: 5%;
  top: 42%;
  font-size: 45px;
  color: #ffffff;
  transform: rotate(90deg);
  z-index: 10000;
  font-weight: normal;
  cursor: pointer;
}

.imageModal {
  width: 100%;
  height: auto;
  opacity: 1;
}

.carousel {
  width: 103%;
  overflow: hidden;
  margin: 0px -3vw;
  position: relative;
  z-index: 100;
}

.inner {
  transition: transform 0.2s;
  white-space: nowrap;
}

.card {
  width: 22vw;
  margin-right: 3px;
  display: inline-flex;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  background: transparent !important;
}

.card:hover img {
  opacity: 1;
}

@media(max-width: 1280px) {
  .carousel {
    width: 105vw !important;
  }
}

@media (max-width: 769px) {
  .carousel {
      width: 103vw !important;
  }
  .card {
    width: 40vw;
  }
  h4 {
    font-size: 38px;
    left: 8%;
  }
}
@media (max-width: 480px) {
  .card {
    width: 60vw;
  }
}


</style>



