<template>
    <div class="container mt-5">
    <!-- Banner de Bienvenida centralizado -->
    <div class="text-center py-5 bg-light rounded-3 shadow-sm mb-5">
    <h1 class="display-4 fw-bolder text-primary mb-3">
    ¡BIENVENID@ A VUE SERVICIOS!
    </h1>
    <p class="lead text-secondary">
    Tu plataforma de gestión de datos unificada con un diseño moderno.
    </p>
    </div>

        <!-- Tarjeta de Interacción con el formulario -->
        <div class="card shadow-lg p-4 mx-auto border-primary" style="max-width: 450px;">
            <h3 class="card-title text-center mb-4 text-dark fw-bold">
                Comencemos la sesión
            </h3>
            <form v-on:submit.prevent="getSaludo()">
                <div class="mb-4">
                    <label for="inputNombre" class="form-label fw-semibold text-secondary">
                        Introduce tu nombre:
                    </label>
                    <input 
                        type="text" 
                        id="inputNombre"
                        class="form-control form-control-lg border-primary shadow-sm" 
                        v-model="nombre"
                        placeholder="Escribe tu nombre aquí..."
                    />
                </div>
                
                <!-- Botón de acción principal -->
                <button class="btn btn-primary btn-lg w-100 fw-bold text-uppercase py-2">
                    <i class="bi bi-play-circle-fill me-2"></i> Comenzar
                </button>
            </form>
        </div>

        <!-- Mensaje de Saludo (Resultado) -->
        <div class="text-center mt-4">
            <h2 class="fw-bolder" :class="{'text-primary': mensaje}" style="min-height: 40px;">
                {{mensaje}}
            </h2>
        </div>
    </div>
</template>

<script>
import ServiceEjemplo from '../services/ServiceEjemplo';
const serviceEjemplo = new ServiceEjemplo()
    export default {
        name: "CustomersComponent",
        data(){
            return{
                mensaje: "",
                nombre: ""
            }
        },
        methods:{
            getSaludo(){
                serviceEjemplo.getSaludo(this.nombre).then(result=>
                    this.mensaje = result
                );
            }
        }
    }

</script>