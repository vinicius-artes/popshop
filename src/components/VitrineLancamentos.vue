<template>
  <main class="container-vitrine">
    <h2>Lançamentos</h2>
    <div class="vitrine-lancamentos">
        <div v-for="(vitrine, index) in vitrine.slice(0,10)" :key="index" class="container-vitrine-item">
          <img
            :src="vitrine.imgprod"
            :alt="vitrine.alt"
            :width="vitrine.width"
            :height="vitrine.height"
          >
        </div>
    </div>

  </main>
</template>

<script>
import api from '@/services/api.js';
import '@/../node_modules/tiny-slider/dist/tiny-slider.css';
import {tns} from '@/../node_modules/tiny-slider/src/tiny-slider.js';
export default {
    name: 'VitrineLancamentos',
    data() {
        return {
        vitrine: []
        }
    },
      mounted() {
    api.get('/produtos.json').then(response => { this.vitrine = response.data })
  },
  updated() {

    tns({
      container: '.vitrine-lancamentos',
      mouseDrag: true,
      items: 2,
      speed: 300,
      nav: true,
      lazyload: true,
      autoplay: false,
      slideBy: 'page',
      controls: true,
      autoplayButtonOutput: false,
      loop: true,
      responsive: {
      820: {
        items: 5,
        autoplay: true,
      },
      }
    });
  }
}
</script>

<style scoped>
.container-vitrine {
  background: #ac0349;
}
.vitrine-lancamentos {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
}
h2 {
  font-size: 26px;
  color: #ffffff;
  text-align: center;
  padding-top: 20px;
  text-transform: uppercase;

}
.container-vitrine img {
    height: auto;
    border-radius: 8px;
}
.container-vitrine-item {
  background: #ffffff;
  height: 300px;
  border-radius: 8px;
  margin: 5px 5px 16px 5px;
}
@media (min-width: 820px) {
  .container-vitrine-item  {
    height: 450px;
    }
    h2 {
  font-size: 32px;
}
}

</style>