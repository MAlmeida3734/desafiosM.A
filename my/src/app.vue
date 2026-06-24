<template>
    <div id="app">
        <MaComponents 
        />
        <h1 :class="{ 'title': true, 'title-home': isHome }"> Sempre em Desenvolvivemnto!!! </h1>

        <p :class="pClass"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut excepturi totam illum iste molestiae, nam illo, cumque maiores repellat debitis magnam nesciunt velit perferendis soluta laborum quia. Harum, minus sint?</p>
        
        <p :style= "styleClass"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus a nisi sunt quas, et beatae atque doloremque ut, aperiam explicabo voluptas inventore. Dolorum enim aperiam ratione tempore necessitatibus dolore molestiae.</p>
        
        <div v-for="(obj, index) in todos"
        :key="obj.id"
        >
        
       {{ index}} - {{ obj.title }} 
    </div>
       
    <div>

        <label>NewsLetter</label> <br>

       <input
       v-model="newsletter"
       type="radio"
       value="Sim"
       > Sim

       <input
       v-model="newsletter"
       type="radio"
       value="Não"
       >Não <br>
       {{ newsletter }}
       
</div>
<div>
    <button v-on:click="onClick()">
        Enviar
    </button>
</div>
<div @mouseover.once="onMouseOver()">
    Mouse over
</div>

<br>
<br>

<form action="https://google.com"
    @submit.prevent="onSubmit">

    <button type="submit">
        Enviar
    </button>
    
</form>


 
    <img
    src="./assets/logo.png"/>
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
            isHome: false, 
            classVar:'title',
            pClass: [ 'text-home','text' ], 
            styleClass: { color: 'aqua', backgroundColor: 'black', 'font-size': '30px'},
            newsletter: '',
            contract: false,
            colors: [],
        }},
        methods:{
            onClick() {
                console.log('click');
            },
            onMouseOver() {
                console.log(' mouse over')
            },
            onSubmit() {
                console.log('submit')
            }
        }
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