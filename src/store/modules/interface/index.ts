import type { DepartmentArr, HosPitalDetail } from "@/api/hospital/type";
//定义仓库内部存储state的ts类型
export interface DetailState {
    hospitalInfo: HosPitalDetail
    departmentArr:DepartmentArr
}