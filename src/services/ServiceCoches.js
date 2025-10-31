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
}