<template>
    <div class="line" :style="{height: size}"></div>
</template>

<script>
export default {
    name: 'LineVertical',
    props: ['size'],
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
    .line {
        width: 1px;
        background: linear-gradient(to top, #ff98d7, #087bb1);
        margin: 45px auto 0;
    }

    @media(max-width:768px) {
        .line {
            height: 5rem !important;
        }
    }
</style>