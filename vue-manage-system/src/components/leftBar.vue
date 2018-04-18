<template>
    <div class="leftBar">
        <router-link to="../component/button" class="btn" v-bind:class="{active: active==0}"><Icon type="ionic"></Icon><span>button按钮</span></router-link>
        <router-link to="../component/hover_button" class="btn" v-bind:class="{active: active==1}"><Icon type="log-in"></Icon><span>悬停特效按钮</span></router-link>
        <router-link to="../component/alert" class="btn" v-bind:class="{active: active==2}"><Icon type="wand"></Icon><span>Alert警告提示</span></router-link>
        <router-link to="../card/edit" class="btn" v-bind:class="{active: active==3}"><Icon type="card"></Icon><span>Card卡片</span></router-link>
        <router-link to="../card/edit" class="btn" v-bind:class="{active: active==4}"><Icon type="card"></Icon><span>DatePicker</span></router-link>
        <router-link to="../card/edit" class="btn" v-bind:class="{active: active==5}"><Icon type="card"></Icon><span>Form表单</span></router-link>
        <router-link to="../card/edit" class="btn" v-bind:class="{active: active==6}"><Icon type="card"></Icon><span>Modal对话框</span></router-link>

        
        
    </div>
    
    
</template>

<script>
export default{
    name: 'leftBar',
    props:['active'],
    created(){
        
    }

}
</script>