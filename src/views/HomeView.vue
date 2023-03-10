<template>
  <div class="home">
    <BannerHomes />
    <div class="container-vitrine">
    <h1>Loja de Moda Feminina</h1>
    <p>Looks para todas as estações, primavera verão / outono inverno</p>
    </div>
    <VitrineLancamentos />
    <article class="container-vitrine">
      <div class="seu-estilo">
        <h2>Qual é o seu estilo?</h2>
        <div class="seu-estilo-grid">
        <router-link to="#" class="seu-estilo-item">
          <span>Romântico</span>
          <img src="../assets/home/romantico.webp" alt="mulher com estilo romântico" width="1000" height="1250">
        </router-link>
        <router-link to="#" class="seu-estilo-item">
          <span>Urbano</span>
          <img src="../assets/home/urbano.webp" alt="mulher com estilo urbano" width="1000" height="1250">
        </router-link>
        <router-link to="#" class="seu-estilo-item">
          <span>Alfaiataria</span>
          <img src="../assets/home/alfaiataria.webp" alt="mulher com estilo alfaiataria" width="1000" height="1250">
        </router-link>
        <router-link to="#" class="seu-estilo-item">
          <span>Jeans</span>
          <img src="../assets/home/jeans.webp" alt="mulher com estilo jeans" width="1000" height="1250">
        </router-link>
        </div>
      </div>
    </article>
    <VitrinePopulares />
  </div>
</template>

<script>
// @ is an alias to /src
import BannerHomes from '@/components/BannersHome.vue';
import VitrineLancamentos from '@/components/VitrineLancamentos.vue';
import VitrinePopulares from '@/components/VitrinePopulares.vue'

export default {
  name: 'HomeView',
  components: {
    BannerHomes,
    VitrineLancamentos,
    VitrinePopulares
  }
}
</script>

<style scoped>
h1 {
  font-size: 28px;
  color: var(--color-principal);
  text-align: center;
  margin: 20px 0;
}
p {
  font-size: 18px;
  color: var(--color-descricoes);
  text-align: center;
  margin: 20px 0;
}
.seu-estilo-item {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.seu-estilo-item img {
  height: auto;
  border-radius: 10px;
  filter: brightness(0.7);
  margin-bottom: 20px;
}
.seu-estilo-item img:hover {
  filter: grayscale(1);
}
.seu-estilo-item span {
  position: absolute;
  font-size: 40px;
  z-index: 2;
  font-family: 'Gloock', serif;
  color: #ffffff;
}
.seu-estilo h2 {
  font-size: 26px;
  font-family: 'Gloock', serif;
  color: #000000;
  text-align: center;
  padding: 20px;
}
@media (min-width: 820px) {
  h1 {
  font-size: 45px;
}
p {
  font-size: 22px;
}
.seu-estilo-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.seu-estilo h2 {
  font-size: 32px;
  font-family: 'Gloock', serif;
  color: #000000;
  text-align: center;
  padding: 20px;
}
}
</style>
