<template>
  <!-- <CochesComponent/> -->
  <!-- <CustomersComponent/> -->
  <EmpleadoDetails/>
</template>

<script>
// import CochesComponent from './components/CochesComponent.vue'
// import CustomersComponent from './components/CustomersComponent.vue'
import EmpleadoDetails from './components/EmpleadoDetails.vue'

export default {
  name: 'App',
  components: {
    EmpleadoDetails
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
