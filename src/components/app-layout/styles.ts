import styled from 'styled-components';
import { Layout, PageHeader, Row } from 'antd';

export const Logo = styled.img`
  width: 64px;
  height: 64px;
  margin: var(--margin-md);
  border-radius: var(--border-radius-sm);
`;

export const FullPage = styled(Layout)`
  min-height: 100vh;
`;

export const Header = styled(PageHeader)`
  height: 72px;
`;

export const Content = styled(Layout)`
  overflow: auto;
  max-height: calc(100vh - 72px - var(--padding-lg));
  padding: 0 var(--padding-lg);
`;

export const Centered = styled(Row)`
  justify-content: center;
`;
