import Global from "@/Global";
import axios from "axios";

export default class ServiceCoches{
    url = Global.urlApiCoches
    
    getCoches(){
        let coches = []
        let request = "webresources/coches";
        axios.get(this.url + request).then(response=>{
            this.coches = response.data
        })
        return coches;
    }
}