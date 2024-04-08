<<template>
    <div class="top">
        <div class="content">
            <div class="left">
                <img src="../../assets/images/logo.png" alt="#">
                <p>商医通 预约挂号统一平台</p>
            </div>
            <div class="right">
                <p class="help">帮助中心</p>
                <p class="login">登录/注册</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

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