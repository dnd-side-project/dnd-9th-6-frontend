'use client';
import { useRouter, usePathname } from 'next/navigation';
import styled from '@emotion/styled';

import Logo from 'assets/icons/logo-black.svg';
import LogoTextWhite from 'assets/icons/logo-text-white.svg';
import Button from 'components/Button';
import Container from 'components/Container';
import { Tab, Tabs, TabList } from 'components/Tabs';


const Root = styled.div`
  background-color: #7795FE;
  height: 52px;
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 400;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoTextWhiteWrapper = styled.div`
  padding-left: 6px;
  padding-right: 24px;
`;

const StyledTabs = styled(Tabs)`
  padding-left: 8px;
  padding-right: 8px;
`;

const LoginButton = styled(Button)`
  margin-left: auto;
`;

const tabItems = [
  {
    id: 'lectures',
    content: '강의',
    to: '/lectures',
  },
  {
    id: 'scopes',
    content: '스코프',
    to: '/scopes',
  },
  {
    id: 'my-lectures',
    content: '찜한 강의',
    to: '/my-lectures',
  },
];

const TopBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentTabId = pathname.split('/')[1];
  return (
    <Root>
      <Container>
        <ContentWrapper>
          <Logo width="19px" height="19px" viewBox="0 0 48 48" />
          <LogoTextWhiteWrapper>
            <LogoTextWhite />
          </LogoTextWhiteWrapper>
          <StyledTabs
            id={currentTabId}
            onChange={(i) => router.push(tabItems[i].to)}
          >
            <TabList>
              {
                tabItems.map(({ id, content }) => (
                  <Tab id={id} key={`tab-${id}`}>
                    {content}
                  </Tab>
                ))
              }
            </TabList>
          </StyledTabs>
          <LoginButton size="sm">
            로그인
          </LoginButton>
        </ContentWrapper>
      </Container>
    </Root>
  );
};

export default TopBar;
