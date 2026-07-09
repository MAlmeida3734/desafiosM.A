<template>
    <div>
        <maview/>
    </div> 
    <div>
        <BaseCard/>
    </div>
    <br><br><br>
    <div>
        <BaseAlert
        v-if="showAlert"
        :variant="variant"
        @close="onClose()">
        
        {{text}}
    </BaseAlert>
       
    </div>
    <br><br><br>
<div>
    <img
    src="./assets/logo.png"/>       
</div>

</template>
<script>
import BaseAlert from './components/BaseAlert.vue';
import BaseCard from './components/BaseCard.vue';
import maview from './components/maView.vue';





export default {
    name: 'App',
    components: {
        maview,
        BaseCard,
        BaseAlert
    },
    data(){
        return{ 
            showAlert: true,
            variant:"success",
            text:"Seu formulário foi enviado com sucesso!!"
    
        }
    }, 

   beforeCreate(){
   console.log('beforeCreate')
   },
   beforeUpdate(){
    console.log('beforeUpdate')
   },
   updated(){
    console.log('updated')
   },
   created(){
        console.log('created');
    },
    beforeMount(){
        console.log('beforeMount'); 
    },
    mounted(){
        console.log('mounted');  },
    
    

        watch: {},
        computed: {},
        methods:{
            onClose(){
                this.showAlert= false
                console.log('on close');
            }
        },
    }
</script>

<style>

#app{
    margin: 60px;
    border-radius: 10px;
    background-color: rgb(54, 54, 54);
    text-align: center; 
};

</style>