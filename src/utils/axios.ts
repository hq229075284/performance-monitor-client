/*
 * @Description: 
 * @Author: Moriaty
 * @Date: 2020-09-13 23:09:23
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-16 22:45:23
 */
import type {AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios';
import {Modal, message} from 'antd';
import {getToken} from 'src/utils/auth';
import Config from 'src/config';

const {SUCCESS_CODE, LOGIN_EXPIRE} = Config;

interface IResponseData<T> {
  code: number;
  data: T;
  msg: string;
}
/**
 * @description: 请求函数
 * @param {AxiosRequestConfig} config 请求参数
 * @return {AxiosRequestConfig} 如果有token，返回在请求头加上token的config
 */
function axiosRequest(config: AxiosRequestConfig): AxiosRequestConfig {
  const token = getToken();
  if (token !== null) {
    config.headers.token = token;
  }
  return config;
}
/**
 * @description: 请求失败
 * @param {AxiosError} error
 */
async function axiosRError(error: AxiosError) {
  return Promise.reject(error);
}
/**
 * @description: 请求响应
 * @param {AxiosResponse}} response 请求响应
 * @return {type} 
 */
function axiosResponse(responseData: AxiosResponse<IResponseData<any>>) {

  const {data} = responseData;
  if (!data) {
    return Promise.resolve(responseData);
  }
  const {msg, code} = data;
  switch (code) {
    // 请求成功
    case SUCCESS_CODE:
      return data as any;
    case LOGIN_EXPIRE:
      Modal.confirm({
        title: '系统提示',
        content: msg,
        onOk: () => {

        }
      });
      return Promise.reject(new Error(msg));
    default:
      message.error(msg);
      // return Promise.reject(new Error(msg));
  }
  
}
export {
  axiosRequest,
  axiosRError,
  axiosResponse
};