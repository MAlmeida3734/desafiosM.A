<template>
    <div>
        <maview>
            <template v-slot:title>
                Hello World!
            </template>

            <template v-slot:description>
                <p>Vamo Vamo</p>
            </template>

            O estudo é incrivel!!
        </maview>
    </div> 
<div>
    <img
    src="./assets/logo.png"/>       
</div>

</template>
<script>
import maview from './components/maView.vue';





export default {
    name: 'App',
    components: {
        maview
    },
    data(){
        return{ 
    
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
        methods:{},
    }
</script>

<style>

#app{
    margin: 60px;
    background-color: black;
    text-align: center; 
};

</style>