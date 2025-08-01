<template>
  <div class="thank-you-page">
    <SiteHeader />

    <section class="py-5 text-center">
      <div class="container">
        <h2 class="mb-4 text-success">
          <i class="fas fa-check-circle"></i> Mensagem enviada com sucesso!
        </h2>
        <p class="lead">
          Agradecemos seu contato. Em breve nossa equipe retornará para você.
        </p>
        <router-link to="/" class="btn btn-primary mt-4">
          <i class="fas fa-home"></i> Voltar para a Página Inicial
        </router-link>
      </div>
    </section>

    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '@/components/layout/SiteHeader.vue';
import SiteFooter from '@/components/layout/SiteFooter.vue';

export default {
  name: 'ThanksView',
  components: {
    SiteHeader,
    SiteFooter
  }
};
</script>

<style scoped>
.thank-you-page i {
  font-size: 2rem;
}
</style>
