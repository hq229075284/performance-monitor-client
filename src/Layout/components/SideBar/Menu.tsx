
import React, {useEffect, useState} from 'react';
import {Menu as AntdMenu} from 'antd';
import type {RouteItem} from 'src/router/routeItem';
import routeItems from 'src/router/routeItem';
import history from 'src/router/history';

const {Item, SubMenu} = AntdMenu;


const Menu = () => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  useEffect(() => {
    setSelectedKeys([history.location.pathname]);
  }, []);

  const renderSubMenu = (route: RouteItem) => 
    <SubMenu key={route.path} title={route.meta.name}>
      {renderMenuItem(route.routes !== undefined ? route.routes : [])}
    </SubMenu>
  ;
  const renderMenuItem = (routes: RouteItem[]) =>
    routes.map(route => {
      if (route.routes) return renderSubMenu(route);
      return (
        <Item key={route.path} title={route.meta.name}>
          {route.meta.name}
        </Item>
      );
    });
  const handleClickMenu = (menu) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    history.push(menu.key as string);
  };
  // const {pathname} = history.location;
  const defaultOpenKeys = [];
  // const defaultOpenKeys = getTreePath(routeItems, route => route.path === pathname, 'routes').map(
  //   (route: RouteItem) => route.path
  // );

  
  return (
    <AntdMenu
      selectedKeys={selectedKeys}
      defaultOpenKeys={defaultOpenKeys}
      onClick={handleClickMenu}
      mode="inline"
      className="scrollbar-wrapper">
      {renderMenuItem(routeItems)}
    </AntdMenu>
  );
};
export default Menu;