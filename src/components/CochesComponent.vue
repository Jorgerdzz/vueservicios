<template>
    <div class="container mt-5">
    <!-- Título centralizado con color primario -->
    <h1 class="text-center mb-4 text-primary fw-bolder">API Coches</h1>

        <!-- Tarjeta para el formulario de búsqueda -->
        <div class="card shadow-lg p-4 mx-auto mb-5" style="max-width: 400px;">
            <form v-on:submit.prevent="findCoche()" class="d-flex flex-column align-items-stretch">
                <!-- Selector de Marca con estilo de formulario de Bootstrap -->
                <label for="selectMarca" class="form-label fw-semibold text-secondary mb-2">Selecciona una Marca:</label>
                <select v-model="marca" id="selectMarca" class="form-select mb-4 border-primary shadow-sm">
                    <option v-for="marca in marcas" :key="marca" :value="marca">{{marca}}</option>
                </select>
                
                <!-- Botón de acción principal -->
                <button class="btn btn-primary fw-bold text-uppercase py-2">
                    <i class="bi bi-search me-2"></i> Buscar
                </button>
            </form>
        </div>

        <!-- Resultados de Coches en un diseño de cuadrícula responsive -->
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
            <div v-for="coche in coches" :key="coche" class="col">
                <!-- Tarjeta individual para cada coche -->
                <div class="card h-100 shadow-sm border-0 rounded-lg overflow-hidden">
                    <div class="p-3 bg-light text-center">
                        <!-- Imagen del Coche centrada y con bordes redondeados -->
                        <img 
                            :src="coche.imagen" 
                            alt="Imagen del Coche" 
                            class="img-fluid rounded-circle shadow-sm" 
                            style="width: 150px; height:150px; object-fit: cover; border: 3px solid #0d6efd;"
                        />
                    </div>
                    
                    <div class="card-body text-center">
                        <!-- Título principal (Marca y Modelo) -->
                        <h3 class="card-title text-primary fw-bolder mb-1">
                            {{coche.marca}} {{coche.modelo}}
                        </h3>
                        <!-- Información del conductor -->
                        <p class="card-text text-secondary">
                            <span class="fw-semibold">Driver:</span> {{coche.conductor}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ServiceCoches from '../services/ServiceCoches';
const serviceCoches = new ServiceCoches();
    export default{
        name: "CochesComponent",
        data(){
            return{
                coches:[],
                marcas: [],
                marca: "",
            }
        },
        mounted(){
            serviceCoches.getCoches().then(result=>{
                this.coches = result
            }),
            serviceCoches.getMarcas().then(result=>{
                this.marcas = result
            })
        },
        methods:{
            findCoche(){
                serviceCoches.findCoche(this.marca).then(result=>{
                    this.coches = result
                })
            }
        }
    }
</script>