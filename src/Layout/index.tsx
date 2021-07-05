import type {FC} from 'react';
import React  from 'react';
import SideBar from './components/SideBar';
import './index.scss';
// import routeItems from 'src/router/routeItem';
// import type {RouteItem} from 'src/router/routeItem';
import Router from 'src/router';

import {Layout as AntdLayout} from 'antd';
const {Sider, Content} = AntdLayout;


// class Layouts extends React.Component<LayoutProps> {
const Layout: FC = props => {
  return (
    <AntdLayout className='dc-app-layout'>
      <Sider width="280" className='dc-sidebar-container'>
        <SideBar></SideBar>
      </Sider>
      <Content className='dc-main-container'>
        <Router></Router>
      </Content>
    </AntdLayout>
  );
  
};
export default Layout;
