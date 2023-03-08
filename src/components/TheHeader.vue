<template>
    <header class="header-backgroud">
        <nav class="row container-grid-principal">
            <router-link to="/" class="logo">
            <img src="../assets/menumobile.svg" alt="">
            </router-link>
            <router-link to="/" class="logo">
            <span>pop! shop</span>
            </router-link>
            <nav class="header-options">
            <router-link to="/" class="logo">
            <img src="../assets/login.svg" alt="login">
            </router-link>
            <router-link to="/" class="logo">
            <img src="../assets/carrinho.svg" alt="carrinho">
            </router-link>
            </nav>
        </nav>
    </header>
</template>
<script>
export default {
    name: "TheHeader"
}
</script>
<style scoped>
.header-backgroud {
    width: 100%;
    height: 60px;
    background: #670101;
}
.row {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    
}
.logo {
    font-family: 'Gloock', serif;
    font-size: 30px;
    color: #ffffff;
}
.header-options {
    display: flex;
    gap: 20px;
}

@media (min-width: 820px) {
  .logo {
    font-size: 35px;
    }
}

</style>