<template>
    <div id="app">
        <MaComponents 
       />
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