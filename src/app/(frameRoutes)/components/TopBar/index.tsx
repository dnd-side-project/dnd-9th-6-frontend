'use client';
import { useRouter, usePathname } from 'next/navigation';
import styled from '@emotion/styled';

import Logo from 'assets/icons/logo-black.svg';
import LogoTextWhite from 'assets/icons/logo-text-white.svg';
import Button from 'components/Button';
import Container from 'components/Container';
import { Tab, Tabs, TabList } from 'components/Tabs';
import theme from 'styles/theme';
import Link from 'next/link';

const Root = styled.div<{ bgColor: string }>`
  background-color: ${props => props.bgColor};
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
    id: 'scope',
    content: '스코프',
    to: '/scope',
  },
  {
    id: 'my-lectures',
    content: '찜한 강의',
    to: '/my-lectures',
  },
];

// currentTabId: 현재 선택된 탭의 id로 현재 선택된 탭을 표시하는 index를 찾는 함수
// currentTabId가 없으면 0을 반환한다.
const getCurrentTabIndex = (currentTabId: string) => {
  const index = tabItems.findIndex(({ id }) => id === currentTabId);
  return index === -1 ? 0 : index;
};

const TopBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentTabId = pathname.split('/')[1] ?? '';
  return (
    <Root
      bgColor={
        currentTabId !== 'scope'
          ? theme.colors.primary['classcope-blue-4']
          : theme.colors.secondary['classcope-purple-4']
      }
    >
      <Container>
        <ContentWrapper>
          <Link href="/">
            <Logo width="19px" height="19px" viewBox="0 0 48 48" />
          </Link>
          <Link href="/">
            <LogoTextWhiteWrapper>
              <LogoTextWhite />
            </LogoTextWhiteWrapper>
          </Link>
          <StyledTabs
            id={currentTabId}
            onChange={i => router.push(tabItems[i].to)}
            index={getCurrentTabIndex(currentTabId)}
          >
            <TabList>
              {tabItems.map(({ id, content }) => (
                <Tab id={id} key={`tab-${id}`}>
                  {content}
                </Tab>
              ))}
            </TabList>
          </StyledTabs>
          <LoginButton
            variant={
              currentTabId !== 'scope' ? 'primary-filled' : 'purple-filled'
            }
            size="sm"
          >
            로그인
          </LoginButton>
        </ContentWrapper>
      </Container>
    </Root>
  );
};

export default TopBar;
