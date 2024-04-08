<<template>
    <div class="level">
        <h1>医院</h1>
        <div class="content">
            <div class="left">等级:</div>
            <ul class="hospital">
                <li :class="{active:activeFlag==''}" @click="changeLevel('')">全部</li>
                <li v-for="level in LevelArr" :key="level.value" @click="changeLevel(level.value)" :class="{active:activeFlag==level.value}">{{level.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">

    import {reqHospitalLevelRegion} from '@/api/home/index'
    import type{HospitalLevelRegionResponseData,HospitalLevelRegionArr} from '@/api/home/type'
    import { onMounted,ref } from 'vue';
    let LevelArr = ref<HospitalLevelRegionArr>([])
    let activeFlag = ref('')
    onMounted(()=>{
        getLevel()
    })

    const getLevel = async ()=>{
        let result:HospitalLevelRegionResponseData = await reqHospitalLevelRegion('HosType')
        if(result.code==200){
            LevelArr.value = result.data;
        }
        
    }

const changeLevel = (Level:string)=>{
    activeFlag.value=Level
    $emit('getLevel',Level)
}
let $emit = defineEmits(['getLevel'])
</script>
<script lang="ts">
export default {
    name:'Level'
}
</script>

<style scoped lang="scss">
    .level{
        color: #7f7f7f;
        h1{
            color: red;
            font-weight: 900;
            margin:10px 0;
         }
         .content{
            display: flex;
         }
         .left{
            margin-right: 10px;
         }
         .hospital{
            display: flex;
            li{
                margin-right: 10px;
                &.active{
                    color: #55a655;
                }
            }
            li:hover{
                color: #55a655;
                cursor: pointer;
            }
         }
    }
</style>