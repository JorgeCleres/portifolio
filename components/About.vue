<template>
  <div id="about" class="about fundo-color 2xl:px-60 xl:px-20 lg-10 sm:px-10">
    <img src="../static/lua2.png" alt="">
    <h2 class="text-center mb-10">ABOUT ME</h2>
    <div class="box rounded-2xl mx-auto py-3 px-10">
        <h4 class="text-center gradient-text">Hello everyone!</h4>
        <p class="text-center">My passion for technology led me into the world of programming. Learning to code was initially challenging, but with a lot of persistence, discipline, and determination, I tackled this challenge head-on. It has been several years of study (and I am still studying), and over this time, I have accumulated a lot of experience in the field of development. I have had the opportunity to create various websites, systems, and even logo designs and Instagram posts.</p>
        <p class="text-center">My main goal is to continue learning and deepening my knowledge in this vast universe of programming. I am constantly exploring new languages, frameworks, architectures, and cloud technologies. The journey is still long, but I face it with a lot of enthusiasm because I have chosen the profession I love.</p>
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
        -webkit-animation: spin-ffabc5ac 228s infinite linear;
                animation: spin-ffabc5ac 228s infinite linear;
        left: 8vw;
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