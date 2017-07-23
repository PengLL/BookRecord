import Vue from 'vue';
import VueRouter from 'vue-router';
import PlBookDetail from '../components/PlBookDetail';
import PlIndex from '../components/Index/PlIndex';

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {path:'/',component:PlIndex},
        {path:'/bookDetail/:id',component:PlBookDetail}
    ]
})