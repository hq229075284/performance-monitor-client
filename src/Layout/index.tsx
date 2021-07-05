import type {FC} from 'react';
import type {RouteComponentProps} from 'react-router';
import React  from 'react';
import SideBar from './components/SideBar';
import './index.scss';
// import routeItems from 'src/router/routeItem';
// import type {RouteItem} from 'src/router/routeItem';
import {Route} from 'react-router-dom';

import {Layout as AntdLayout} from 'antd';
const {Sider, Content} = AntdLayout;


// class Layouts extends React.Component<LayoutProps> {
const Layout: FC<RouteComponentProps> = (props) => {
  console.log(props.match.path);
  return (
    <AntdLayout className='dc-app-layout'>
      <Sider width="280" className='dc-sidebar-container'>
        <SideBar></SideBar>
      </Sider>
      <Content className='dc-main-container'>
        <Route path={props.match.path + '/1'} component={()=><div>1</div>}/>
        <Route path={props.match.path + '/2'} component={()=><div>2</div>}/>
      </Content>
    </AntdLayout>
  );
  
};
export default Layout;
