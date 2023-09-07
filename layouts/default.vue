<template>
    <div>
      <div class="menu fundo-color xl:px-60 sm:px-0">
        <b-navbar toggleable="lg" type="dark">
          <b-navbar-brand href="#">
            <img src="../static/logo_animated.svg" alt="">
          </b-navbar-brand>
  
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  
          <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item href="#">Home</b-nav-item>
              <b-nav-item href="#about">About</b-nav-item>
              <b-nav-item href="#">Experience</b-nav-item>
              <b-nav-item href="#">Services</b-nav-item>
              <b-nav-item href="#">Contact</b-nav-item>
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