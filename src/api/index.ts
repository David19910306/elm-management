import {AxiosPromise} from "axios";
import request from "../https";

export default function httpRequest(url: string, method: 'GET' | 'POST' | 'DELETE', args?: Record<string, any>): AxiosPromise {
  return request({
    url,
    method,
    params: args,
    data: args
  })
}
