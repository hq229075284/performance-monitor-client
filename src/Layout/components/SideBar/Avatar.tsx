import './index.scss';
import {Avatar, Divider} from 'antd';
import {AntDesignOutlined} from '@ant-design/icons';
export const Avatars = () => {
  return <div className='avatar'>
    <div className="name">登录名称</div>
    <div className="img-container">
      <Avatar
        size={{xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100}}
        icon={<AntDesignOutlined />}
      />
    </div>
    <div className="options">
      <span>系统设置</span>
      <Divider type="vertical" style={{borderColor: '#fff'}} />
      <span>退出</span>
    </div>
  </div>;
};
