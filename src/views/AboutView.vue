<template>
  <div class="d-flex flex-column min-vh-100">
    <SiteHeader />

    <main class="flex-fill py-5" data-aos="fade-up">
      <div class="container">
        <div class="row align-items-center">
          <!-- Texto -->
          <div class="col-md-6">
            <h2 class="section-title">Quem Somos</h2>
            <p class="lead">
              Fundada há mais de <strong>35 anos</strong>, <strong>O Porteiro Eletrônico</strong> é referência em soluções de
              segurança e automação para residências, comércios e condomínios.
            </p>
            <p class="lead">
              Trabalhamos com <strong>portões automáticos</strong>, <strong>travas elétricas</strong>,
              <strong>câmeras de segurança</strong>, interfones, alarmes e muito mais. Prezamos sempre pela
              <strong>qualidade no atendimento</strong>, inovação e o bem-estar de nossos clientes.
            </p>
            <p class="lead">
              Nosso diferencial está no <strong>compromisso</strong> com a satisfação de quem confia em nosso trabalho.
              São décadas garantindo tranquilidade e proteção para milhares de famílias e empresas.
            </p>
          </div>

          <!-- Imagem -->
          <div class="col-md-6 text-center mt-4 mt-md-0">
            <img
              src="@/assets/images/servico1.jpeg"
              alt="Equipe O Porteiro Eletrônico"
              class="img-fluid rounded shadow-lg about-image"
            />
          </div>
        </div>
      </div>
    </main>

    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '@/components/layout/SiteHeader.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'

export default {
  name: 'AboutView',
  components: {
    SiteHeader,
    SiteFooter
  }
}
</script>

<style lang="scss" scoped>
.section-title {
  font-size: 2.4rem;
  font-weight: 700;
  color: #002c6e;
  margin-bottom: 1.5rem;
  animation: fadeInDown 1s ease;
}

.lead {
  font-size: 1.2rem;
  line-height: 1.7;
  color: #333;
  animation: fadeIn 1s ease-in;
}

.about-image {
  max-width: 100%;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.about-image:hover {
  transform: scale(1.03);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
}

/* Animações */
@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
