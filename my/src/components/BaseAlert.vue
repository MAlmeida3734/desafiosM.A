<template>
    <div :class="baseClass">
       <slot />
    </div>
</template>

<script>
export default{
props:
    ['variant'],
    computed:{
        baseClass() {
            return [
                'alert',
                this.variant ? `alert-${this.variant}` : ''
            ]
        }
    }


}

</script>



<style scoped>
.alert{
    padding: 5px;
     border-radius: 6px;
     color: gray;
     background-color: #ddd;
}
.alert-success{
background-color: #42b983;
color: #fff;
}
.alert-danger{
background-color: #b94242;
color: #fff;
}


</style>