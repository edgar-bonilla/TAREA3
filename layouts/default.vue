<template>
  <div class="d-flex flex-column min-vh-100">

    <div hidden id="snipcart" :data-api-key="runtimeConfig.public.snipcartApiKey"></div>

    <header class="bg-dark text-white py-3 shadow-sm">
      <nav class="container-fluid d-flex justify-content-center">
        <ul class="nav">
          <li class="nav-item">
            <NuxtLink class="nav-link text-white" to="/">Inicio</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link text-white" to="/automoviles">Automóviles</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link text-white" to="/disenadores">Diseñadores</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link text-white" to="/fabricantes">Fabricantes</NuxtLink>
          </li>
          <li class="nav-item">
            <button class="btn btn-warning snipcart-checkout">Ir al carrito</button>
          </li>
        </ul>
      </nav>
    </header>

    <main class="flex-grow-1 py-4 bg-light">
      <div class="container">
        <NuxtPage />
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-3 mt-auto">
      <div class="container-fluid">
        <p class="mb-0">&copy; 2024 CarCatalogo. Todos los derechos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()
</script>
<style scoped>
 
</style>