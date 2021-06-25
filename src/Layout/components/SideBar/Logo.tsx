import './index.css';
import {settings} from '@/settings';
export const Logo = () => {
  const title = settings.title; 
  const subtitle = settings.subtitle;
  return <div className='sidebar-logo-container'>
    <div className="sidebar-title">
      <h1 className="title">{title}</h1>
      <h3 className="sub-title">{subtitle}</h3>
    </div>
  </div>;
};

