<template>
  <div class="fundo-color carousel">
    <div class="inner" ref="inner" :style="innerStyles">
      <div class="card" v-for="card in cards" :key="card">
        <img :src="require(`@/static/${card}`)" alt="" />
        <p>{{ card }}</p>
      </div>
    </div>
    <button @click="next">next</button>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      cards: [
        "pablo.png",
        "parletre.jpg",
        "artistic.jpg",
        "bcprime.jpg",
        "zamirgabi.jpg",
        "rcleres.png",
        "pablo.png",
        "pablo.png",
      ],
      innerStyles: {},
      step: "",
      transitioning: false,
    };
  },

  mounted() {
    this.setStep();
    this.resetTranslate();
  },

  methods: {
    setStep() {
      const innerWidth = this.$refs.inner.scrollWidth;
      const totalCards = this.cards.length;
      this.step = `${innerWidth / totalCards}px`;
    },

    next() {
      if (this.transitioning) return;
      this.transitioning = true;
      this.moveLeft();
      this.afterTransition(() => {
        const card = this.cards.shift();
        this.cards.push(card);
        this.resetTranslate();
        this.transitioning = false;
      });
    },

    // prev() {
    //   if (this.transitioning) return;
    //   this.transitioning = true;
    //   this.moveRight();
    //   this.afterTransition(() => {
    //     const card = this.cards.pop();
    //     this.cards.unshift(card);
    //     this.resetTranslate();
    //     this.transitioning = false;
    //   });
    // },

    moveLeft() {
      this.innerStyles = {
        transform: `translateX(-${this.step})
                      translateX(-${this.step})`,
      };
    },

    // moveRight() {
    //   this.innerStyles = {
    //     transform: `translateX(${this.step})
    //                   translateX(-${this.step})`,
    //   };
    // },

    afterTransition(callback) {
      const listener = () => {
        callback();
        this.$refs.inner.removeEventListener("transitionend", listener);
      };
      this.$refs.inner.addEventListener("transitionend", listener);
    },

    resetTranslate() {
      this.innerStyles = {
        transition: "none",
        transform: `translateX(-${this.step})`,
      };
    },
  },
};
</script>
  
  <style scoped>
.carousel {
  width: 100%;
  overflow: hidden;
  margin: -15px 0 0;
}

img {
  width: 300px;
  height: 300px;
}

.inner {
  transition: transform 0.2s;
  white-space: nowrap;
}

.card {
  width: 280px;
  margin-right: 10px;
  display: inline-flex;
  height: 280px;
  background-color: #39b1bd;
  color: white;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
}

/* optional */
button {
  margin-right: 5px;
  margin-top: 10px;
}
</style>