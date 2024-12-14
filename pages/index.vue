<template>
  <div class="home py-5">
    <h1 class="display-4 mb-4 text-warning text-center">Bienvenido al Catálogo de Automóviles</h1>
    <p class="lead mb-5 text-light">Explora vehículos exclusivos, diseñadores y fabricantes que definen el lujo sobre ruedas.</p>

    <div class="row justify-content-center mt-5">
      <!-- Tarjeta de Automóviles -->
      <div class="col-12 col-md-4 mb-4">
        <div class="card h-100 border-warning shadow-sm rounded-3">
          <router-link to="/automoviles" class="text-decoration-none text-dark">
            <div class="card-body d-flex flex-column justify-content-center text-center">
              <h2 class="card-title text-warning text-uppercase fw-bold">Automóviles</h2>
              <p class="card-text">Conoce los automóviles más exclusivos del mundo.</p>
            </div>
          </router-link>
        </div>
      </div>

      <!-- Tarjeta de Diseñadores -->
      <div class="col-12 col-md-4 mb-4">
        <div class="card h-100 border-warning shadow-sm rounded-3">
          <router-link to="/disenadores" class="text-decoration-none text-dark">
            <div class="card-body d-flex flex-column justify-content-center text-center">
              <h2 class="card-title text-warning text-uppercase fw-bold">Diseñadores</h2>
              <p class="card-text">Descubre a los visionarios detrás de estos vehículos únicos.</p>
            </div>
          </router-link>
        </div>
      </div>

      <!-- Tarjeta de Fabricantes -->
      <div class="col-12 col-md-4 mb-4">
        <div class="card h-100 border-warning shadow-sm rounded-3">
          <router-link to="/fabricantes" class="text-decoration-none text-dark">
            <div class="card-body d-flex flex-column justify-content-center text-center">
              <h2 class="card-title text-warning text-uppercase fw-bold">Fabricantes</h2>
              <p class="card-text">Explora las marcas que crean estos vehículos de lujo.</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
};
</script>

<style scoped>
/* Fondo principal con un degradado suave */

/* Título principal */
h1 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: #f1c40f;
  font-size: 2.5rem; /* Tamaño reducido */
}

/* Texto secundario (parrafo principal) */
p.lead {
  font-size: 1.1rem; /* Tamaño reducido */
  color: #ddd;
}

/* Estilo de las tarjetas */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #333;
  border-radius: 15px;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
}

.card-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem; /* Tamaño reducido */
  color: #f1c40f;
}

.card-text {
  font-family: 'Roboto', sans-serif;
  color: #ccc; /* Texto más suave */
  font-size: 0.9rem; /* Tamaño reducido */
}

/* Ajustes para pantallas pequeñas */
@media (max-width: 768px) {
  h1 {
    font-size: 2rem; /* Ajuste de tamaño de fuente */
  }

  .lead {
    font-size: 1rem; /* Ajuste de tamaño de texto */
  }

  .card-title {
    font-size: 1rem; /* Ajuste del tamaño del título */
  }

  .card-text {
    font-size: 0.85rem; /* Ajuste del tamaño del texto */
  }
}
</style>
