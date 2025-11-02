
export default class ServiceEjemplo{
    getSaludo(nombre){
        return new Promise(function(resolve){
            resolve("¡Le deseamos una experiencia gratificante " + nombre + "!")
        })
    }
}