import { reqCode,reqUseLogin } from '@/api/hospital';
import { LoginData, UserLognResponseData } from '@/api/hospital/type';
import {defineStore} from 'pinia'
import { GET_TOKEN,SET_TOKEN ,REMOVE_TOKEN} from '@/utils/user';
const useUserStore = defineStore('Users',{
    state:()=>{
        return {
            visiable:false,
            code:'',//存储用户验证码
            userInfo:JSON.parse(GET_TOKEN() as string)||{}
        }
    },
    actions:{
        //获取验证码方法
        async getCode(phone:string){
            //服务器携带手机号码获取验证码
           let result = await reqCode(phone)
           console.log(result);
           if(result.code==200){
                this.code = result.data
                SET_TOKEN(JSON.stringify(this.userInfo))
                return 'ok'
           }else{
            return Promise.reject(new Error(result.message))
           }
            
        },
        //用户手机号码登录
        async userLogin(LoginData:LoginData){
            let result:UserLognResponseData = await reqUseLogin(LoginData)
            if(result.code ==200){
                this.userInfo = result.data;
                localStorage.setItem('USERINFO',JSON.stringify(this.userInfo))
                return 'ok'
            }else{
                return Promise.reject(new Error(result.message))
            }
            
        },
        loginOut(){
            this.userInfo ={name:'',token:''};
            REMOVE_TOKEN()
        }
    },

    getters:{

    }
})

export default useUserStore;