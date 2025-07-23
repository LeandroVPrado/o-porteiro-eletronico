<template>
  <div class="social-media">
    <a 
      href="https://wa.me/5516937209150" 
      class="social-link social-whatsapp" 
      target="_blank" 
      title="WhatsApp"
      @click="trackClick('whatsapp')"
    >
      <i class="fab fa-whatsapp"></i>
    </a>
    <a 
      href="#" 
      class="social-link social-instagram" 
      target="_blank" 
      title="Instagram"
      @click="trackClick('instagram')"
    >
      <i class="fab fa-instagram"></i>
    </a>
    <a 
      href="#" 
      class="social-link social-facebook" 
      target="_blank" 
      title="Facebook"
      @click="trackClick('facebook')"
    >
      <i class="fab fa-facebook-f"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SocialMedia',
  methods: {
    trackClick(platform) {
      // Analytics tracking
      console.log(`Clicked on ${platform}`)
      // Aqui você pode adicionar Google Analytics ou outro tracking
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.social-media {
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 100;

  @media (max-width: $tablet) {
    position: static;
    flex-direction: row;
    justify-content: center;
    transform: none;
    margin: 2rem 0;
  }
}

.social-link {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $white;
  font-size: 1.2rem;
  text-decoration: none;
  transition: all $transition;
  box-shadow: $shadow-md;

  &:hover {
    transform: scale(1.1);
    box-shadow: $shadow-lg;
  }

  &.social-whatsapp {
    background: #25d366;
  }

  &.social-instagram {
    background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
  }

  &.social-facebook {
    background: #1877f2;
  }
}
</style>