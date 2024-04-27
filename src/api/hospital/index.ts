import requests from '@/utils/requests'
import type {DepartmentResponseData, HospitalDetail,LoginData, UserLognResponseData,WXloginResponeData} from './type' 
import type { codePhone } from './type'
enum API {
    HOSPITALDETAIL_URL = "/hosp/hospital/",
    HOSPITALDEPARTMENT_URL = 'hosp/hospital/department/',
    GETUSERCODE_URL = '/sms/send/',
    USELOGIN_URL = '/user/login',
    WXLOGIN_URL = '/user/weixin/getLoginParam/'
}

export const reqHospitalDetail = (hoscode:string)=>requests.get<any,HospitalDetail>(API.HOSPITALDETAIL_URL+hoscode)
export const reqHospitalDepartment = (hoscode:string)=>requests.get<any,DepartmentResponseData>(API.HOSPITALDEPARTMENT_URL+hoscode)
export const reqCode = (phone:string)=>requests.get<any,codePhone>(API.GETUSERCODE_URL+phone)
//登录接收的请求
export const reqUseLogin = (data:LoginData)=>requests.post<any,UserLognResponseData>(API.USELOGIN_URL,data)
export const reqWxLogin = (wxRedirectUri:string)=>requests.get<any,WXloginResponeData>(API.WXLOGIN_URL+`?wxRedirectUri=${wxRedirectUri}`)

