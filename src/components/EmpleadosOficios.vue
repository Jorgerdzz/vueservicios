<template>
  <div>
    <div class="card shadow-sm">
      <div
        class="card-header d-flex justify-content-between align-items-center"
      >
        <div>
          <h5 class="mb-0">Empleados</h5>
          <small class="text-muted"
            >Oficio: <strong>{{ $route.params.oficio }}</strong></small
          >
        </div>
        <div>
          <span class="badge bg-primary"
            >{{ empleados.length }} encontrados</span
          >
        </div>
      </div>

      <div class="card-body p-0">
        <div class="table-responsive">
          <table
            class="table table-striped table-hover table-sm mb-0 align-middle"
          >
            <thead class="table-primary">
              <tr>
                <th scope="col">APELLIDO</th>
                <th scope="col">SALARIO</th>
                <th scope="col">DEPARTAMENTO</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="emp in empleados" :key="emp">
                <td>{{ emp.apellido }}</td>
                <td>{{ emp.salario }}</td>
                <td>{{ emp.departamento }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="card-footer text-center" v-if="empleados.length === 0">
        <small class="text-muted">No hay empleados para este oficio.</small>
      </div>
    </div>
  </div>
</template>

<script>
import Global from "@/Global";
import axios from "axios";
let url = Global.urlEmpleados;
export default {
  name: "EmpleadosOficios",
  data() {
    return {
      empleados: [],
    };
  },
  methods: {
    loadEmpleados() {
      let request =
        "api/Empleados/EmpleadosOficio/" + this.$route.params.oficio;
      axios.get(url + request).then((response) => {
        this.empleados = response.data;
      });
    },
  },
  mounted() {
    this.loadEmpleados();
  },
  watch: {
    "$route.params.oficio"(nextVal, oldVal) {
      if (nextVal != oldVal) {
        this.loadEmpleados();
      }
    },
  },
};
</script>
