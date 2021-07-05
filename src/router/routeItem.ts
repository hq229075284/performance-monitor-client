/** @format */

import type React from 'react';
// import EmptyRoute from './EmptyRoute';
import Login from 'src/views/Login';
import Console from 'src/views/Console';

type ComponentType = React.ComponentType;
export interface RouteItem {
  path: string;
  exact: boolean;
  meta: {
    tabFixed?: boolean;
    isCache?: boolean;
    hidden?: boolean;
    name: string;
    icon: string | (() => void) ;
  };
  component: ComponentType;
  routes?: RouteItem[];
}

const routeItems: RouteItem[] = [
  {
    path: '/home',
    exact: true,
    meta: {
      tabFixed: true,
      isCache: true,
      icon: 'iconuser',
      name: '首页'
    },
    component: Console
  },
  {
    path: '/stytes',
    exact: true,
    meta: {
      tabFixed: true,
      isCache: true,
      icon: 'iconuser',
      name: 'yangshi'
    },
    component: Console
  },
  {
    path: '/login',
    exact: true,
    meta: {
      icon: 'iconyijibaogao',
      isCache: true,
      name: '登录',
      hidden: false
    },
    component: Login
  }
  // {
  //   path: '/tesafst2',
  //   exact: true,
  //   meta: {
  //     icon: 'iconyijibaogao',
  //     name: '测试管理测试测试测试测试'
  //   },
  //   component: EmptyRoute
  // },
  // {
  //   path: '/tegst3',
  //   exact: true,
  //   meta: {
  //     icon: 'iconyijibaogao',
  //     name: '测试管理3'
  //   },
  //   component: EmptyRoute
  // },
  // {
  //   path: '/tegst10',
  //   exact: true,
  //   meta: {
  //     icon: 'iconyijibaogao',
  //     name: '测试管理4'
  //   },
  //   component: EmptyRoute
  // },
  // {
  //   path: '/tefsfst9',
  //   exact: true,
  //   meta: {
  //     icon: 'iconyijibaogao',
  //     name: '测试管理4',
  //     hidden: true
  //   },
  //   component: EmptyRoute
  // },
  // {
  //   path: '/te43st8',
  //   exact: true,
  //   meta: {
  //     icon: 'iconyijibaogao',
  //     name: '测试管理4',
  //     hidden: true
  //   },
  //   component: EmptyRoute
  // },
  // {
  //   path: '/te23st5',
  //   exact: true,
  //   meta: {
  //     icon: 'iconyijibaogao',
  //     name: '测试管理4',
  //     hidden: true
  //   },
  //   component: EmptyRoute
  // },
  // {
  //   path: '/test236',
  //   exact: true,
  //   meta: {
  //     icon: 'iconyijibaogao',
  //     name: '测试管理4',
  //     hidden: true
  //   },
  //   component: EmptyRoute
  // },
  // {
  //   path: '/tes2t7',
  //   exact: true,
  //   meta: {
  //     icon: 'iconyijibaogao',
  //     name: '测试管理4',
  //     hidden: true
  //   },
  //   component: EmptyRoute
  // }
];

export default routeItems;