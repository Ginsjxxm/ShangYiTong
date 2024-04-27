<<template>
    <div class="top">
        <div class="content">
            <div class="left" @click="goHome">
                <img src="../../assets/images/logo.png" alt="#">
                <p>商医通 预约挂号统一平台</p>
            </div>
            <div class="right">
                <p class="help">帮助中心</p>
                <p class="login" @click="login" v-if="!userStore.userInfo.name">登录/注册</p>
                <el-dropdown>
                    <span class="el-dropdown-link">
                        {{ userStore.userInfo.name }}
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                    </span>
                    <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>实名认证</el-dropdown-item>
                        <el-dropdown-item>挂号订单</el-dropdown-item>
                        <el-dropdown-item>就诊人管理</el-dropdown-item>
                        <el-dropdown-item @click="loginOut">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';
let $router = useRouter();
const goHome = ()=>{
    $router.push({path:'/home'})
}

import useUserStore from '@/store/modules/use';
let userStore = useUserStore();
const login = ()=>{
    userStore.visiable = true
}

const loginOut = ()=>{
    //通知pinia仓库清除用户信息
    userStore.loginOut()
    //编程导航6跳转到首页
    $router.push({path:'/home'})
}
</script>

<style scoped>
    .top{
        position: fixed;
        z-index: 999;
        width: 100%;
        height: 70px;
        background-color: #fff;
        justify-content: center;
        display:flex;
        .content{
            width: 1200px;
            height: 70px;
            background-color: white;
            display: flex;
            justify-content: space-between;
            .left{
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                    width: 50px;
                    height: 50px;
                    margin-right: 10px;
                }
                p{
                    font-size: 20px;
                    color: #55a6fe;
                }
            }
            .right{
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 14px;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                .help{
                    margin-right: 10px;
                }
            }
        }
    }

</style>