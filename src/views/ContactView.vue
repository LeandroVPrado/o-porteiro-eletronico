<template>
  <div class="contact-page">
    <SiteHeader />

    <section class="py-5">
      <div class="container">
        <h2 class="mb-4">Entre em Contato</h2>

        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label for="name" class="form-label">Nome</label>
            <input v-model="form.name" type="text" id="name" class="form-control" required />
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input v-model="form.email" type="email" id="email" class="form-control" required />
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">Mensagem</label>
            <textarea v-model="form.message" id="message" class="form-control" rows="4" required></textarea>
          </div>

          <button type="submit" class="btn btn-primary" :disabled="loading">
            <span v-if="loading">
              <i class="fas fa-spinner fa-spin"></i> Enviando...
            </span>
            <span v-else>
              <i class="fas fa-envelope"></i> Enviar Mensagem
            </span>
          </button>
        </form>
      </div>
    </section>

    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '@/components/layout/SiteHeader.vue';
import SiteFooter from '@/components/layout/SiteFooter.vue';

export default {
  name: 'ContactView',
  components: {
    SiteHeader,
    SiteFooter
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      loading: false
    };
  },
  methods: {
    async submitForm() {
      this.loading = true;

      const formData = new FormData();
      formData.append("name", this.form.name);
      formData.append("email", this.form.email);
      formData.append("message", this.form.message);

      try {
        const response = await fetch("https://formsubmit.co/lvprado@gmail.com", {
          method: "POST",
          body: formData
        });

        if (response.ok) {
          this.$router.push("/obrigado");
        } else {
          alert("Não foi possível enviar sua mensagem. Tente novamente.");
        }
      } catch (error) {
        console.error("Erro ao enviar:", error);
        alert("Erro de conexão. Tente novamente.");
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>
