import React from 'react';

import { AiFillHome } from 'react-icons/ai';
import { CgMusicNote } from 'react-icons/cg';
import { FiSettings, FiLogOut } from 'react-icons/fi';
import { IoGameControllerSharp } from 'react-icons/io5';
import { ImNewspaper } from 'react-icons/im';
import { GiDiamondTrophy, GiCookingPot } from 'react-icons/gi';
import { logOut } from '../config/firebase'

const categories = [
  {
    name: 'Home',
    icon: <AiFillHome />,
    type: 'home',
    direction: '/home',
  },
  {
    name: 'Music',
    icon: <CgMusicNote />,
    type: 'category',
    action: 'aaaa',
  },
  {
    name: 'Cooking',
    icon: <GiCookingPot />,
    type: 'category',
    action: 'aaaa',
  },
  {
    name: 'Gaming',
    icon: <IoGameControllerSharp />,
    type: 'category',
    action: 'aaaa',
  },
  {
    name: 'News',
    icon: <ImNewspaper />,
    type: 'category',
    action: 'aaaa',
  },
  {
    name: 'Sports',
    icon: <GiDiamondTrophy />,
    type: 'category',
    action: 'aaaa',
    divider: true,
  },
  {
    name: 'Settings',
    icon: <FiSettings />,
    type: 'menu',
    action: false,
    direction: '/settings',
  },
  {
    name: 'Log out',
    icon: <FiLogOut />,
    type: 'menu',
    direction: '/',
    action: () => logOut(),
  },
];

export default categories
