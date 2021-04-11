import styled from 'styled-components';
import { InputNumber } from 'antd';

export const FlexCol = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled(InputNumber)`
  width: 80%;
`;

export const Space = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: var(--margin-xs);
`;
