<template>
    <footer>
        <main class="container-grid-principal">
        <div class="footer-backgroud">
            
            <div>
            <div class="footer-logo-container">
            <router-link to="/" class="logo">
            <span>up! shop</span>
            </router-link>
            <div class="footer-social">
                <img src="../assets/instagram.svg" alt="instagram">
                <img src="../assets/facebook.svg" alt="facebook">
                <img src="../assets/youtube.svg" alt="youtube">
                <img src="../assets/twitter.svg" alt="twitter">
            </div>
            </div>

            </div>
            <div class="footer-list">
                <p>Institucional</p>
                <ul>
                    <li>Quem somos</li>
                    <li>Lojas físicas</li>
                    <li>Política de privacidade</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div class="footer-list">
                <p>Contato</p>
                <ul>
                    <li>Fale conosco</li>
                    <li>Troca ou devolução</li>
                    <li>Perguntas frequêntes</li>
                </ul>
            </div>
            <div class="footer-list"> 
                <p>Pagamento</p>
                <div class="bandeiras-pagamento">
                    <img src="../assets/pagamentos/visa.svg" alt="visa">
                    <img src="../assets/pagamentos/mastercard.svg" alt="mastercard">
                    <img src="../assets/pagamentos/americanexpress.svg" alt="american express">
                    <img src="../assets/pagamentos/dinner.svg" alt="dinner">
                    <img src="../assets/pagamentos/elo.svg" alt="elo">
                    <img src="../assets/pagamentos/hipercard.svg" alt="hipercard">
                    <img src="../assets/pagamentos/20cartoes.svg" alt="20 cartões">
                    <img src="../assets/pagamentos/boleto.svg" alt="boleto">
                    <img src="../assets/pagamentos/nubank.png" alt="nubank">
                    <img src="../assets/pagamentos/digo.png" alt="digo">
                    <img src="../assets/pagamentos/pix.png" alt="pix">
                    <img src="../assets/pagamentos/ame.png" alt="ame">
                    <img src="../assets/pagamentos/picpay.png" alt="picpay">
                </div>
            </div>
        </div>
        <div class="infos-footer">
                <span>up! shop ® | Rua Ali Perto, 123, São Paulo - Brasil<br> CNPJ: 00.000.000/0000-00</span>
        </div>    
        </main>
    </footer>
</template>
<script>
export default {
    name: "TheFooter"
}
</script>
<style scoped>
footer {
    background: #670101;
}
.footer-backgroud {
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
}
.logo {
    font-family: 'Gloock', serif;
    font-size: 30px;
    color: #ffffff;
}
.footer-social{
    display: flex;
    gap: 20px;
}
.footer-logo-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.bandeiras-pagamento {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}
.footer-list {
    color: #ffffff;
    margin: 30px 0;
    max-width: 300px;
}
.footer-list p{
    font-size: 20px;
    font-weight: 400;
    margin: 10px 0;
}
.footer-list li{
    font-weight: 100;
    margin-bottom: 20px;
}
.infos-footer{
    box-sizing: border-box;
    font-size: 12px;
    border-top: 2px solid #ffffff;
    padding: 20px;
    color:#ffffff;
    text-align: center;
}
@media (min-width: 820px) {
  .footer-backgroud {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    .footer-logo-container {
    display: block;
    }
    .footer-social{
    display: flex;
    gap: 10px;
    margin-top: 30px;
}
}
</style>