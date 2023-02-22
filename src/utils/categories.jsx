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
    action: 'changeType',
    type: '',
    // direction: '/home',
  },
  {
    name: 'Music',
    icon: <CgMusicNote />,
    action: 'changeType',
    type: 'music',
  },
  {
    name: 'Cooking',
    icon: <GiCookingPot />,
    action: 'changeType',
    type: 'cooking',
  },
  {
    name: 'Gaming',
    icon: <IoGameControllerSharp />,
    action: 'changeType',
    type: 'gaming',
  },
  {
    name: 'News',
    icon: <ImNewspaper />,
    action: 'changeType',
    type: 'news',
  },
  {
    name: 'Sports',
    icon: <GiDiamondTrophy />,
    action: 'changeType',
    type: 'sport',
    divider: true,
  },
  {
    name: 'Settings',
    icon: <FiSettings />,
    action: false,
    direction: '/settings',
  },
  {
    name: 'Log out',
    icon: <FiLogOut />,
    direction: '/',
    action: () => logOut(),
  },
];

export default categories
