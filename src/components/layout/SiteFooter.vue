<template>
  <footer class="site-footer">
    <!-- Bloco Central com Logo, Nome e Redes Sociais -->
    <div class="footer-main py-4">
      <div class="container text-center">
        <img :src="logo" alt="Logo O Porteiro Eletrônico" class="footer-logo mb-3" />
        <h5 class="brand-name mb-3">O Porteiro Eletrônico</h5>
        <div class="social-links d-flex justify-content-center gap-3 mb-3">
          <a href="https://www.facebook.com/oporteiroeletronico" class="social-link facebook" target="_blank" rel="noopener" title="Facebook">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/oporteiroeletronico" class="social-link instagram" target="_blank" rel="noopener" title="Instagram">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://wa.me/5516992565227" class="social-link whatsapp" target="_blank" rel="noopener" title="WhatsApp">
            <i class="fab fa-whatsapp"></i>
          </a>
          <a href="https://www.youtube.com/@oporteiroeletronico" class="social-link youtube" target="_blank" rel="noopener" title="YouTube">
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Rodapé Final -->
    <div class="footer-bottom py-3">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 text-center text-md-start">
            <p class="copyright mb-0">
              © 2025 <strong>O Porteiro Eletrônico</strong>. Todos os direitos reservados.
            </p>
          </div>
          <div class="col-md-6 text-center text-md-end">
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

.footer-logo {
  height: 60px;
  border-radius: 8px;
}

.brand-name {
  color: white;
  font-weight: 700;
  font-size: 1.3rem;
}

.social-links {
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
    }

    &.instagram {
      background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
      color: white;
    }

    &.whatsapp {
      background: #25d366;
      color: white;
    }

    &.youtube {
      background: #ff0000;
      color: white;
    }

    &:hover {
      transform: translateY(-3px);
      opacity: 0.9;
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
  .footer-bottom-links {
    margin-top: 12px;
    text-align: center !important;
  }

  .social-links {
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>
