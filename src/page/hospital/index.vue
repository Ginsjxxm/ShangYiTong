<template>
    <div class="hospital">
        <div class="menu">
            <div class="top">
                <el-icon><HomeFilled/></el-icon>
                <span>医院详情信息</span>
            </div>
            <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
      >
        <el-menu-item index="/hospital/register" @click="changeActive('/hospital/register')">
          <el-icon><icon-menu /></el-icon>
          <span>预约挂号</span>
        </el-menu-item>
        <el-menu-item index="/hospital/detail" @click="changeActive('/hospital/detail')">
          <el-icon><document /></el-icon>
          <span>医院详情</span>
        </el-menu-item>
        <el-menu-item index="/hospital/notice" @click="changeActive('/hospital/notice')">
          <el-icon><setting /></el-icon>
          <span>预约通知</span>
        </el-menu-item>
        <el-menu-item index="/hospital/close" @click="changeActive('/hospital/close')">
          <el-icon><InfoFilled /></el-icon>
          <span>停诊信息</span>
        </el-menu-item>
        <el-menu-item index="/hospital/search" @click="changeActive('/hospital/search')">
          <el-icon><Search /></el-icon>
          <span>查询取消</span>
        </el-menu-item>
      </el-menu>
        </div>
        <div class="content">
            <!-- 子路由展示的位置 -->
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import useDetailStore from '@/store/modules/hospitalDetail';
let detailStore = useDetailStore()
import {
  Document,
  Menu as IconMenu,
  Setting,
  InfoFilled,
  Search,
  HomeFilled
} from '@element-plus/icons-vue'

//左侧菜单点击事件回调
import {useRouter,useRoute} from 'vue-router'
let $router = useRouter();
let $route = useRoute();
const changeActive = (path:string)=>{
  $router.push({path,query:{hoscode:$route.query.hoscode}})
}
onMounted(()=>{
  detailStore.getHospital($route.query.hoscode as string)
  
  detailStore.getDepartment($route.query.hoscode as string)
})

</script>

<style scoped>
    .hospital{
        display: flex;
        .menu{
            display: flex;
            flex-direction: column;
            align-items: center;
            flex:2
        }
        .content{
            flex:8
        }
    }
</style>