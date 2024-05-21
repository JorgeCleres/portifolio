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
                        <b-nav-item href="#home">Home</b-nav-item>
                        <b-nav-item href="#about">About</b-nav-item>
                        <b-nav-item href="#experience">Experience</b-nav-item>
                        <b-nav-item href="#portfolio">Portfolio</b-nav-item>
                        <b-nav-item href="#footer">Contact</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>

        <Nuxt />
    </div>
</template>

  <script>
export default {
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
