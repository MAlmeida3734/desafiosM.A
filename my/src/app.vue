<template>
    <div id="app">
        <MaComponents/>
<div>
    
    {{ fullName }}
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
        }},

        watch: {},
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