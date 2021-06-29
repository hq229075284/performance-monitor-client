// import {settings} from 'src/settings';
import svgSource from 'src/assets/logo.svg';
export const Logo = () => {
  // const title = settings.title; 
  // const subtitle = settings.subtitle;
  return <div className='sidebar-logo-container'>
    <object data={svgSource} type="image/svg+xml">no logo</object>

    {/* <div className="sidebar-title">
      <h1 className="title">{title}</h1>
      <h3 className="sub-title">{subtitle}</h3>
    </div> */}
  </div>;
};

