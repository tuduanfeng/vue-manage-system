<template>
    <div>
        <Header></Header>
        <div class="sys-content">
            <leftBar active="1"></leftBar>
            <div class="right-content">
                                                    悬浮按钮werew
                
            </div>
            
        </div>

    </div>
</template>

<script>
import Header from '../../components/header.vue'
import leftBar from '../../components/leftBar.vue'
export default {
  components:{Header,leftBar},  
  created () {

    
  }
}
</script>