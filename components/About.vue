<template>
  <div id="about" class="about fundo-color 2xl:px-60 xl:px-20 lg-10 sm:px-10">
    <img class="animate-spin" src="../static/lua2.png" alt="">
    <h2 class="text-center mb-10">{{ $t('about-title') }}</h2>
    <div class="box rounded-2xl mx-auto py-3 px-10">
        <h4 class="text-center gradient-text">{{ $t('about-subtitle') }}</h4>
        <p class="text-center">{{ $t('about-text') }}</p>
        <p class="text-center">{{ $t('about-text2') }}</p>
        <p class="text-center">{{ $t('about-text3') }}</p>
    </div>
    <LineVertical
        size = '11rem'
    />
  </div>
</template>

<script>
import LineVertical from '@/components/elements/LineVertical.vue'

export default {
  name: "About",
  components: {LineVertical}
};
</script>

<style scoped>
h2 {
        color: rgb(243, 243, 243);
        font-size: 3rem;
        position: relative;
        font-family: system-ui;
        font-weight: 500;
    }
    img {
        top: 60rem;
        position: absolute;
        width: 29rem;
        opacity: 0.9;
        -webkit-animation: spin 228s infinite linear;
                animation: spin 228s infinite linear;
        left: 8vw;
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    .box {
        width: 80%;
        position: relative;
        background: rgb(0 0 0 / 36%);
        border-radius: 16px;
        -webkit-box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(8.3px);
        -webkit-backdrop-filter: blur(8.3px);
        border: 1px solid rgba(0, 0, 0, 0.3);
        -webkit-transition: 0.8s;
        -o-transition: 0.8s;
        transition: 0.8s;
    }

    h4 {
        font-size: 28px;
        font-weight: 700;
    }

    .gradient-text {
        background-image: -o-linear-gradient(355deg, #bb0467, #cd0090, #008add, #00b9f9);
        background-image: linear-gradient(95deg, #bb0467, #cd0090, #008add, #00b9f9);
        background-size: 100%;
        background-repeat: repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
    }

    p{
        color: #f3f3f3;
        font-size: 19px;
        font-family: system-ui;
    }

    @media(max-width:769px) {
        .box {
            background: rgba(0, 0, 0, 0.3);
            width: 95%;
            border: 1px solid #333333;
        }
        img {
            width: 22rem;
            left: -2vw;
            top: 70rem;
        }
    }

    @media (max-width: 769px) {
        img {
            width: 17rem;
            left: -5vw;
            top: 70rem;
        }

        .box {
            padding: 20px;
        }
    }
    @media (max-width: 480px) {
        h2 {
            font-size: 2.5rem;
        }
        h4 {
            font-size: 22px;
        }
        p {
            font-size: 18px;
        }
    }
</style>
