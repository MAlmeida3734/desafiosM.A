<template>
    <div id="app">
        <MaComponents/>
        
        
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
    <br>
    <br>
    <br>
    <br>
    
    <form action="https://google.com"
    @submit.prevent="onSubmit">
    
    <button type="submit">
        Enviar
    </button>
    
</form>
<div>
    
    {{ fullName }}
</div>

<h2> Todos em aberto</h2>
<div
v-for="todo in uncompletedTodo"
:key="todo.id"
>
{{ todo.title }} 
</div>

<h2>Todos completas</h2>
<div
v-for="todo in completedTodo"
:key="todo.id"
>
{{ todo.title }}
</div>

<br><br><br>

<h2>Todos</h2>
<div
v-for="todo in todos"
:key="todo.id"
>

<input 
v-model="todo.completed"
type="checkbox">



{{ todo.title }}
</div>

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
            user: { fisrt_name: 'Marco',
            last_name:'Almeida',
            },
            newsletter: '',
            contract: false,
            colors: [],
            todos: [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
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
  }]
        }},
        computed: {
            fullName(){
                return `${this.user.fisrt_name} ${this.user.last_name}`
            },
            uncompletedTodo() {
                return this.todos.filter(todo => !todo.completed);
            },
            completedTodo(){
                return this.todos.filter(todo => todo.completed);
            },

        },
        methods:{
            onClick() {
                console.log('click');
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