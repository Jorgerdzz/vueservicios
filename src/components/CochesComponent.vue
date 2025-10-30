<template>
    <div>
        <h1>Api Coches</h1>
        <div v-for="coche in coches" :key="coche">
            <h3 style="color:blue">{{coche.marca}} {{coche.modelo}}</h3>
            <p>Driver: {{coche.conductor}}</p>
            <img :src="coche.imagen" style="width: 150px; height:150px"/>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
let urlApi = "https://apicochespaco.azurewebsites.net/"

    export default{
        name: "CochesComponent",
        data(){
            return{
                coches:[]
            }
        },
        mounted(){
            this.loadCoches();
        },
        methods:{
            loadCoches(){
                let request = "webresources/coches";
                axios.get(urlApi + request).then(response=>{
                    this.coches = response.data;
                })
            }
        }
    }
</script>