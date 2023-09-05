<template>
    <img src="@/static/brilho2.png"
        class="ball" alt=""
        :style="{
            top: top,
            left: left,
            width: width
        }"
        />
</template>

<script>
export default {
    name: 'Start',
    props: ['top','left','width'],
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>

    .ball {
        position: relative;
        animation-name: exampletwo;
        animation-duration: 4s;
        animation-delay: 1s;
        animation-iteration-count: 1000;
        animation-direction: reverse;
    }

    @keyframes exampletwo {
        0% {
            /*filter: brightness(0.2);*/
        }
        15% {
            /*filter: brightness(0.4);*/
        }
        35% {
            /*filter: brightness(1.6);*/
        }
        40% {
            /*filter: brightness(0.8);*/
        }
        55% {
            /*filter: brightness(0.3);*/
        }
        70% {
            /*filter: brightness(1);*/
        }
        85% {
            /*filter: brightness(0.6);*/
        }
        100% {
            /*filter: brightness(2);*/
        }
    }

</style>