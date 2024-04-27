<<template>
    <div>
        <span>获取验证码({{time}}s)</span>
    </div>
</template>

<script setup lang="ts">
import { ref ,watch} from 'vue';
let time = ref<number>(5);
let props = defineProps(['flag'])

watch (()=>props.flag,()=>{
    let timer = setInterval(()=>{
        time.value--
        if(time.value==0){
            //通知父组件倒计时结束
            $emit('getFlag',false)
            clearInterval(timer)
        }
    },1000)
    
},{immediate:true})


let $emit = defineEmits(['getFlag'])
</script>

<style scoped>

</style>