import ILogin, {ILoginParams} from "../interface/login";
import {AxiosPromise} from "axios";
import httpRequest from "./index";

export default function login(): ILogin {
  function login(url: string, method: 'POST', data: ILoginParams): AxiosPromise {
    return httpRequest(
      url, method, undefined, data
    )
  }

  function singOut(url: string, method: 'GET'): AxiosPromise {
    return httpRequest(
      url, method
    )
  }

  function adminInfo(url: string, method: 'GET'): AxiosPromise {
    return httpRequest(
      url, method
    )
  }

  return {login, singOut, adminInfo}
}
