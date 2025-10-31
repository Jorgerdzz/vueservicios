<template>
    <div>
        <h1>Servicios Api</h1>
        <h2 style="color:blue">{{mensaje}}</h2>
    </div>
</template>

<script>
import ServiceEjemplo from '../services/ServiceEjemplo';
const serviceEjemplo = new ServiceEjemplo()
    export default {
        name: "CustomersComponent",
        data(){
            return{
                mensaje: ""
            }
        },
        mounted(){
            this.mensaje = serviceEjemplo.getSaludo("Jorge");
        }
    }

</script>