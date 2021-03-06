import React from "react";
import { Link } from "gatsby";

import {
  Heading,
  Box
} from '@chakra-ui/react';

import MobileHeader from './MobileHeader';
import { Menu, SocialMenu } from '../Menu';

import '../../styles/header/header.scss';

const Header = () => (
  <Box as="nav" textAlign="center">
    <Box
      maxWidth="1440px"
      padding="0 10px"
      position="relative"
      margin="0 auto"
    >
      <Link to="/" className="logo">
        <Heading as="h1"
          position="absolute"
          zIndex={10}
          top="25px"
          left={{ base: "26px", lg: "36px" }}
          fontSize="18px"
        >
          Lisandro <Box display="inline-block" w="18px" h="3px" className="logo-line" m="0 6px 4px 6px" /> Pat
        </Heading>
        <Box
          position="absolute"
          className="back-to-home"
          display={{ base: 'none', lg: 'initial' }}
          zIndex={11}
          top="24px"
          left="50px"
          _before={{
            content: '""',
            zIndex: "-1",
            position: 'absolute',
            display: 'block',
            width: '200px',
            height: '30px',
            top: '-50px',
            left: '-20px',
            transition: '.2s'
          }}
        >
          <Box
            transition=".2s"
            opacity="0"
            fontWeight={500}
            className="back-to-home-text"
          >
            Back to home
          </Box>
        </Box>
      </Link>
      <div className="menu">
        <Menu />
        <SocialMenu />
      </div>
    </Box>
    <MobileHeader />
  </Box>
)

export default Header
