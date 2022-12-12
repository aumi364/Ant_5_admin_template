import { Segmented } from 'antd';
import styled from '@emotion/styled';

export const StyledSegmented = styled(Segmented)(({ theme }) => ({
  backgroundColor: theme.color.primaryLight,
  padding: '.5rem',
  '.ant-segmented-group': {
    gap: '.5rem',
  },
}));
