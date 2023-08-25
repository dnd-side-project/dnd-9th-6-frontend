import { ReactNode } from 'react';
import styled from '@emotion/styled';


interface ContainerProps {
  type?: 'default' | 'wide';
  className?: string;
  children: ReactNode;
}

const Root = styled.div<ContainerProps>`
  width: 100%;
  margin: 0 auto;
  ${({ type }) => (type === 'wide' ? 'max-width: 1080px;' : 'max-width: 1080px;')}
`;

const Container = ({
  type = 'default',
  children,
  className,
}: ContainerProps) => (
  <Root
    type={type}
    className={className}
  >
    {children}
  </Root>
);

export type { ContainerProps };
export default Container;
