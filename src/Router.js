import { createWebHistory, createRouter } from "vue-router"
import HomeComponent from './components/HomeComponent.vue'
import CochesComponent from './components/CochesComponent.vue'
import CustomersComponent from './components/CustomersComponent.vue'
import EmpleadoDetails from './components/EmpleadoDetails.vue'

const routes = [
    {path: "/", component: HomeComponent},
    {path: "/coches", component: CochesComponent},
    {path: "/customers", component: CustomersComponent},
    {path: "/empleados", component: EmpleadoDetails}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;