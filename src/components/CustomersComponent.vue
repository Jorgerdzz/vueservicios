<template>
    <div>
        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>COMPAÑÍA</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="customer in customers" :key="customer">
                    <td>{{customer.CustomerID}}</td>
                    <td>{{customer.ContactName}}</td>
                    <td>{{customer.CompanyName}}</td>
                </tr>
            </tbody>
        </table>
        <form v-on:submit.prevent="loadCustomer()">
            <label>Introduzca ID</label>
            <input type="text" v-model="customerID"/>
            <button>Buscar</button>
        </form>
        <div v-if="customer">
            <h3>Nombre: {{customer.ContactName}}</h3>
            <h3>Compañía: {{customer.CompanyName}}</h3>
            <h3>Titulo contacto: {{customer.ContactTitle}}</h3>
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