<!-- src/App.vue -->
<template>
  <div id="app">
    <Header />
    <router-view />
    <SocialMediaLinks />
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

<style lang="scss" scoped>
// 1) Variáveis
@use "@/assets/scss/_variables.scss" as *;

// 2) Globals (reset, mixins que geram CSS)
@use "@/assets/scss/_globals.scss"   as *;

// 3) Base (usa as variáveis)
@use "@/assets/scss/_base.scss"      as *;

// 4) Suas regras globais
#app {
  min-height: 100vh;
}

main {
  margin-top: 80px;
}
</style>
