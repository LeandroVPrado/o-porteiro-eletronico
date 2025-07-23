<template>
  <footer class="bg-dark text-white py-4">
    <div class="container text-center">
      <p>© 2025 O Porteiro Eletrônico. Todos os direitos reservados.</p>
      <SocialIcons />
    </div>
  </footer>
</template>

<script>
import SocialIcons from './SocialMediaLinks.vue';
export default { name: 'AppFooter', components: { SocialIcons } };
</script>