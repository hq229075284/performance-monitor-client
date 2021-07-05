/*
 * @Description: 
 * @Author: Moriaty
 * @Date: 2020-09-13 22:56:29
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-13 23:04:20
 */
import Config from 'src/config';

const {TOKEN_KEY} = Config;
export function getToken() {
  return sessionStorage.getItem(TOKEN_KEY);
}
export function setToken(token: string) {
  sessionStorage.setItem(TOKEN_KEY, token);
}

export function removeToken() {
  sessionStorage.removeItem(TOKEN_KEY);
}

export function hasToken() {
  return sessionStorage.getItem(TOKEN_KEY) !== null ? true : false;
}
