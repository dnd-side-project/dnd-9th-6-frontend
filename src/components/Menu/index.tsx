'use client';

import {
  Menu as BaseMenu,
  MenuProps,
  MenuList,
  MenuListProps,
  MenuButton as BaseMenuButton,
  MenuButtonProps as BaseMenuButtonProps,
  MenuItem,
  MenuItemProps,
  MenuGroup,
  MenuGroupProps,
  MenuDivider,
  MenuDividerProps,
  MenuOptionGroup,
  MenuOptionGroupProps,
  MenuItemOption,
  MenuItemOptionProps,
  forwardRef,
} from '@chakra-ui/react';
import { ButtonProps } from 'components/Button';

const Menu = ({ children, ...props }: MenuProps) => (
  <BaseMenu {...props}>{children}</BaseMenu>
);

interface MenuButtonProps extends BaseMenuButtonProps, ButtonProps {}

const MenuButton = forwardRef<MenuButtonProps, 'button'>(
  ({ ...props }, ref) => <BaseMenuButton ref={ref} {...props} />,
);

export type {
  MenuProps,
  MenuListProps,
  MenuButtonProps,
  MenuItemProps,
  MenuGroupProps,
  MenuDividerProps,
  MenuOptionGroupProps,
  MenuItemOptionProps,
};
export {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
};
