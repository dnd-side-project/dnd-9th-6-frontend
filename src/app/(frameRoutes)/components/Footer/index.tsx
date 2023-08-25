'use client';
import Link from 'next/link';
import styled from '@emotion/styled';

import Logo from 'assets/icons/logo-black.svg';
import LogoTextWhite from 'assets/icons/logo-text-white.svg';
import Container from 'components/Container';


const Root = styled.div`
  padding-top: 56px;
  padding-bottom: 45px;
  background-color: black;
`;

const BodySection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #FFFFFF4D;
`;

const LogoTextWhiteWrapper = styled.div`
  padding-left: 6px;
  padding-right: 24px;
`;

const LogoWrapper = styled.div`
  display: flex;
`;

const BodyText = styled.div`
  margin-top: 8px;
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
`;

const LinkText = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 16px;
  padding-left: 16px;
  color: #FFFFFF;
  opacity: 0.7;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
`;

const LinkWrapper = styled.div`
  display: flex;
  margin-top: 32px;
  margin-bottom: 32px;
`;

const FooterTextWrapper = styled.div`
  padding-top: 8px;
  width: 100%;
  display: flex;
`;

const FooterText = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: #B8B8CC;
`;

const EmailText = styled(FooterText)`
  margin-left: auto;
`;

const linkItems = [
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

const Footer = () => (
  <Root>
    <Container>
      <BodySection>
        <LogoWrapper>
          <Logo width="19px" height="19px" viewBox="0 0 48 48" />
          <LogoTextWhiteWrapper>
            <LogoTextWhite />
          </LogoTextWhiteWrapper>
        </LogoWrapper>
        <BodyText>
          클래스코프와 함께 편리한 강의를 탐색을 시작하세요!
        </BodyText>
        <LinkWrapper>
          {
            linkItems.map(({ id, content, to }) => (
              <Link href={to} key={id}>
                <LinkText>
                  {content}
                </LinkText>
              </Link>
            ))
          }
        </LinkWrapper>
      </BodySection>
      <FooterTextWrapper>
        <FooterText>
          Copyrighted © classcope all rights reserved.
        </FooterText>
        <EmailText>
          team.classcope@gmail.com
        </EmailText>
      </FooterTextWrapper>
    </Container>
  </Root>
);

export default Footer;
