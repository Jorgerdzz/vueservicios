<template>
    <div class="container mt-5">
    <!-- Título principal -->
    <h1 class="text-center mb-5 text-primary fw-bolder">Listado y Búsqueda de Clientes</h1>

    <!-- SECCIÓN DE FORMULARIO DE BÚSQUEDA -->
        <div class="card shadow-lg p-4 mx-auto mb-5 border-primary" style="max-width: 500px;">
            <h3 class="text-center mb-4 text-primary fw-bold">Buscar Cliente por ID</h3>
            <form v-on:submit.prevent="loadCustomer()">
                <div class="mb-3">
                    <label for="customerIdInput" class="form-label fw-semibold text-secondary">Introduzca ID</label>
                    <input 
                        type="text" 
                        id="customerIdInput" 
                        v-model="customerID"
                        class="form-control border-primary shadow-sm"
                        placeholder="Ej: ALFI, ANATR..."
                    />
                </div>
                <!-- Botón de acción principal en color primary -->
                <button class="btn btn-primary w-100 fw-bold text-uppercase py-2">
                    <i class="bi bi-search me-2"></i> Buscar
                </button>
            </form>
        </div>

        <!-- SECCIÓN DE DETALLE DE CLIENTE BUSCADO -->
        <div v-if="customer" class="card shadow-lg p-4 mx-auto border-primary" style="max-width: 500px;">
            <h2 class="card-title text-primary text-center mb-3 fw-bolder">Detalles del Cliente</h2>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <span class="fw-semibold text-dark">Nombre:</span> {{customer.ContactName}}
                </li>
                <li class="list-group-item">
                    <span class="fw-semibold text-dark">Compañía:</span> {{customer.CompanyName}}
                </li>
                <li class="list-group-item">
                    <span class="fw-semibold text-dark">Título de Contacto:</span> {{customer.ContactTitle}}
                </li>
            </ul>
        </div>
        <!-- Opcional: Manejo de resultado no encontrado (en caso de error, usamos danger) -->
        <div v-else-if="customerID && !customer" class="alert alert-danger text-center shadow-sm" role="alert" style="max-width: 500px; margin: 0 auto;">
            No se encontró un cliente con el ID: **{{customerID}}**.
        </div>

        <!-- SECCIÓN DE TABLA DE LISTADO -->
        <div class="card shadow-lg p-4 mb-5">
            <h3 class="card-title mb-3 text-secondary">Clientes Disponibles</h3>
            <div class="table-responsive">
                <!-- Tabla con estilo rayado, hover y encabezado oscuro -->
                <table class="table table-striped table-hover border">
                    <thead class="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>NOMBRE</th>
                            <th>COMPAÑÍA</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="customer in customers" :key="customer">
                            <td class="fw-semibold">{{customer.CustomerID}}</td>
                            <td>{{customer.ContactName}}</td>
                            <td>{{customer.CompanyName}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import Global from '../Global'
import axios from 'axios';

let url = Global.urlNorthwind;

    export default {
        name: "CustomersComponent",
        data(){
            return{
                customers: [],
                customerID: "",
                customer: null
            }
        },
        mounted(){
            this.loadCustomers();
        },
        methods:{
            loadCustomers(){
                let request = "Customers";
                axios.get(url + request).then(response=>{
                    this.customers = response.data.value
                })
            },
            loadCustomer(){
                let request = "Customers";
                axios.get(url + request).then(response=>{
                    let customers = response.data.value;
                    for(let customer of customers){
                        if(this.customerID == customer.CustomerID){
                            this.customer = customer;
                        }
                    }   
                    
                })
            }
        }
    }
</script>