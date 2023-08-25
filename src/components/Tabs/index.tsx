'use client';

import {
  TabsProps,
  TabListProps,
  TabProps,
  Tabs as BaseTabs,
  TabList,
  Tab,
} from '@chakra-ui/react';

const Tabs = ({ ...props }: TabsProps) => <BaseTabs {...props} />;

export type { TabsProps, TabListProps, TabProps };
export { Tabs, TabList, Tab };
