<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div class="container-fluid">
        <router-link class="navbar-brand d-flex align-items-center" to="/">
          <span class="brand-badge">SV</span>
          <span class="ms-2 brand-text">VueServicios</span>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/coches">Coches</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/customers"
                >Customers</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/empleados"
                >Empleados</router-link
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Oficios
              </a>
              <ul class="dropdown-menu">
                <li v-for="oficio in oficios" :key="oficio">
                  <router-link
                    class="dropdown-item"
                    :to="'/empleadosoficios/' + oficio"
                    >{{ oficio }}</router-link
                  >
                </li>
              </ul>
            </li>
          </ul>

          <form class="d-flex align-items-center" role="search" @submit.prevent>
            <div class="input-group input-group-sm">
              <input
                class="form-control form-control-sm"
                type="search"
                placeholder="Buscar..."
                aria-label="Search"
              />
              <button class="btn btn-light btn-sm" type="submit">Buscar</button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import ServiceEmpleados from '@/services/ServiceEmpleados';
const serviceEmpleados = new ServiceEmpleados();
export default {
  name: "MenuComponent",
  data() {
    return {
      oficios: [],
    };
  },
  mounted() {
    serviceEmpleados.getOficios().then(result=>{
        this.oficios = result
    })
  },
};
</script>

<style scoped>
/* Small brand badge */
.brand-badge {
  display: inline-block;
  width: 36px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.15);
  font-weight: 700;
}
.brand-text {
  font-weight: 600;
  color: #fff;
}
.navbar .nav-link {
  color: rgba(255, 255, 255, 0.9);
}
.navbar .nav-link.router-link-active {
  font-weight: 700;
}
</style>
