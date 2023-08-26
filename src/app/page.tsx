'use client';

import styled from '@emotion/styled';

import theme from 'styles/theme';
import Home from 'pages/Home';
import TopBar from './(frameRoutes)/components/TopBar';
import Footer from './(frameRoutes)/components/Footer';

const FrameBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: auto;
  background-color: inherit;
  background: ${theme.colors.bg};
  width: 100%;
`;

const Root = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const page = () => {
  return (
    <Root>
      <TopBar />
      <FrameBody>
        <Home />
      </FrameBody>
      <Footer />
    </Root>
  );
};

export default page;
