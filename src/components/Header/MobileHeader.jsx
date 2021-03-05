import React from "react";
//import { Link } from "gatsby";

import Modal from '../Modal/Modal';
import { Menu, SocialMenu } from '../Menu';

import '../../styles/header/header.scss';

const MobileHeader = () => {
  return (
    <Modal buttonModal={<i className="ri-more-fill" aria-label="Open menu" />}>
      <div className="menu-options">
        <Menu />
      </div>
      <div className="menu-social">
        <SocialMenu />
      </div>
    </Modal>
  )
}

export default MobileHeader