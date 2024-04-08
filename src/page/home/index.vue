<template>
<Carousel/>
<Search/>
<el-row :gutter="20">
    <el-col :span="20">
    <Level @getLevel="getLevel"/>
    <Region @getRegion="getRegion"/>
    <div class="hospital">
        <Card  class="item"  v-for="(item,index) in hasHospitalAttr" :key="index" :hospitalInfo="item"/>
        <el-pagination
            v-model:current-page="no"
            v-model:page-size="pageSize"
            :page-sizes="[10, 20, 30, 40]"
            :background="true"
            layout=" prev, pager, next, sizes , jumper ,total"
            :total="total"
            @current-change="currentChange"
    />
    </div>
    </el-col>
    <el-col :span="4">
    <Tip/>
    </el-col>
</el-row>
</template>

<script setup lang="ts">
import Carousel from './carousel/index.vue'
import Search from './search/index.vue'
import Level from './level/index.vue'
import Region from './region/index.vue'
import Card from './card/index.vue'
import Tip from './tip/index.vue'
import {onMounted, ref} from 'vue'
import {reqHospital} from '@/api/home/index'
let no = ref<number>(1)
let pageSize = ref<number>(20)
let hasHospitalAttr = ref([])
let total = ref(0)
let hostype = ref<string>('')
let districtCode = ref<string>('')
onMounted(()=>{
    getHospital()
})

const getLevel = (level:string)=>{
    hostype.value = level
    getHospital()
    
}

const getRegion = (Region:string)=>{
    districtCode.value = Region;
    getHospital()
}

const currentChange = ()=>{
    hasHospitalAttr.value = []
    getHospital()
}

const getHospital=async ()=>{
    let result :any = await reqHospital(no.value,pageSize.value,hostype.value,districtCode.value)
    if(result.code==200){
        hasHospitalAttr = result.data.content
        total.value = result.data.totalElements
    }
}
</script>

<style scoped>
    .hospital{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .item{
            width: 48%;
            margin: 10px 0;
        }
    }
</style>