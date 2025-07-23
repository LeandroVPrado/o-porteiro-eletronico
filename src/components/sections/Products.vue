<template>
  <section class="section products">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title" data-aos="fade-up">Nossos Produtos</h2>
        <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Oferecemos soluções completas em automação e segurança com tecnologia de ponta
        </p>
      </div>
      
      <div class="products-grid">
        <div 
          v-for="(product, index) in products" 
          :key="product.id"
          class="product-card"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="product-icon">
            <i :class="product.icon"></i>
          </div>
          <h3 class="product-title">{{ product.title }}</h3>
          <p class="product-description">{{ product.description }}</p>
          <router-link to="/contato" class="btn btn-primary btn-small">
            Solicitar Orçamento
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Products',
  data() {
    return {
      products: [
        {
          id: 1,
          icon: 'fas fa-door-open',
          title: 'Portões Automáticos',
          description: 'Sistemas automatizados para portões residenciais e comerciais com controle remoto, sensor de obstáculos e backup de energia.'
        },
        {
          id: 2,
          icon: 'fas fa-lock',
          title: 'Travas Elétricas',
          description: 'Fechaduras eletrônicas inteligentes com abertura por controle remoto, cartão ou biometria para máxima segurança.'
        },
        {
          id: 3,
          icon: 'fas fa-video',
          title: 'Câmeras de Segurança',
          description: 'Sistemas de videomonitoramento HD com visão noturna, gravação em nuvem e acesso remoto pelo smartphone.'
        },
        {
          id: 4,
          icon: 'fas fa-bell',
          title: 'Interfones',
          description: 'Comunicação segura com visitantes através de interfones residenciais e porteiros eletrônicos com vídeo.'
        },
        {
          id: 5,
          icon: 'fas fa-shield-alt',
          title: 'Alarmes',
          description: 'Sistemas de alarme residencial e comercial com sensores de movimento, abertura e central de monitoramento 24h.'
        },
        {
          id: 6,
          icon: 'fas fa-tools',
          title: 'Controle de Acesso',
          description: 'Soluções completas para controle de entrada e saída com catracas, cancelas e sistemas biométricos.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.products {
  background: $bg-light;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.product-card {
  background: $white;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: $shadow-sm;
  transition: all $transition;
  border: 1px solid #e5e7eb;

  &:hover {
    transform: translateY(-5px);
    box-shadow: $shadow-lg;
  }
}

.product-icon {
  font-size: 3rem;
  color: $primary-color;
  margin-bottom: 1.5rem;
}

.product-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: $text-dark;
}

.product-description {
  color: $text-light;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.btn-small {
  padding: 0.8rem 1.5rem;
  font-size: 0.9rem;
}
</style>