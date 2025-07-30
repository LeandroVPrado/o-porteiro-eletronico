<template>
  <footer class="site-footer">
    <!-- Seção Principal do Footer -->
    <div class="footer-main py-5">
      <div class="container">
        <div class="row">
          <!-- Informações da Empresa -->
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="footer-section">
              <div class="footer-brand mb-4">
                <img :src="logo" alt="O Porteiro Eletrônico" class="footer-logo" />
                <h5 class="brand-name mt-3">O Porteiro Eletrônico</h5>
                <p class="brand-tagline">Segurança e Automação Residencial</p>
              </div>
              <p class="company-description">
                Há mais de 35 anos oferecemos soluções completas em segurança eletrônica, 
                automação residencial e assistência técnica especializada. 
                Tecnologia de ponta para proteger o que você mais valoriza.
              </p>
              <div class="certifications mt-4">
                <span class="cert-badge">
                  <i class="fas fa-certificate"></i>
                  Certificado ISO 9001
                </span>
                <span class="cert-badge">
                  <i class="fas fa-shield-alt"></i>
                  Empresa Licenciada
                </span>
              </div>
            </div>
          </div>

          <!-- Links Rápidos -->
          <div class="col-lg-2 col-md-6 mb-4">
            <div class="footer-section">
              <h6 class="footer-title">Navegação</h6>
              <ul class="footer-links">
                <li><router-link to="/">Início</router-link></li>
                <li><router-link to="/sobre">Sobre Nós</router-link></li>
                <li><router-link to="/servicos">Serviços</router-link></li>
                <li><router-link to="/produtos">Produtos</router-link></li>
                <li><router-link to="/contato">Contato</router-link></li>
                <li><router-link to="/orcamento">Orçamento</router-link></li>
              </ul>
            </div>
          </div>

          <!-- Serviços -->
          <div class="col-lg-2 col-md-6 mb-4">
            <div class="footer-section">
              <h6 class="footer-title">Serviços</h6>
              <ul class="footer-links">
                <li><a href="/servicos/cameras">Câmeras de Segurança</a></li>
                <li><a href="/servicos/alarmes">Sistemas de Alarme</a></li>
                <li><a href="/servicos/portoes">Portões Automáticos</a></li>
                <li><a href="/servicos/travas">Travas Elétricas</a></li>
                <li><a href="/servicos/manutencao">Manutenção</a></li>
              </ul>
            </div>
          </div>

          <!-- Contato -->
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="footer-section">
              <h6 class="footer-title">Entre em Contato</h6>
              
              <div class="contact-info mb-4">
                <div class="contact-item">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="contact-details">
                    <strong>Endereço:</strong><br>
                    R. Simpliciano Pombo, 510 - Vila Santos Dumont<br>
                    Franca - SP, 14405-338
                  </div>
                </div>
                
                <div class="contact-item">
                  <i class="fas fa-phone"></i>
                  <div class="contact-details">
                    <strong>Telefones:</strong><br>
                    (16) 99256-5227<br>
                  </div>
                </div>
                
                <div class="contact-item">
                  <i class="fas fa-envelope"></i>
                  <div class="contact-details">
                    <strong>E-mail:</strong><br>
                    contato@oporteiroeletronico.com.br
                  </div>
                </div>
                
                <div class="contact-item">
                  <i class="fas fa-clock"></i>
                  <div class="contact-details">
                    <strong>Horário de Funcionamento:</strong><br>
                    Seg-Sex: 8h às 18h<br>
                    Sábado: 8h às 12h
                  </div>
                </div>
              </div>

              <!-- Redes Sociais -->
              <div class="social-media">
                <h6 class="mb-3">Siga-nos</h6>
                <div class="social-links">
                  <a href="#" class="social-link facebook">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" class="social-link instagram">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="#" class="social-link whatsapp">
                    <i class="fab fa-whatsapp"></i>
                  </a>
                  <a href="#" class="social-link youtube">
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Seção de Newsletter -->
    <div class="newsletter-section py-4">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h5 class="newsletter-title mb-2">Receba Nossas Novidades</h5>
            <p class="newsletter-text mb-0">
              Fique por dentro das últimas tecnologias em segurança eletrônica
            </p>
          </div>
          <div class="col-lg-6">
            <form class="newsletter-form d-flex">
              <input 
                type="email" 
                class="form-control" 
                placeholder="Digite seu e-mail"
                required
              >
              <button type="submit" class="btn btn-primary ms-2">
                <i class="fas fa-paper-plane"></i>
                Inscrever
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Rodapé Final -->
    <div class="footer-bottom py-3">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <p class="copyright mb-0">
              © 2025 <strong>O Porteiro Eletrônico</strong>. Todos os direitos reservados.
            </p>
          </div>
          <div class="col-md-6 text-md-end">
            <div class="footer-bottom-links">
              <a href="/politica-privacidade">Política de Privacidade</a>
              <span class="separator">|</span>
              <a href="/termos-uso">Termos de Uso</a>
              <span class="separator">|</span>
              <a href="/sitemap">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import logoImage from '@/assets/images/logo.jpeg'

export default {
  name: 'SiteFooter',
  data() {
    return {
      logo: logoImage
    }
  }
}
</script>

<style scoped>
.site-footer {
  background: linear-gradient(135deg, #1B4B8C 0%, #2C3E50 100%);
  color: white;
}

.footer-main {
  background: inherit;
}

.footer-brand {
  .footer-logo {
    height: 60px;
    width: auto;
    border-radius: 8px;
  }
  
  .brand-name {
    color: white;
    font-weight: 700;
    margin-bottom: 8px;
  }
  
  .brand-tagline {
    color: #F39C12;
    font-size: 0.9rem;
    margin-bottom: 0;
  }
}

.company-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

.certifications {
  .cert-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(243, 156, 18, 0.2);
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    margin-right: 8px;
    margin-bottom: 8px;
    border: 1px solid rgba(243, 156, 18, 0.3);
    
    i {
      color: #F39C12;
    }
  }
}

.footer-title {
  color: white;
  font-weight: 700;
  margin-bottom: 20px;
  font-size: 1.1rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background: #F39C12;
  }
}

.footer-links {
  list-style: none;
  padding: 0;
  
  li {
    margin-bottom: 8px;
    
    a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      transition: all 0.3s ease;
      display: inline-block;
      
      &:hover {
        color: #F39C12;
        padding-left: 8px;
        transform: translateX(4px);
      }
    }
  }
}

.contact-info {
  .contact-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 20px;
    
    i {
      color: #F39C12;
      font-size: 1.1rem;
      margin-top: 4px;
      min-width: 20px;
    }
    
    .contact-details {
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.5;
      
      strong {
        color: white;
      }
    }
  }
}

.social-media {
  .social-links {
    display: flex;
    gap: 12px;
    
    .social-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      text-decoration: none;
      transition: all 0.3s ease;
      
      &.facebook {
        background: #3b5998;
        color: white;
        
        &:hover {
          background: #2d4373;
          transform: translateY(-3px);
        }
      }
      
      &.instagram {
        background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
        color: white;
        
        &:hover {
          transform: translateY(-3px) scale(1.1);
        }
      }
      
      &.whatsapp {
        background: #25d366;
        color: white;
        
        &:hover {
          background: #128c7e;
          transform: translateY(-3px);
        }
      }
      
      &.youtube {
        background: #ff0000;
        color: white;
        
        &:hover {
          background: #cc0000;
          transform: translateY(-3px);
        }
      }
    }
  }
}

.newsletter-section {
  background: rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  .newsletter-title {
    color: white;
    font-weight: 700;
    margin-bottom: 8px;
  }
  
  .newsletter-text {
    color: rgba(255, 255, 255, 0.8);
  }
  
  .newsletter-form {
    .form-control {
      border: none;
      border-radius: 25px;
      padding: 12px 20px;
      
      &:focus {
        box-shadow: 0 0 0 0.2rem rgba(243, 156, 18, 0.25);
        border-color: #F39C12;
      }
    }
    
    .btn-primary {
      background: linear-gradient(135deg, #F39C12 0%, #E67E22 100%);
      border: none;
      border-radius: 25px;
      padding: 12px 24px;
      font-weight: 600;
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(243, 156, 18, 0.3);
      }
    }
  }
}

.footer-bottom {
  background: rgba(0, 0, 0, 0.3);
  
  .copyright {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
  }
  
  .footer-bottom-links {
    a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      font-size: 0.9rem;
      
      &:hover {
        color: #F39C12;
      }
    }
    
    .separator {
      color: rgba(255, 255, 255, 0.5);
      margin: 0 8px;
    }
  }
}

/* Responsividade */
@media (max-width: 768px) {
  .newsletter-form {
    margin-top: 16px;
    
    .form-control {
      margin-bottom: 12px;
    }
    
    .btn {
      width: 100%;
    }
  }
  
  .footer-bottom-links {
    margin-top: 12px;
    text-align: center !important;
  }
  
  .social-links {
    justify-content: center;
  }
}
</style>