import Global from "@/Global"
import axios from "axios";

export default class ServiceEmpleados{
    getEmpleados(){
        return new Promise(function(resolve){
            let empleados = []
            let url = Global.urlEmpleados;
            let request = "api/Empleados";
            axios.get(url + request).then(response=>{
                empleados = response.data
                resolve(empleados)
            })
            
        })
    }

    findEmpleado(id){
        return new Promise(function(resolve){
            let empleado = []
            let url = Global.urlEmpleados;
            let request = "api/Empleados/" + id;
            axios.get(url + request).then(response=>{
                empleado = response.data
                resolve(empleado)
            })
        })
    }

    getOficios(){
        return new Promise(function(resolve){
            let oficios = [];
            let url = Global.urlEmpleados;
            let request = "api/Empleados/oficios";
            axios.get(url + request).then(response=>{
                oficios = response.data;
                resolve(oficios)
            })
        })
    }

    getEmpleadosOficio(oficio){
        return new Promise(function(resolve){
            let empleados = [];
            let url = Global.urlEmpleados;
            let request = "api/Empleados/EmpleadosOficio/" + oficio;
            axios.get(url + request).then(response=>{
                empleados = response.data
                resolve(empleados)
            })
        })
    }
}