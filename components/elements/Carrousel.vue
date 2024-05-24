<template>
    <div class="fundo-color carousel">
        <b-modal id="modal-xl" size="xl" v-model="modalShow">
            <img
                class="imageModal"
                id="modal-scrollable"
                scrollable
                :src="page"
                :alt="this.page"
            />

            <b-button class="mt-3" block @click="$bvModal.hide('modal-xl')">{{ $t('button-closed') }}</b-button>
        </b-modal>

        <VueSlickCarousel class="carrousel" v-bind="settings">
            <div class="card" v-for="img in images" :key="img">
                <img
                    :src="`https://jrgcleres.s3.sa-east-1.amazonaws.com/minsites/${img}.jpg`"
                    alt=""
                    @click="modal(img)"
                    v-b-modal.modal-scrollable
                />
            </div>
        </VueSlickCarousel>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
    name: "Carrousel",
    props: ["speed", "images"],
    components: {
        VueSlickCarousel,
    },
    data() {
        return {
            innerStyles: {},
            step: "",
            transitioning: false,
            modalShow: false,
            page: "",
            settings: {
                arrows: false,
                infinite: true,
                slidesToShow: 6,
                slidesToScroll: 1,
                autoplay: true,
                speed: 1000,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: false,
                            dots: true,
                        },
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            initialSlide: 2,
                        },
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        },
                    },
                ],
            },
        };
    },
    methods: {
        modal(img) {
            this.modalShow = !this.modalShow;
            this.page = `https://jrgcleres.s3.sa-east-1.amazonaws.com/sites/${img}.jpg`
        },
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

@media (max-width: 1280px) {
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



