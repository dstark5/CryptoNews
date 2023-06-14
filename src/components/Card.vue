<template>
  <div class="bg-white flex lg:w-9/12 w-11/12 mx-auto rounded-xl overflow-hidden items-center shadow-xl hover:shadow-2xl mt-3 p-3 mb-3" @click="redirect()">
    <img :src="img" class="md:w-28 md:h-28 w-20 h-20 object-cover rounded">
    <div class="flex flex-col pl-3 justify-around">
      <p class="font-bold md:text-lg text-sm">{{msg}}</p>
      <h5 class="text-gray-500 font-bold md:text-sm text-xs mt-1"><span class="font-light">source: </span>{{src}}</h5>
    </div>
  </div>

</template>
<script>
  export default {
    name:'Card',
    props:['msg','src','img','link'],
    methods:{
      redirect:function(){
        window.location.href=this.link
      }
    }
  }
</script>