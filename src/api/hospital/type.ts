//定义模块数据类型

export interface ResponseData {
    code: number,
    message: string,
    ok: boolean
}

export interface HosPitalDetail {
    "bookingRule": {
        "cycle": number,
        "releaseTime": string,
        "stopTime": string,
        "quitDay": number,
        "quitTime": string,
        "rule": string[]
      },
      "hospital": {
        "id": string,
        "createTime": string,
        "updateTime": string,
        "isDeleted": number,
        "param": {
          "hostypeString": string,
          "fullAddress": string
        },
        "hoscode": string,
        "hosname": string,
        "hostype": string,
        "provinceCode": string,
        "cityCode": string,
        "districtCode": string,
        "address": string,
        "logoData": string
        "intro": null,
        "route": string,
        "status": number
        "bookingRule": null
      }
      
}

export interface HospitalDetail extends ResponseData {
    data:HosPitalDetail
}

//医院科室的数据

export interface Department{
  "depcode":string,
  "depname":string,
  "children"?:Department[]
}

//存储科室的数据类型
export type DepartmentArr = Department[]

export interface DepartmentResponseData extends ResponseData {
  data:DepartmentArr
}
export interface codePhone extends ResponseData{
  data:string
}
//对外暴露用户登录接口携带参数的类型
export interface LoginData{
  phone:string,
  code:string
}
// 登录接口返回的用户类型
export interface UserInfo{
  name:string,
  token:string
}

//登录接口返回数据类型ts
export interface UserLognResponseData extends ResponseData{
  data:UserInfo
}

//微信登录返回的ts
export interface WXlogin {
  "redirect_url":string,
  "appid":string,
  "scope":string,
}

export interface WXloginResponeData extends ResponseData {
  data:WXlogin
}