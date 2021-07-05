import {Logo} from './Logo';
import {Avatars} from './Avatar';
import Menu from './Menu';
import type {FC} from 'react';
import './index.scss';
// export const SideBar = () => {
const SideBar: FC = (props) => {
  return (
    <>
      <Logo></Logo>
      <Menu></Menu>
      <Avatars></Avatars>
    </>
  ); 
};
export default SideBar;
