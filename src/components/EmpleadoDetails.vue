<template>
    <div>
        <h1>EMPLEADOS</h1>
        <select v-model="idEmpleado">
            <option v-for="empleado in empleados" :key="empleado"
            :value="empleado.idEmpleado">
                {{empleado.apellido}}
            </option>
        </select>
        <button v-on:click.prevent="findEmpleado()">Buscar</button>
        <div v-if="empleado">
            <ul class="list-group">
                <li class="list-group-item">Apellido: {{empleado.apellido}}</li>
                <li class="list-group-item">Oficio: {{empleado.oficio}}</li>
                <li class="list-group-item">Salario: {{empleado.salario}}</li>
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