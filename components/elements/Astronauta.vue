<template>
    <img id="satelite" class="image-rotating"
        :style="{
            width: size,
            right: right,
            top: top
        }" 
        src="@/static/astronauta.png"
        alt="" />
</template>

<script>
export default {
    name: 'LineVertical',
    props: ['size', 'top','right'],
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
    #satelite {
        position: absolute;
    }

    .image-rotating {
        position: absolute;
        transform: translateX(10%) rotate(0deg);
        animation: rotateAnimation 6s linear infinite;
    }

    @keyframes rotateAnimation {
        0%, 100% {
            transform: translateX(10%) rotate(180deg);
        }
        50% {
            transform: translateX(10%) rotate(160deg);
        }
    }
</style>