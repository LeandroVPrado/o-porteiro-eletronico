<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div class="container">
        <router-link to="/" class="navbar-brand fw-bold text-primary">
          <i class="fa-solid fa-shield-halved me-2"></i> O Porteiro Eletrônico
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link" exact>Início</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/produtos" class="nav-link">Produtos</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/servicos" class="nav-link">Serviços</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contato" class="nav-link">Contato</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader'
}
</script>
