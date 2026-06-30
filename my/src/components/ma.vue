<template> 
      <div>
        <h1> {{ nome }}</h1>
        <input  type="text" v-model="nome" />
      </div> 
      <br>
      <br>
      <div>
        <label>Esportes</label><br>
        <select v-model="esporte">
          <option value="">Escolha</option>
          <option value="Futebol">Futebol</option>
          <option value="Basquete">Basquete</option>
          <option value="Natação">Natação</option>
          <option value="Skate">Skate</option>
        </select>
        <h2> {{ esporte }}</h2>
      </div>


      
    </template>

    <script>
        export default {
          name: 'MaComponents',
        data: () => ({nome: 'Hello World!', esporte: ''}),
        mounted(){
          window.addEventListener( 'resize', this.resize)
        },
        beforeUnmount(){
        console.log('beforeUnmount');
        window.removeEventListener('resize', this.resize)
         },
          unmounted(){
        console.log('unmounted');
        },

        methods:{
          resize($evt){
            console.log($evt)
          }
        }
   }; 
      
   </script>
   
   <style scoped>
    h1 {
      color: rgb(25, 25, 31);
      text-align: center;
    }
    h2{
      color: rgb(239, 241, 244);
    }
  </style>