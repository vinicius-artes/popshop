<template>
  <main class="container-vitrine container-grid-principal">
    <h2>Queridinhos</h2>
    <div class="vitrine-populares">
        <router-link :to="{...vitrine.route}" v-for="(vitrine, index) in vitrine.slice(10,20)" :key="index" class="container-vitrine-item">
          <img
            :src="vitrine.imgprod"
            :alt="vitrine.alt"
            :width="vitrine.width"
            :height="vitrine.height"
          >
          <h4>{{ vitrine.title }}</h4>
          <span class="preco">R${{ vitrine.preco }}</span>
          <span class="parcelas">12 x R${{ vitrine.preco }} sem juros</span>
          <button>Ver Mais</button>
        </router-link>
    </div>

  </main>
</template>

<script>
import api from '@/services/api.js';
import '@/../node_modules/tiny-slider/dist/tiny-slider.css';
import {tns} from '@/../node_modules/tiny-slider/src/tiny-slider.js';
export default {
    name: 'VitrinePopulares',
    data() {
        return {
        vitrine: [],
        }
    },
    methods: {
      calculaParcela() {
        const parcela = this.vitrine.preco ;
        parseFloat(parcela * 12)
        return
      }
    },
    mounted() {
    api.get('/produtos.json').then(response => { this.vitrine = response.data });
    this.calculaParcela()

  },
  updated() {

    tns({
      container: '.vitrine-populares',
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
      450: {
        items: 3,
        autoplay: true,
      },
      800: {
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
  background: #ac8503;
}
.vitrine-populares {
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
  min-height: 340px;
  border-radius: 8px;
  margin: 5px 5px 16px 5px;
  padding: 5px;
  position: relative;
}
.parcelas {
  display: block;
  font-size: 10px;
  margin-bottom: 20px;
}
.preco {
  display: block;
  margin: 10px 0px 0px 0px;
  font-size: 20px;
  font-style: bold;
  color: #5cd400;
  font-weight: 700;
}
.container-vitrine-item button {
  /*position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: 5%;
  height: 40px;*/
  width: 90px;
  color: #ffffff;
  font-weight: 700;
  font-size: 16px;
  background-color: var(--color-principal);
  border: transparent;
  border-radius: 10px;
  cursor: pointer;
  margin: 0 auto;
}
.container-vitrine-item button:hover {
  background-color: #980000;
}
/*@media (min-width: 650px) {
  .container-vitrine-item  {
    height: 450px;
    }
    h2 {
  font-size: 32px;
}
}
@media (min-width: 800px) {
  .container-vitrine-item  {
    height: 450px;
    }
}*/

</style>