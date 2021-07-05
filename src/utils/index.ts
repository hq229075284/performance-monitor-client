

/**
 * @description 判空
 * @param obj
 */
import type {RouteItem} from 'src/router/routeItem';

export const isEmpty = (obj: unknown) => {
  
  let isEmptys = false;
  if (obj === undefined || obj === null || obj === '') {
    isEmptys = true;
  } else if (Array.isArray(obj) && obj.length === 0) {
    isEmptys = true;
  } else if (typeof obj === 'object' && obj != null  && Object.keys(obj).length === 0) {
    isEmptys = true;
  } 
  return isEmptys;
};

/**
 * 获取第一个非空路由
 * @param routes
 * @returns {*}
 */
export const getFirstRoute = (routes: RouteItem[]): RouteItem | undefined => {
  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    if (!route.routes) {
      return route;
    }
    if (route.routes.length) {
      return getFirstRoute(route.routes);
    }
  }
};



