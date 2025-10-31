<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="#">Navbar</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/coches">Coches</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/customers">Customers</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/empleados">Empleados</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Oficios
                        </a>
                        <ul class="dropdown-menu">
                            <li v-for="oficio in oficios" :key="oficio">
                                <router-link class="dropdown-item" :to="'/empleados'">{{oficio}}</router-link>
                            </li>
                        </ul>
                    </li>   
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import Global from '@/Global'
import axios from 'axios';
let url = Global.urlEmpleados;
    export default{
        name: "MenuComponent",
        data(){
            return{
                oficios: []
            }
        },
        methods:{
            loadOficios(){
                let request = "api/Empleados/oficios"
                axios.get(url + request).then(response=>{
                    this.oficios = response.data
                })
            }
        },
        mounted(){
            this.loadOficios();
        }
    }
</script>