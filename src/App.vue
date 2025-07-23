<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>


<script>
import SiteHeader from '@/components/layout/SiteHeader.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import SocialMediaLinks from '@/components/layout/SocialMediaLinks.vue'


export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteFooter,
    SocialMediaLinks
  }
}
</script>

<style lang="scss">
@import '@/assets/css/global.scss';

#app {
  min-height: 100vh;
}

main {
  margin-top: 80px; // Altura do header fixo
}
</style>