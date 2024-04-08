import { createRouter,createWebHistory } from "vue-router";
export default createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/home',
            component:()=>import('@/page/home/index.vue')
        },
        {
            path:'/hospital',
            component:()=>import('@/page/hospital/index.vue')
        },
        {
            path:'/',
            redirect:'/home'
        }

    ],
    scrollBehavior(){
        return{
            left:0,
            top:0
        }
    }
})