<template>
  <div id="about" class="about fundo-color 2xl:px-60 xl:px-20 lg-10 sm:px-10">
    <img src="../static/lua2.png" alt="">
    <h2 class="text-center mb-10">ABOUT ME</h2>
    <div class="box rounded-2xl mx-auto py-3 px-10">
        <h4 class="text-center gradient-text">Hello everyone!</h4>
        <p class="text-center">My passion for technology led me to the world of programming. Learning to develop wasn't exactly an easy task, but with a lot of persistence, discipline, and determination, I faced this challenge head-on. It's been years of study (and I'm still studying), and over that time, I've accumulated a lot of experience in the field of development. I've had the opportunity to create various websites, systems, and even designs for logos and Instagram posts.</p>
        <p class="text-center">My main goal is to keep learning and deepening my knowledge in this vast universe of programming. I'm constantly exploring new languages, frameworks, architectures, and cloud technologies. The journey is still long, but I approach it with a lot of enthusiasm because I chose the profession I love.</p>
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
        animation: spin-ffabc5ac 228s infinite linear;
        left: 8vw;
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

    .box {
        width: 80%;
        position: relative;
        background: rgb(0 0 0 / 36%);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(8.3px);
        -webkit-backdrop-filter: blur(8.3px);
        border: 1px solid rgba(0, 0, 0, 0.3);
        transition: 0.8s;
    }

    h4 {
        font-size: 28px;
        font-weight: 700;
    }

    .gradient-text {
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