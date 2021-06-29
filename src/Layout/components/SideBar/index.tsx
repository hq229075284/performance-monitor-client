import {Logo} from './Logo';
import {Avatars} from './Avatar';
import Menus from './Menu';
import './index.scss';
export const SideBar = () => {
  return <>
    <Logo></Logo>
    <Menus></Menus>
    <Avatars></Avatars>
  </>;
};
