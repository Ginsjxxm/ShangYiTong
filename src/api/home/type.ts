export interface ResponseData{
    code:number,
    message:string,
    ok:boolean,
}

export interface Hospital{
    'id':string,
    'createTime':string,
    'updateTime':string,
    'isDeleted':number,
    param:{
        hostypeString:string,
        fullAddress:string
    },
    hoscode:string,
    hosname:string,
    hostype:string,
    cityCode:string,
    districtCode:string,
    provinceCode:string,
    logoData:string,
    intro:string,
    route:string,
    status:number,
    bookingRule:{
        "cycle":number,
        "releaseTime":string,
        "stopTime":string,
        "quitDay":number,
        "quitTime":string,
        "rule":string[
        ]
    }
}

export type Content = Hospital[];


export interface HospitalResponseData extends ResponseData{
    data:{
        content:Content,
        "pageable":{
                "sort": {
                    "sorted":boolean,
                    "unsorted":boolean,
                    "empty":boolean
        },
        "pageNumber":number,
        "pageSize":number,
        "offset":number,
        "paged":boolean,
        "unpaged":boolean
     },
     "totalPages":number,
     "totalElements":number,
     "last":boolean,
     "first":boolean,
     "sort":{
        "sorted":boolean,
        "unsorted":boolean,
        "empty":boolean
     },
     "numberOfElements":number,
     "size":number,
     "number":number,
     "empty":boolean
        
    }
}

export interface HospitalLevelRegion{
    "id":number,
    "createTime":string,
    "updateTime":string,
    "isDeleted":number,
    "param":{},
    "parentId":number,
    "name":string,
    "value":string,
    "dictCode":string,
    "hasChildren":boolean
}

export type HospitalLevelRegionArr = HospitalLevelRegion[];
export interface HospitalLevelRegionResponseData extends ResponseData{
    data:HospitalLevelRegionArr
}


export interface HospitalInfo extends ResponseData {
    date:Content
}