'use client';
import Link from 'next/link';
import styled from '@emotion/styled';

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

const TopBar = () => (
  <Root>
    <Container>
      <Tabs>
        <TabList>
          <Link href="#">
            <Tab>강의</Tab>
          </Link>
          <Link href="#">
            <Tab>스코프</Tab>
          </Link>
          <Link href="#">
            <Tab>찜한 강의</Tab>
        </Link>
      </TabList>
      </Tabs>
    </Container>
  </Root>
);

export default TopBar;
