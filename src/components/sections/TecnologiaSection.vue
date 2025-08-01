<template>
  <!-- Seção Tecnologia e Inovação -->
  <section class="tecnologia-section py-5">
    <div class="container">
      <div class="row align-items-center mb-5">
        <div class="col-lg-6">
          <div class="tech-content">
            <span class="section-label">Tecnologia de Ponta</span>
            <h2 class="section-title">
              Equipamentos Realmente 
              <span class="highlight">Inovadores</span>
            </h2>
            <p class="section-description">
              Utilizamos tecnologias como Inteligência Artificial, reconhecimento facial, 
              biometria, vídeo analítico, automação e Big Data para entregar um monitoramento 
              extremamente eficiente para diversos segmentos.
            </p>
            
            <div class="tech-features">
              <div class="tech-feature" v-for="feature in techFeatures" :key="feature.id">
                <div class="feature-icon">
                  <i :class="feature.icon"></i>
                </div>
                <div class="feature-content">
                  <h5>{{ feature.title }}</h5>
                  <p>{{ feature.description }}</p>
                </div>
              </div>
            </div>
            
            <button class="btn btn-primary mt-4">
              <i class="fas fa-rocket"></i>
              Conheça Nossas Soluções
            </button>
          </div>
        </div>
        
        <div class="col-lg-6">
          <div class="tech-image">
            <div class="image-grid">
              <div class="grid-item large">
                <img src="/api/placeholder/400/300" alt="Central de Monitoramento" class="img-fluid rounded" />
                <div class="image-overlay">
                  <h6>Central de Monitoramento 24h</h6>
                </div>
              </div>
              <div class="grid-item small">
                <img src="/api/placeholder/200/200" alt="Câmera IA" class="img-fluid rounded" />
                <div class="image-overlay">
                  <h6>Câmeras com IA</h6>
                </div>
              </div>
              <div class="grid-item small">
                <img src="/api/placeholder/200/200" alt="App Mobile" class="img-fluid rounded" />
                <div class="image-overlay">
                  <h6>Controle Mobile</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Seção Soluções por Segmento -->
  <section class="segmentos-section py-5 bg-light">
    <div class="container">
      <div class="text-center mb-5">
        <span class="section-label">Soluções Customizadas</span>
        <h2 class="section-title">
          Para Cada Cliente, Uma 
          <span class="highlight">Solução Ideal</span>
        </h2>
        <p class="section-description mx-auto" style="max-width: 600px;">
          Com análise precisa e anos de experiência, oferecemos serviços de segurança 
          eletrônica totalmente customizados para diferentes segmentos.
        </p>
      </div>
      
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-4" v-for="segmento in segmentos" :key="segmento.id">
          <div class="segmento-card">
            <div class="card-header">
              <div class="card-icon">
                <i :class="segmento.icon"></i>
              </div>
              <h4>{{ segmento.title }}</h4>
            </div>
            <div class="card-body">
              <p>{{ segmento.description }}</p>
              <ul class="feature-list">
                <li v-for="feature in segmento.features" :key="feature">
                  <i class="fas fa-check"></i>
                  {{ feature }}
                </li>
              </ul>
            </div>
            <div class="card-footer">
              <button class="btn btn-outline w-100">Saiba Mais</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Seção Processo de Atendimento -->
  
</template>

<script>
export default {
  name: 'TecnologiaSection',
  data() {
    return {
      techFeatures: [
        {
          id: 1,
          icon: 'fas fa-brain',
          title: 'Inteligência Artificial',
          description: 'Detecção inteligente de movimentos suspeitos e reconhecimento facial avançado.'
        },
        {
          id: 2,
          icon: 'fas fa-eye',
          title: 'Vídeo Analítico',
          description: 'Análise automática de imagens com alertas em tempo real para situações de risco.'
        },
        {
          id: 3,
          icon: 'fas fa-fingerprint',
          title: 'Biometria Avançada',
          description: 'Controle de acesso por impressão digital, reconhecimento facial e íris.'
        },
        {
          id: 4,
          icon: 'fas fa-cloud',
          title: 'Big Data',
          description: 'Processamento de grandes volumes de dados para insights de segurança.'
        }
      ],
      segmentos: [
        {
          id: 1,
          icon: 'fas fa-home',
          title: 'Residencial',
          description: 'Soluções completas para proteger sua família e patrimônio.',
          features: [
            'Câmeras de alta resolução',
            'Portões automáticos',
            'Alarmes inteligentes',
            'App para smartphone'
          ]
        },
        {
          id: 2,
          icon: 'fas fa-building',
          title: 'Empresarial',
          description: 'Segurança corporativa com monitoramento 24h profissional.',
          features: [
            'Central de monitoramento',
            'Controle de acesso',
            'CFTV profissional',
            'Relatórios detalhados'
          ]
        },
        {
          id: 3,
          icon: 'fas fa-city',
          title: 'Condomínios',
          description: 'Proteção perimetral e controle de acesso para condomínios.',
          features: [
            'Vigilância perimetral',
            'Interfones inteligentes',
            'Controle de visitantes',
            'Câmeras em áreas comuns'
          ]
        },
        {
          id: 4,
          icon: 'fas fa-store',
          title: 'Comercial',
          description: 'Soluções para lojas, escritórios e estabelecimentos comerciais.',
          features: [
            'Prevenção de perdas',
            'Monitoramento remoto',
            'Alarmes anti-furto',
            'Backup em nuvem'
          ]
        },
        {
          id: 5,
          icon: 'fas fa-industry',
          title: 'Industrial',
          description: 'Segurança robusta para plantas industriais e galpões.',
          features: [
            'Câmeras resistentes',
            'Sensores perimetrais',
            'Monitoramento 24/7',
            'Integração com sistemas'
          ]
        },
        {
          id: 6,
          icon: 'fas fa-graduation-cap',
          title: 'Educacional',
          description: 'Proteção para escolas, universidades e centros educacionais.',
          features: [
            'Controle de acesso escolar',
            'Monitoramento de pátios',
            'Botão de pânico',
            'Relatórios de segurança'
          ]
        }
      ],
      processoSteps: [
        {
          id: 1,
          icon: 'fas fa-phone',
          title: 'Primeiro Contato',
          description: 'Entre em contato conosco por telefone, WhatsApp ou formulário online.'
        },
        {
          id: 2,
          icon: 'fas fa-calendar-check',
          title: 'Agendamento da Visita',
          description: 'Agendamos uma visita técnica gratuita no local para análise das necessidades.'
        },
        {
          id: 3,
          icon: 'fas fa-clipboard-list',
          title: 'Análise e Projeto',
          description: 'Elaboramos um projeto personalizado com as melhores soluções para seu caso.'
        },
        {
          id: 4,
          icon: 'fas fa-calculator',
          title: 'Proposta Comercial',
          description: 'Apresentamos uma proposta detalhada com valores e prazos transparentes.'
        },
        {
          id: 5,
          icon: 'fas fa-tools',
          title: 'Instalação',
          description: 'Nossa equipe técnica realiza a instalação com qualidade e pontualidade.'
        },
        {
          id: 6,
          icon: 'fas fa-graduation-cap',
          title: 'Treinamento',
          description: 'Treinamos você e sua equipe para usar todos os recursos do sistema.'
        },
        {
          id: 7,
          icon: 'fas fa-headset',
          title: 'Suporte Contínuo',
          description: 'Oferecemos suporte técnico 24h e manutenção preventiva regular.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
/* Seção Tecnologia */
.tecnologia-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
}

.section-label {
  display: inline-block;
  background: linear-gradient(135deg, #F39C12 0%, #E67E22 100%);
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 16px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1B4B8C;
  margin-bottom: 24px;
  line-height: 1.2;
  
  .highlight {
    color: #F39C12;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(135deg, #F39C12 0%, #E67E22 100%);
      border-radius: 2px;
    }
  }
}

.section-description {
  font-size: 1.1rem;
  color: #6C757D;
  line-height: 1.6;
  margin-bottom: 32px;
}

.tech-features {
  .tech-feature {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
    
    .feature-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, #1B4B8C 0%, #2E5B9B 100%);
      border-radius: 12px;
      color: white;
      font-size: 1.2rem;
    }
    
    .feature-content {
      h5 {
        color: #1B4B8C;
        font-weight: 600;
        margin-bottom: 8px;
        font-size: 1.1rem;
      }
      
      p {
        color: #6C757D;
        margin-bottom: 0;
        font-size: 0.95rem;
      }
    }
  }
}

.tech-image {
  .image-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 16px;
    height: 400px;
    
    .grid-item {
      position: relative;
      overflow: hidden;
      border-radius: 12px;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
      
      &.large {
        grid-row: 1 / 3;
      }
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
      }
      
      .image-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(transparent, rgba(0,0,0,0.8));
        padding: 24px 16px 16px;
        color: white;
        
        h6 {
          margin: 0;
          font-weight: 600;
        }
      }
      
      &:hover img {
        transform: scale(1.05);
      }
    }
  }
}

/* Seção Segmentos */
.segmentos-section {
  .segmento-card {
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    transition: all 0.3s ease;
    height: 100%;
    
    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
    }
    
    .card-header {
      background: linear-gradient(135deg, #1B4B8C 0%, #2E5B9B 100%);
      color: white;
      padding: 24px;
      text-align: center;
      
      .card-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        margin-bottom: 16px;
        font-size: 1.5rem;
      }
      
      h4 {
        margin: 0;
        font-weight: 700;
      }
    }
    
    .card-body {
      padding: 24px;
      
      p {
        color: #6C757D;
        margin-bottom: 20px;
      }
      
      .feature-list {
        list-style: none;
        padding: 0;
        
        li {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
          font-size: 0.9rem;
          
          i {
            color: #27AE60;
            font-size: 0.8rem;
          }
        }
      }
    }
    
    .card-footer {
      padding: 0 24px 24px;
    }
  }
}

/* Seção Processo */
.processo-section {
  background: linear-gradient(135deg, #1B4B8C 0%, #2C3E50 100%);
  color: white;
  
  .section-title {
    color: white;
  }
  
  .section-description {
    color: rgba(255, 255, 255, 0.8);
  }
}

.processo-timeline {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, #F39C12, #E67E22);
  }
  
  .timeline-item {
    display: flex;
    align-items: center;
    margin-bottom: 48px;
    position: relative;
    
    &:nth-child(odd) {
      flex-direction: row;
      
      .timeline-content {
        margin-left: 60px;
      }
    }
    
    &:nth-child(even) {
      flex-direction: row-reverse;
      
      .timeline-content {
        margin-right: 60px;
      }
    }
    
    .timeline-marker {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      z-index: 2;
      
      .step-number {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #F39C12 0%, #E67E22 100%);
        border-radius: 50%;
        color: white;
        font-weight: 700;
        font-size: 1.2rem;
        box-shadow: 0 4px 15px rgba(243, 156, 18, 0.3);
      }
    }
    
    .timeline-content {
      flex: 1;
      max-width: calc(50% - 30px);
    }
    
    .timeline-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 16px;
      padding: 24px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      
      .card-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        background: rgba(243, 156, 18, 0.2);
        border-radius: 12px;
        color: #F39C12;
        font-size: 1.2rem;
        margin-bottom: 16px;
      }
      
      h5 {
        color: white;
        font-weight: 700;
        margin-bottom: 12px;
      }
      
      p {
        color: rgba(255, 255, 255, 0.8);
        margin: 0;
        line-height: 1.6;
      }
    }
  }
}

/* Responsividade */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .image-grid {
    grid-template-columns: 1fr !important;
    grid-template-rows: auto auto auto !important;
    height: auto !important;
    
    .grid-item.large {
      grid-row: auto !important;
    }
  }
  
  .processo-timeline {
    &::before {
      left: 30px;
    }
    
    .timeline-item {
      flex-direction: row !important;
      
      .timeline-marker {
        left: 30px;
        transform: translateX(-50%);
      }
      
      .timeline-content {
        margin-left: 80px !important;
        margin-right: 0 !important;
        max-width: calc(100% - 80px) !important;
      }
    }
  }
}
</style>