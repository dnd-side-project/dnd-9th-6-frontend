'use client';

import styled from '@emotion/styled';

import TopBar from './components/TopBar';
// import Footer from './components/Footer';

interface RootLayoutProps {
  children: React.ReactNode;
}

const FrameBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: auto;
  height: 100%;
  background-color: inherit;
  width: 100%;
`;

const Root = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const rootLayout = ({ children }: RootLayoutProps) => {
  return (
    <Root>
      <TopBar />
      <FrameBody>
        {children}
      </FrameBody>
    </Root>
  );
};

export default rootLayout;
