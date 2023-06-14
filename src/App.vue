<template>
  <nav id="nav" class="flex justify-between items-center h-14  sticky top-0 z-50" :class="{'bg-blueGray-700':nav}">
    <h3 class="md:text-3xl text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 ml-2">{{title}}</h3>
    
    <div>
      <router-link to="/" class="mr-2 text-white md:text-lg text-sm font-bold">home</router-link>
      <router-link to="/about" class="m-3 md:text-lg text-sm text-white font-bold">about</router-link>
    </div>

  </nav>
  <router-view/>
</template>

<script>
export default {
  name:'app',
  data(){
    return{
      title:"CryptoNews",
      nav:false
    }
  },
  created(){
    window.addEventListener('scroll',()=>{
      if(window.pageYOffset>0){
        if(!this.nav){
          this.nav=true
        }
      }else{
        this.nav=false
      }
    })
  }
}
  
</script>
<style>
</style>
