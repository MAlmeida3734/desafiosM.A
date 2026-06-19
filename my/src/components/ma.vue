<template> 
      <div>
        <h1> {{ nome }}</h1>
        <input id="one"  type="text" v-model="nome" />
      </div> 
    </template>

    <script>
        export default {
          name: 'MaComponents' ,
        data: () => ({nome: 'Hello World!'})
   } </script>
   
   <style scoped>
    h1 {
      color: rgb(25, 25, 31);
      text-align: center;
    }
  </style>