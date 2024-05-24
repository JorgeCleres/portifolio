<template>
    <div>
        <div class="menu fundo-color 2xl:px-60 xl:px-20 lg-10 sm:px-0">
            <b-navbar toggleable="lg" type="dark">
                <b-navbar-brand href="#">
                    <img src="@/static/logo_animated.svg" alt="" />
                </b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item href="#home">{{ $t('home') }}</b-nav-item>
                        <b-nav-item href="#about">{{ $t('about') }}</b-nav-item>
                        <b-nav-item href="#experience">{{ $t('experience') }}</b-nav-item>
                        <b-nav-item href="#portfolio">{{ $t('port') }}</b-nav-item>
                        <b-nav-item href="#footer">{{ $t('footer') }}</b-nav-item>
                    </b-navbar-nav>

                    <language-switcher />
                </b-collapse>
            </b-navbar>
        </div>

        <Nuxt />
    </div>
</template>

  <script>
import LanguageSwitcher from '~/components/elements/LanguageSwitcher.vue';
export default {
    components: { LanguageSwitcher },
    name: "",
    data() {
        return {};
    },
};
</script>

  <style scoped>
img {
    width: 100px;
}
</style>
