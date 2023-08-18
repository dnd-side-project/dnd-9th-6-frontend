'use client';

import {
  TabsProps as BaseTabsProps,
  Tabs as BaseTabs,
  TabList,
  Tab,
} from '@chakra-ui/react';
import Link from 'next/link';

const tabData = [
  {
    id: 1,
    name: '강좌',
    href: '/#',
  },
  {
    id: 2,
    name: '스코프',
    href: '/#',
  },
  {
    id: 3,
    name: '찜한 강의',
    href: '/#',
  },
];

const Tabs = ({ ...props }: Omit<BaseTabsProps, 'children'>) => (
  <BaseTabs {...props}>
    <TabList>
      {tabData.map(item => {
        return (
          <Link key={item.id} href={item.href}>
            <Tab>{item.name}</Tab>
          </Link>
        );
      })}{' '}
    </TabList>
  </BaseTabs>
);

export default Tabs;
