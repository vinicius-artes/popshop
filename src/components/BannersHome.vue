<template>
  <main id="sliderBannerHome">
    <div class="slider">
      <div class="containerBanner">
        <div v-for="(banners, index) in banners" :key="index">
          <img
            :src="banners.imgmobile"
            :alt="banners.alt"
            width="820"
            height="600"
          >
          <!--
            <img
            :src="banners.img"
            :alt="banners.alt"
            :width="banners.width"
            :height="banners.height"
          >
            -->
        </div>
      </div>
      
    </div>
  </main>
</template>
<script>
import api from '@/services/api.js';
import '@/../node_modules/tiny-slider/dist/tiny-slider.css';
import {tns} from '@/../node_modules/tiny-slider/src/tiny-slider.js';
export default {
    name: "BannerHome",
  data() {
    return {
    banners: []
    }
  },
  mounted() {
    api.get('/banners.json').then(response => { this.banners = response.data })
  },
  updated() {

    tns({
      container: '.containerBanner',
      mouseDrag: true,
      items: 1,
      speed: 300,
      nav: true,
      lazyload: true,
      autoplay: true,
      slideBy: 'page',
      controls: false,
      autoplayButtonOutput: false,
    });
  }
}
</script>
<style scoped>
.containerBanner img {
  height: auto;
}
</style>
<style>
.tns-outer{
  position: relative;
  display: flex;
  justify-content: center;
}
.tns-nav{
  position: absolute;
  bottom: 10px;
  z-index: 3;
}
.tns-nav > button{
  height: 12px;
  width: 12px;
  background-color: #BBBBBB;
  border: 1px solid transparent;
  border-radius: 100%;
  margin: 0 2px;
}
.tns-nav > button.tns-nav-active,
.tns-nav > button:hover{
  background-color: #670101;
}
</style>