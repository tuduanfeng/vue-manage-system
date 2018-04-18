<template>
    <div>
        <Header></Header>
        <div class="sys-content">
            <leftBar></leftBar>
        </div>

    </div>

</template>
<script>
import Header from '../components/header.vue'
import leftBar from '../components/leftBar.vue'
export default {
  components:{Header,leftBar},  
  created () {
    this.axios.get('topics', null, r => {
      console.log(r)
    })

    
  }
}
</script>