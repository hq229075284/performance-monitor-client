import React from 'react';
import {SideBar} from './components/SideBar';
import './index.scss';
// import {connect} from 'react-redux';

import {Layout} from 'antd';
const {Sider, Content} = Layout;
class Layouts extends React.Component {
  render() {
    return (
      <Layout className='dc-app-layout'>
        <Sider width="280" className='dc-sidebar-container'>
          <SideBar></SideBar>
        </Sider>
        <Layout  className='dc-main-container' >
          <Content>Content</Content>
        </Layout>
      </Layout>
    );
  }
  
}
export default Layouts;
