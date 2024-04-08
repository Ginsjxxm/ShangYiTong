import axios from 'axios'
import { ElMessage } from 'element-plus'


const request = axios.create({
    baseURL:'/api',
    timeout:5000
})

request.interceptors.request.use((config=>{

    return config
}))


request.interceptors.response.use((response)=>{
    return response.data
},(error)=>{
    let status = error.response.status
    console.log(status);
    switch(status){
        case 404:
            ElMessage({
                type:'error',
                message:'请求错误'
            })
            break;
    }
    return Promise.reject(new Error(error.message))
}
)

export default request;
