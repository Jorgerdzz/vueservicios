<template>
    <div>
        <h1>EMPLEADOS</h1>
        <select v-model="idEmpleado">
            <option v-for="empleado in empleados" :key="empleado"
            :value="empleado.idEmpleado">
                {{empleado.apellido}}
            </option>
        </select>
        <button v-on:click.prevent="loadEmpleado()">Buscar</button>
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
import axios from 'axios';
import Global from '@/Global';
let url = Global.urlEmpleados;

    export default{
        name: "EmpleadoDetails",
        data(){
            return{
                empleados: [],
                idEmpleado: 0,
                empleado: null
            }
        },
        methods: {
            loadEmpleados(){
                let request = "api/Empleados";
                axios.get(url + request).then(response=>{
                    this.empleados = response.data
                })
            },
            loadEmpleado(){
                let request = "api/Empleados/" + this.idEmpleado;
                console.log(this.idEmpleado)
                axios.get(url + request).then(response=>{
                    this.empleado = response.data
                })
            }
        },
        mounted(){
            this.loadEmpleados();
        }
    }
</script>