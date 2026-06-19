<template>
    <div id="app">
        <MaComponents 
        />
        <h1 :class="{ 'title': true, 'title-home': isHome }"> Sempre em Desenvolvivemnto!!! </h1>

        <p :class="pClass"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut excepturi totam illum iste molestiae, nam illo, cumque maiores repellat debitis magnam nesciunt velit perferendis soluta laborum quia. Harum, minus sint?</p>
        
        <p :style= "styleClass"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus a nisi sunt quas, et beatae atque doloremque ut, aperiam explicabo voluptas inventore. Dolorum enim aperiam ratione tempore necessitatibus dolore molestiae.</p>
        <div v-for="(obj, index) in todos"
        :key="obj.id"
        class="todos-item"
        >
        
       {{ index}} - {{ obj.title }}

    </div>

    <br>
    <br>
    
    <img
    :alt="Vuelogo"
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
            todos: [
                {
                    "userId": 1,
                    "id": 1,
                    "title": "delectus aut autem",
                    "completed": false,
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false,

  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  }, ]
                
            
        }}
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
.todos-item{
    margin: 0 0 5px 0;
    padding: 3px 6px;
    color: #fff;
}
#app{
    margin: 60px;
    background-color:rgb(72, 122, 59);
    text-align: center; 
};


</style>