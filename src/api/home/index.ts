import request from '@/utils/requests'
import type { HospitalResponseData, HospitalLevelRegionResponseData,HospitalInfo} from './type'
enum API {
    HOSPITAL_HOSTORY='/hosp/hospital/',
    HOSPITALLEVELANDREGION_URL='/cmn/dict/findByDictCode/',
    //根据医院的名字获取数据
    HOSPITALINFO_URL = '/hosp/hospital/findByHosname/'
}

export const reqHospital =(page:number,limit:number,hostype='',districtCode='')=>request.get<any,HospitalResponseData>(API.HOSPITAL_HOSTORY+`${page}/${limit}?hostype=${hostype}&districtCode=${districtCode}`)
export const reqHospitalLevelRegion = (dictCode:string)=>request.get<any,HospitalLevelRegionResponseData>(API.HOSPITALLEVELANDREGION_URL+dictCode)
//根据关键词获取医院名字

export const reqHospitalInfo = (hosname:string)=>request.get<any,HospitalInfo>(API.HOSPITALINFO_URL+hosname)
