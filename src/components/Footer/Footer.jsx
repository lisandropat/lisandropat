import React from "react";
import config from "../../../data/SiteConfig";

import {
  Flex,
  Image,
  Box,
  HStack,
  Text
} from '@chakra-ui/react';

import Logo from '../../images/pat.svg';

import { SocialMenu } from '../Menu';

const Footer = () => (
  <Box as="footer" 
    textAlign="center"
    mt="120px"
    mb={{ base: "80px", lg: "30px" }}
  >
    <Box
      position="relative"
      maxWidth="1390px"
      padding="0 10px"
      margin="0 auto"
    >
      <Flex
        justifyContent="space-between"
        display={{ base: 'initial', lg: 'flex' }}
      >
        <Text
          color={config.grayColor}
          fontSize="14px"
        >
          Copyleft © 2021 Lisandro Pat.
        </Text>
        <Image
          src={Logo}
          w="32px"
          display={{ base: 'none', lg: 'initial' }}
          className="footer-logo"
        />
        <HStack spacing="10px"
          margin={{ base: "10px auto 0 auto", lg: '0' }}
          w={{ base: "220px", lg: 'auto' }}
        >
          <SocialMenu />
        </HStack>
      </Flex>
    </Box>
  </Box>
)

export default Footer
