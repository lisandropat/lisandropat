import React from "react";
import config from "../../../data/SiteConfig";

import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button
} from "@chakra-ui/react";

import { Menu, SocialMenu } from '../Menu';

import '../../styles/header/header.scss';

const MobileHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <>
      <Button ref={btnRef} onClick={onOpen}
        position="absolute"
        right="20px"
        top="10px"
        fontSize="36px"
        h="48px"
        w="48px"
        background="transparent"
        display={{ lg: 'none' }}
        _hover={{ background: 'transparent' }}
        _active={{ background: 'transparent' }}
        _focus={{ outline: 'none', background: 'transparent' }}
      >
        <i className="ri-more-fill" aria-label="Open menu" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          h="100vh"
          w="100vw"
          background={config.blackColor}
        >
          <DrawerCloseButton 
            color="white"
            fontSize="24px"
            top="20px"
            right="30px"
          />
          <DrawerBody 
            className="menu-modal"
            position="absolute"
            bottom="35px"
            right="12px"
            textAlign="right"
            w="100%"
            overflow="visible"
          >
            <div className="menu-options">
              <Menu />
            </div>
            <div className="menu-social">
              <SocialMenu />
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MobileHeader