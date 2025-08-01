<template>
  <div>
    <SiteHeader />

    <section class="py-5 bg-light">
      <div class="container">
        <h2 class="mb-4 text-center fw-bold">Nossos Serviços</h2>

        <!-- Abas -->
        <ul class="nav nav-tabs mb-4" id="serviceTabs" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="lista-tab" data-bs-toggle="tab" data-bs-target="#lista" type="button" role="tab">
              Lista de Serviços
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="fotos-tab" data-bs-toggle="tab" data-bs-target="#fotos" type="button" role="tab">
              Fotos
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="videos-tab" data-bs-toggle="tab" data-bs-target="#videos" type="button" role="tab">
              Vídeos
            </button>
          </li>
        </ul>

        <!-- Conteúdo das Abas -->
        <div class="tab-content" id="serviceTabsContent">
          <div class="tab-pane fade show active" id="lista" role="tabpanel">
            <ul class="list-group mb-4">
              <li class="list-group-item" v-for="(service, idx) in services" :key="idx">
                <h5>{{ service.title }}</h5>
                <p>{{ service.description }}</p>
              </li>
            </ul>
          </div>
          <div class="tab-pane fade" id="fotos" role="tabpanel">
            <div class="row g-4">
              <div class="col-md-4" v-for="(img, index) in imagens" :key="'img' + index">
                <img :src="img" class="img-fluid rounded shadow-sm" alt="Foto do serviço" />
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="videos" role="tabpanel">
            <div class="row g-4">
              <div class="col-md-6" v-for="(video, index) in videos" :key="'vid' + index">
                <div class="ratio ratio-16x9">
                  <iframe :src="video" title="Vídeo demonstrativo" frameborder="0" allowfullscreen></iframe>
                </div>
              </div>
            </div>
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
  name: 'ServicesView',
  components: {
    SiteHeader,
    SiteFooter
  },
  data() {
    return {
      services: [
        { title: 'Instalação', description: 'Instalação completa do sistema de controle de acesso.' },
        { title: 'Suporte', description: 'Suporte técnico 24/7 para resolver qualquer dúvida.' },
        { title: 'Manutenção', description: 'Planos de manutenção preventiva e corretiva.' },
      ],
      imagens: [
        '/img/servico1.jpeg',
        '/img/servico2.jpeg',
        '/img/servico3.jpeg'
      ],
      videos: [
        'https://www.youtube.com/embed/WACumFwciQM?si=PaA1iFMRnqhhXB-U',
        'https://www.youtube.com/embed/7aQp1V6ZXGM?si=tTwXfe_iV3VQ0mbE'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  transition: transform 0.3s ease;
}
img:hover {
  transform: scale(1.05);
}
</style>
