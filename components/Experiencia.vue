<template>
  <div id="experience" class="experiencia fundo-color 2xl:px-60 xl:px-20 lg-10 sm:px-0">
    <div class="grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1">
        <div class="exp-text px-10">
            <h2 class="mb-2">
                MY EXPERIENCE
            </h2>
            <div class="box pr-4 py-2">
                <p>My journey in the field of Information Technology began during my course in Analysis and Systems Development at FAPI, where I acquired a solid foundation to build my career.</p>
                <p>My first job in this field was focused on software testing, which provided me with valuable experience in ensuring the quality of programs and online campaign websites.</p>
                <p>However, my true passion has always been development. I decided to make the switch and fully immerse myself in the development field, working in both Front-end and Back-end roles. Currently, I am involved in a project that I have been a part of since day one, and I take great pride in that. It's incredible to be part of this process from the very beginning.</p>
                <p>On the side, you'll find some of the technical skills I've acquired along the way, both through professional practice and personal projects. I'm eager to continue growing and making further contributions in the world of software development.</p>
            </div>
        </div>

        <div class="skills px-10 grid grid-cols-3">

            <div class="floating skill-box flex justify-evenly flex-row px-2 py-4 mx-1 my-2">
                <div class="w-1/2">
                    <img src="@/static/js.png" alt="">
                </div>
                <div class="w-1/2 text-center">
                    <span class="text-center inline-block align-middle">JS</span>
                </div>
            </div>

            <div class="floating skill-box flex justify-evenly flex-row px-2 py-4 mx-1 my-2">
                <div class="w-1/2">
                    <img src="@/static/vue.png" alt="">
                </div>
                <div class="w-1/2 text-center">
                    <span class="text-center inline-block align-middle">Vue</span>
                </div>
            </div>

            <div class="floating-variant skill-box flex justify-evenly flex-row px-2 py-4 mx-1 my-2">
                <div class="w-1/2">
                    <img src="@/static/php.png" alt="">
                </div>
                <div class="w-1/2 text-center">
                    <span class="text-center inline-block align-middle">PHP</span>
                </div>
            </div>

            <div class="floating-variant skill-box flex justify-evenly flex-row px-2 py-4 mx-1 my-2">
                <div class="w-1/2">
                    <img src="@/static/mysql.png" alt="">
                </div>
                <div class="w-1/2 text-center">
                    <span class="text-center inline-block align-middle">Mysql</span>
                </div>
            </div>

            <div class="floating skill-box flex justify-evenly flex-row px-2 py-4 mx-1 my-2">
                <div class="w-1/2">
                    <img src="@/static/node.png" alt="">
                </div>
                <div class="w-1/2 text-center">
                    <span class="text-center inline-block align-middle">Node</span>
                </div>
            </div>

            <div class="floating-variant skill-box flex justify-evenly flex-row px-2 py-4 mx-1 my-2">
                <div class="w-1/2">
                    <img src="@/static/mongodb.png" alt="">
                </div>
                <div class="w-1/2 text-center">
                    <span class="text-center inline-block align-middle">MongoDB</span>
                </div>
            </div>

            <div class="floating-variant skill-box flex justify-evenly flex-row px-2 py-4 mx-1 my-2">
                <div class="w-1/2">
                    <img src="@/static/aws.png" alt="">
                </div>
                <div class="w-1/2 text-center">
                    <span class="text-center inline-block align-middle">Cloud</span>
                </div>
            </div>

            <div class="floating-variant skill-box flex justify-evenly flex-row px-2 py-4 mx-1 my-2">
                <div class="w-1/2">
                    <img src="@/static/ts.png" alt="">
                </div>
                <div class="w-1/2 text-center">
                    <span class="text-center inline-block align-middle">TS</span>
                </div>
            </div>

            <div class="floating skill-box flex justify-evenly flex-row px-2 py-4 mx-1 my-2">
                <div class="w-1/2">
                    <img src="@/static/figma.png" alt="">
                </div>
                <div class="w-1/2 text-center">
                    <span class="text-center inline-block align-middle">Figma</span>
                </div>
            </div>

            <div class="floating skill-box flex justify-evenly flex-row px-2 py-4 mx-1 my-2">
                <div class="w-1/2">
                    <img src="@/static/wp.png" alt="">
                </div>
                <div class="w-1/2 text-center">
                    <span class="text-center inline-block align-middle">Wordpress</span>
                </div>
            </div>

            <div class="floating skill-box flex justify-evenly flex-row px-2 py-4 mx-1 my-2">
                <div class="w-1/2">
                    <img src="@/static/html.png" alt="">
                </div>
                <div class="w-1/2 text-center">
                    <span class="text-center inline-block align-middle">HTML</span>
                </div>
            </div>

            <div class="floating-variant skill-box flex justify-evenly flex-row px-2 py-4 mx-1 my-2">
                <div class="w-1/2">
                    <img src="@/static/css.png" alt="">
                </div>
                <div class="w-1/2 text-center">
                    <span class="text-center inline-block align-middle">CSS</span>
                </div>
            </div>


        </div>
    </div>
    <LineVertical size="11rem" />
  </div>
</template>

  <script>
import LineVertical from "@/components/elements/LineVertical.vue";

export default {
  name: "Experiencia",
  components: { LineVertical },
};
</script>

<style scoped>

    h2 {
        color: rgb(243, 243, 243);
        font-size: 3rem;
        position: relative;
        font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
        font-weight: 500;
    }
    .box {
        position: relative;
        background: rgba(0, 0, 0, 0.36);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(8.3px);
        -webkit-backdrop-filter: blur(8.3px);
        border: 1px solid rgba(0, 0, 0, 0.3);
    }

    .box p {
        color: #f3f3f3;
        font-size: 19px;
        font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
    }

    .skills span {
        transform: translate(0, 80%);
        font-size: 20px;
        color: #bfbfbf;
    }

    .skill-box img {
        width: 80px;
        margin: 0 auto;
    }

    .skills .skill-box {
        position: relative;
        border-radius: 10px;
        transition: 0.9s ease-out;
    }

    .skill-box:hover {
        border: 1px solid grey;
        border-radius: 10px
    }

    @media(max-width:769px) {
        .box {
            background: rgba(0, 0, 0, 0.3);
            width: 100%;
            border: 1px solid #333333;
        }
        .exp-text, .skills {
            padding: 0 20px !important;
        }
    }

    @media(max-width:769px) {
        .skill-box {
            display: grid;
        }
        .w-1\/2 {
            width: 80%;
            margin: 0 auto;
        }
    }

    @media (max-width: 480px) {
        h2 {
            font-size: 2.5rem;
        }
        .px-10 {
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
        }
    }
</style>
