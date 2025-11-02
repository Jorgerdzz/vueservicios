import Global from "@/Global";
import axios from "axios";

export default class ServiceCoches{
    
    getCoches(){
        return new Promise(function(resolve){
            let coches = [];
            let url = Global.urlApiCoches
            let request = "webresources/coches";
            axios.get(url + request).then(response=>{
                coches = response.data;
                resolve(coches)
            })
        })
    }

    findCoche(marca){
        return new Promise(function(resolve){
            let coches = [];
            let cochesMarca = [];
            let url = Global.urlApiCoches;
            let request = "webresources/coches";
            axios.get(url + request).then(response=>{
                coches = response.data;
                for(let coche of coches){
                    if(coche.marca == marca){
                        cochesMarca.push(coche);
                    }
                }
                console.log(cochesMarca)
                resolve(cochesMarca);
            })
        })
    }

    getMarcas(){
        return new Promise(function(resolve){
            let coches = [];
            let marcas = new Set();
            let url = Global.urlApiCoches;
            let request = "webresources/coches";
            axios.get(url + request).then(response=>{
                coches = response.data;
                for(let coche of coches){
                    marcas.add(coche.marca);
                }
                resolve(marcas)
            })
        })

    }
}