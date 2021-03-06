/*
 * @Description:全局配置项
 * @Author: Moriaty
 * @Date: 2020-09-13 22:37:31
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-13 23:25:19
 */
export interface IConfig {
  BASE_NAME: string;
  API_URL: string;
  TOKEN_KEY: string;
  SUCCESS_CODE: number;
  LOGIN_EXPIRE: number;
  LOGIN_PATH: string;
  ACCOUNT_INFO: string;
  SYSTEM_CONFIG: string;
}

const Config: IConfig = {
  BASE_NAME: '',
  // 统一请求地址
  API_URL: 'http://127.0.0.1:3300',
  // 本地存储token的值
  TOKEN_KEY: 'REACT_TS_ADMIN_TOKEN_KEY',
  // 登录成功码
  SUCCESS_CODE: 200,
  // 登录过期或未登录
  LOGIN_EXPIRE: 400,
  
  LOGIN_PATH: '/login',

  ACCOUNT_INFO: '__account_info__',

  SYSTEM_CONFIG: '__system_config__'

};
export default Config;