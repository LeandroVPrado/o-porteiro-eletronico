<template>
  <div class="home">
    <SiteHeader />

    <!-- Hero Section Profissional -->
    <section class="hero-section">
      <div class="container">
        <div class="row align-items-center">
          <!-- Conteúdo Principal -->
          <div class="col-lg-7">
            <div class="hero-content">
              <h1>
                Segurança Eletrônica <br />
                <span>Inteligente e Confiável</span>
              </h1>
              <p>
                Há mais de 35 anos oferecemos soluções completas em segurança eletrônica,
                automação residencial e assistência técnica especializada. Tecnologia de ponta para proteger
                o que você mais valoriza.
              </p>
              <div class="hero-buttons">
                <button class="btn btn-primary">
                  <i class="fas fa-phone"></i>
                  Solicitar Orçamento
                </button>
                <button class="btn btn-secondary">
                  <i class="fas fa-play-circle"></i>
                  Ver Soluções
                </button>
              </div>
            </div>
          </div>

          <!-- Logo/Imagem -->
          <div class="col-lg-5 text-center">
            <img :src="logo" alt="O Porteiro Eletrônico" class="img-fluid logo-hero" />
          </div>
        </div>

        <!-- Estatísticas -->
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number">35+</span>
            <span class="stat-label">Anos de Experiência</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">4.000+</span>
            <span class="stat-label">Clientes Atendidos</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">ESPECIALISTA</span>
            <span class="stat-label">Suporte Técnico</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção de Serviços -->
    <section class="servicos-section">
      <div class="container">
        <h2>Nossos Serviços</h2>
        <p class="text-center text-muted mb-5">
          Oferecemos soluções completas em segurança eletrônica com tecnologia de ponta
        </p>

        <div class="servicos-grid">
          <div class="servico-card" v-for="servico in servicos" :key="servico.id">
            <div class="servico-icon">
              <i :class="servico.icon"></i>
            </div>
            <h3>{{ servico.titulo }}</h3>
            <p>{{ servico.descricao }}</p>
            <button class="btn btn-outline">Saiba Mais</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção de Diferenciais -->
    <section class="diferenciais-section">
      <div class="container">
        <h2>Por Que Escolher O Porteiro Eletrônico?</h2>
        <div class="diferenciais-grid">
          <div class="diferencial-item" v-for="diferencial in diferenciais" :key="diferencial.id">
            <div class="icon">
              <i :class="diferencial.icon"></i>
            </div>
            <div class="content">
              <h4>{{ diferencial.titulo }}</h4>
              <p>{{ diferencial.descricao }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção Tecnologia -->
    <TecnologiaSection />

    <!-- Seção de Parceiros Melhorada -->
    <section class="parceiros-section py-5 bg-light">
      <div class="container text-center mb-4">
        <h2 class="fw-bold">Nossos Parceiros Tecnológicos</h2>
        <p class="text-muted">Trabalhamos com as melhores marcas do mercado</p>
      </div>

      <div class="slider">
        <div class="slide-track">
          <div class="slide" v-for="(parceiro, index) in duplicarParceiros" :key="index">
            <img :src="parceiro" alt="Parceiro" />
          </div>
        </div>
      </div>
    </section>


    <!-- Seção de Contato -->
    <section class="contato-section py-5 bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <h3 class="mb-3">Pronto para Proteger Seu Patrimônio?</h3>
            <p class="text-muted mb-0">
              Entre em contato conosco e receba um orçamento personalizado para suas necessidades.
            </p>
          </div>
          <div class="col-lg-4 text-end">
            <button class="btn btn-primary btn-lg">
              <i class="fas fa-whatsapp"></i>
              Falar no WhatsApp
            </button>
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
import TecnologiaSection from '@/components/sections/TecnologiaSection.vue'
import parceiro1 from '@/assets/images/parceiro1.jpeg'
import parceiro2 from '@/assets/images/parceiro2.jpeg'
import parceiro3 from '@/assets/images/parceiro3.jpeg'
import logo from '@/assets/images/logo.jpeg'

export default {
  name: 'HomeView',
  components: {
    SiteHeader,
    SiteFooter,
    TecnologiaSection
  },
  data() {
    return {
      logo: logo,
      parceiros: [parceiro1, parceiro2, parceiro3,parceiro1, parceiro2, parceiro3,parceiro1, parceiro2, parceiro3],
      servicos: [
        {
          id: 1,
          icon: 'fas fa-video',
          titulo: 'Monitoramento 24h',
          descricao: 'Sistema de câmeras com monitoramento em tempo real e gravação em nuvem.'
        },
        {
          id: 2,
          icon: 'fas fa-door-open',
          titulo: 'Controle de Acesso',
          descricao: 'Portões automáticos, travas elétricas e sistemas de identificação.'
        },
        {
          id: 3,
          icon: 'fas fa-shield-alt',
          titulo: 'Alarmes Inteligentes',
          descricao: 'Sensores de movimento, abertura e sistemas anti-intrusão avançados.'
        },
        {
          id: 4,
          icon: 'fas fa-mobile-alt',
          titulo: 'App Mobile',
          descricao: 'Controle total do seu sistema de segurança pelo smartphone.'
        },
        {
          id: 5,
          icon: 'fas fa-tools',
          titulo: 'Manutenção Preventiva',
          descricao: 'Suporte técnico especializado e manutenção preventiva programada.'
        },
        {
          id: 6,
          icon: 'fas fa-wifi',
          titulo: 'Automação Residencial',
          descricao: 'Integração completa com sistemas inteligentes e IoT.'
        }
      ],
      diferenciais: [
        {
          id: 1,
          icon: 'fas fa-certificate',
          titulo: '35 Anos de Experiência',
          descricao: 'Mais de três décadas no mercado de segurança eletrônica.'
        },
        {
          id: 2,
          icon: 'fas fa-users',
          titulo: 'Equipe Especializada',
          descricao: 'Técnicos certificados e treinados nas melhores tecnologias.'
        },
        {
          id: 3,
          icon: 'fas fa-clock',
          titulo: 'Atendimento técnico especializado',
          descricao: 'Suporte técnico especializado sempre disponível.'
        },
        {
          id: 4,
          icon: 'fas fa-handshake',
          titulo: 'Atendimento Personalizado',
          descricao: 'Soluções customizadas para cada tipo de cliente e necessidade.'
        }
      ]
    }
  },
  computed: {
    duplicarParceiros() {
      return [...this.parceiros, ...this.parceiros]; // efeito de rolagem contínua duplicando os parceiros
    }
  },
  methods: {
    solicitarOrcamento() {
      const whatsappNumber = '5516992565227';
      const message = encodeURIComponent('Olá! Gostaria de solicitar um orçamento para segurança eletrônica.');
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    },
    
    verSolucoes() {
      this.$router.push('/servicos');
    },
    
    falarWhatsApp() {
      this.solicitarOrcamento();
    }
  },
  mounted() {
    this.$nextTick(() => {
      const btnOrcamento = document.querySelector('.hero-buttons .btn-primary');
      if (btnOrcamento) {
        btnOrcamento.addEventListener('click', this.solicitarOrcamento);
      }
      
      const btnSolucoes = document.querySelector('.hero-buttons .btn-secondary');
      if (btnSolucoes) {
        btnSolucoes.addEventListener('click', this.verSolucoes);
      }
      
      const btnWhatsApp = document.querySelector('.contato-section .btn-primary');
      if (btnWhatsApp) {
        btnWhatsApp.addEventListener('click', this.falarWhatsApp);
      }
    });
  },
  beforeUnmount() {
    const btnOrcamento = document.querySelector('.hero-buttons .btn-primary');
    const btnSolucoes = document.querySelector('.hero-buttons .btn-secondary');
    const btnWhatsApp = document.querySelector('.contato-section .btn-primary');
    
    if (btnOrcamento) btnOrcamento.removeEventListener('click', this.solicitarOrcamento);
    if (btnSolucoes) btnSolucoes.removeEventListener('click', this.verSolucoes);
    if (btnWhatsApp) btnWhatsApp.removeEventListener('click', this.falarWhatsApp);
  }
}
</script>


<style scoped>
/* Estilos específicos do componente */
.contato-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);

  h3 {
    color: #1B4B8C;
    font-weight: 700;
  }

  .btn-primary {
    background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
    border: none;
    font-weight: 600;
    padding: 12px 24px;
    border-radius: 25px;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(37, 211, 102, 0.3);
    }

    i {
      font-size: 1.2rem;
    }
  }
}

/* Animações para entrada dos elementos */
.hero-content {
  animation: fadeInUp 1s ease-out;
}

.logo-hero {
  animation: fadeInRight 1s ease-out 0.3s both;
}

.stat-item {
  animation: fadeInUp 1s ease-out 0.6s both;

  &:nth-child(2) {
    animation-delay: 0.8s;
  }

  &:nth-child(3) {
    animation-delay: 1s;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Hover effects para cards de serviços */
.servico-card {
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);

    .servico-icon {
      transform: scale(1.1);
    }
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-buttons {
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    .btn {
      width: 100%;
      max-width: 280px;
    }
  }

  .contato-section {
    .col-lg-4 {
      text-align: center !important;
      margin-top: 1rem;
    }
  }
}

/* Parceiros Carrossel */
.slider {
  overflow: hidden;
  position: relative;
  width: 100%;
  margin-top: 20px;
}

.slide-track {
  display: flex;
  width: calc(200px * 10); /* ajuste conforme a quantidade de imagens duplicadas */
  animation: scroll 10s linear infinite;
}

.slide {
  width: 200px;
  flex-shrink: 0;
  padding: 10px;
}

.slide img {
  width: 100%;
  height: auto;
  object-fit: contain;
}


.slide img:hover {
  filter: grayscale(0%);
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

</style>