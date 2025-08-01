<template>
  <header>
    <!-- Barra Superior com Informações de Contato -->
    <div class="top-bar d-none d-lg-block">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-8">
            <div class="contact-info d-flex align-items-center gap-4">
              <span class="contact-item">
                <i class="fas fa-phone"></i>
                (16) 3720-8150 / (16) 99256-5227
              </span>
              <span class="contact-item">
                <i class="fas fa-envelope"></i>
                oporteiro.eletronico@hotmail.com
              </span>
              <span class="contact-item">
                <i class="fas fa-clock"></i>
                Seg-Sex: 8h às 18h | Sáb: 8h às 12h
              </span>
            </div>
          </div>
          <div class="col-md-4 text-end">
            <div class="social-links d-flex align-items-center justify-content-end gap-3">
              <a href="https://www.facebook.com/oporteiroeletronico" class="social-link" target="_blank"
              rel="noopener" title="Facebook">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/oporteiroeletronico" class="social-link" target="_blank"
              rel="noopener" title="Intagram">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://wa.me/5516992565227" class="social-link" target="_blank"
              rel="noopener" title="WhatsApp">
                <i class="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navbar Principal -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div class="container">
        <!-- Logo -->
        <router-link to="/" class="navbar-brand d-flex align-items-center">
          <img :src="logo" alt="O Porteiro Eletrônico" class="logo-img" />
        </router-link>

        <!-- Botão Mobile -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Menu de Navegação -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link" exact>
                <i class="fas fa-home"></i>
                Início
              </router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="produtosDropdown" role="button" data-bs-toggle="dropdown">
                <i class="fas fa-box"></i>
                Produtos
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/produtos/cameras">Câmeras de Segurança</a></li>
                <li><a class="dropdown-item" href="/produtos/alarmes">Sistemas de Alarme</a></li>
                <li><a class="dropdown-item" href="/produtos/portoes">Portões Automáticos</a></li>
                <li><a class="dropdown-item" href="/produtos/travas">Travas Elétricas</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="servicosDropdown" role="button" data-bs-toggle="dropdown">
                <i class="fas fa-tools"></i>
                Serviços
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/servicos/instalacao">Instalação</a></li>
                <li><a class="dropdown-item" href="/servicos/manutencao">Manutenção</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link to="/sobre" class="nav-link">
                <i class="fas fa-info-circle"></i>
                Sobre Nós
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contato" class="nav-link">
                <i class="fas fa-envelope"></i>
                Contato
              </router-link>
            </li>
          </ul>

          <!-- Botão CTA -->
          <div class="navbar-cta ms-3">
            <button class="btn btn-primary btn-sm">
              <i class="fas fa-calculator"></i>
              Orçamento Grátis
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import logoImage from '@/assets/images/logo.jpeg'

export default {
  name: 'SiteHeader',
  data() {
    return {
      logo: logoImage
    }
  }
}
</script>

<style lang="scss" scoped>
/* Barra Superior */
.top-bar {
  background: linear-gradient(135deg, #1B4B8C 0%, #2E5B9B 100%);
  color: white;
  padding: 8px 0;
  font-size: 0.85rem;
}

.contact-info {
  .contact-item {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    
    i {
      color: #F39C12;
      font-size: 0.8rem;
    }
  }
}

.social-links {
  .social-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
      background: #F39C12;
      transform: translateY(-2px);
      color: white;
    }
  }
}

/* Navbar Principal */
.navbar {
  border-bottom: 1px solid rgba(27, 75, 140, 0.1);
  
  .navbar-brand {
    text-decoration: none;
    
    .logo-img {
      height: 48px;
      width: auto;
      border-radius: 8px;
      transition: transform 0.3s ease;
      
      &:hover {
        transform: scale(1.05);
      }
    }
    
    .brand-text {
      .brand-name {
        color: #1B4B8C;
        font-weight: 700;
        font-size: 1.1rem;
      }
      
      .brand-tagline {
        color: #6C757D;
        font-size: 0.8rem;
      }
    }
  }
  
  .nav-link {
    font-weight: 500;
    color: #2C3E50 !important;
    padding: 8px 16px !important;
    border-radius: 6px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 6px;
    
    i {
      font-size: 0.9rem;
      color: #1B4B8C;
    }
    
    &:hover {
      background: rgba(27, 75, 140, 0.1);
      color: #1B4B8C !important;
      transform: translateY(-1px);
    }
    
    &.router-link-active {
      background: linear-gradient(135deg, #1B4B8C 0%, #2E5B9B 100%);
      color: white !important;
      
      i {
        color: #F39C12;
      }
    }
  }
  
  .dropdown-menu {
    border: none;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    padding: 12px 0;
    margin-top: 8px;
    
    .dropdown-item {
      padding: 10px 20px;
      font-weight: 500;
      color: #2C3E50;
      transition: all 0.3s ease;
      
      &:hover {
        background: rgba(27, 75, 140, 0.1);
        color: #1B4B8C;
        padding-left: 24px;
      }
    }
  }
  
  .navbar-cta {
    .btn {
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      border-radius: 25px;
      padding: 8px 20px;
      font-size: 0.85rem;
      
      &.btn-primary {
        background: linear-gradient(135deg, #F39C12 0%, #E67E22 100%);
        border: none;
        color: white;
        
        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(243, 156, 18, 0.3);
        }
      }
    }
  }
}

/* Responsividade */
@media (max-width: 991px) {
  .navbar-nav {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid rgba(27, 75, 140, 0.1);
  }
  
  .navbar-cta {
    margin-top: 16px;
    
    .btn {
      width: 100%;
    }
  }
  
  .dropdown-menu {
    box-shadow: none;
    border: 1px solid rgba(27, 75, 140, 0.1);
    margin-top: 0;
  }
}

@media (max-width: 768px) {
  .top-bar {
    display: none !important;
  }
  
  .contact-info {
    flex-direction: column;
    gap: 8px !important;
  }
  
  .social-links {
    margin-top: 12px;
  }
}
</style>