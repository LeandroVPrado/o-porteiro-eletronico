<template>
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
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return { form: { name: '', email: '', message: '' } };
  },
  methods: {
    submitForm() {
      alert(`Obrigado, ${this.form.name}! Em breve entraremos em contato.`);
      this.form = { name: '', email: '', message: '' };
    }
  }
};
</script>