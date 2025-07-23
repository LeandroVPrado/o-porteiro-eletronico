<template>
  <section class="py-5 bg-light">
    <div class="container">
      <h2 class="mb-4">Nossos Serviços</h2>
      <ul class="list-group">
        <li class="list-group-item" v-for="(service, idx) in services" :key="idx">
          <h5>{{ service.title }}</h5>
          <p>{{ service.description }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesView',
  data() {
    return {
      services: [
        { title: 'Instalação', description: 'Instalação completa do sistema de controle de acesso.' },
        { title: 'Suporte', description: 'Suporte técnico 24/7 para resolver qualquer dúvida.' },
        { title: 'Manutenção', description: 'Planos de manutenção preventiva e corretiva.' },
      ],
    };
  },
};
</script>