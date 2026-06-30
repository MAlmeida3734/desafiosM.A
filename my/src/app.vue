<template>
    <div id="app">
        <MaComponents v-if="showMA"/>
    
         <h1>Vamo Vamo</h1>
            {{ name }} <br>
            <button @click="toodleMA">
                Ativar e desativar MA
            </button>

            <input 
            v-model="name"
            type="text">
        
<div>
    <img
    src="./assets/logo.png"/>
</div>
</div>
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
            name:'Marco Almeida',
            showMA: true,
        }
    }, 

   //beforeCreate(){
   // console.log('beforeCreate')
   //},
   //beforeUpdate(){
   // console.log('beforeUpdate', this.name)
   //},
   //updated(){
   // console.log('updated', this.name)
   //},
   //created(){
   //     console.log('created');
   //     console.log('Estado:',this.name);
   //    console.log('DOM:', this.$el)
   // },
   // beforeMount(){
   //     console.log('beforeMount');
   //     console.log('Estado:',this.name);
   //     console.log('DOM:', this.$el)
   //},
   // mounted(){
   //     console.log('mounted');
   //     console.log('Estado:',this.name);
   //     console.log('DOM:', this.$el)
   // },
    
    

        watch: {},
        computed: {},
        methods:{
            toodleMA(){
                this.showMA = !this.showMA
            },
        },
    }
</script>

<style>
.title-home {
    font-size: 40px;
    color: aquamarine;
}
.title{
font-size: 20px;
color: #fff;
}
.text{
    color: aqua;
}
.text-home{
font-size: 25px;
}

#app{
    margin: 60px;
    background-color:rgb(72, 122, 59);
    text-align: center; 
};


</style>