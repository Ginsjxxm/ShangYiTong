<<template>
    <div class="search">
        <el-autocomplete
            clearable
            placeholder="请你输入医院的名称"
            v-model="hosname"
            :fetch-suggestions="fetchdata"
            :trigger-on-focus="false"
            @select="goDetail"
        ></el-autocomplete>
  <el-button type="primary" size="default" :icon="Search">搜索</el-button>
    </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue';
import {ref} from 'vue'
import {reqHospitalInfo} from '@/api/home/index'
import type{HospitalInfo} from '@/api/home/type'
//收集搜索关键字
let hosname = ref<string>('')

const fetchdata=async (keyword:string,cb:any)=>{
    let result:HospitalInfo = await reqHospitalInfo(keyword)
    //变成人家组件需要的数据模式
    let showData = result.data.map(item=>{
        return {
            value:item.hosname
        }
    })

    console.log(result.data);
    cb(showData)
    
    
}
const goDetail = (item:any)=>{
    
}
</script>
<script lang="ts">
export default {
    name:'Search'
}

</script>


<style scoped lang="scss">
    .search{
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px 0;
        :deep(.el-input__wrapper){
            width: 600px;
        }
    }
</style>