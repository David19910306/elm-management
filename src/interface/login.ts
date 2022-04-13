import {AxiosPromise} from "axios";

export interface ILoginParams {
  user_name: string,
  password: string
}

// 定义数据的返回类型
export interface responseDataType {
  status: number,
  message?: string,

  [propertyName: string]: any
}

export default interface ILogin {
  login: (url: string, method: 'POST', data: ILoginParams) => AxiosPromise<responseDataType>,
  singOut: (url: string, method: 'GET') => AxiosPromise<responseDataType>,
  adminInfo: (url: string, method: 'GET') => AxiosPromise<responseDataType>
}
