<template>
  <section class="py-5">
    <div class="container">
      <h2 class="mb-4">Nossos Produtos</h2>
      <div class="row">
        <div class="col-md-4 mb-4" v-for="(product, i) in products" :key="i">
          <div class="card h-100">
            <img :src="product.image" class="card-img-top" :alt="product.name" />
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">{{ product.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductsView',
  data() {
    return {
      products: [
        { name: 'Model X', description: 'Sistema de portaria inteligente.', image: require('@/assets/images/motor.jpeg') },
        { name: 'Model Y', description: 'Controle de acesso via app.', image: require('@/assets/images/motor.jpeg') },
        { name: 'Model Z', description: 'Leitor biométrico de alta performance.', image: require('@/assets/images/motor.jpeg') },
      ],
    };
  },
};
</script>