import React from 'react';
import {connect} from 'react-redux';
import {Layout} from 'antd';
const {Header, Footer, Sider, Content} = Layout;
class Layouts extends React.Component {
  render() {
    return (
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
  
}
export default connect()(Layouts);
