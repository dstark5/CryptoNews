<template>
  <div v-if="data">
    <Card v-for="x in data" :key="x.id" :msg="x.title" :src="x.source"  :img="x.image" :link="x.link"/>
  </div>
  <div v-else>
    <loader/>
  </div>

</template>

<script>
import Card from '@/components/Card.vue'
import loader from '@/components/loading.vue'

export default {
  name: 'Home',
  components: {Card,loader},
  data(){
    return{
      data:null
    }
  },
  methods:{
      axiosfetch:function(){
        fetch('https://cryptonewsapi.herokuapp.com')
        .then(response => response.json())
        .then(data => {
          this.data=data
        })
        .catch(err=>{
          console.log(err)
        })
      }
  },
  created(){
    // this.fetchData()
    this.axiosfetch()
  }
}
</script>
