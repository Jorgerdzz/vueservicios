<template>
    <div class="container mt-5">
    <!-- Título principal de la sección -->
    <h1 class="text-center mb-5 text-primary fw-bolder">Búsqueda de Empleados</h1>

        <!-- Tarjeta de Búsqueda (Select y Botón) -->
        <div class="card shadow-lg p-4 mx-auto mb-5 border-primary" style="max-width: 450px;">
            <h3 class="card-title text-center mb-4 text-secondary">Seleccionar Empleado</h3>
            <form v-on:submit.prevent="findEmpleado()" class="d-flex flex-column align-items-stretch">
                
                <!-- Selector de Apellido con estilo de Bootstrap -->
                <label for="selectEmpleado" class="form-label fw-semibold text-dark mb-2">Apellido del Empleado:</label>
                <select v-model="idEmpleado" id="selectEmpleado" class="form-select mb-4 border-primary shadow-sm">
                    <!-- Iteración de opciones, asumo que 'empleados' está disponible en la lógica -->
                    <option v-for="empleado in empleados" :key="empleado"
                        :value="empleado.idEmpleado">
                        {{empleado.apellido}}
                    </option>
                </select>
                
                <!-- Botón de acción principal en color primary -->
                <button class="btn btn-primary w-100 fw-bold text-uppercase py-2">
                    <i class="bi bi-person-circle me-2"></i> Buscar Empleado
                </button>
            </form>
        </div>

        <!-- Tarjeta de Detalles del Empleado (Resultado) -->
        <div v-if="empleado" class="card shadow-lg p-4 mx-auto border-info" style="max-width: 450px;">
            <h2 class="card-title text-info text-center mb-4 fw-bolder">Detalles de {{empleado.apellido}}</h2>
            
            <ul class="list-group list-group-flush border rounded-3">
                
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span class="fw-semibold text-dark">Apellido:</span> 
                    <span class="text-primary">{{empleado.apellido}}</span>
                </li>
                
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span class="fw-semibold text-dark">Oficio:</span> 
                    <span class="text-secondary">{{empleado.oficio}}</span>
                </li>
                
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span class="fw-semibold text-dark">Salario:</span> 
                    <span class="text-success fw-bold">{{empleado.salario}} €</span>
                </li>
                
            </ul>
        </div>
    </div>
</template>

<script>
import ServiceEmpleados from '../services/ServiceEmpleados'
const serviceEmpleados = new ServiceEmpleados();

    export default{
        name: "EmpleadoDetails",
        data(){
            return{
                empleados: [],
                idEmpleado: 0,
                empleado: null
            }
        },
        methods:{
            findEmpleado(){
                serviceEmpleados.findEmpleado(this.idEmpleado).then(result=>{
                    this.empleado = result
                })
            }
        },
        mounted(){
            serviceEmpleados.getEmpleados().then(result=>{
                this.empleados = result
            })
            
        }
    }
</script>