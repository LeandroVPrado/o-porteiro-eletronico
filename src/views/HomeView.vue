<template>
  <div class="home">
    <SiteHeader />

    <section class="hero text-white d-flex align-items-center">
      <div class="container">
        <div class="row align-items-center">
          <!-- Texto à esquerda -->
          <div class="col-md-6 text-start">
            <h1 class="display-4 fw-bold mb-3">
              Segurança e <br /> Automação <br /> para seu Lar
            </h1>
            <p class="lead mb-4">
              Especialistas em portões automáticos, travas elétricas e câmeras de segurança.
              Mais de 25 anos de experiência garantindo sua proteção.
            </p>
            <div class="mb-4">
              <button class="btn btn-warning btn-lg me-3">Solicitar Orçamento</button>
              <button class="btn btn-outline-light btn-lg">Ver Produtos</button>
            </div>
            <div class="stats d-flex gap-4">
              <div><h3>35+</h3><small>Anos de Experiência</small></div>
              <div><h3>1000+</h3><small>Clientes Satisfeitos</small></div>
              <div><h3>24h</h3><small>Suporte Técnico</small></div>
            </div>
          </div>

          <!-- Imagem à direita -->
          <div class="col-md-6 text-center">
            <img src="https://undraw.co/api/illustrations/5dd24c83-b5f4-47be-9b61-95a7fc03ad6b" class="img-fluid" />

          </div>
        </div>
      </div>
    </section>

    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '@/components/layout/SiteHeader.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'

export default {
  name: 'HomeView',
  components: {
    SiteHeader,
    SiteFooter
  }
}
</script>

<style scoped>
.hero {
  background: linear-gradient(to bottom right, #004AAD, #00BCD4);
  min-height: 100vh;
  padding: 60px 0;
}
h3 {
  font-weight: bold;
  margin-bottom: 0;
}
.stats small {
  color: #ddd;
}
</style>
