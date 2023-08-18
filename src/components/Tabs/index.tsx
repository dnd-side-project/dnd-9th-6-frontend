'use client';

import {
  TabsProps as BaseTabsProps,
  TabListProps,
  TabProps,
  Tabs as BaseTabs,
  TabList,
  Tab,
} from '@chakra-ui/react';

type Color = 'primary.classcope-blue-4' | 'secondary.classcope-purple-4';

interface TabsProps extends Omit<BaseTabsProps, 'colorScheme'> {
  colorScheme?: Color;
}

const Tabs = ({
  colorScheme = 'primary.classcope-blue-4',
  ...props
}: TabsProps) => <BaseTabs colorScheme={colorScheme} {...props} />;

export type { TabsProps, TabListProps, TabProps };
export { Tabs, TabList, Tab };
