<template>
    <div>
        <button @click="switchLanguage('pt')">
            <img src="../../static/brasil.png" alt="Bandeira brasil" />
        </button>
        <button @click="switchLanguage('en')">
            <img src="../../static/usa.png" alt="Bandeira usa" />
        </button>
    </div>
</template>

<script>
export default {
    methods: {
        switchLanguage(language) {
            this.$i18n.locale = language;
        },
    },
};
</script>

<style scoped>
  button {
    padding: 5px;
  }
  img {
    width: 25px;
  }
</style>
