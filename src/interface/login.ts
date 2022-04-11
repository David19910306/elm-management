import {AxiosPromise} from "axios";

export interface ILoginParams {
  user_name: string,
  password: string
}

export default interface ILogin {
  login: (url: string, method: 'POST', data: ILoginParams) => AxiosPromise<void>,
  singOut: (url: string, method: 'GET') => AxiosPromise<void>,
  adminInfo: (url: string, method: 'GET') => AxiosPromise<void>
}

// 定义数据的返回类型
export interface responseDataType {
  status: number,
  message?: string,

  [propertyName: string]: any
}
