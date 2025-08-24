<template>
    <div class="system fundo-color 2xl:px-60 xl:px-20 lg-10 sm:px-0">
        <img id="fundo" src="@/static/buraconegro.gif" alt="" />
        <h5 class="m-0 px-10">{{ $t("portfolio") }}</h5>
        <h2 class="m-0 pb-6 px-10">{{ $t("system") }}</h2>
        <p class="px-10">{{ $t("system-subtitle") }}</p>
        <section id="services" class="services">
            <div class="services__cols">
                <div
                    v-for="item in items"
                    :key="item.link"
                    class="services__card floating"
                    ontouchstart="this.classList.toggle('hover');"
                >
                    <div class="conjunto">
                        <div class="front">
                            <div class="inner">
                                <img
                                    :src="require(`@/static/${item.link}.jpg`)"
                                    :alt="item.link"
                                />
                            </div>
                        </div>
                        <div class="back">
                            <div class="inner">
                                <h3>{{ item.title }}</h3>
                                <p>{{ item.text }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import LineVertical from "@/components/elements/LineVertical.vue";
import axios from "axios";

export default {
    name: "System",
    components: { LineVertical },
    data() {
        return {
            image: "maisdoc.jpg",
            items: [],
        };
    },
    watch: {
        '$i18n.locale': function () {
            this.setTextoSistemas()
        },
    },
    created() {
        this.setTextoSistemas()
    },
    methods: {
        setSystem(img) {
            this.image = img;
        },
        setTextoSistemas() {
            const caminho =
                this.$i18n.locale == "pt" ? "/servicosPt.json" : "/servicosEn.json";
                axios
                    .get(caminho)
                    .then((response) => {
                        this.items = response.data;
                    })
                    .catch((error) => {
                        console.error("Error loading JSON:", error);
                    });
        },
    },
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

.floating {
    margin: 0 0 10px !important;
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

@media (max-width: 1280px) {
    .image-system img {
        margin: 0;
    }
    .box-image {
        margin: -6vw 0;
    }
}

@media (max-width: 1200px) {
    p {
        width: 100%;
    }
    .box-image {
        margin: 1rem 0;
    }
}

@media (max-width: 768px) {
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

@media (max-width: 480px) {
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

.services {
    margin-top: 280px;
}
.services__cols {
    margin-top: -270px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}
.services__card {
    width: calc(33% - 2rem);
    cursor: pointer;
}
.services__card .back p {
    font-size: 19px;
    width: 100%;
}
.services__card .back h3 {
    color: white;
    font-size: 23px;
}
.services .conjunto {
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-perspective: 1000px;
    perspective: 1000px;
}
.services .front,
.services .back {
    background-size: cover;
    border-radius: 10px;
    background-position: center;
    -webkit-transition: -webkit-transform 1s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: -webkit-transform 1s cubic-bezier(0.4, 0.2, 0.2, 1);
    -o-transition: transform 1s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform 1s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform 1s cubic-bezier(0.4, 0.2, 0.2, 1),
        -webkit-transform 1s cubic-bezier(0.4, 0.2, 0.2, 1);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    text-align: center;
    min-height: 280px;
    height: auto;
    border-radius: 10px;
    color: #fff;
}
.services .back {
    background: #1d1d1d;
}
.services .front {
    background: linear-gradient(
        to top,
        var(--cor-principal-bold),
        var(--cor-principal)
    );
}
.services .front img {
    margin-bottom: 20px;
}
.services .front:after {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    content: "";
    display: block;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 10px;
}
.services .conjunto:hover .front,
.services .conjunto:hover .back {
    -webkit-transition: -webkit-transform 1s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: -webkit-transform 1s cubic-bezier(0.4, 0.2, 0.2, 1);
    -o-transition: transform 1s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform 1s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform 1s cubic-bezier(0.4, 0.2, 0.2, 1),
        -webkit-transform 1s cubic-bezier(0.4, 0.2, 0.2, 1);
}
.services .back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}
.services .inner {
    -webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);
    transform: translateY(-50%) translateZ(60px) scale(0.94);
    top: 50%;
    position: absolute;
    left: 0;
    width: 100%;
    padding: 1rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 1px solid transparent;
    -webkit-perspective: inherit;
    perspective: inherit;
    z-index: 2;
}
.services .conjunto .back {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    height: 330px;
}
.services .conjunto .front {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    height: 350px;
}
.services .conjunto:hover .back {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}
.services .conjunto:hover .front {
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}
.services .front .inner p {
    font-size: clamp(1rem, 1.4vw, 2rem);
    margin-bottom: 2rem;
    position: relative;
    font-family: Ubuntu-regular;
}
.services .front .inner p:after {
    content: "";
    width: 4rem;
    height: 2px;
    position: absolute;
    background: #c6d4df;
    display: block;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: -0.75rem;
}
.services .front .inner span {
    color: rgba(255, 255, 255, 0.7);
    font-family: Ubuntu-regular;
    font-weight: 300;
}

@media(max-width:1930px){
  .services__card {
    width: calc(50% - 2rem) !important;
    cursor: pointer;
  }
}

@media(max-width:700px){
  .services__card {
    width: calc(100% - 2rem) !important;
    cursor: pointer;
  }

  .services__card .back p {
    font-size: 16px;
  }
}
</style>
