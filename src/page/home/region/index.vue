<<template>
    <div class="region">
        <div class="content">
            <div class="left">
                地区:
            </div>
            <ul>
                <li :class="{active:RegionFlag==''}" @click="changeRegion('')">全部</li>
                <li v-for="item in RegionArr" :key="item.value" :class="{active:RegionFlag==item.value}" @click="changeRegion(item.value)">{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
 import {reqHospitalLevelRegion} from '@/api/home/index'
import type{HospitalLevelRegionResponseData,HospitalLevelRegionArr} from '@/api/home/type'
import { onMounted,ref } from 'vue';
let RegionFlag = ref<string>('')
let RegionArr = ref<HospitalLevelRegionArr>([])
onMounted(()=>{
    getRegion()
})

const getRegion = async ()=>{
    let result:HospitalLevelRegionResponseData = await reqHospitalLevelRegion('Beijin')
    if(result.code==200){
        RegionArr.value = result.data
}
    }

const changeRegion = (region:string)=>{
    RegionFlag.value=region
    $emit('getRegion',region)
}

let $emit = defineEmits(['getRegion'])
</script>

<script lang="ts">
export default {
    name:"Region"
}
</script>

<style scoped lang="scss">
    .region{
        color: #7f7f7f;
        margin-top: 10px;
        .content{
            display: flex;
            .left{
                margin-right: 5px;
                width: 40px;
            }
            ul{
                display: flex;
                flex-wrap: wrap;
                li{
                    margin-right: 5px;
                    margin-bottom: 5px;
                    &.active{
                    color: #55a6fe;
                }

                }
                li:hover{
                    color: red;
                    cursor: pointer;
                }
            }
        }
    }
</style>