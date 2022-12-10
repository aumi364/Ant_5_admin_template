import styled from '@emotion/styled';

export const StyledPaper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  '& > *': {
    margin: '.8rem 0',
  },
});

export const StyledPaperHead = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const StyledPaperBody = styled.div({
  display: 'flex',
  flexDirection: 'column',
});
