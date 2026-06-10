<template>
    <div id="app">
        <MaComponents 
        v-if="showMA"/>

        <div v-show="showName">
            Nome: {{ firstName }} <br>
            Sobrenome: {{ lastName }}
        </div>

        <div v-if="acessLevel === 'admin'">Admin</div>
        <div v-else-if="acessLevel === 'marketing'">Marketing</div>
        <div v-else>User</div>
    </div>
<br>
<br>
    <img
    alt="Vue logo"
    src="./assets/logo.png"/>

</template>

<script>
import MaComponents from './components/ma.vue'



export default {
    name: 'App', 
    components: {
        MaComponents
    },
    data(){
        return{
        showMA: true,
        firstName: 'Marco',
        lastName: 'Almeida',
        showName: false,
        acessLevel: 'admin'
        }
    }
}
</script>

<style>
#app{
    text-align: center;
    background-color:rgb(72, 122, 59); 
};


</style>